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