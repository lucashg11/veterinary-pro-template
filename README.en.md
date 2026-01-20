[Español (README.md) | English]

# [Budhapets-Veterinary]("https://veterinary-pro-template.netlify.app/") - High-Complexity Veterinary Platform

This project is a professional Landing Page developed for **Budhapets**, a 24-hour veterinary clinic. The primary goal is to showcase advanced skills in frontend architecture, asset optimization, and strict typing.

## 🚀 Technical Decisions & Architecture

### 1. Astro 5 + pnpm

The project was migrated from Bun to **pnpm** to ensure absolute dependency stability. **Astro** was chosen for its ability to generate an extremely lightweight static site, shipping "Zero JavaScript" to the client by default.

### 2. Content Collections & Zod

Instead of hardcoding the services, **Astro Content Collections** were implemented.

- **The "Why":** It allows for a clean separation between data (Markdown) and presentation logic.
- **Validation:** **Zod** is used to define schemas that strictly ensure every service includes a title, description, order, and image, preventing errors at compile time.

### 3. TypeScript & Interfaces (UTN Diploma Core)

Knowledge from the UTN (National Technological University) Diploma was applied to harden the codebase:

- **Props Interfaces:** All components (`ServiceCard`, `ContactForm`, `FeatureItem`) use interfaces to strictly define the data they consume.
- **`:void` Functions:** Form event handling utilizes `:void` typing to ensure data capture functions do not return unexpected values.

### 4. Image Optimization

The Astro `<Image />` component was implemented with a hybrid loading strategy:

- **Eager/High Priority:** Applied to the Hero and the first service card to improve **LCP (Largest Contentful Paint)**.
- **Lazy/Low Priority:** Applied to the rest of the grid, optimizing bandwidth for mobile devices.

## 📁 Project Structure

```plaintext
/
├── src/
│   ├── assets/             # Original images processed by Astro
│   ├── components/         # Atomic and modular UI components
│   ├── content/            # Data (Markdown) and schema configurations
│   │   └── services/       # Clinic services collection
│   ├── layouts/            # Base page structures
│   └── pages/              # Application routes
├── public/                 # Static assets
├── package.json            # pnpm configuration and scripts
└── astro.config.mjs        # Framework configuration
```
