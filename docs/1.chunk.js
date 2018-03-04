webpackJsonp([1],{

/***/ "./src/app/publications/publications-list/publications-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-multiline\">\n  <div class=\"column is-6\" *ngFor=\"let publication of publications\">\n    <div class=\"card is-full-height\">\n      <div class=\"card-image\">\n        <a [href]=\"publication.url\" target=\"blank\" rel=\"noopener noreferrer\">\n          <img [srcset]=\"publication.source_set | picSrcSet\" [alt]=\"publication.name\">\n        </a>\n      </div>\n      <div class=\"card-content\">\n        <a [href]=\"publication.url\" target=\"blank\" rel=\"noopener noreferrer\">\n          <h3 class=\"title is-5 has-margin-bottom\">{{publication.name}}</h3>\n        </a>\n        <p class=\"\">{{publication.description}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/publications/publications-list/publications-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".is-full-height {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/publications/publications-list/publications-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__publications_service__ = __webpack_require__("./src/app/publications/publications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicationsListComponent = /** @class */ (function () {
    function PublicationsListComponent(publicationsService) {
        this.publicationsService = publicationsService;
    }
    PublicationsListComponent.prototype.ngOnInit = function () {
        this.getPublications();
    };
    PublicationsListComponent.prototype.getPublications = function () {
        var _this = this;
        this.publicationsService.getPublications().subscribe(function (publications) {
            _this.publications = publications;
        });
    };
    PublicationsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lmp-publications-list',
            template: __webpack_require__("./src/app/publications/publications-list/publications-list.component.html"),
            styles: [__webpack_require__("./src/app/publications/publications-list/publications-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__publications_service__["a" /* PublicationsService */]])
    ], PublicationsListComponent);
    return PublicationsListComponent;
}());



/***/ }),

/***/ "./src/app/publications/publications-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publications_list_publications_list_component__ = __webpack_require__("./src/app/publications/publications-list/publications-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__publications_list_publications_list_component__["a" /* PublicationsListComponent */]
    }
];
var PublicationsRoutingModule = /** @class */ (function () {
    function PublicationsRoutingModule() {
    }
    PublicationsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], PublicationsRoutingModule);
    return PublicationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/publications/publications.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsModule", function() { return PublicationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publications_routing_module__ = __webpack_require__("./src/app/publications/publications-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publications_list_publications_list_component__ = __webpack_require__("./src/app/publications/publications-list/publications-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publications_service__ = __webpack_require__("./src/app/publications/publications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils_module__ = __webpack_require__("./src/app/utils/utils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PublicationsModule = /** @class */ (function () {
    function PublicationsModule() {
    }
    PublicationsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__publications_routing_module__["a" /* PublicationsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__utils_utils_module__["a" /* UtilsModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__publications_list_publications_list_component__["a" /* PublicationsListComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__publications_service__["a" /* PublicationsService */]],
        })
    ], PublicationsModule);
    return PublicationsModule;
}());



/***/ }),

/***/ "./src/app/publications/publications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicationsService = /** @class */ (function () {
    function PublicationsService(http) {
        this.http = http;
    }
    PublicationsService.prototype.getPublications = function () {
        var _this = this;
        return this.http.get("assets/publications/publications.json").pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            _this.publications = response.publications.map(function (project) {
                return project;
            });
            return _this.publications;
        }));
    };
    PublicationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PublicationsService);
    return PublicationsService;
}());



/***/ })

});
//# sourceMappingURL=1.chunk.js.map