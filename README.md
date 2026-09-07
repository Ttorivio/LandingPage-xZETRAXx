# Landing Page Guionista

Portfolio web profesional para `xZETRAXx` — Juan Sebastián Peredo Molina, licenciado en Comunicación Audiovisual, guionista y editor de video en Santa Cruz, Bolivia.

## Stack

- Angular standalone
- TypeScript
- SCSS
- Contenido estático centralizado en archivos TypeScript
- Hosting estático compatible con el build de Angular

No incluye backend, base de datos, Docker, autenticación, panel de administración ni formulario de contacto.

## Requisitos

- Node.js `>=20.19.0 <25`
- npm `>=10`

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm start
```

La app queda disponible en `http://127.0.0.1:4200/`.

## Build de producción

```bash
npm run build
```

El resultado se genera en `dist/landing-page-guionista/`.

## Docker

Construir y levantar la landing con Nginx:

```bash
docker compose up -d --build
```

La web queda disponible en `http://localhost:8080/`.

Ver estado del contenedor:

```bash
docker compose ps
```

Detener el contenedor:

```bash
docker compose down
```

## Estructura principal

```text
src/
  app/
    core/
      data/       Datos editables del portfolio
      models/     Interfaces TypeScript
    features/
      landing/    Página principal de la landing
public/
  documents/      CV y guiones PDF autorizados
  images/         Fotos, afiches y material visual propio
```

## Edición de contenido

- Perfil, contacto, canales y textos generales: `src/app/core/data/site-profile.data.ts`.
- Proyectos seleccionados: `src/app/core/data/portfolio-projects.data.ts`.
- Reconocimientos pendientes o confirmados: `src/app/core/data/recognitions.data.ts`.
- Modelos de datos: `src/app/core/models/`.
- Imagen de perfil usada en la portada: `public/images/zetrax-profile.jpg`.

Los proyectos y reconocimientos que todavía no estén aprobados por el cliente deben mantenerse con estado `draft` o `pending`. No cargar sinopsis, roles, premios, fechas, clientes ni créditos que no estén confirmados.

## Archivos estáticos

- CV definitivo: colocar en `public/documents/` con un nombre profesional, por ejemplo `juan-sebastian-peredo-cv.pdf`, y actualizar `documents.cvUrl` en `site-profile.data.ts`.
- Guiones autorizados: colocar los PDF en `public/documents/` y enlazarlos desde los proyectos o desde una futura sección de documentos.
- Imágenes propias: colocar fotos, afiches o fotogramas en `public/images/` y reemplazar las miniaturas remotas en `portfolio-projects.data.ts`.
- Si cambia la imagen del canal, reemplazar `public/images/zetrax-profile.jpg` o actualizar `hero.profileImageUrl` en `site-profile.data.ts`.

## Publicación

Antes de publicar:

- Confirmar los dos proyectos destacados y sus textos definitivos.
- Recibir CV, foto profesional, afiches o fotogramas autorizados.
- Confirmar roles, créditos y reconocimientos oficiales.
- Agregar dominio canónico cuando exista dominio definitivo.
- Revisar la landing en mobile, tablet y desktop.
- Verificar que WhatsApp, correo, YouTube y descargas funcionen.
