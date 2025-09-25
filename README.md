# 🚀 Proyecto: Funcionalidades Avanzadas en React con TypeScript

Este proyecto es una aplicación de demostración construida con React y TypeScript, enfocada en la implementación de patrones de diseño y técnicas de optimización avanzadas sin usar librerías externas. La aplicación muestra ejemplos prácticos de gestión de estado compleja, inyección de dependencias, renderizado personalizado y validación de formularios.

---

### ✨ Características Principales

* **Renderizado Personalizado (`React.memo` y `useCallback`)**: Un sistema de renderizado optimizado que previene la re-renderización de componentes hijos cuando sus props no han cambiado.
* **Hook de Gestión de Estado Complejo (`useReducer`)**: Un hook personalizado (`useForm`) para manejar el estado de un formulario con múltiples campos de manera predecible y organizada, facilitando la validación y el reseteo.
* **Sistema de Inyección de Dependencias (`Context API`)**: Un patrón para compartir datos globales (como un tema de la interfaz de usuario) a través de la aplicación sin tener que pasar props manualmente por cada componente. Se implementa con `React.createContext` y un hook `useTheme` personalizado.
* **Validación de Formularios**: Lógica de validación integrada en el hook `useForm` que verifica que los campos obligatorios no estén vacíos y que los datos tengan un formato válido. Los mensajes de error se muestran dinámicamente.
* **Popups y Notificaciones**: Componentes modales y de notificación en la interfaz de usuario para mostrar feedback al usuario (por ejemplo, después de un envío de formulario exitoso) o datos de manera no intrusiva.

---

### 🛠️ Tecnologías Utilizadas

* **React**: Biblioteca principal para la construcción de la interfaz de usuario.
* **TypeScript**: Lenguaje que añade tipado estático al proyecto para mayor robustez y mantenimiento.
* **Vite**: Herramienta de construcción (`bundler`) moderna y rápida para el entorno de desarrollo.
* **ESLint**: Herramienta de linting para mantener la consistencia y calidad del código.
* **CSS**: Para estilizar la interfaz y centrar el contenido de la aplicación.

---

### 📂 Estructura de Carpetas

El proyecto sigue una **estructura clásica por tipo de archivo**, facilitando la organización de los componentes, hooks y otros archivos.