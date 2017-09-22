webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__updatecontact_details_form_component__ = __webpack_require__("../../../../../src/app/updatecontact/details-form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ROUTES = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'details/:id', component: __WEBPACK_IMPORTED_MODULE_2__details_details_component__["a" /* DetailsComponent */] },
    { path: 'update/:id', component: __WEBPACK_IMPORTED_MODULE_4__updatecontact_details_form_component__["a" /* UpdateDetailsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(ROUTES, { initialNavigation: false })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-nav{\r\n  background-color: #6a6e8e;\r\n  border-radius: 0px;\r\n  font-size: 120%;\r\n  color: #fffaf0;\r\n  position: relative;\r\n}\r\n\r\n.nav-link{\r\n  border-bottom: #eae8f3;\r\n}\r\n\r\n.custom-top-nav{\r\n  padding-bottom: 6px;\r\n}\r\n\r\n.custom-footer{\r\n  height: 15px;\r\n  background: #6a6e8e;\r\n  font-size: x-small;\r\n  text-align: center;\r\n  color: #fffaf0;\r\n}\r\n\r\n.custom-download{\r\n  position: absolute;\r\n  top: 20%;\r\n  right: 140px;\r\n  font-size: 165%;\r\n}\r\n\r\n.custom-sync{\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 100px;\r\n  font-size: 160%;\r\n}\r\n\r\n.custom-back{\r\n  position: absolute;\r\n  top: 2px;\r\n  right: 5px;\r\n  font-size: 230%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-top\">\n  <nav class=\"navbar navbar-toggleable-md navbar-light custom-nav custom-top-nav\">\n    <span>\n      <ng-container *ngIf=\"showSync\">\n        <i class=\"material-icons custom-sync\" (click)=\"syncContacts()\">sync</i>\n        <ng-container *ngIf=\"showDownload\">\n          <i class=\"material-icons custom-download\" (click)=\"downloadFile()\">file_download</i>\n        </ng-container>\n        <i class=\"material-icons\" style=\"position: absolute; top: 10px; right: 50px; font-size: 160%;\" (click)=\"selectLanguage()\">g_translate</i>\n      </ng-container>\n      <i class=\"material-icons custom-back\" (click)=\"goBack()\">navigate_before</i>\n    </span>\n    <a class=\"navbar-brand custom-nav mr-auto\" translate>title</a>\n  </nav>\n</div>\n<div class=\"fixed-bottom\">\n  <div class=\"custom-gap\"></div>\n  <div class=\"custom-footer\">\n    <p>\n      <span translate>title</span>\n      <span> v2.0.4 | </span>\n      <span translate>copyright</span>\n      <span> <i class=\"material-icons\" style=\"font-size: small; margin-bottom: 0\">copyright</i> 2017 PROCIT. </span>\n      <span translate> footerText. </span>\n    </p>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contacts_service__ = __webpack_require__("../../../../../src/app/services/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main__ = __webpack_require__("../../../../../src/main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = (function () {
    function AppComponent(contactsService, location, router, zone, translate, baseHref) {
        this.contactsService = contactsService;
        this.location = location;
        this.router = router;
        this.zone = zone;
        this.translate = translate;
        this.baseHref = baseHref;
        this.contactList = [];
        this.showSync = true;
        this.language = 'en';
        this.translate.setDefaultLang('en');
        window['angularComponentRef'] = { component: this, zone: this.zone };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/Home']);
        if (!(JSON.parse(localStorage.getItem('contacts'))) || !(JSON.parse(localStorage.getItem('userRole')))) {
            this.loadData();
        }
        else {
            if (JSON.parse(localStorage.getItem('userRole')) === 'owner' || JSON.parse(localStorage.getItem('userRole')) === 'writer') {
                this.showDownload = true;
            }
            else {
                this.showDownload = false;
            }
            this.router.navigate(['/Home']);
        }
    };
    AppComponent.prototype.loadData = function () {
        var _this = this;
        this.contactsService.getAll().then(function (response) { return _this.onSuccess(response); }, function (error) { return _this.onError(error); });
    };
    AppComponent.prototype.onSuccess = function (res) {
        this.responseContacts = res;
        if (!(res.status === 'error')) {
            if (this.responseContacts.driveDetails.fileContent.contacts) {
                localStorage.clear();
                this.contactList = this.responseContacts.driveDetails.fileContent.contacts;
                this.userRole = this.responseContacts.driveDetails.userRole;
                localStorage.setItem('contacts', JSON.stringify(this.contactList));
                localStorage.setItem('userRole', JSON.stringify(this.userRole));
            }
            else {
                swal({
                    title: 'Error',
                    text: res.message,
                    showCancelButton: false,
                    confirmButtonColor: '#a7a7a7'
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__main__["hideLoader"])();
            }
        }
        else {
            swal({
                title: 'Error',
                text: res.message,
                showCancelButton: false,
                confirmButtonColor: '#a7a7a7'
            });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__main__["hideLoader"])();
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__main__["refresh"])();
    };
    AppComponent.prototype.onError = function (err) {
        swal({
            title: 'Error',
            text: err.message,
            showCancelButton: false,
            confirmButtonColor: '#a7a7a7'
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__main__["hideLoader"])();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__main__["refresh"])();
    };
    AppComponent.prototype.downloadFile = function () {
        var _this = this;
        this.contactsService.dumpContacts().then(function (response) { return _this.onSuccessFileWrite(); }, function (error) { return _this.onErrorFileWrite(error); });
    };
    AppComponent.prototype.goBack = function () {
        if (this.location.path(false) === this.baseHref || this.location.path(false) === '/Home') {
            var that = this;
            swal({
                title: 'Exit',
                text: 'Do you want to exit from application?',
                showCancelButton: true,
                confirmButtonColor: '#a7a7a7',
                cancelButtonColor: '#a7a7a7',
                cancelButtonText: 'No',
                confirmButtonText: 'Yes',
            }).then(function () {
                addressBookSync.exit();
            }, function () {
            });
        }
        else {
            this.location.back();
        }
    };
    AppComponent.prototype.syncContacts = function () {
        var that = this;
        swal({
            title: 'Sync',
            text: 'Do you want to sync data from server?',
            showCancelButton: true,
            confirmButtonColor: '#a7a7a7',
            cancelButtonColor: '#a7a7a7',
            cancelButtonText: 'No',
            confirmButtonText: 'Yes'
        }).then(function () {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__main__["showLoader"])();
            that.loadData();
        }, function () {
        });
    };
    AppComponent.prototype.onSuccessFileWrite = function () {
        swal({
            title: 'Success',
            text: 'Contacts successfully exported to device.',
            confirmButtonColor: '#a7a7a7',
        });
    };
    AppComponent.prototype.onErrorFileWrite = function (err) {
        swal({
            title: 'Error',
            text: err.message,
            confirmButtonColor: '#a7a7a7',
        });
    };
    AppComponent.prototype.selectLanguage = function () {
        var that = this;
        swal({
            title: 'Select Language',
            input: 'radio',
            inputOptions: { 'en': 'English', 'du': 'Dutch' },
            inputValue: that.language,
            inputValidator: function (result) {
                return new Promise(function (resolve, reject) {
                    if (result) {
                        resolve();
                    }
                    else {
                        reject('You need to select something!');
                    }
                });
            },
            showCancelButton: true,
            confirmButtonColor: '#a7a7a7',
            cancelButtonColor: '#a7a7a7',
            cancelButtonText: 'Not now',
            confirmButtonText: 'Ok'
        }).then(function (value) {
            that.language = value;
            that.switchLanguage();
        }, function () {
        });
    };
    AppComponent.prototype.switchLanguage = function () {
        this.translate.use(this.language);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __param(5, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* APP_BASE_HREF */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_contacts_service__["a" /* ContactsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_contacts_service__["a" /* ContactsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]) === "function" && _e || Object, String])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_contacts_service__ = __webpack_require__("../../../../../src/app/services/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__updatecontact_details_form_component__ = __webpack_require__("../../../../../src/app/updatecontact/details-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function HttpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, 'assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__details_details_component__["a" /* DetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__updatecontact_details_form_component__["a" /* UpdateDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClient */]]
                }
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_contacts_service__["a" /* ContactsService */],
            { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["a" /* APP_BASE_HREF */], useValue: '' },
            { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_10__angular_common__["c" /* HashLocationStrategy */] }
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-img-cap{\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n  padding-top: 20px;\r\n  height: 170px;\r\n  width: 150px;\r\n}\r\n\r\n.custom-card{\r\n  margin: 0 15px 5px 15px;\r\n  padding: 10px 5px;\r\n  background-color: #babcce;\r\n  width: 95%;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n  font-size: 15px;\r\n}\r\n\r\n.custom-card-block{\r\n  padding: 5px;\r\n}\r\n\r\n.custom-button{\r\n  background-color: #6a6e8e;\r\n  border: #6a6e8e;\r\n  color: #fff;\r\n}\r\n\r\n.custom-position{\r\n  position: relative;\r\n  margin: 10px auto;\r\n}\r\n\r\n.custom-action-position{\r\n  position: absolute;\r\n  top:-1px;\r\n  right: 1px;\r\n}\r\n\r\n.custom-phone-position{\r\n  position: absolute;\r\n  top:-1px;\r\n  right: 18%;\r\n}\r\n\r\n.card-block > div {\r\n  margin: 10px auto;\r\n}\r\n\r\n.card-text{\r\n  font-size: medium;\r\n  font-weight: 100;\r\n}\r\n\r\n.material-icons{\r\n  font-size: 200%;\r\n  color: #6a6e8e;\r\n}\r\n\r\n.custom-edit{\r\n  position: fixed;\r\n  top: 9px;\r\n  right: 60px;\r\n  z-index: 1031;\r\n  color: #fffaf0;\r\n  font-size: 190%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-details\">\r\n  <ng-container *ngIf=\"showEdit\">\r\n    <i class=\"material-icons custom-edit\" [routerLink]=\"['/update',contact.id]\">edit</i>\r\n  </ng-container>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 card text-center custom-card\">\r\n      <img class=\"card-img-top custom-img-cap\" [src]=\"sanitize('data:image/png;base64,' + contact.image)\" alt=\"Card image cap\">\r\n      <div class=\"card-block\">\r\n        <p style=\"font-weight: 500; font-size: 130%\">{{contact.firstName}} {{contact.middleName}} {{contact.lastName}}</p>\r\n        <p class=\"card-text\">\r\n          {{contact.address}}, {{contact.country}}<br/>\r\n          {{contact.projectGroup}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12 card custom-card\">\r\n      <h5 translate>contactDetails</h5>\r\n      <div class=\"card-block custom-card-block\">\r\n        <ng-container *ngIf=\"contact.officialEmail\">\r\n          <div style=\"font-weight: 500\" translate>\r\n            officialEmail\r\n          </div>\r\n          <div class=\"card-text\" class=\"custom-position\">\r\n            {{contact.officialEmail}}\r\n            <span class=\"custom-action-position\">\r\n              <a [href]=\"sanitize('mailto:'+contact.officialEmail)\"><i class=\"material-icons\">email</i></a>\r\n            </span>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"contact.personalEmail\">\r\n          <div style=\"font-weight: 500\" translate>\r\n            personalEmail\r\n          </div>\r\n          <div class=\"card-text custom-position\">\r\n            {{contact.personalEmail}}\r\n            <span class=\"custom-action-position\">\r\n              <a [href]=\"sanitize('mailto:'+contact.personalEmail)\"><i class=\"material-icons\">email</i></a>\r\n            </span>\r\n          </div>\r\n        </ng-container>\r\n        <div style=\"font-weight: 500\" translate>contactNumber</div>\r\n        <ng-container *ngIf=\"contact.mobilePhoneA\">\r\n          <div class=\"card-text custom-position\">\r\n            {{contact.mobilePhoneA}}\r\n            <span class=\"custom-action-position\">\r\n              <a [href]=\"sanitize('sms:'+contact.mobilePhoneA)\"><i class=\"material-icons\" style=\"margin-right: 10px\">sms</i></a>\r\n              <a [href]=\"sanitize('tel:'+contact.mobilePhoneA)\"><i class=\"material-icons\">phone_in_talk</i></a>\r\n            </span>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container class=\"card-text custom-position\" *ngIf=\"contact.mobilePhoneB\">\r\n          <div class=\"card-text custom-position\">\r\n            {{contact.mobilePhoneB}}\r\n            <span class=\"custom-action-position\">\r\n              <a [href]=\"sanitize('sms:'+contact.mobilePhoneB)\"><i class=\"material-icons\" style=\"margin-right: 10px\">sms</i></a>\r\n              <a [href]=\"sanitize('tel:'+contact.mobilePhoneB)\"><i class=\"material-icons\">phone_in_talk</i></a>\r\n            </span>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"contact.homePhoneA\">\r\n          <div class=\"card-text custom-position\">\r\n            {{contact.homePhoneA}}\r\n            <span class=\"custom-action-position\">\r\n              <a [href]=\"sanitize('tel:'+contact.homePhoneA)\"><i class=\"material-icons\">phone_in_talk</i></a>\r\n            </span>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"contact.homePhoneB\">\r\n          <div class=\"card-text custom-position\">\r\n            {{contact.homePhoneB}}\r\n            <span class=\"custom-action-position\">\r\n              <a [href]=\"sanitize('tel:'+contact.homePhoneB)\"><i class=\"material-icons\">phone_in_talk</i></a>\r\n            </span>\r\n          </div>\r\n        </ng-container>\r\n        <div style=\"font-weight: 500\" translate>emergencyContact</div>\r\n        <ng-container *ngIf=\"contact.emergencyPhoneA\">\r\n          <div class=\"card-text custom-position\">\r\n            {{contact.emergencyPhoneA}}\r\n            <span class=\"custom-action-position\">\r\n              <a [href]=\"sanitize('sms:'+contact.emergencyPhoneA)\"><i class=\"material-icons\" style=\"margin-right: 10px\">sms</i></a>\r\n              <a [href]=\"sanitize('tel:'+contact.emergencyPhoneA)\"><i class=\"material-icons\">phone_in_talk</i></a>\r\n            </span>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"contact.emergencyPhoneB\">\r\n          <div class=\"card-text custom-position\">\r\n            {{contact.emergencyPhoneB}}\r\n            <span class=\"custom-action-position\">\r\n              <a [href]=\"sanitize('sms:'+contact.emergencyPhoneB)\"><i class=\"material-icons\" style=\"margin-right: 10px\">sms</i></a>\r\n              <a [href]=\"sanitize('tel:'+contact.emergencyPhoneB)\"><i class=\"material-icons\">phone_in_talk</i></a>\r\n            </span>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-12 card custom-card\">\r\n      <h5 translate>otherDetails</h5>\r\n      <div class=\"card-block custom-card-block\">\r\n        <p class=\"card-text\">\r\n          <span translate>bg</span>: {{contact.bloodGroup}}\r\n          <br/>\r\n          <span translate>dob</span>: {{contact.birthDay}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsComponent = (function () {
    function DetailsComponent(route, appComponent, sanitizer) {
        this.route = route;
        this.appComponent = appComponent;
        this.sanitizer = sanitizer;
        this.contactList = [];
        this.appComponent.showSync = false;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = (params['id']);
        });
        this.loadData();
    };
    DetailsComponent.prototype.loadData = function () {
        this.contactList = JSON.parse(localStorage.getItem('contacts'));
        this.userRole = JSON.parse(localStorage.getItem('userRole'));
        this.onSuccess();
    };
    DetailsComponent.prototype.onSuccess = function () {
        if (this.userRole === "owner" || this.userRole === "writer") {
            this.showEdit = true;
        }
        else {
            this.showEdit = false;
        }
        var contactId = this.id;
        this.contact = this.contactList.filter(function (tag) {
            return tag.id == contactId;
        })["0"];
    };
    DetailsComponent.prototype.sanitize = function (url) {
        //return this.sanitizer.bypassSecurityTrustHtml(url);
        console.log('reached here ' + url);
        return this.sanitizer.bypassSecurityTrustUrl(url);
        //return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'contact-details',
        template: __webpack_require__("../../../../../src/app/details/details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/details/details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["e" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["e" /* DomSanitizer */]) === "function" && _c || Object])
], DetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*nav tabs and search bar*/\r\nform > div{\r\n  position: relative;\r\n  width: 95%;\r\n  height: 50px;\r\n  margin: auto;\r\n}\r\n\r\n.custom-search{\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  opacity: 0.50;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 28px;\r\n}\r\n\r\n.custom-tab{\r\n  height: 40px;\r\n}\r\n\r\n.custom-nav{\r\n  background-color: #6a6e8e;\r\n  border-radius: 0;\r\n  font-size: small;\r\n  color: floralwhite;\r\n}\r\n\r\n.nav-link{\r\n  border: none;\r\n}\r\n\r\n.custom-icon > div > ul > li > a > img{\r\n  height: 25px;\r\n  padding-right: 3px;\r\n}\r\n\r\n.custom-active-bg > div > ul > li > a.active {\r\n  background-color: #eae8f3;\r\n  color:black;\r\n  font-size: medium;\r\n}\r\n\r\n.custom-active-bg > div > ul > li > a {\r\n  color:floralwhite;\r\n  font-size: small;\r\n}\r\n\r\na {\r\n  height: 40px;\r\n}\r\n\r\n.nav-tabs .nav-link{\r\n  padding: 10px;\r\n}\r\n\r\na.active{\r\n  padding: 10px;\r\n}\r\n\r\n.custom-nav > div > ul > li {\r\n  width: 33.33%;\r\n}\r\n\r\n.custom-input{\r\n  color: #fffaf0;\r\n  border-radius: 0;\r\n}\r\ninput::-webkit-input-placeholder{\r\n  color: #fffaf0;\r\n}\r\n\r\n/*contact list*/\r\n.custom-home {\r\n  margin: 160px auto 30px auto;\r\n  position: absolute;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  height: 70%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.custom-text{\r\n  font-size: larger;\r\n  text-align: center;\r\n  margin-bottom: -20px;\r\n}\r\n\r\n.custom-card{\r\n  background-color: #babcce;\r\n  padding: 10px 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*.custom-card:hover{*/\r\n  /*cursor: pointer;*/\r\n  /*background-color: #6a6e8e;*/\r\n/*}*/\r\n\r\n.custom-card:focus{\r\n  outline: none;\r\n}\r\n\r\n.custom-img{\r\n  margin: auto 5px auto 10px;\r\n  width: 20%;\r\n  height: 20%;\r\n}\r\n\r\n.custom-card-text{\r\n  font-size: 90%;\r\n  max-width: 70%;\r\n}\r\n\r\n/*loader*/\r\n.custom-loader{\r\n  position: relative;\r\n  margin-top: 90%;\r\n  height: 65px;\r\n  left:40%;\r\n}\r\n\r\n/*no contacts*/\r\n.custom-no-contacts{\r\n  position: fixed;\r\n  top: 30%;\r\n  height: 30%;\r\n  width: 100%;\r\n}\r\n\r\n.no-result {\r\n  -webkit-transform: scale(0.25);\r\n          transform: scale(0.25);\r\n  position: absolute;\r\n  top: -120%;\r\n}\r\n\r\n.no-result p {\r\n  padding: 10% 0;\r\n  text-align: center;\r\n  font-size: 3em;\r\n  letter-spacing: 1px;\r\n  font-weight: 500;\r\n}\r\n\r\n.no-result .no-result-face {\r\n  height: 20em;\r\n  width: 20em;\r\n  display: block;\r\n  margin: 50px auto;\r\n  border-radius: 40px;\r\n  border: 1em solid #454545;\r\n  position: relative;\r\n}\r\n\r\n.no-result .no-result-face .no-result-eyes {\r\n  display: block;\r\n  height: 3em;\r\n  width: 3em;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  background: #454545;\r\n  top: 5em;\r\n  left: 4em;\r\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.no-result .no-result-face .no-result-eyes:nth-of-type(2) {\r\n  display: block;\r\n  left: 11em;\r\n}\r\n\r\n.no-result .no-result-face .no-result-mouth {\r\n  background: #454545;\r\n  position: absolute;\r\n  top: 12em;\r\n  left: 6em;\r\n  height: 1.3em;\r\n  width: 6em;\r\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);\r\n  -webkit-transform: matrix(1, 0.14, 0, 1, 0, 0);\r\n          transform: matrix(1, 0.14, 0, 1, 0, 0);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"custom-nav custom-active-bg custom-icon fixed-top custom-component-margin\">\r\n  <form class=\"form-inline my-2 my-lg-0\" #serachForm=\"ngForm\">\r\n    <div class=\"row\">\r\n      <input class=\"custom-input form-control mr-sm-2 col-sm-12 col-md-3 pull-md-right\" type=\"search\"\r\n             id=\"searchTerm\" name=\"searchTerm\" (keyup)=\"search()\" (keyup.enter)=\"search()\" (keydown.enter)=\"search()\"\r\n             [(ngModel)]=\"searchTerm\" placeholder=\"{{'searchPlaceHolder' | translate}}\">\r\n      <a><i class=\"material-icons custom-search\" (click)=\"search()\">search</i></a>\r\n    </div>\r\n  </form>\r\n  <div class=\"custom-tab\">\r\n    <ul class=\"nav nav-tabs text-sm-center\" role=\"tablist\" id=\"navList\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" (click)=\"setCountry('Nepal')\" role=\"tab\" data-toggle=\"tab\">\r\n          <img src=\"./assets/images/Flag-Nepal-flat.ico\">Nepal\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"setCountry('India')\" role=\"tab\" data-toggle=\"tab\" routerLinkActive=\"active\">\r\n          <img src=\"./assets/images/India-Flag.ico\">India\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"setCountry('Netherlands')\" role=\"tab\" data-toggle=\"tab\" routerLinkActive=\"active\">\r\n          <img src=\"./assets/images/Netherlands-Flag.ico\">\r\n          Ned\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"custom-gap\"></div>\r\n</nav>\r\n<img class=\"custom-loader\" src=\"./assets/images/loader.gif\" [hidden]=\"!showLoader\">\r\n<div id=\"displayDiv\" class=\"container-fluid default-bg custom-home\" [hidden]=\"showLoader\">\r\n  <div class=\"row\" [hidden]=\"!showContacts\">\r\n    <ng-container *ngFor=\"let contact of filteredContacts\">\r\n      <div class=\"col-xs-12 col-sm-12 col-md-6\">\r\n        <div class=\"card custom-card col-sm-12 col-xs-12\" [routerLink]=\"['/details',contact.id]\">\r\n          <div class=\"row\">\r\n            <img class=\"custom-img\" [src]=\"sanitize('data:image/png;base64,' + contact.image)\" alt=\"Photo\"/>\r\n            <p class=\"card-text custom-card-text\">\r\n              {{contact.firstName}} {{contact.middleName}} {{contact.lastName}}\r\n              <br/>\r\n              {{contact.address}}, {{contact.country}}\r\n              <br/>\r\n              {{contact.officialEmail}}\r\n              <br/>\r\n              {{contact.mobilePhoneA}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"row custom-no-contacts\" [hidden]=\"showContacts\">\r\n    <div class=\"no-result\">\r\n      <span class=\"no-result-face\">\r\n        <span class=\"no-result-eyes\"></span>\r\n        <span class=\"no-result-eyes\"></span>\r\n        <span class=\"no-result-mouth\"></span>\r\n      </span>\r\n      <p translate>noContacts</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(appComponent, zone, sanitizer) {
        this.appComponent = appComponent;
        this.zone = zone;
        this.sanitizer = sanitizer;
        this.contactList = [];
        this.filteredContacts = [];
        this.countryContacts = [];
        this.country = 'Nepal';
        this.showNav = true;
        this.showLoader = true;
        this.showContacts = true;
        window['HomeComponentRef'] = { component: this, zone: this.zone };
        this.appComponent.showSync = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.contactList = JSON.parse(localStorage.getItem('contacts'));
        if (this.contactList === null) {
            this.showLoad();
        }
        else {
            this.showLoad();
            this.loadData();
        }
    };
    HomeComponent.prototype.loadData = function () {
        var _this = this;
        if (JSON.parse(localStorage.getItem('userRole')) === 'owner' || JSON.parse(localStorage.getItem('userRole')) === 'writer') {
            this.appComponent.showDownload = true;
        }
        else {
            this.appComponent.showDownload = false;
        }
        this.contactList = JSON.parse(localStorage.getItem('contacts'));
        if (this.contactList !== null) {
            this.filteredContacts = this.contactList.filter(function (contact) { return contact.country == _this.country; });
            this.countryContacts = this.filteredContacts;
            this.sort();
            this.hideLoad();
            if (this.filteredContacts.length === 0) {
                this.hideContact();
            }
            else {
                this.showContact();
            }
        }
        else {
            this.hideLoad();
            this.hideContact();
        }
        this.clearInput();
    };
    HomeComponent.prototype.search = function () {
        var term = this.searchTerm;
        this.filteredContacts = this.countryContacts.filter(function (tag) {
            return tag.firstName.toLowerCase().indexOf(term.toLowerCase()) >= 0;
        });
        this.sort();
        if (this.filteredContacts.length > 0) {
            this.showContact();
        }
        else {
            this.hideContact();
        }
    };
    HomeComponent.prototype.sort = function () {
        this.filteredContacts.sort(function (contact1, contact2) {
            if (contact1.firstName.toLowerCase() < contact2.firstName.toLowerCase()) {
                return -1;
            }
            else if (contact2.firstName.toLowerCase() < contact1.firstName.toLowerCase()) {
                return 1;
            }
            else {
                if (contact1.middleName.toLowerCase() < contact2.middleName.toLowerCase()) {
                    return -1;
                }
                else if (contact2.middleName.toLowerCase() < contact1.middleName.toLowerCase()) {
                    return 1;
                }
                else {
                    if (contact1.lastName.toLowerCase() < contact2.lastName.toLowerCase()) {
                        return -1;
                    }
                    else if (contact2.lastName.toLowerCase() < contact1.lastName.toLowerCase()) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            }
        });
        this.hideLoad();
    };
    HomeComponent.prototype.setCountry = function (country) {
        this.country = country;
        this.loadData();
        var display = document.getElementById('displayDiv');
        display.scrollTop = 0;
    };
    HomeComponent.prototype.showLoad = function () {
        this.showLoader = true;
    };
    HomeComponent.prototype.hideLoad = function () {
        this.showLoader = false;
    };
    HomeComponent.prototype.showContact = function () {
        this.showContacts = true;
    };
    HomeComponent.prototype.hideContact = function () {
        this.showContacts = false;
    };
    HomeComponent.prototype.clearInput = function () {
        this.searchTerm = '';
        document.getElementById('searchTerm').blur();
    };
    HomeComponent.prototype.sanitize = function (url) {
        //return this.sanitizer.bypassSecurityTrustHtml(url);
        console.log('reached the home component');
        return this.sanitizer.bypassSecurityTrustUrl(url);
        //return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* DomSanitizer */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/contact.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(id, firstName, middleName, lastName, address, country, projectGroup, officialEmail, personalEmail, mobilePhoneA, mobilePhoneB, homePhoneA, homePhoneB, emergencyPhoneA, emergencyPhoneB, bloodGroup, birthDay, image, dateCreated, dateModified, dateDeleted) {
        this.id = id ? id : null;
        this.firstName = firstName ? firstName : null;
        this.middleName = middleName ? middleName : null;
        this.lastName = lastName ? lastName : null;
        this.address = address ? address : null;
        this.country = country ? country : null;
        this.projectGroup = projectGroup ? projectGroup : null;
        this.officialEmail = officialEmail ? officialEmail : null;
        this.personalEmail = personalEmail ? personalEmail : null;
        this.mobilePhoneA = mobilePhoneA ? mobilePhoneA : null;
        this.mobilePhoneB = mobilePhoneB ? mobilePhoneB : null;
        this.homePhoneA = homePhoneA ? homePhoneA : null;
        this.homePhoneB = homePhoneB ? homePhoneB : null;
        this.emergencyPhoneA = emergencyPhoneA ? emergencyPhoneA : null;
        this.emergencyPhoneB = emergencyPhoneB ? emergencyPhoneB : null;
        this.bloodGroup = bloodGroup ? bloodGroup : null;
        this.birthDay = birthDay ? birthDay : null;
        this.image = image ? image : null;
        this.dateCreated = dateCreated ? dateCreated : null;
        this.dateModified = dateModified ? dateModified : null;
        this.dateDeleted = dateDeleted ? dateModified : null;
    }
    return Contact;
}());

//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/contacts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsService = (function () {
    function ContactsService(http) {
        this.http = http;
    }
    ContactsService.prototype.getJSON = function (jsonFile) {
        return this.http.get(jsonFile)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return error; });
    };
    ContactsService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (response, error) {
            if (typeof addressBookSync !== 'undefined') {
                addressBookSync.sync('', function (data) {
                    response(data);
                }, function (err) {
                    error(JSON.parse(err));
                });
            }
            else {
                console.log('Local data');
                _this.getJSON('assets/data/data.json').subscribe(function (data) { return response(data); }, function (err) { return error(err); });
                // this.getJSON('assets/data/ProcitAddressBookData.json').subscribe(data => response(data), err => error(err));
            }
        });
    };
    ContactsService.prototype.captureImage = function () {
        return new Promise(function (response, error) {
            navigator.camera.getPicture(function (data) {
                response(data);
            }, function (err) {
                error(err);
            }, {
                saveToPhotoAlbum: true,
                correctOrientation: true,
                targetWidth: 100,
                targetHeight: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA
            });
        });
    };
    ContactsService.prototype.dumpContacts = function () {
        return new Promise(function (resolve, reject) {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
                console.log('file system open: ' + fs.name);
                fs.root.getFile('ProcitAddressBook.json', { create: true }, function (fileEntry) {
                    fileEntry.createWriter(function (fileWriter) {
                        fileWriter.onwriteend = function () {
                            resolve('Write completed.');
                        };
                        fileWriter.onerror = function (e) {
                            reject(e);
                        };
                        var content = JSON.parse('{"contacts":' + localStorage.getItem('contacts') + '}');
                        fileWriter.write(content);
                    }, function (error) {
                        reject(error);
                    });
                });
            }, function (fileError) {
                reject(fileError);
            });
        });
    };
    return ContactsService;
}());
ContactsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ContactsService);

var _a;
//# sourceMappingURL=contacts.service.js.map

/***/ }),

/***/ "../../../../../src/app/updatecontact/details-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-form{\r\n  margin: 0;\r\n}\r\n\r\nlabel {\r\n  font-size: 130%;\r\n  font-weight: bold;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n  font-size: 100%;\r\n}\r\n\r\n.row{\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n}\r\n\r\ninput{\r\n  margin: 10px auto;\r\n}\r\n\r\nform > div {\r\n  width: 100%;\r\n}\r\n\r\n.custom-card{\r\n  background-color: #babcce;\r\n  padding: 10px 10px;\r\n  margin: 0px auto;\r\n}\r\n\r\n.custom-save{\r\n  position: fixed;\r\n  top: 9px;\r\n  right: 60px;\r\n  z-index: 1031;\r\n  color: #fffaf0;\r\n  font-size: 235%;\r\n  font-weight: 900;\r\n}\r\n\r\n.custom-capture{\r\n  background: #6a6e8e;\r\n  border: none;\r\n  color: #fffaf0;\r\n}\r\n\r\n.custom-img-cap{\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n  width: 60%;\r\n  height: 60%;\r\n  margin: 5px auto;\r\n}\r\n\r\n.material-icons{\r\n  font-size: 200%;\r\n  margin: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/updatecontact/details-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-details\">\r\n  <div class=\"row custom-form\">\r\n    <div class=\"card custom-card\">\r\n      <form class=\"col-sm-12 col-md-12 custom-form form-inline\" #updateDetails=\"ngForm\">\r\n        <label style=\"margin-bottom: 15px\" translate>updateContact</label>\r\n        <div class=\"text-center\">\r\n          <img class=\"card-img-top custom-img-cap\" [src]=\"sanitize('data:image/png;base64,' + contact.image)\"\r\n               alt=\"Card image cap\">\r\n          <div>\r\n            <i class=\"material-icons\" (click)=\"takePicture()\">photo_camera</i>\r\n            <ng-container *ngIf=\"contact.image\"><i class=\"material-icons\" (click)=\"deletePicture()\">delete</i></ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" translate>name</label>\r\n          <div>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"{{'firstname' | translate}}\"\r\n                   [(ngModel)]=\"contact.firstName\" #firstName=\"ngModel\" required>\r\n            <input type=\"text\" class=\"form-control\" id=\"middleName\" name=\"middleName\" placeholder=\"{{'middlename' | translate}}\"\r\n                   [(ngModel)]=\"contact.middleName\" #middleName=\"ngModel\">\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"{{'lastname' | translate}}\"\r\n                   [(ngModel)]=\"contact.lastName\" #lastName=\"ngModel\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" >\r\n          <label class=\"control-label\" translate>address</label>\r\n          <div>\r\n            <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"{{'city' | translate}}\"\r\n                   [(ngModel)]=\"contact.address\" #address=\"ngModel\" required>\r\n            <input type=\"text\" class=\"form-control\" id=\"country\" name=\"country\" placeholder=\"{{'country' | translate}}\"\r\n                   [(ngModel)]=\"contact.country\" #country=\"ngModel\" required>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" >\r\n          <label class=\"control-label\" translate>projectGroup</label>\r\n          <div>\r\n            <input type=\"text\" class=\"form-control\" id=\"projectGroup\" name=\"projectGroup\" placeholder=\"{{'projectGroup' | translate}}\"\r\n                   [(ngModel)]=\"contact.projectGroup\" #projectGroup=\"ngModel\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" >\r\n          <label class=\"control-label\" translate>email</label>\r\n          <div>\r\n            <input type=\"email\" class=\"form-control\" id=\"officialEmail\" name=\"officialEmail\" placeholder=\"{{'officialEmail' | translate}}\"\r\n                   [(ngModel)]=\"contact.officialEmail\" #officialEmail=\"ngModel\" required>\r\n            <input type=\"email\" class=\"form-control\" id=\"personalEmail\" name=\"personalEmail\" placeholder=\"{{'personalEmail' | translate}}\"\r\n                   [(ngModel)]=\"contact.personalEmail\" #personalEmail=\"ngModel\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" >\r\n          <label class=\"control-label\" translate>contactNumber</label>\r\n          <div>\r\n            <input type=\"number\" class=\"form-control\" id=\"mobilePhoneA\" name=\"mobilePhoneA\" placeholder=\"{{'mobileNumber' | translate}}\"\r\n                   [(ngModel)]=\"contact.mobilePhoneA\" #mobilePhoneA=\"ngModel\" required>\r\n            <input type=\"number\" class=\"form-control\" id=\"mobilePhoneB\" name=\"mobilePhoneB\" placeholder=\"{{'mobileNumber' | translate}} ({{'ifOther' | translate}})\"\r\n                   [(ngModel)]=\"contact.mobilePhoneB\" #mobilePhoneB=\"ngModel\">\r\n            <input type=\"number\" class=\"form-control\" id=\"homePhoneA\" name=\"homePhoneA\" placeholder=\"{{'landLine' | translate}}\"\r\n                   [(ngModel)]=\"contact.homePhoneA\" #homePhoneA=\"ngModel\">\r\n            <input type=\"number\" class=\"form-control\" id=\"homePhoneB\" name=\"homePhoneB\" placeholder=\"{{'landLine' | translate}} ( {{'ifOther' | translate}})\"\r\n                   [(ngModel)]=\"contact.homePhoneB\" #homePhoneB=\"ngModel\">\r\n            <input type=\"number\" class=\"form-control\" id=\"emergencyPhoneA\" name=\"emergencyPhoneA\" placeholder=\"{{'emergencyContact' | translate}}\"\r\n                   [(ngModel)]=\"contact.emergencyPhoneA\" #emergencyPhoneA=\"ngModel\" required>\r\n            <input type=\"number\" class=\"form-control\" id=\"emergencyPhoneB\" name=\"emergencyPhoneB\" placeholder=\"{{'emergencyContact' | translate}} ( {{'ifOther' | translate}})\"\r\n                   [(ngModel)]=\"contact.emergencyPhoneB\" #emergencyPhoneB=\"ngModel\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" >\r\n          <label class=\"control-label\" translate>bg</label>\r\n          <div>\r\n            <input type=\"text\" class=\"form-control\" id=\"bloodGroup\" name=\"bloodGroup\" placeholder=\"{{'bg' | translate}}\"\r\n                   [(ngModel)]=\"contact.bloodGroup\" #bloodGroup=\"ngModel\" required>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" >\r\n          <label class=\"control-label\" translate>dob</label>\r\n          <div>\r\n            <input type=\"date\" class=\"form-control\" id=\"birthDay\" name=\"birthDay\" placeholder=\"{{'dob' | translate}}\"\r\n                   [(ngModel)]=\"contact.birthDay\" #birthDay=\"ngModel\" required>\r\n          </div>\r\n        </div>\r\n        <i class=\"material-icons custom-save\" (click)=\"onSave()\">done</i>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/updatecontact/details-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_contact_model__ = __webpack_require__("../../../../../src/app/model/contact.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_contacts_service__ = __webpack_require__("../../../../../src/app/services/contacts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateDetailsComponent = (function () {
    function UpdateDetailsComponent(location, route, contactsService, appComponent, sanitizer) {
        this.location = location;
        this.route = route;
        this.contactsService = contactsService;
        this.appComponent = appComponent;
        this.sanitizer = sanitizer;
        this.contact = new __WEBPACK_IMPORTED_MODULE_1__model_contact_model__["a" /* Contact */]();
    }
    UpdateDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = (params['id']);
        });
        this.loadData();
    };
    UpdateDetailsComponent.prototype.loadData = function () {
        this.contactList = JSON.parse(localStorage.getItem('contacts'));
        this.filter();
    };
    UpdateDetailsComponent.prototype.filter = function () {
        var contactId = this.id;
        this.contact = this.contactList.filter(function (tag) {
            return tag.id == contactId;
        })["0"];
        this.index = this.contactList.indexOf(this.contact);
    };
    UpdateDetailsComponent.prototype.onSave = function () {
        this.contactList.splice(this.index, 1, this.contact);
        localStorage.removeItem('contacts');
        localStorage.setItem('contacts', JSON.stringify(this.contactList));
        this.location.back();
    };
    UpdateDetailsComponent.prototype.takePicture = function () {
        var _this = this;
        this.contactsService.captureImage().then(function (response) { return _this.onSuccess(response); }, function (error) { return _this.onError(error); });
    };
    UpdateDetailsComponent.prototype.onSuccess = function (res) {
        this.contact.image = res;
    };
    UpdateDetailsComponent.prototype.onError = function (err) {
        swal({
            title: '',
            text: err,
            confirmButtonColor: '#a7a7a7',
        });
    };
    UpdateDetailsComponent.prototype.deletePicture = function () {
        var that = this;
        swal({
            title: 'Remove',
            text: "Are you sure you want to remove the picture?",
            showCancelButton: true,
            cancelButtonText: 'No',
            confirmButtonText: 'Yes',
            confirmButtonColor: '#a7a7a7',
            cancelButtonColor: '#a7a7a7'
        }).then(function () {
            that.contact.image = "";
        }, function () {
        });
    };
    UpdateDetailsComponent.prototype.sanitize = function (url) {
        //return this.sanitizer.bypassSecurityTrustHtml(url);
        console.log('reached here ' + url);
        return this.sanitizer.bypassSecurityTrustUrl(url);
        //return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    return UpdateDetailsComponent;
}());
UpdateDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* Component */])({
        selector: 'update-details',
        template: __webpack_require__("../../../../../src/app/updatecontact/details-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/updatecontact/details-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["i" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["i" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_contacts_service__["a" /* ContactsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_contacts_service__["a" /* ContactsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["e" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["e" /* DomSanitizer */]) === "function" && _e || Object])
], UpdateDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=details-form.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony export (immutable) */ __webpack_exports__["refresh"] = refresh;
/* harmony export (immutable) */ __webpack_exports__["showLoader"] = showLoader;
/* harmony export (immutable) */ __webpack_exports__["hideLoader"] = hideLoader;




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
if (window['cordova']) {
    console.log('Running with cordova');
    document.addEventListener('deviceready', function () {
        bootstrap();
    }, false);
    document.addEventListener('backbutton', function () {
        window['angularComponentRef'].zone.run(function () {
            window['angularComponentRef'].component.goBack();
        });
    }, false);
}
else {
    bootstrap();
}
function bootstrap() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
}
function refresh() {
    window['HomeComponentRef'].zone.run(function () {
        window['HomeComponentRef'].component.loadData();
    });
}
function showLoader() {
    window['HomeComponentRef'].zone.run(function () {
        window['HomeComponentRef'].component.showLoad();
    });
}
function hideLoader() {
    window['HomeComponentRef'].zone.run(function () {
        window['HomeComponentRef'].component.hideLoad();
    });
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map