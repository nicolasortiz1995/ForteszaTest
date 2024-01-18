# FortezsaTest
Pruebas automatizadas de Inicio de sesión, navegación del dashboard, edición personal del usuario y salida correcta del portal

# Proyecto de Pruebas E2E con Cypress

Este proyecto fue creado usando el IDE AQUA y configurado para pruebas E2E con Cypress. El código fue escrito en JavaScript.

## Versiones

Las versiones de las herramientas utilizadas en este proyecto son las siguientes:

- Cypress package version: 13.6.3
- Cypress binary version: 13.6.3
- Electron version: 25.8.4
- Bundled Node version: 18.15.0

## Estructura del Proyecto

El proyecto sigue el modelo de objetos de página (Page Object Model) y se compone de las siguientes carpetas y archivos:

### Pages

Esta carpeta contiene los siguientes archivos:

- `EditContact.js`: Recrea el escenario donde se incluye información de un usuario de confianza.
- `EditPassword.js`: Recrea el escenario de cambiar la contraseña.
- `EditProfile.js`: Recrea el escenario donde se navega a la vista de edición de perfil.
- `LoginPage.js`: Recrea el escenario donde se ingresa al dashboard con credenciales.

### Tests

Esta carpeta contiene el archivo principal de ejecución de pruebas llamado `TCFortesza.cy.js`.

## Configuración

Se creó un archivo de configuración llamado `cypress.env.json`, que contiene información de los selectores para facilitar el mantenimiento de la automatización, información usada en los escenarios de pruebas y la base para las aserciones.

## Ejecución de las Pruebas

Para ejecutar las pruebas, puedes hacerlo usando la interfaz de Cypress abriendo el proyecto y ejecutando el comando `npx cypress open`.

Además, se crearon dos archivos:

- `EjecutarTestAll.bat`: Ejecuta todos los test con los navegadores Chrome, Firefox y Edge.
- `EjecutarTestChrome.bat`: Ejecuta todos los test pero solo con el navegador Chrome.

## Reportes

Para la creación del reporte se utilizó la librería 'mocha-awesome-reporter'. El reporte se genera por defecto en la carpeta `../reports/html/index.html`.
