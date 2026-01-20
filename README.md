[Español | English (README.en.md)]

# ![Budhapets-Veterinaria](https://veterinary-pro-template.netlify.app/) - Plataforma Veterinaria de Alta Complejidad

Este proyecto es una Landing Page profesional desarrollada para Budhapets, una clínica veterinaria 24 horas. El objetivo principal es demostrar habilidades avanzadas en arquitectura frontend, optimización de activos y tipado estricto.

## 🚀 Decisiones Técnicas y Arquitectura

### 1. Astro 5 + pnpm

Se migró de Bun a pnpm para garantizar la estabilidad absoluta de las dependencias. Astro fue elegido por su capacidad de generar un sitio estático extremadamente liviano, enviando "Cero JavaScript" al cliente por defecto.

### 2. Content Collections & Zod

En lugar de hardcodear los servicios, se implementaron Astro Content Collections.

- **Por qué**: Permite separar los datos (Markdown) de la lógica de presentación.
- **Validación**: Se utiliza Zod para definir esquemas que aseguran que cada servicio tenga título, descripción, orden e imagen, evitando errores en tiempo de compilación.

### 3. TypeScript & Interfaces (Clave Diplomatura UTN)

Se aplicó lo aprendido en la formación de la UTN para robustecer el código:

- **Interfaces de Props**: Todos los componentes (`ServiceCard`, `ContactForm`, `FeatureItem`) poseen interfaces que definen estrictamente los datos que reciben.
- **Funciones `:void`**: El manejo de eventos en el formulario utiliza tipado `:void` para asegurar que las funciones de captura de datos no retornen valores inesperados.

### 4. Optimización de Imágenes

Se implementó el componente `<Image />` de Astro con carga híbrida:

- **Eager/High Priority**: Para el Hero y el primer servicio (mejorando el LCP).
- **Lazy/Low Priority**: Para el resto de la grilla, optimizando el ancho de banda en dispositivos móviles.

## 📁 Estructura del Proyecto

```plaintext
/
├── src/
│   ├── assets/             # Imágenes originales procesadas por Astro
│   ├── components/         # Componentes atómicos y modulares (UI)
│   ├── content/            # Datos (Markdown) y configuración de esquemas
│   │   └── services/       # Colección de servicios de la clínica
│   ├── layouts/            # Estructura base de las páginas
│   └── pages/              # Rutas de la aplicación
├── public/                 # Archivos estáticos
├── package.json            # Configuración de pnpm y scripts
└── astro.config.mjs        # Configuración del framework
```
