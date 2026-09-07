# PROJECT_REQUIREMENTS.md

## 1. Identificación del proyecto

- **Proyecto:** Portfolio web profesional para guionista y editor audiovisual.
- **Cliente:** Juan Sebastián Peredo Molina.
- **Profesión presentada:** Licenciado en Comunicación Audiovisual, editor de video y guionista.
- **Ubicación profesional:** Santa Cruz, Bolivia.
- **Tipo de producto:** Landing page estática de una sola página.
- **Idioma inicial:** Español.
- **Evolución prevista:** Posibilidad de incorporar una versión en inglés en una etapa futura.

Este archivo complementa `GENERAL_PROJECT_GUIDELINES.md`. Las reglas generales de calidad, organización, accesibilidad, responsive design, Git y documentación continúan vigentes, salvo las excepciones expresamente definidas aquí.

---

## 2. Objetivo

Crear un espacio web propio que funcione como presentación profesional de Juan Sebastián Peredo Molina y permita:

- Presentar su perfil como guionista y editor de video.
- Mostrar su trayectoria profesional.
- Exhibir proyectos audiovisuales seleccionados.
- Destacar trabajos, reconocimientos y proyectos actuales.
- Servir como carta de presentación ante productoras, agencias, plataformas, marcas y colaboradores.
- Facilitar el contacto profesional mediante WhatsApp y otros enlaces directos.
- Favorecer nuevas oportunidades laborales y comerciales, incluso internacionales o remotas.

---

## 3. Público objetivo

La página estará dirigida principalmente a:

- Productoras audiovisuales.
- Agencias.
- Plataformas de streaming.
- Marcas y empresas.
- Guionistas y posibles colaboradores.
- Directores, realizadores y otros profesionales del sector.

---

## 4. Alcance del MVP

El MVP será una landing page pública, moderna, rápida y responsive, organizada mediante desplazamiento vertical.

Incluirá:

1. Navegación principal.
2. Portada o presentación inicial.
3. Sección “Sobre mí”.
4. Sección de trayectoria y reconocimientos.
5. Sección de proyectos.
6. Descarga del currículum en PDF.
7. Sección de contacto.
8. Botón de WhatsApp.
9. Enlaces a plataformas y redes profesionales disponibles.
10. Animaciones visuales suaves.

La primera publicación contará inicialmente con dos proyectos destacados, correspondientes a contenidos de YouTube que el cliente deberá identificar.

---

## 5. Fuera de alcance

La versión básica no incluirá:

- Backend.
- Base de datos.
- Spring Boot.
- MySQL.
- Registro o inicio de sesión.
- Roles o autenticación JWT.
- Panel privado de administración.
- Gestión autónoma de proyectos por parte del cliente.
- Formulario de contacto con almacenamiento propio.
- Sistema de comentarios.
- Estadísticas privadas o dashboard.
- Carga de imágenes o videos desde la web.
- Integraciones de pago.
- Blog o gestor de publicaciones.

Los cambios de contenido se realizarán modificando los archivos del proyecto y publicando una nueva versión.

Si en el futuro se solicita un panel administrativo, deberá considerarse una nueva etapa con alcance, arquitectura, presupuesto y planificación propios.

---

## 6. Decisión técnica principal

Aunque `GENERAL_PROJECT_GUIDELINES.md` define un stack full stack preferido, este proyecto no necesita backend ni persistencia para cumplir su objetivo inicial.

La solución recomendada es:

- **Frontend:** Angular con TypeScript.
- **Estilos:** SCSS o CSS, manteniendo un único criterio durante todo el proyecto.
- **Routing:** No es necesario para el MVP de una sola página, salvo que la estructura real del proyecto lo justifique.
- **Contenido:** Archivos TypeScript o JSON locales y fácilmente editables.
- **Videos:** Integración mediante enlaces o embeds de YouTube, sin almacenar archivos de video en el proyecto.
- **Documentos:** Currículum y guiones públicos alojados como archivos estáticos descargables.
- **Contacto:** Enlaces directos a WhatsApp, correo y LinkedIn cuando estén disponibles.
- **Publicación:** Hosting estático compatible con Angular.
- **Dominio:** Se definirá y configurará después de elegir el nombre con el cliente.

No deben agregarse Spring Boot, MySQL, JWT, Docker u otras piezas de infraestructura salvo que un requerimiento futuro las vuelva necesarias.

---

## 7. Dirección visual

La identidad visual deberá ser:

- Oscura.
- Cinematográfica.
- Moderna.
- Minimalista.
- Elegante.
- Profesional.
- Con un componente experimental moderado.

### Criterios visuales

- Fondo oscuro con contraste suficiente.
- Tipografía protagonista y legible.
- Uso controlado de un color de acento, todavía pendiente de definición.
- Imágenes, afiches y fotogramas con alto protagonismo.
- Espacios amplios y composición limpia.
- Animaciones suaves al aparecer contenido durante el desplazamiento.
- Transiciones discretas en enlaces, botones y tarjetas.
- Evitar efectos que dificulten la lectura o reduzcan el rendimiento.
- No utilizar una estética genérica de plantilla corporativa.

La versión móvil debe conservar la jerarquía visual y no limitarse a reducir el diseño de escritorio.

---

## 8. Estructura funcional

### 8.1. Navegación

El encabezado deberá permitir desplazarse hacia:

- Sobre mí.
- Trayectoria.
- Proyectos.
- Contacto.

Puede permanecer visible al desplazarse si no ocupa demasiado espacio en dispositivos móviles.

### 8.2. Portada

Debe comunicar inmediatamente:

- Nombre profesional.
- Especialidad: guionista y editor de video.
- Una frase breve de posicionamiento.
- Una acción principal, preferentemente “Ver proyectos”.
- Una acción secundaria de contacto por WhatsApp.
- Fotografía profesional o imagen audiovisual destacada.

La frase definitiva de portada queda pendiente.

### 8.3. Sobre mí

Debe presentar:

- Perfil profesional.
- Formación académica.
- Géneros o formatos en los que trabaja.
- Obras estrenadas o publicadas.
- Proyectos actuales.
- Capacidad para trabajar de forma remota e internacional.

El texto definitivo queda pendiente de redacción o aprobación del cliente.

### 8.4. Trayectoria y reconocimientos

Debe incluir inicialmente:

- Reconocimiento a mejor podcast a nivel Bolivia.
- Nominación a los premios FENAVID por el cortometraje `Salvia`.

Antes de publicar se deberán confirmar el nombre oficial del premio, la categoría, el año, la edición del festival y la forma correcta de mencionar cada reconocimiento.

### 8.5. Proyectos

La versión inicial mostrará dos proyectos sin categorías.

Cada proyecto se presentará mediante una tarjeta visual con:

- Título.
- Año.
- Imagen, afiche o fotograma.
- Descripción breve.
- Enlace al contenido o video cuando corresponda.
- Acción para ver el proyecto.

La tarjeta podrá expandirse o abrir un modal liviano si esto mejora la experiencia sin convertir el sitio en una aplicación compleja.

Los datos deberán almacenarse en una estructura centralizada y reutilizable para evitar repetir contenido directamente en los componentes.

Ejemplo conceptual:

```typescript
export interface PortfolioProject {
  title: string;
  year: number;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  scriptUrl?: string;
}
```

### 8.6. Guiones

El cliente manifestó interés en incluir fragmentos y archivos descargables.

Antes de incorporarlos se deberá confirmar:

- Qué archivos pueden hacerse públicos.
- Si se mostrarán como descarga directa o lectura en pantalla.
- La autoría y autorización para publicar cada material.
- El formato final, preferentemente PDF.

No se publicará ningún guion hasta recibir confirmación y archivos definitivos.

### 8.7. Currículum

Se incorporará un botón de descarga del currículum profesional en PDF.

Requisitos:

- Nombre de archivo profesional y legible.
- Apertura segura en una nueva pestaña o descarga explícita.
- Archivo optimizado para web.
- Sustitución sencilla cuando el cliente actualice el documento.

### 8.8. Contacto

La acción de contacto principal será WhatsApp:

- **Teléfono:** `+591 60976052`.
- El enlace debe utilizar el formato internacional correcto.
- Puede incluir un mensaje inicial breve y profesional precompletado.

También se podrá incluir:

- **Correo:** `sebas.23.peredo@gmail.com`.
- **YouTube:** `https://www.youtube.com/@xZETRAXx`.
- **LinkedIn:** pendiente de recibir.
- **Ubicación:** Santa Cruz, Bolivia.

No se implementará un formulario de contacto en el MVP, ya que el cliente eligió WhatsApp como canal principal.

---

## 9. Contenido pendiente del cliente

No comenzar la carga definitiva de contenido sin contar con:

- [ ] Enlaces exactos de los dos videos o proyectos destacados.
- [ ] Título de cada proyecto.
- [ ] Año de cada proyecto.
- [ ] Descripción breve de cada proyecto.
- [ ] Imagen, afiche o fotograma de cada proyecto.
- [ ] Fotografía profesional del cliente.
- [ ] Currículum definitivo en PDF.
- [ ] Biografía o datos suficientes para redactarla.
- [ ] Enlace de LinkedIn, si se publicará.
- [ ] Guiones o fragmentos autorizados para publicación.
- [ ] Confirmación sobre descarga o lectura de guiones.
- [ ] Detalles oficiales de premios y nominaciones.
- [ ] Color de acento preferido o autorización para proponerlo.
- [ ] Frase principal de portada o autorización para redactarla.
- [ ] Nombre de dominio preferido.

Mientras falte contenido se podrán utilizar placeholders claramente identificados, pero nunca inventar premios, proyectos, clientes, fechas, enlaces o antecedentes profesionales.

---

## 10. Requerimientos responsive

La página deberá verificarse como mínimo en:

- Teléfonos móviles desde 320 px de ancho.
- Tablets.
- Notebooks.
- Monitores de escritorio.

Se deberá comprobar especialmente:

- Navegación móvil.
- Lectura de títulos y textos.
- Escalado y recorte de imágenes.
- Reproducción o apertura de videos.
- Tarjetas de proyectos.
- Botón de WhatsApp.
- Descarga del currículum.
- Ausencia de desplazamiento horizontal accidental.

---

## 11. Accesibilidad

El MVP deberá incluir:

- HTML semántico.
- Jerarquía correcta de encabezados.
- Contraste suficiente sobre fondos oscuros.
- Textos alternativos en imágenes.
- Estados de foco visibles.
- Navegación mediante teclado.
- Enlaces y botones con nombres accesibles.
- Respeto por la preferencia `prefers-reduced-motion`.
- Evitar transmitir información únicamente mediante color.

---

## 12. Rendimiento

La experiencia debe ser rápida incluso con imágenes audiovisuales.

Aplicar:

- Imágenes optimizadas y en formatos modernos cuando sea posible.
- Dimensiones explícitas para evitar saltos de contenido.
- Carga diferida en imágenes y videos fuera de la portada.
- Miniaturas para videos antes de cargar reproductores completos.
- Fuentes limitadas y optimizadas.
- Animaciones basadas preferentemente en propiedades eficientes.
- Eliminación de dependencias innecesarias.

No almacenar archivos de video pesados dentro del repositorio.

---

## 13. SEO y presencia profesional

Configurar como mínimo:

- Título de página descriptivo.
- Meta description.
- URL canónica cuando exista dominio definitivo.
- Etiquetas Open Graph para compartir en redes.
- Favicon.
- Imagen social predeterminada.
- Datos estructurados apropiados para una persona profesional cuando corresponda.
- `robots.txt` y sitemap si el método de publicación los requiere.
- Nombre, profesión y ubicación presentes como texto indexable.

No prometer una posición específica en buscadores.

---

## 14. Privacidad y seguridad

- Publicar únicamente datos que el cliente haya autorizado.
- Confirmar expresamente la publicación del teléfono personal.
- No incluir credenciales ni información sensible en el repositorio.
- Validar enlaces externos antes de publicar.
- Utilizar `noopener noreferrer` cuando corresponda en enlaces externos.
- No insertar scripts de terceros sin una necesidad definida.
- Si se agregan analíticas o cookies no esenciales, revisar previamente las obligaciones de privacidad y consentimiento aplicables.

---

## 15. Mantenimiento del contenido

Como no existirá panel administrativo:

- Los proyectos deberán definirse en un único archivo de datos.
- Los datos personales y enlaces deberán centralizarse en una configuración.
- Las imágenes deberán utilizar nombres descriptivos.
- Los documentos descargables deberán encontrarse en una carpeta previsible.
- Agregar un proyecto no deberá requerir modificar múltiples componentes.
- El README deberá explicar cómo cambiar textos, proyectos, imágenes, CV y enlaces.

---

## 16. Publicación y dominio

El cliente todavía no cuenta con dominio ni hosting.

Antes del lanzamiento se deberá:

1. Proponer y verificar nombres de dominio disponibles.
2. Elegir la extensión adecuada.
3. Registrar el dominio a nombre del cliente siempre que sea posible.
4. Elegir un hosting estático compatible con el proyecto.
5. Configurar HTTPS.
6. Vincular el dominio.
7. Verificar la versión pública en móvil y escritorio.
8. Entregar al cliente acceso y documentación básica.

Los costos de dominio, hosting y servicios externos deben informarse separadamente del desarrollo.

---

## 17. Fases de implementación

### Fase 1 — Contenido y referencias

- Recibir materiales pendientes.
- Confirmar textos, proyectos y reconocimientos.
- Definir color de acento y referencias visuales.

### Fase 2 — Estructura y diseño

- Definir jerarquía de secciones.
- Crear wireframe.
- Diseñar portada, tarjetas y navegación.
- Validar la dirección visual antes de pulir toda la página.

### Fase 3 — Desarrollo

- Crear estructura Angular.
- Implementar secciones.
- Centralizar contenido.
- Integrar imágenes, videos, documentos y enlaces.
- Implementar responsive y accesibilidad.

### Fase 4 — Revisión

- Verificar contenido con el cliente.
- Probar navegadores y resoluciones.
- Optimizar rendimiento.
- Corregir enlaces y detalles visuales.

### Fase 5 — Publicación

- Elegir hosting y dominio.
- Compilar versión de producción.
- Publicar.
- Configurar HTTPS y metadatos finales.
- Realizar prueba completa de producción.

---

## 18. Criterios de aceptación

El MVP estará terminado cuando:

- [ ] La landing contiene las cuatro secciones acordadas.
- [ ] La portada identifica claramente al profesional y su especialidad.
- [ ] Los dos proyectos iniciales tienen información e imágenes definitivas.
- [ ] Los videos y enlaces externos funcionan.
- [ ] El botón de WhatsApp abre la conversación correcta.
- [ ] El correo electrónico funciona mediante enlace directo.
- [ ] El currículum puede abrirse o descargarse.
- [ ] Los guiones autorizados funcionan según la modalidad acordada.
- [ ] No existen placeholders visibles en producción.
- [ ] La página funciona correctamente en móvil, tablet y escritorio.
- [ ] La navegación mediante teclado es funcional.
- [ ] Las animaciones respetan `prefers-reduced-motion`.
- [ ] No existen errores en consola.
- [ ] No existen enlaces rotos.
- [ ] Las imágenes están optimizadas.
- [ ] Los metadatos SEO y sociales están configurados.
- [ ] La versión de producción está publicada con HTTPS.
- [ ] El README explica ejecución, compilación, edición de contenido y publicación.

---

## 19. Regla para el agente de desarrollo

Antes de implementar o modificar este proyecto, el agente deberá leer completamente:

1. `GENERAL_PROJECT_GUIDELINES.md`.
2. `PROJECT_REQUIREMENTS.md`.
3. La estructura y los archivos existentes del repositorio.

Debe priorizar el alcance básico definido en este documento y evitar convertir la landing en una aplicación full stack. Ninguna funcionalidad fuera del MVP deberá incorporarse sin una solicitud explícita.

Cuando falte contenido real, el agente debe usar placeholders identificables o solicitar el dato necesario. Nunca debe inventar información profesional del cliente.

---

## 20. Posibles mejoras futuras

Estas funcionalidades no pertenecen al MVP, pero pueden evaluarse posteriormente:

- Versión completa en inglés.
- Panel de administración.
- Backend y base de datos.
- Formulario de contacto con envío de correos.
- Más categorías y filtros de proyectos.
- Blog o novedades.
- Integración de analíticas.
- Páginas individuales para cada proyecto.
- Área privada para compartir guiones.
- Incorporación de nuevos canales profesionales.

