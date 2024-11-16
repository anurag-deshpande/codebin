# Codebin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0. 
Codebin is a full stack project utilizing firebase API and Angular. You can save your code and view all snippets. The project also has a login/logout as well as signup functionality, which allows to create users. The firebase DB is used to store and retrieve the data, which is fast, efficient and safe.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## How to run the project
1. Download the source code in a zip file.
2. run npm install to install all dependencies (requires Angular version 18 and above).
3. You will additionally need to create a firebase account (https://console.firebase.google.com/).
4. Create a standard project and a standard db in firebase.
5. Initialise the firebase config and add it to `firebase-config.ts` file present in the code.
6. Check for any dependencies for firebase like db name or project name and replace it with existing code in `db.service.ts` or `auth.service.ts`.
7. Once you have the firebase setup ready, you can store and retrieve the code details with login/logout and signup functionality.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
