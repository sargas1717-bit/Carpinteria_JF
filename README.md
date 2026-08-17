# Carpintería y Oficios - José Félix

Una página web profesional, rápida y moderna construida con Vanilla HTML, CSS y JavaScript. Optimizada para ser desplegada instantáneamente en Vercel.

## Características

- **Diseño Premium**: Tema oscuro con acentos en colores madera (dorado/cálido), ideal para transmitir profesionalismo y trabajo artesanal.
- **Responsiva**: Se adapta perfectamente a teléfonos móviles, tablets y computadoras de escritorio.
- **Carrusel de Galerías**: Cada servicio cuenta con un carrusel interactivo para mostrar trabajos anteriores.
- **Integración con WhatsApp**: Un botón directo para que los clientes envíen mensajes de manera rápida.
- **Sin Dependencias**: Al estar construida sin frameworks pesados, la carga de la página es casi instantánea.

## ¿Cómo añadir tus propias fotos?

La página está preparada para que insertes tus propias fotos fácilmente. Sigue estos pasos:

1. **Fotos de Servicios**: 
   - Ve a la carpeta `assets/carpinteria/`, `assets/herreria/`, o `assets/mecanica/`.
   - Pega ahí tus fotos (por ejemplo: `mueble1.jpg`, `puerta.png`).
   - Abre el archivo `index.html`, busca la tarjeta del servicio (ej. Carpintería) y modifica el atributo `data-images`:
     ```html
     <div class="service-card" ... data-images="mueble1.jpg, puerta.png">
     ```
   - ¡Listo! Las fotos aparecerán automáticamente en el carrusel al hacer clic en el servicio.

2. **Foto Principal (Hero)**:
   - Reemplaza `assets/hero_carpentry.png` por tu foto de portada, o cambia el nombre del archivo en la línea correspondiente del `index.html`.

3. **Foto Sobre Mí**:
   - Reemplaza el recuadro gris ("Foto de José Félix") ubicando la sección `<section id="sobre-mi">` en `index.html` e insertando la etiqueta `<img>` con tu foto.

## Despliegue en Vercel

1. Sube este código a tu cuenta de GitHub.
2. Inicia sesión en [Vercel](https://vercel.com).
3. Haz clic en **Add New Project**.
4. Importa tu repositorio de GitHub `Carpinteria_JF`.
5. Haz clic en **Deploy**. ¡En segundos tu página estará en vivo!

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica.
- **CSS3**: Variables CSS, Flexbox, Grid y animaciones suaves (sin frameworks externos).
- **JavaScript (ES6)**: Lógica para el menú móvil y los modales del carrusel.
