1.	Doğrulama kodu static olarak belirlenmiştir (Kod:6666).
2.	Doğrulama kodu doğru olması durumunda gerekli stiller gösterildikten sonra todolist sayfasına yönlendirme yapılmaktadır (Router).
3.	Doğrulama kodu yanlış olması durumunda gerekli stiller gösterilmiştir.
4.	120 sn. süre bitene kadar resend butonu disabled olarak ayarlanmıştır. Süre sonunda proceed butonu disabled olacaktır.
5.	Todolist sayfasına doğrudan url’den geçiş sağlanmaması için doğrulama sayfasına yönlendirilmiştir.
6.	Todolar proje içerisinde todos/todos.json içerisinde tutulmaktadır (json-server –watch todos.json).
7.	Todoların tamamen silinmesi veya servise erişilememesi gibi durumlar için todolistin boş olduğunu gösteren uyarı table üzerinde gösterilmiştir.

# Kanar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
