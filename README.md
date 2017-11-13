# Angular JSON Schema Form Material Design Seed App

This example app shows how to generate a Material Design form from a JSON Schema using Angular JSON Schema Form.

The app was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

To create this app yourself, make sure you have [Node](https://nodejs.org/en/), [NPM](https://www.npmjs.com/), and [Angular CLI](https://cli.angular.io/) installed, then enter the following commands in your terminal:
```shell
ng new ng-jsf-material-design-seed
cd ng-jsf-material-design-seed
npm install @angular/material --save
npm install @angular/cdk --save
npm install hammerjs --save
npm install angular2-json-schema-form --save
```

Follow the instructions to [set up Angular Material](https://material.angular.io/guide/getting-started) and add a default theme.

Then edit the following files:
* src/styles.css — configure Angular Material styles
* src/app/app.module.ts — load Angular JSON Schema Form (and Angular Material) modules
* src/app/app.component.ts — set schema and data variables to configure form
* src/app/app.component.html — display form with `<json-schema-form>` tag

## Development server

Run `ng serve`, then navigate to `http://localhost:4200/` to see the form.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on Angular JSON Schema Form, see the [Angular JSON Schema Form README](https://github.com/dschnelldavis/angular2-json-schema-form/blob/master/README.md).

To get more help on the Angular Material library, see [the Angular Material documentation](https://material.angular.io/).

To learn more about Material Design, see [the Material Design guidelines](https://material.io/guidelines/).

To get more help on the Angular CLI enter `ng help` in your terminal, or see the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
