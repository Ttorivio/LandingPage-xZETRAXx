# GENERAL_PROJECT_GUIDELINES.md

## 1. Propósito

Este archivo define las reglas generales de arquitectura, desarrollo, calidad y organización que deben seguirse en todos los proyectos de software construidos con este stack.

Su objetivo es que cualquier desarrollador o agente de IA pueda incorporarse a un proyecto y trabajar de forma consistente, evitando decisiones arbitrarias, duplicación de código, cambios innecesarios de arquitectura y tecnologías no previstas.

Estas reglas son independientes del dominio de negocio.

El dominio puede cambiar entre proyectos, pero la forma de diseñar, desarrollar, probar y mantener el software debe conservarse.

---

# 2. Stack tecnológico preferido

Salvo que el proyecto indique explícitamente otra cosa, utilizar:

## Backend

- Java
- Spring Boot 3.x
- Spring Web
- Spring Data JPA
- Spring Security
- JWT para autenticación
- Bean Validation / Jakarta Validation
- Maven
- Swagger / OpenAPI
- JUnit
- Mockito

## Frontend

- Angular
- TypeScript
- Angular Router
- Reactive Forms
- HttpClient
- Signals
- RxJS cuando sea necesario
- HTML
- CSS o SCSS

## Base de datos

- MySQL

## Infraestructura

Cuando el proyecto lo requiera:

- Docker
- Docker Compose
- Nginx
- Variables de entorno

## Control de versiones

- Git
- GitHub

---

# 3. Principio fundamental

Antes de escribir código:

1. Analizar la estructura existente.
2. Identificar las convenciones que ya utiliza el proyecto.
3. Comprender las entidades involucradas.
4. Revisar relaciones de base de datos.
5. Revisar endpoints existentes.
6. Revisar componentes y servicios relacionados.
7. Detectar código reutilizable.
8. Recién después comenzar la implementación.

Nunca modificar arquitectura, estructura de carpetas, contratos de API o modelos existentes sin una razón concreta.

La prioridad siempre es:

> Mantener consistencia antes que introducir soluciones nuevas.

---

# 4. Regla para agentes de IA

El agente debe comportarse como un desarrollador que trabaja sobre un proyecto real.

Debe:

- Analizar antes de modificar.
- Leer archivos relacionados antes de crear nuevos.
- Mantener las convenciones existentes.
- Evitar duplicación.
- Evitar cambios innecesarios.
- Explicar cambios estructurales importantes.
- Implementar funcionalidades completas.
- Verificar que frontend, backend y base de datos continúen siendo compatibles.

El agente NO debe asumir que una funcionalidad está aislada.

Cada cambio debe evaluarse considerando sus efectos sobre:

- Base de datos.
- Backend.
- API.
- Seguridad.
- Frontend.
- Experiencia de usuario.
- Testing.

---

# 5. Filosofía de desarrollo

Preferir soluciones:

- Simples.
- Claras.
- Mantenibles.
- Fáciles de depurar.
- Fáciles de extender.

Evitar:

- Sobreingeniería.
- Abstracciones innecesarias.
- Patrones complejos sin necesidad.
- Dependencias adicionales sin justificación.
- Frameworks nuevos si la funcionalidad puede resolverse con el stack existente.

No introducir una nueva tecnología solamente porque sea más moderna.

---

# 6. Arquitectura Backend

Utilizar una arquitectura por capas.

Flujo recomendado:

```text
Request
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

La estructura base puede ser:

```text
src/main/java/com/example/project/

config/
controller/
dto/
entity/
exception/
mapper/
repository/
security/
service/
```

Si el proyecto crece considerablemente, puede utilizarse organización por feature, siempre manteniendo separación clara de responsabilidades.

---

# 7. Controllers

Los controllers deben encargarse únicamente de:

- Recibir requests HTTP.
- Validar parámetros básicos.
- Delegar lógica al service.
- Devolver respuestas HTTP.

Los controllers NO deben contener lógica de negocio.

Ejemplo conceptual:

```java
@RestController
@RequestMapping("/api/items")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }
}
```

Preferir inyección por constructor.

Evitar:

```java
@Autowired
private ItemService itemService;
```

---

# 8. Services

Los services contienen la lógica de negocio.

Responsabilidades:

- Validaciones de negocio.
- Coordinación entre repositorios.
- Aplicación de reglas.
- Creación y actualización de entidades.
- Conversión entre entidades y DTOs cuando corresponda.
- Lanzamiento de excepciones controladas.

Los controllers nunca deben acceder directamente a repositories.

---

# 9. Repositories

Utilizar Spring Data JPA.

Ejemplo:

```java
public interface ItemRepository extends JpaRepository<Item, Long> {
}
```

Crear métodos personalizados solamente cuando sean necesarios.

Preferir métodos derivados de Spring Data cuando sean claros.

Ejemplo:

```java
Optional<User> findByEmail(String email);
```

Evitar queries manuales cuando Spring Data pueda resolverlas de manera simple.

---

# 10. Entidades

Las entidades representan el modelo persistente.

Buenas prácticas:

- Usar nombres claros.
- Usar tipos adecuados.
- Definir correctamente relaciones.
- Evitar lógica compleja dentro de entidades.
- Evitar exponer entidades directamente a través de la API.

Ejemplo:

```java
@Entity
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
```

---

# 11. DTOs

Utilizar DTOs para requests y responses.

Ejemplos:

```text
CreateItemRequest
UpdateItemRequest
ItemResponse
```

Evitar utilizar directamente entidades JPA como request o response HTTP.

Ventajas:

- Evita acoplar API y base de datos.
- Mejora seguridad.
- Permite controlar qué campos recibe el cliente.
- Permite controlar qué información se devuelve.
- Facilita evolución futura.

---

# 12. Validaciones

Usar Jakarta Validation siempre que sea posible.

Ejemplo:

```java
@NotBlank
private String name;

@NotNull
private Long categoryId;

@Email
private String email;
```

Utilizar:

```java
@Valid
```

en controllers.

Las validaciones de formato deben realizarse con Bean Validation.

Las validaciones de negocio deben realizarse en services.

---

# 13. Manejo de errores

Utilizar manejo centralizado de excepciones.

Crear:

```text
exception/
    ResourceNotFoundException
    BusinessException
    GlobalExceptionHandler
```

Utilizar:

```java
@RestControllerAdvice
```

Las respuestas de error deben tener una estructura consistente.

Ejemplo:

```json
{
  "status": 404,
  "message": "Resource not found",
  "timestamp": "..."
}
```

Nunca devolver stack traces al frontend.

---

# 14. API REST

Utilizar convenciones REST.

Ejemplo:

```text
GET    /api/items
GET    /api/items/{id}
POST   /api/items
PUT    /api/items/{id}
DELETE /api/items/{id}
```

Cuando corresponda:

```text
PATCH /api/items/{id}
```

Evitar endpoints como:

```text
/createItem
/deleteItem
/getAllItems
```

Preferir recursos y métodos HTTP correctos.

---

# 15. Códigos HTTP

Utilizar correctamente:

```text
200 OK
201 Created
204 No Content

400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict

500 Internal Server Error
```

No devolver siempre `200 OK` para todas las situaciones.

---

# 16. Swagger / OpenAPI

Todo backend debe poder documentar sus endpoints.

Utilizar Swagger/OpenAPI para:

- Ver endpoints.
- Ver parámetros.
- Probar requests.
- Revisar modelos.
- Facilitar integración frontend/backend.

La documentación debe mantenerse consistente con la implementación.

---

# 17. Seguridad

Si el proyecto requiere usuarios autenticados:

Utilizar:

- Spring Security.
- JWT.
- Roles.
- Guards en Angular.
- HTTP Interceptor.

Flujo:

```text
Login
  ↓
Backend valida credenciales
  ↓
Backend devuelve JWT
  ↓
Frontend almacena token
  ↓
Interceptor agrega Authorization
  ↓
Backend valida JWT
```

Header:

```text
Authorization: Bearer TOKEN
```

---

# 18. Roles y autorización

La autenticación responde:

> ¿Quién es el usuario?

La autorización responde:

> ¿Qué puede hacer?

No confiar únicamente en ocultar botones en frontend.

La autorización real debe realizarse en backend.

Ejemplo:

```java
@PreAuthorize("hasRole('ADMIN')")
```

El frontend puede ocultar funciones para mejorar UX, pero nunca debe ser la única barrera de seguridad.

---

# 19. Contraseñas

Nunca almacenar contraseñas en texto plano.

Utilizar hashing mediante BCrypt.

Nunca:

- Registrar passwords en logs.
- Enviar passwords nuevamente al frontend.
- Incluir passwords en DTOs de respuesta.

---

# 20. Configuración sensible

Nunca hardcodear:

- Passwords.
- Tokens.
- Secret keys.
- Credenciales de base de datos.
- API keys.

Utilizar variables de entorno.

Ejemplo:

```properties
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
jwt.secret=${JWT_SECRET}
```

---

# 21. Base de datos

Utilizar nombres consistentes.

Ejemplo:

```text
users
roles
products
events
orders
```

Preferir nombres en inglés para código y base de datos cuando el proyecto lo permita.

Las tablas deben tener:

```text
id
```

como clave primaria salvo que exista una razón fuerte para otro diseño.

---

# 22. Relaciones JPA

Utilizar correctamente:

```text
@OneToOne
@OneToMany
@ManyToOne
@ManyToMany
```

Antes de crear una relación definir:

- Quién es el propietario.
- Qué cardinalidad existe.
- Si la relación puede ser nula.
- Qué comportamiento tiene al eliminar.
- Qué datos necesita realmente cargar el frontend.

Evitar `EAGER` indiscriminadamente.

Preferir `LAZY` cuando corresponda.

---

# 23. Eliminación de entidades

Antes de eliminar una entidad verificar dependencias.

Evaluar:

- Restricciones FK.
- Relaciones existentes.
- Datos históricos.
- Necesidad de soft delete.

No utilizar cascade remove indiscriminadamente.

---

# 24. Auditoría

Cuando resulte útil agregar:

```text
createdAt
updatedAt
```

Opcionalmente:

```text
createdBy
updatedBy
```

Utilizar timestamps del backend.

No depender del reloj del frontend para datos importantes.

---

# 25. Paginación

Para listados potencialmente grandes utilizar paginación.

Backend:

```java
Pageable
Page<T>
```

API:

```text
GET /api/items?page=0&size=20
```

Evitar cargar miles de registros innecesariamente.

---

# 26. Búsqueda y filtros

Preferir parámetros query.

Ejemplo:

```text
GET /api/items?status=ACTIVE&name=test
```

No crear un endpoint distinto por cada filtro.

---

# 27. Arquitectura Angular

Estructura recomendada:

```text
src/app/

core/
shared/
features/
layout/
```

Ejemplo:

```text
core/
    guards/
    interceptors/
    services/

shared/
    components/
    models/
    pipes/

features/
    users/
    products/
    events/
```

---

# 28. Organización por feature

Cada funcionalidad importante puede tener su propia carpeta.

Ejemplo:

```text
features/products/

components/
pages/
services/
models/
```

Esto permite que cada módulo funcional sea fácil de localizar y mantener.

---

# 29. Components vs Pages

Utilizar `pages` para componentes asociados directamente a rutas.

Ejemplo:

```text
product-list-page
product-detail-page
product-form-page
```

Utilizar `components` para piezas reutilizables.

Ejemplo:

```text
product-card
confirm-dialog
status-badge
```

---

# 30. Componentes Angular

Cada componente debe tener una responsabilidad clara.

Evitar componentes gigantes.

Si un componente:

- Maneja demasiados formularios.
- Contiene múltiples secciones independientes.
- Tiene demasiada lógica.
- Supera ampliamente lo razonable.

Dividirlo en componentes más pequeños.

---

# 31. Angular Services

Los services frontend deben encargarse de:

- Comunicación HTTP.
- Lógica reutilizable.
- Estado compartido cuando corresponda.

Ejemplo:

```text
product.service.ts
auth.service.ts
user.service.ts
```

Los componentes no deben construir URLs manualmente repetidas.

---

# 32. Models e Interfaces

Definir interfaces TypeScript.

Ejemplo:

```typescript
export interface Product {
  id: number;
  name: string;
}
```

Evitar utilizar `any`.

`any` solamente debe utilizarse cuando exista una razón concreta.

---

# 33. Reactive Forms

Preferir Reactive Forms para formularios de negocio.

Utilizar:

```text
FormGroup
FormControl
Validators
FormBuilder
```

Ventajas:

- Validación clara.
- Mayor control.
- Fácil mantenimiento.
- Buena integración con formularios complejos.

---

# 34. Validaciones frontend

Las validaciones frontend mejoran UX.

Las validaciones backend garantizan integridad.

Siempre deben existir ambas cuando corresponda.

Nunca confiar únicamente en validaciones frontend.

---

# 35. Angular Signals

Utilizar Signals para estado local o reactivo simple.

Ejemplo:

```typescript
loading = signal(false);
items = signal<Item[]>([]);
```

Usar `computed` cuando un valor pueda derivarse de otros signals.

No introducir una librería global de estado si Signals y services resuelven correctamente el problema.

---

# 36. RxJS

Utilizar RxJS principalmente para:

- HttpClient.
- Streams.
- Eventos asincrónicos.
- Composición de operaciones.

Evitar subscribirse dentro de subscribes.

Preferir operadores:

```text
switchMap
map
tap
catchError
finalize
```

cuando mejoren claridad.

---

# 37. Manejo de subscriptions

Evitar memory leaks.

Utilizar mecanismos modernos de Angular para limpiar subscriptions.

Cuando sea posible, preferir patrones que eviten subscriptions manuales innecesarias.

---

# 38. HTTP Interceptors

Utilizar interceptors para lógica HTTP transversal.

Ejemplos:

- Agregar JWT.
- Manejar errores generales.
- Configurar headers comunes.

No repetir esta lógica en cada service.

---

# 39. Guards

Utilizar guards para:

- Rutas privadas.
- Control de roles.
- Prevención de acceso no autorizado.

Los guards mejoran UX, pero la autorización final sigue siendo responsabilidad del backend.

---

# 40. Routing

Mantener rutas simples y consistentes.

Ejemplo:

```text
/products
/products/new
/products/:id
/products/:id/edit
```

Utilizar lazy loading cuando sea conveniente.

---

# 41. Manejo de estados UI

Toda pantalla que carga datos debe considerar:

```text
loading
success
empty
error
```

Nunca mostrar una pantalla vacía sin explicación.

Ejemplo:

```text
Cargando...
No hay resultados.
Ocurrió un error al cargar los datos.
```

---

# 42. UX general

Toda acción importante debe generar feedback.

Ejemplos:

- Guardado exitoso.
- Error.
- Eliminación confirmada.
- Operación en curso.

Evitar que el usuario tenga que adivinar si una acción funcionó.

---

# 43. Formularios

Buenas prácticas:

- Labels visibles.
- Mensajes de error claros.
- Botones deshabilitados cuando corresponda.
- Indicador de carga al guardar.
- Evitar doble submit.
- Mantener valores cuando ocurre un error recuperable.

---

# 44. Confirmaciones

Las acciones destructivas deben pedir confirmación.

Ejemplos:

- Eliminar.
- Cancelar operación importante.
- Desactivar usuario.
- Borrar información.

---

# 45. Diseño responsive

Toda interfaz debe funcionar como mínimo en:

- Desktop.
- Tablet.
- Mobile.

Evitar anchos fijos innecesarios.

Utilizar layouts flexibles.

---

# 46. Consistencia visual

Mantener consistencia en:

- Botones.
- Formularios.
- Cards.
- Tablas.
- Espaciados.
- Títulos.
- Estados.
- Modales.

No crear un estilo distinto para cada pantalla.

---

# 47. Accesibilidad básica

Siempre que sea posible:

- Usar labels.
- Usar botones reales.
- Utilizar HTML semántico.
- Mantener contraste suficiente.
- Permitir navegación por teclado.
- Agregar atributos accesibles cuando corresponda.

---

# 48. Imágenes y archivos

Si el proyecto permite imágenes o archivos:

No guardar archivos grandes directamente en columnas de base de datos salvo necesidad explícita.

Preferir almacenar:

```text
URL
path
metadata
```

y utilizar un sistema adecuado de almacenamiento cuando sea necesario.

---

# 49. Integraciones externas

Toda integración externa debe estar encapsulada.

Ejemplo:

```text
PaymentService
EmailService
NotificationService
ExternalApiService
```

Nunca distribuir llamadas a servicios externos por múltiples controllers.

---

# 50. Emails y notificaciones

Las notificaciones deben ejecutarse desde backend.

El frontend solamente solicita una acción.

Ejemplo:

```text
Frontend solicita operación
        ↓
Backend ejecuta operación
        ↓
Backend dispara notificación
```

No confiar en el navegador para procesos críticos.

---

# 51. Logging

Registrar información útil.

Ejemplos:

- Inicio de operaciones importantes.
- Errores.
- Integraciones externas.
- Operaciones administrativas relevantes.

Nunca registrar:

- Passwords.
- Tokens completos.
- Secret keys.
- Información sensible innecesaria.

---

# 52. Testing Backend

Agregar tests principalmente para:

- Services.
- Reglas de negocio.
- Validaciones importantes.
- Casos de error.

Utilizar:

```text
JUnit
Mockito
```

No probar solamente casos exitosos.

Incluir también:

- Recurso inexistente.
- Datos inválidos.
- Conflictos.
- Usuario sin permisos.

---

# 53. Testing manual de API

Antes de conectar frontend:

Verificar endpoints mediante:

- Swagger.
- Postman.
- Cliente HTTP equivalente.

Comprobar:

```text
request
response
status code
validation
authorization
```

---

# 54. Testing Frontend

Verificar como mínimo:

- Render correcto.
- Navegación.
- Formularios.
- Validaciones.
- Requests HTTP.
- Errores.
- Estados loading.
- Permisos.

---

# 55. Regla de implementación vertical

Cuando se agrega una nueva funcionalidad, implementarla completa.

Orden recomendado:

```text
1. Modelo de datos
2. Entity
3. Repository
4. DTO
5. Service
6. Controller
7. Seguridad
8. Swagger/API test
9. Model frontend
10. Service frontend
11. Page/component
12. Form
13. Manejo de errores
14. UX
15. Pruebas
```

Evitar dejar funcionalidades implementadas solamente en backend o solamente en frontend sin una razón concreta.

---

# 56. Desarrollo incremental

Implementar funcionalidades pequeñas y comprobables.

Ejemplo:

Primero:

```text
Crear entidad
```

Luego:

```text
Listar
```

Luego:

```text
Crear
```

Luego:

```text
Editar
```

Luego:

```text
Eliminar
```

Después agregar funcionalidades avanzadas.

---

# 57. Antes de modificar código existente

El agente debe responder internamente estas preguntas:

1. ¿Qué archivo controla actualmente esta funcionalidad?
2. ¿Existe ya código reutilizable?
3. ¿El cambio afecta otros módulos?
4. ¿Se modifica el contrato de API?
5. ¿Se modifica la base de datos?
6. ¿Se modifica seguridad?
7. ¿Puede romper datos existentes?
8. ¿Hay tests que deban actualizarse?

---

# 58. Qué NO debe hacer un agente

No debe:

- Reescribir módulos completos sin necesidad.
- Cambiar nombres existentes arbitrariamente.
- Crear servicios duplicados.
- Crear DTOs duplicados.
- Crear endpoints redundantes.
- Introducir librerías nuevas sin necesidad.
- Cambiar el stack tecnológico.
- Modificar contratos de API sin revisar frontend.
- Modificar entidades sin revisar base de datos.
- Eliminar validaciones existentes.
- Desactivar seguridad para solucionar errores.
- Hardcodear credenciales.
- Utilizar `any` indiscriminadamente.
- Ignorar errores de compilación.
- Dejar código muerto.
- Crear mocks permanentes cuando existe backend real.

---

# 59. Dependencias

Antes de agregar una dependencia:

1. Verificar si el stack actual ya resuelve el problema.
2. Evaluar si realmente es necesaria.
3. Preferir librerías conocidas y mantenidas.
4. Evitar dependencias para funcionalidades triviales.

Toda nueva dependencia debe tener una razón clara.

---

# 60. Refactoring

Refactorizar cuando:

- Existe duplicación clara.
- Una clase tiene demasiadas responsabilidades.
- El código es difícil de comprender.
- Existe deuda técnica que bloquea nuevas funcionalidades.

No refactorizar grandes áreas simplemente porque podrían escribirse de otra manera.

---

# 61. Nombres

Utilizar nombres descriptivos.

Correcto:

```text
findUserByEmail
createProduct
updateEvent
isAuthenticated
```

Evitar:

```text
doThing
processData
func1
temp
x
```

---

# 62. Idioma del código

Preferencia:

Código:

```text
English
```

Documentación y comentarios pueden utilizar español si el equipo trabaja en español.

No mezclar idiomas dentro del mismo sistema de nombres.

Ejemplo incorrecto:

```text
crearUser()
deleteProducto()
```

---

# 63. Comentarios

No comentar código obvio.

Incorrecto:

```java
// Get user
User user = repository.findById(id);
```

Utilizar comentarios para explicar:

- Decisiones.
- Casos especiales.
- Restricciones.
- Workarounds.
- Reglas de negocio no evidentes.

---

# 64. Git

Realizar commits pequeños y coherentes.

Ejemplos:

```text
feat: add product creation
fix: validate duplicate email
refactor: simplify authentication service
docs: update API documentation
test: add user service tests
```

Evitar commits como:

```text
changes
update
stuff
final
final2
```

---

# 65. Branches

Cuando se utilicen ramas:

```text
main
develop
feature/...
fix/...
```

Ejemplo:

```text
feature/product-management
fix/login-validation
```

La estrategia puede simplificarse en proyectos pequeños.

---

# 66. Docker

Cuando se utilice Docker, cada servicio debe tener configuración reproducible.

Ejemplo:

```text
backend
frontend
mysql
```

Docker Compose puede utilizarse para levantar el entorno completo.

Nunca almacenar secretos reales dentro del repositorio.

---

# 67. Variables de entorno

Separar configuración por entorno.

Ejemplo:

```text
development
testing
production
```

No asumir que las URLs o credenciales son iguales en todos los entornos.

---

# 68. Configuración Frontend

Las URLs del backend deben estar centralizadas.

Ejemplo:

```typescript
environment.apiUrl
```

No escribir:

```typescript
"http://localhost:8080"
```

repetidamente en distintos services.

---

# 69. Compatibilidad Frontend / Backend

Cuando se modifica un DTO o endpoint:

Revisar inmediatamente:

- Interfaces Angular.
- Services Angular.
- Formularios.
- Componentes consumidores.
- Tests.
- Swagger.

Nunca modificar un contrato solamente de un lado.

---

# 70. Documentación mínima

Cada proyecto debe tener un README con:

```text
Descripción
Stack
Requisitos
Instalación
Configuración
Variables de entorno
Cómo ejecutar backend
Cómo ejecutar frontend
Base de datos
Usuarios de prueba si existen
```

---

# 71. Documentación de decisiones

Si se toma una decisión importante de arquitectura, documentarla.

Ejemplos:

- Por qué se usa JWT.
- Por qué se eligió determinada relación.
- Por qué una entidad utiliza soft delete.
- Por qué una integración utiliza determinado flujo.

---

# 72. Orden para iniciar un proyecto nuevo

## Etapa 1 — Definición

Definir:

```text
Objetivo
Usuarios
Roles
Entidades principales
Casos de uso
MVP
```

## Etapa 2 — Modelo

Crear:

```text
Modelo de dominio
Relaciones
Base de datos
```

## Etapa 3 — Backend base

Crear:

```text
Spring Boot
MySQL
JPA
Swagger
Manejo de errores
```

## Etapa 4 — Seguridad

Crear:

```text
Usuarios
Roles
Login
JWT
Spring Security
```

## Etapa 5 — Frontend base

Crear:

```text
Angular
Routing
Layout
AuthService
Interceptor
Guards
```

## Etapa 6 — Features

Implementar funcionalidad por funcionalidad utilizando desarrollo vertical.

## Etapa 7 — Calidad

Agregar:

```text
Validaciones
Testing
UX
Responsive
Logs
```

## Etapa 8 — Deploy

Cuando corresponda:

```text
Docker
Nginx
Variables de entorno
Producción
```

---

# 73. Definición de feature terminada

Una funcionalidad NO está terminada solamente porque compile.

Debe cumplir:

- Backend implementado.
- Endpoint funcionando.
- Validaciones funcionando.
- Seguridad aplicada.
- Frontend conectado.
- Loading manejado.
- Errores manejados.
- UX correcta.
- Responsive básico.
- Sin errores de consola.
- Sin errores backend.
- Sin código duplicado innecesario.
- Probada manualmente.
- Tests relevantes funcionando.

---

# 74. Definition of Done

Antes de considerar una tarea terminada:

```text
[ ] Compila backend
[ ] Compila frontend
[ ] Base de datos funciona
[ ] Endpoint probado
[ ] Validaciones probadas
[ ] Seguridad verificada
[ ] Casos de error revisados
[ ] UI funcional
[ ] Responsive revisado
[ ] Sin errores de consola
[ ] Sin código muerto
[ ] Sin credenciales hardcodeadas
[ ] Swagger actualizado
[ ] README actualizado si corresponde
```

---

# 75. Protocolo para implementar una nueva funcionalidad

Cuando se solicite una nueva funcionalidad, el agente debe seguir este procedimiento.

## Paso 1

Analizar el código existente relacionado.

## Paso 2

Identificar:

```text
Entidades
Relaciones
Services
Endpoints
Componentes
Usuarios afectados
Roles
```

## Paso 3

Definir el cambio mínimo necesario.

## Paso 4

Implementar backend.

## Paso 5

Probar API.

## Paso 6

Implementar frontend.

## Paso 7

Validar integración.

## Paso 8

Revisar UX.

## Paso 9

Probar casos de error.

## Paso 10

Informar claramente qué archivos se modificaron y por qué.

---

# 76. Formato recomendado para prompts al agente

Para nuevas funcionalidades utilizar prompts similares a:

```text
Implementá [NOMBRE DE LA FUNCIONALIDAD].

Antes de modificar código:

1. Analizá la arquitectura existente.
2. Revisá las entidades, services, controllers y componentes relacionados.
3. Reutilizá código existente siempre que sea posible.
4. No introduzcas nuevas tecnologías ni dependencias salvo necesidad real.
5. Mantené las convenciones definidas en GENERAL_PROJECT_GUIDELINES.md.

La funcionalidad debe implementarse de punta a punta:

- Base de datos.
- Backend.
- API.
- Seguridad.
- Frontend.
- Validaciones.
- Manejo de errores.
- UX.
- Testing cuando corresponda.

Antes de finalizar verificá que backend y frontend compilen correctamente y que no hayas roto funcionalidades existentes.
```

---

# 77. Formato recomendado para corregir bugs

```text
Investigá y corregí el siguiente problema:

[DESCRIPCIÓN DEL BUG]

Antes de modificar código:

1. Reproducí o identificá la causa.
2. Revisá los archivos relacionados.
3. Determiná la causa raíz.
4. Evitá workarounds temporales.
5. Aplicá el cambio mínimo necesario.
6. Verificá que la solución no rompa otras funcionalidades.
7. Probá nuevamente el flujo completo.

Seguí las reglas de GENERAL_PROJECT_GUIDELINES.md.
```

---

# 78. Formato recomendado para refactoring

```text
Refactorizá [ÁREA].

Objetivos:

- Reducir duplicación.
- Mejorar legibilidad.
- Mantener exactamente el mismo comportamiento.
- No modificar contratos públicos salvo necesidad.
- No introducir dependencias nuevas.

Antes de finalizar:

- Verificá compilación.
- Ejecutá tests.
- Revisá flujos afectados.
```

---

# 79. Regla de autonomía del agente

Si existe información suficiente para continuar, el agente debe avanzar sin pedir confirmaciones innecesarias.

Debe preguntar solamente cuando exista una decisión realmente ambigua que pueda modificar:

- Arquitectura.
- Reglas de negocio.
- Seguridad.
- Modelo de datos.
- Integraciones.
- Comportamiento esperado.

Para decisiones técnicas menores debe utilizar estas reglas como criterio.

---

# 80. Prioridades en caso de conflicto

Si dos decisiones compiten entre sí, utilizar este orden:

```text
1. Correctitud
2. Seguridad
3. Integridad de datos
4. Consistencia con el proyecto
5. Mantenibilidad
6. Simplicidad
7. Performance
8. Preferencias estéticas
```

---

# 81. Regla final

El objetivo no es generar la mayor cantidad de código posible.

El objetivo es construir software que:

- Funcione.
- Sea entendible.
- Sea seguro.
- Sea mantenible.
- Sea consistente.
- Pueda crecer sin convertirse en un proyecto difícil de modificar.

Siempre preferir una solución simple y correctamente integrada antes que una solución técnicamente sofisticada pero innecesaria.
