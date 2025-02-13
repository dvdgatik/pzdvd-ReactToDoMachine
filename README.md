# Repositorio base del Curso de Introducción a React.js en Platzi

¡Hola, Platzinauta!

En este repositorio encontrarás el código de todas las clases del [Curso de Introducción a React.js](https://platzi.com/reactjs). Para empezar solo debes clonar este repositorio (`git clone`), instalar sus dependencias (`npm i`) y ejecutar la aplicación (`npm start`).

La rama principal contiene el código con el que eempezamos el curso. En las demás ramas encontrarás el código de las siguientes clases y finalmente el deploy de la aplicación.

¡Mucha suerte aprendiendo React! #NuncaParesDeAprender

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Introduccion a React (Fundamentos)

React.js es una de las herramientas/library mas populares en JavaScript

- Nos ayuda a crear aplicaciones interactivas
  - Multiplataforma
  - Declarativo
    - React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.

Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de depurar.

- Basado en componentes

Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.

Ya que la lógica de los componentes está escrita en JavaScript y no en plantillas, puedes pasar datos de forma sencilla a través de tu aplicación y mantener el estado fuera del DOM.

-Fue constriuida con Create React App

¿que es un componente?

- reutilizable e interacrtivo

build, crea una version del proyecto que se pueda desplegar a produccion

eslint (variables no utilizadas)
browserList a que version de EC debe transpilar el proyecto

robots.txt, solo para saber a que se le puede hacer web scrapping

src index.js
Importamos react
Importamos ReactDOM
usamos createRoot(elemento donde se renderizará la aplicacion usando getElementByID)
usamos el metodo render(el componente que renderizaremos en este caso App sera el componente inicial)

- Como se pueden comunicar estados entre componentes padres y compoentes hijos
- Como podemos crear estados derivados para crear nuevos calculos a partir de nuestros primeros estados
- ¿Como se comparten los estados de un componente hijo a un padre?

  - Solo se pueden compartir estados de padres a hijos no al reves

- Localstorage es una herramienta que nos ayuda a hacer persistencia en el navegador
- El localStorage es una API del navegador
- El localStorage no puede guardar estructuras complejas, solamente strings
- podemos usar JSON.stringify para convertir un objeto, array etc en un string
- Para convertir un string en objeto usamos JSON.parse

- Nuestor codigo se volvio mas complejo en logica añadiendo muchas lineas de codigo en App por el manejo del local stora estado etc
- Podemos usar una herramienta llamada custom hooks que nos permite abstraer logica de nuestros componentes y reutilizarla
- crearemos un customHook para local storage

¿Cuando vale la pena implementar los custom hooks?

- En realidad no hay una guia escrita en piedra pero

- Cuando el componente tenga muchas responsabilidades

CUSTOM HOOKS
React viene con varios Hooks integrados como useState, useContext y useEffect. A veces, desearás que haya un Hook para algún propósito más específico: por ejemplo, para obtener datos, para mantener un seguimiento de si un usuario está conectado o para conectarse a una sala de chat. Es posible que no encuentres estos Hooks en React, pero puedes crear tus propios Hooks para las necesidades de tu aplicación.

Permite: compartir logica entre componentes y tener el codigo del componente como tal mucho mas limpio
Al abstraer usando Hooks nos facilita la lectura del codigo, teniendo las partes que le competen al componente en una seccion y las partes de la funcionalidad del hook en otra diferente.
Cuando vale la pena implementarlo? Bajo nuestro criterio cuando veamos necesario abstraer una logica.

🔹 1. Cuando necesitas manejar estado dentro de un componente funcional
Si tu componente necesita recordar valores entre renders (como un contador, un formulario o un toggle

You said:
cuando vale la pena utilizar custom hooks?
No hay una regla escrita en piedra para saber cuando usar custom hook sin embargo hay algunos usos comunes
ChatGPT said:
ChatGPT
📌 ¿Cuándo vale la pena utilizar Custom Hooks en React?
Los Custom Hooks son útiles cuando quieres reutilizar lógica de estado o efectos en varios componentes sin repetir código. Vale la pena usarlos en los siguientes casos:

🚀 1. Cuando necesitas reutilizar lógica en múltiples componentes
Si varios componentes comparten la misma lógica (como manejar un contador, manejar eventos del navegador o realizar peticiones a una API), encapsularla en un Custom Hook mejora la organización y reusabilidad del código.

🔹 Ejemplo: Un useFetch que puede ser usado en diferentes partes de la aplicación para hacer peticiones HTTP.

jsx
Copy
Edit
import { useState, useEffect } from "react";

function useFetch(url) {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
setLoading(true);
fetch(url)
.then((response) => response.json())
.then((data) => {
setData(data);
setLoading(false);
})
.catch((error) => {
setError(error);
setLoading(false);
});
}, [url]);

return { data, loading, error };
}
✅ Beneficio: Se puede usar en cualquier componente sin repetir la lógica de fetch.

jsx
Copy
Edit
const { data, loading, error } = useFetch("https://api.example.com/users");
🔹 2. Cuando la lógica de un componente es compleja y repetitiva
Si un componente tiene mucha lógica dentro de useEffect, useState, y otras funciones, extraerlo en un Custom Hook ayuda a que el componente sea más limpio y fácil de leer.

🔹 Ejemplo: Un useLocalStorage para manejar el almacenamiento en localStorage en diferentes componentes.

jsx
Copy
Edit
function useLocalStorage(key, initialValue) {
const [value, setValue] = useState(() => {
const storedValue = localStorage.getItem(key);
return storedValue ? JSON.parse(storedValue) : initialValue;
});

useEffect(() => {
localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);

return [value, setValue];
}
✅ Beneficio: Se puede usar en varios componentes sin repetir el localStorage logic.

jsx
Copy
Edit
const [theme, setTheme] = useLocalStorage("theme", "light");
🔹 3. Cuando trabajas con eventos del navegador o suscripciones
Si un componente necesita agregar y remover event listeners o suscripciones al montar y desmontar, encapsular esa lógica en un Custom Hook evita que se olvide limpiarlos.

🔹 Ejemplo: useWindowSize para detectar cambios en el tamaño de la ventana.

jsx
Copy
Edit
function useWindowSize() {
const [size, setSize] = useState({
width: window.innerWidth,
height: window.innerHeight,
});

useEffect(() => {
const handleResize = () => {
setSize({
width: window.innerWidth,
height: window.innerHeight,
});
};

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

}, []);

return size;
}
✅ Beneficio: Se puede usar en cualquier componente sin repetir la lógica.

jsx
Copy
Edit
const { width, height } = useWindowSize();
🔹 4. Cuando necesitas desacoplar lógica de negocio de los componentes
Si la lógica del negocio está muy unida al componente, un Custom Hook puede separar la funcionalidad y hacer que el código sea más fácil de probar y escalar.

🔹 Ejemplo: useAuth para manejar la autenticación del usuario.

jsx
Copy
Edit
function useAuth() {
const [user, setUser] = useState(null);

useEffect(() => {
const storedUser = localStorage.getItem("user");
if (storedUser) setUser(JSON.parse(storedUser));
}, []);

const login = (userData) => {
setUser(userData);
localStorage.setItem("user", JSON.stringify(userData));
};

const logout = () => {
setUser(null);
localStorage.removeItem("user");
};

return { user, login, logout };
}
✅ Beneficio: Se puede usar en cualquier parte de la aplicación sin escribir la lógica repetitivamente.

jsx
Copy
Edit
const { user, login, logout } = useAuth();
🎯 Cuándo NO usar Custom Hooks
❌ Si la lógica solo se usa en un solo componente: Si el código no se repite en otros componentes, no es necesario extraerlo en un hook.
❌ Si el hook solo devuelve un valor sin lógica de estado o efectos: No es útil si solo encapsula una función sin manejar estado o efectos.
❌ Si agrega más complejidad de la necesaria: Si el código es más simple en el componente, no lo encapsules en un hook innecesariamente.

- Formas de organizar componentes de React JS en estructuras de carpetas
- Por el tipo de archivo (components, css, img, helpers) flat structure
- Tipo de componente: separa componentes segun su funcionalidad
- Feature based: agrupa componentes por funcionalidades
- Atomic Design: Este enfoque se basa en la metodología Atomic Design de Brad Frost y separa componentes en cinco niveles
- ⚛️ Atomic Design + Feature-Based

📌 Formas de organizar componentes en carpetas en React
La organización de archivos en React depende del tamaño del proyecto, la complejidad y las preferencias del equipo. Aquí te muestro varias estructuras populares con sus ventajas y desventajas.

🏗️ 1. Organización básica (Flat Structure)
Ideal para proyectos pequeños o pruebas rápidas.

css
Copy
Edit
/src
├── components/
│ ├── Button.jsx
│ ├── Navbar.jsx
│ ├── Card.jsx
│ ├── Footer.jsx
✅ Ventajas:

Fácil de entender en proyectos pequeños.
Rápida configuración.
❌ Desventajas:

Se vuelve caótica a medida que el proyecto crece.
Dificulta la reutilización y mantenimiento.
📂 2. Organización por tipo de componente
Separa componentes según su funcionalidad.

bash
Copy
Edit
/src
├── components/
│ ├── common/ # Componentes reutilizables
│ │ ├── Button.jsx
│ │ ├── Card.jsx
│ │ ├── Modal.jsx
│ ├── layout/ # Componentes estructurales
│ │ ├── Navbar.jsx
│ │ ├── Sidebar.jsx
│ │ ├── Footer.jsx
│ ├── pages/ # Componentes específicos de páginas
│ │ ├── Home.jsx
│ │ ├── Dashboard.jsx
✅ Ventajas:

Más organizada que la estructura básica.
Permite reutilización de componentes.
❌ Desventajas:

Puede volverse confusa en proyectos muy grandes.
🏢 3. Organización por features (Feature-Based)
Agrupa componentes por funcionalidades.

bash
Copy
Edit
/src
├── features/
│ ├── auth/ # Funcionalidad de autenticación
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── authService.js
│ ├── products/ # Funcionalidad de productos
│ │ ├── ProductList.jsx
│ │ ├── ProductDetail.jsx
│ │ ├── productService.js
│ ├── cart/ # Funcionalidad del carrito
│ │ ├── Cart.jsx
│ │ ├── cartService.js
✅ Ventajas:

Facilita el mantenimiento y escalabilidad.
Permite a diferentes equipos trabajar en módulos independientes.
❌ Desventajas:

Puede parecer excesiva para proyectos pequeños.
⚛️ 4. Organización basada en Atomic Design
Este enfoque se basa en la metodología Atomic Design de Brad Frost y separa componentes en cinco niveles:

bash
Copy
Edit
/src
├── components/
│ ├── atoms/ # Componentes más pequeños (botones, inputs, labels)
│ │ ├── Button.jsx
│ │ ├── Input.jsx
│ ├── molecules/ # Combinación de átomos (formularios, tarjetas)
│ │ ├── SearchBar.jsx
│ │ ├── Card.jsx
│ ├── organisms/ # Secciones completas (Navbar, Footer)
│ │ ├── Navbar.jsx
│ │ ├── Sidebar.jsx
│ ├── templates/ # Estructuras de páginas con placeholders
│ │ ├── DashboardTemplate.jsx
│ ├── pages/ # Páginas finales
│ │ ├── Home.jsx
│ │ ├── Profile.jsx
✅ Ventajas:

Extremadamente escalable y modular.
Facilita la reutilización de componentes pequeños.
❌ Desventajas:

Puede ser difícil de entender al inicio.
No siempre es necesaria en proyectos pequeños.
🔥 5. Organización combinada (Escalable)
Una combinación de Feature-Based + Atomic Design para proyectos grandes.

graphql
Copy
Edit
/src
├── components/ # Componentes reutilizables (Botones, Modales, Inputs)
│ ├── Button.jsx
│ ├── Modal.jsx
│ ├── Input.jsx
├── features/ # Agrupa módulos específicos
│ ├── auth/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── authService.js
│ ├── dashboard/
│ │ ├── Dashboard.jsx
│ │ ├── DashboardCard.jsx
├── hooks/ # Custom Hooks
│ ├── useFetch.js
│ ├── useAuth.js
├── pages/ # Páginas de la aplicación
│ ├── Home.jsx
│ ├── Profile.jsx
├── services/ # Llamadas a API y lógica externa
│ ├── api.js
│ ├── authService.js
✅ Ventajas:

Escalable y organizada.
Facilita la colaboración en equipo.
Mezcla lo mejor de varias metodologías.
❌ Desventajas:

Puede ser demasiado estructurada para proyectos pequeños.
🎯 ¿Cuál estructura usar?
Tamaño del proyecto Recomendación
🔹 Pequeño (Landing page, demo) 📂 Flat Structure o por tipo
🔸 Mediano (Dashboard, app con autenticación) 🏢 Feature-Based
🔥 Grande (E-commerce, SaaS, ERP) ⚛️ Atomic Design + Feature-Based
🚀 Conclusión
Si tu proyecto es pequeño, manténlo simple. Si crece, usa una estructura modular y escalable. Feature-Based y Atomic Design son las más recomendadas para proyectos grandes.

📌 ¿Cómo organizas tú tus proyectos en React? 🚀

Oranizacion separando UI y logica de react
App.js
AppUI.js

- Hay momentos en que partes de la logica de react pueden demorarse, consultas en API o procesos que son asincronos

- useEffect se utiliza para manejar efectos secundarios (Side Effects) en los componentes funcionales de React. Un efecto secundario es cualquier operación que afecte algo fuera del ámbito del componente (como llamadas a APIs, suscripciones, manipulación del DOM, etc.).

useEffect se utiliza para manejar efectos secundarios en los componentes funcionales de React. Un efecto secundario es cualquier operación que afecte algo fuera del ámbito del componente (como llamadas a APIs, suscripciones, manipulación del DOM, etc.).

🔥 Casos principales de uso de useEffect
1️⃣ Cuando necesitas ejecutar código al montar el componente (Simulación de componentDidMount)
📌 Se usa cuando quieres que un efecto se ejecute solo una vez, como una llamada a una API al cargar un componente.

jsx
Copy
Edit
useEffect(() => {
console.log("El componente se montó");
}, []); // 👈 Dependencias vacías significa que solo se ejecuta al montar
2️⃣ Cuando necesitas ejecutar código al actualizarse una variable específica (Simulación de componentDidUpdate)
📌 Se usa para reaccionar a cambios en una variable y ejecutar un efecto cuando esta cambia.

jsx
Copy
Edit
const [count, setCount] = useState(0);

useEffect(() => {
console.log(`El contador cambió a: ${count}`);
}, [count]); // 👈 Se ejecuta cada vez que `count` cambia
3️⃣ Cuando necesitas ejecutar código al desmontar el componente (Cleanup - Simulación de componentWillUnmount)
📌 Se usa para limpiar efectos secundarios, como cerrar suscripciones o limpiar temporizadores.

jsx
Copy
Edit
useEffect(() => {
const interval = setInterval(() => {
console.log("Ejecutando intervalo...");
}, 1000);

return () => {
console.log("El componente se desmontó");
clearInterval(interval); // 👈 Limpieza del efecto
};
}, []);
🚀 Otros casos importantes de uso
✅ Llamadas a APIs
jsx
Copy
Edit
useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => console.log(data));
}, []);
✅ Manejo de eventos globales
jsx
Copy
Edit
useEffect(() => {
const handleResize = () => console.log("Cambiando tamaño de ventana");

window.addEventListener("resize", handleResize);

return () => window.removeEventListener("resize", handleResize); // Limpieza
}, []);
✅ Sincronizar con el almacenamiento local (localStorage)
jsx
Copy
Edit
const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

useEffect(() => {
localStorage.setItem("theme", theme);
}, [theme]); // Se ejecuta cuando `theme` cambia
⚠️ Errores comunes al usar useEffect
❌ Olvidar limpiar efectos secundarios
Si estás usando setInterval, setTimeout o agregando eventos a window, debes limpiarlos en el return.

❌ Ejecutar useEffect innecesariamente
Si no colocas un array de dependencias [], el efecto se ejecutará en cada render y podría generar problemas de rendimiento.

❌ Modificar el estado directamente dentro del useEffect sin control
jsx
Copy
Edit
useEffect(() => {
setCount(count + 1); // ❌ Esto puede causar un bucle infinito
}, [count]);
🔹 Solución: Asegúrate de que no estás cambiando el estado sin condición.

💡 Conclusión
📌 Usa useEffect cuando necesites manejar efectos secundarios en React, como llamadas a APIs, eventos globales o sincronización con almacenamiento local.
📌 Siempre recuerda limpiar efectos secundarios cuando sea necesario para evitar fugas de memoria.
📌 Utiliza el array de dependencias para controlar cuándo se ejecuta el efecto y evitar renders innecesarios.

Los efectos no se ejecutan inmediatamente

Definicion Simple de useEffect

- Es un hook que nos permite ejecutar codigo arbitrario cuando el componente se monta en el dom y cada vez que cambian las dependencias que nosotros le definamos

Desplegar Todo Machine con Github Pages

npm run build

- Crea una version para produccion de la aplicacion bundle, es decir ya no necesitaremos un servidor de node
  sino que generara archivos estaticos html css, js imagenes

- Todo eso lo genera en una carpeta que se llame build
- El archivo .gitignore, ignora la carpeta build

"homepage": "/Users/davidgatica/Documents/Projects/Personal/pzdvd-ReactToDoMachine/build/"
"homepage": "https://dvdgatik.github.io/pzdvd-ReactToDoMachine"

npm i --save-dev gh-pages

Deplegar apuntando el deploy de index.html a la carpeta de build
"deploy": "gh-pages -d build"

maualmente solo tendriamos que pasar la carpeta build a la rama gh-pages

corremos el build antes del deploy en caso de que la carpeta build aun no exista
"preDeploy": "npm run build",
"deploy": "gh-pages -d build"

correr npm run deploy

> platzi-intro-react-base@0.1.0 deploy
> gh-pages -d build

Published

### Portafolio Profesional

¿Cuál es la clave para un portafolio profesional exitoso?
La presentación es la línea que separa un portafolio estándar de uno que realmente impresiona. No basta solo con dominar los hooks de React o tener múltiples proyectos realizados. Comunicar bien tus logros es fundamental para alcanzar metas profesionales, ya sea conseguir empleo, un aumento o una posición de liderazgo. Los estudiantes destacados de Platzi no solo aprenden React.js, sino que también mejoran su repositorio para convertirlo en una carta de presentación convincente, una herramienta esencial para captar la atención de reclutadores, managers o futuros socios.

¿Cómo optimizamos un portafolio profesional?
Analizar la estructura de los branches:

Identifica qué ramas son las más relevantes.
La rama principal podría ser main, pero ¿es la mejor opción para mostrar tu proyecto? Analiza y elige la más adecuada en los settings de GitHub.
Historial de commits:

Asegúrate de tener un historial de commits descriptivo y coherente.
Facilita ver la evolución de tu aplicación de manera clara y organizada.
Mejorar el archivo README:

Dedica los primeros párrafos a explicar claramente qué esperar de tu proyecto.
Adjunta enlaces útiles como el deploy de la aplicación, la URL y cualquier otra información relevante.
¿Qué más puedo incluir en mi repositorio?
Incluir el diseño y prototipos:

Comparte el archivo Figma o su prototipo, si lo tienes.
Capturas de pantalla o una URL al deploy pueden complementar la documentación.
Destacar tu perfil personal y profesional:

Utiliza la foto en tu perfil que mejor te represente.
Añade repositorios destacados que quieras presumir en tu perfil de GitHub.
Considera un curso sobre marca personal para developers y mejora cómo comunicas tus habilidades.
¿Qué otros consejos son útiles?
Cuida tus commits y README: Estos son aspectos que evaluadores revisarán; asegúrate de que sean claros y bien redactados.
Sé consistente: Usa términos e instrucciones consistentes para que tu repositorio se mantenga accesible y profesional.
Sé valiente y creativo: Agrega detalles que te diferencien, pero manteniéndolos relevantes y útiles.
Optimizar tanto tu perfil de GitHub como los repositorios de tus proyectos fortalece tu marca personal. Al mejorar estos aspectos, no solo refuerzas tus habilidades técnicas aprendidas, sino que también te preparas mejor para comunicar y proyectar tus habilidades de manera efectiva a nivel profesional.

Versiones De React

Es importante como developer tienes que tener en cuenta que puedes encontrarte frecuentemente con diferentes versiones de React

Hay que saber como cambiar entre una y otra

Cada vez que tengas un problema con cambio de versiones e instalaciones
eliminar
node_modules
package.lock.json

rm -rf node_modules (eliminar recursivamente)
rm package.lock.json

ejemplo:

18 react-dom/client
17 react-dom

ejemplo:
en lugar de preguntarse porque se rompe la version en react 17

changes react 18 y 17

how to downgrade
how to upgrade

Actualizacines en la API de renderizado del cliente

Es importante saber adaptarse a cualquier version de react y practicas del equipo de trabajo

Tambien se puede proponaer soluciones con fundamento

ejemplo:
Estamos en la version 13 pero un miembro del equipo se dio cuenta que con la version 14 carga un segundo mas rapido

Esto ayuda a la optimozacion de la aplicacion por tanto al usuario por eso si seria una buena idea hacer upgrade

A veces es mas importante analizar:
La arquitectura
La situacion del equipo
la interaccion de los usuarios
lo que sea necesario para conseguir la mejor experiencia para el usuario

en lugar de nuevas tendencias y tecnologias que aun no sean estables o no tengan una necesidad relevante en el proyecto

en la version 16 no existian los hooks
sino componentes clases que heredaban de react component
habia un ciclo de vida
y de alguna manera se programaba en react con POO
