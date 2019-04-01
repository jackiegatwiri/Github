(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Github';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var src_app_services_profiles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/profiles.service */ "./src/app/services/profiles.service.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _underline_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./underline.directive */ "./src/app/underline.directive.ts");















var routes = [
    { path: "", component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"] },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_9__["LandingPageComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _underline_directive__WEBPACK_IMPORTED_MODULE_14__["UnderlineDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_10__["NgProgressModule"],
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_11__["NgProgressHttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [src_app_services_profiles_service__WEBPACK_IMPORTED_MODULE_8__["ProfilesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/class/user.ts":
/*!*******************************!*\
  !*** ./src/app/class/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, company, login, avatar_url, repository, location, followers, following, html_url, created_at) {
        this.name = name;
        this.company = company;
        this.login = login;
        this.avatar_url = avatar_url;
        this.repository = repository;
        this.location = location;
        this.followers = followers;
        this.following = following;
        this.html_url = html_url;
        this.created_at = created_at;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#view{\n    margin-top: 3em;\n}\nimg {\n    border-radius: 50%;\n    height: 20em;\n    margin-top: 2em;\n  }\n#welcome{\n      text-align: center;\n      color: brown;\n      font-family: monospace;\n      margin-top: 4em;\n      margin-bottom: 4em;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7RUFDakI7QUFDQTtNQUNJLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixrQkFBa0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN2aWV3e1xuICAgIG1hcmdpbi10b3A6IDNlbTtcbn1cbmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMjBlbTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cbiAgI3dlbGNvbWV7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogYnJvd247XG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgbWFyZ2luLXRvcDogNGVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNGVtO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\n<div class=\"container\">\n      <h3 id=\"welcome\">WELCOME TO GITHUBSEARCH</h3>\n        <div *ngIf=\"user\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n               Here is a profile of {{user.name}} \n                <span *ngIf=\"user.company\">who works at {{user.company}}</span>, situated in\n                {{user.location}}\n              </div>\n            </div>\n          </div>\n              <div class=\"panel-body\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <img src=\"{{user.avatar_url}}\" class=\"img-circle img-responsive\" alt=\"Profile Image\">\n                    </div>\n   \n                    <div class=\"col-sm-6\">\n                        <ul class=\"list-group\">\n                          <li class=\"list-group-item\" >UserName:     {{user.name}}</li>\n                          <li class=\"list-group-item\" >Repository:   {{user.repository}}</li>\n                          <li class=\"list-group-item\" >Location:     {{user.location}}</li>\n                          <li class=\"list-group-item\" >Followers:    {{user.followers}}</li>\n                          <li class=\"list-group-item\" >Following:    {{user.following}}</li>\n                          <li class=\"list-group-item\" >Created At:   {{user.created_at|date}}</li>\n                          <p><a href=\"{{user.html_url}}\" target=\"_blank\" class=\"btn btn-success btn-sm\" id=\"view\">View profile on github</a></p>\n                        </ul>\n                      </div>\n\n           \n\n                      <div class=\"panel-body\">\n                          <div class=\"row\">\n                            <div class=\"form-group\">\n                              <button type=\"button\" id=\"btn1\" class=\"btn btn-info btn-sm\" (click)=\"getRepos()\">Get Repositories</button>\n                             </div>\n                             <div *ngIf=\"loading\">loading...</div>\n                             <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">\n                              <strong>Warning!</strong> {{errorMessage}}\n                             </div>\n                             <div class=\"row\">\n                                <div class=\"col-md-4 card\" *ngFor=\"let repo of repos;\">\n      \n                                    <!-- <div class=\"card\"> -->\n                                        <!-- Card content -->\n                                        <div class=\"card-body \">\n                                          <!-- Title -->\n                                          <h4 class=\"card-title animated fadeInRight\" ><p class=\"text-info\">  {{repo.name}}</p></h4>\n                                          <hr>\n                                          <!-- Text -->\n                                          <ul class=\" card-text list-group list-group-flush\">\n                                              <li class=\"list-group-item animated fadeInRight\"> <i class=\"fas fa-fingerprint\"></i> Repo ID: {{repo.id}}</li>\n                     \n                                              <li class=\"list-group-item animated fadeInRight\"> <i class=\"fas fa-globe-americas\"></i> Repo Name: {{repo.name}}</li>\n                     \n                                              <li class=\"list-group-item animated fadeInRight\"> <i class=\"fas fa-file-signature\"></i> Repo Description: {{repo.description}}</li>\n                                            </ul>\n                                        </div>\n                     \n                                        <!-- Card footer -->\n                                        <div class=\"rounded-bottom mdb-color lighten-3 text-center pt-3\">\n                                          <ul class=\"list-unstyled list-inline font-small\">\n                                              <a target=\"_blank\" href=\"{{repo.html_url}}\" class=\"btn btn-grey btn-md\">  Checkout on Github\n                                                <i class=\"fas fa-fighter-jet\"></i>\n                                              </a>\n                                          </ul>\n                                        </div>\n                                      <!-- </div> -->\n                            </div>\n                             </div>\n                            </div>\n                          </div>"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profiles.service */ "./src/app/services/profiles.service.ts");



var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(profilesService) {
        this.profilesService = profilesService;
        this.loading = false;
    }
    LandingPageComponent.prototype.locateUserProfile = function () {
        this.profilesService.updateProfile(this.username);
        this.profilesService.userRequest();
        this.user = this.profilesService.user;
    };
    LandingPageComponent.prototype.ngOnInit = function () {
        this.profilesService.userRequest();
        this.user = this.profilesService.user;
    };
    LandingPageComponent.prototype.getRepos = function () {
        var _this = this;
        this.loading = true;
        this.errormessage = '';
        this.profilesService.getRepos(this.username).subscribe(function (response) { _this.repos = response; }, function (error) { _this.errormessage = error; _this.loading = false; }, function () { _this.loading = false; });
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/components/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profiles_service__WEBPACK_IMPORTED_MODULE_2__["ProfilesService"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <span class=\"navbar-brand\">Github Search</span>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink='/' routerLinkActive='active'>Landing Page</a></li>\n        <li><a routerLink='/profile' routerLinkActive='active'>Profile</a></li>\n        \n      </ul>\n      \n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#view{\n    margin-top: 3em;\n}\nimg {\n    border-radius: 50%;\n    height: 20em;\n    margin-top: 2em;\n  }\n#welcome{\n      text-align: center;\n      color: brown;\n      font-family: monospace;\n      margin-top: 4em;\n      margin-bottom: 4em;\n  }\n#btn1{\n      margin-left: 50%;\n      margin-left: 50%\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUNBO01BQ0ksa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLGtCQUFrQjtFQUN0QjtBQUNBO01BQ0ksZ0JBQWdCO01BQ2hCO0VBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZpZXd7XG4gICAgbWFyZ2luLXRvcDogM2VtO1xufVxuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAyMGVtO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgfVxuICAjd2VsY29tZXtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiBicm93bjtcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICBtYXJnaW4tdG9wOiA0ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiA0ZW07XG4gIH1cbiAgI2J0bjF7XG4gICAgICBtYXJnaW4tbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDUwJVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\n<div class=\"container\">\n      <h3 id=\"welcome\" appUnderline >WELCOME TO GITHUBSEARCH</h3>\n      <form action=\"\" class=\"search-form\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search git users with username\" [(ngModel)]=\"username\" name=\"username\" (keyup)=\"locateUserProfile()\">\n          </div>\n        </form>\n        <div *ngIf=\"user\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n               Here is a profile of {{user.name}} \n                <span *ngIf=\"user.company\">who works at {{user.company}}</span>, situated in\n                {{user.location}}\n              </div>\n            </div>\n          </div>\n              <div class=\"panel-body\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <img src=\"{{user.avatar_url}}\" class=\"img-circle img-responsive\" alt=\"Profile Image\">\n                    </div>\n   \n                    <div class=\"col-sm-6\">\n                        <ul class=\"list-group\">\n                          <li class=\"list-group-item\" >UserName:     {{user.name}}</li>\n                          <li class=\"list-group-item\" >Repository:   {{user.repository}}</li>\n                          <li class=\"list-group-item\" >Location:     {{user.location}}</li>\n                          <li class=\"list-group-item\" >Followers:    {{user.followers}}</li>\n                          \n                          <li class=\"list-group-item\" >Following:    {{user.following}}</li>\n                          <li class=\"list-group-item\" >Created At:   {{user.created_at|date}}</li>\n                          \n                          <p><a href=\"{{user.html_url}}\" target=\"_blank\" class=\"btn btn-success btn-sm\" id=\"view\">View profile on github</a></p>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n\n           \n                  <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <button type=\"button\" id=\"btn1\" class=\"btn btn-info btn-sm\" (click)=\"getRepos()\">Get Repositories</button>\n                       </div>\n                       <div *ngIf=\"loading\">loading...</div>\n                       <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">\n                        <strong>Warning!</strong> {{errorMessage}}\n                       </div>\n                       <div class=\"row\">\n                          <div class=\"col-md-4 card\" *ngFor=\"let repo of repos;\">\n\n                              <!-- <div class=\"card\"> -->\n                                  <!-- Card content -->\n                                  <div class=\"card-body \">\n                                    <!-- Title -->\n                                    <h4 class=\"card-title animated fadeInRight\" ><p class=\"text-info\">  {{repo.name}}</p></h4>\n                                    <hr>\n                                    <!-- Text -->\n                                    <ul class=\" card-text list-group list-group-flush\">\n                                        <li class=\"list-group-item animated fadeInRight\"> <i class=\"fas fa-fingerprint\"></i> Repo ID: {{repo.id}}</li>\n               \n                                        <li class=\"list-group-item animated fadeInRight\"> <i class=\"fas fa-globe-americas\"></i> Repo Name: {{repo.name}}</li>\n               \n                                        <li class=\"list-group-item animated fadeInRight\"> <i class=\"fas fa-file-signature\"></i> Repo Description: {{repo.description}}</li>\n                                      </ul>\n                                  </div>\n               \n                                  <!-- Card footer -->\n                                  <div class=\"rounded-bottom mdb-color lighten-3 text-center pt-3\">\n                                    <ul class=\"list-unstyled list-inline font-small\">\n                                        <a target=\"_blank\" href=\"{{repo.html_url}}\" class=\"btn btn-grey btn-md\">  Checkout on Github\n                                          <i class=\"fas fa-fighter-jet\"></i>\n                                        </a>\n                                    </ul>\n                                  </div>\n                                <!-- </div> -->\n                      </div>\n                       </div>\n                      </div>\n                    </div>\n                      "

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profiles.service */ "./src/app/services/profiles.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profilesService) {
        this.profilesService = profilesService;
        this.loading = false;
    }
    ProfileComponent.prototype.locateUserProfile = function () {
        this.profilesService.updateProfile(this.username);
        this.profilesService.userRequest();
        this.user = this.profilesService.user;
    };
    ProfileComponent.prototype.getRepos = function () {
        var _this = this;
        this.loading = true;
        this.errormessage = '';
        this.profilesService.getRepos(this.username).subscribe(function (response) { _this.repos = response; }, function (error) { _this.errormessage = error; _this.loading = false; }, function () { _this.loading = false; });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.profilesService.userRequest();
        this.user = this.profilesService.user;
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_profiles_service__WEBPACK_IMPORTED_MODULE_2__["ProfilesService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/profiles.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/profiles.service.ts ***!
  \**********************************************/
/*! exports provided: ProfilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return ProfilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _class_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/user */ "./src/app/class/user.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var ProfilesService = /** @class */ (function () {
    function ProfilesService(http) {
        this.http = http;
        this.baseUrl = "https://api.github.com/";
        this.user =
            new _class_user__WEBPACK_IMPORTED_MODULE_3__["User"]("", "", "", "", 0, "", 0, 0, "", "");
        this.username = "jackiegatwiri";
    }
    ProfilesService.prototype.userRequest = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            return _this.http.get("https://api.github.com/users/" + _this.username + "?access_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiToken).toPromise().then(function (response) {
                _this.user.name = response.name;
                _this.user.company = response.company;
                _this.user.login = response.login;
                _this.user.avatar_url = response.avatar_url;
                _this.user.repository = response.public_repos;
                _this.user.location = response.location;
                _this.user.followers = response.followers;
                _this.user.following = response.following;
                _this.user.html_url = response.html_url;
                _this.user.created_at = response.created_at;
                resolve();
            }, function (error) {
                _this.user.login = "Unknown User";
                _this.user.location = "Unknown Location";
                reject(error);
            });
        });
        return promise;
    };
    ProfilesService.prototype.updateProfile = function (username) {
        this.username = username;
    };
    ProfilesService.prototype.getRepos = function (username) {
        return this.http.get(this.baseUrl + 'users/' + this.username + '/repos?access_token=' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiToken);
    };
    ProfilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfilesService);
    return ProfilesService;
}());



/***/ }),

/***/ "./src/app/underline.directive.ts":
/*!****************************************!*\
  !*** ./src/app/underline.directive.ts ***!
  \****************************************/
/*! exports provided: UnderlineDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderlineDirective", function() { return UnderlineDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnderlineDirective = /** @class */ (function () {
    function UnderlineDirective(elem) {
        this.elem = elem;
        this.elem.nativeElement.style.textDecoration = 'underline';
    }
    UnderlineDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appUnderline]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], UnderlineDirective);
    return UnderlineDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiToken: "56ddd9d55f705d4fd5d866c140af4a1c335a3107"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jackline/Documents/Angular/Github/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map