# React Bootstrap Plate Movie List
React Bootstrap Plate is example of integration react with bootstrap.

## Overview
In this tutorial, we will create web application that show the movie list using OMDb API.
The app will able to receive search input and respond search input with showing list of 
movies. The key things we will explore is how to:
- Create single page application.
- Create multi language page.
- Interaction between react with API.

## Prerequisites
- Download and install Node at v8.10+, npm at v5.6+ and Yarn at v1.2.0+.
- Download and install JDK.
- Download and install Visual Studio Code
- Create Netlify Account

### Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npx create-react-app react-bootstrap-plate`

### React-i18next
[React-i18next](https://react.i18next.com/) is a powerful internationalization framework for React / React Native which is based on i18next.

`yarn add react-i18next i18next i18next-http-backend i18next-browser-languagedetector`

### React Router
Declarative routing for React using [React Router](https://reactrouter.com/)

`yarn add react-router react-router-dom`

### React Bootstrap
React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
Installing [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction) dependency to the project.

`yarn add react-bootstrap bootstrap react-router-bootstrap`

## Tutorial

### Add browser router to src/index.js
[BrowserRouter](https://reactrouter.com/web/api/BrowserRouter) HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
```
import {BrowserRouter as Router} from 'react-router-dom';
..........
<React.StrictMode>
  <Router>
    <App />
  </Router>
</React.StrictMode>
```

### Add PWA functionality 
You want your app to work offline and load faster using [PWA](https://bit.ly/CRA-PWA)
```
serviceWorker.register();
```
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
