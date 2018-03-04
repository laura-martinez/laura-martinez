webpackJsonp([0],{

/***/ "./src/app/projects/project-detail/project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\" class=\"slides-container\">\n  <ul class=\"slides\">\n    <li *ngFor=\"let picture of project.collection; let i=index\" class=\"slide\">\n      <img [srcset]=\"picture.source_set | picSrcSet\" [alt]=\"picture.name\" (click)=\"openModal(picture)\">\n    </li>\n  </ul>\n  <div class=\"caption\">\n\t  <div class=\"content has-text-centered\">\n\t\t<h3 class=\"title\">{{project.name}}</h3>\n\t\t<p class=\"subtitle quote has-text-centered\">{{project.description}}</p>\n\t  </div>\n  </div>\n\n  <div *ngIf=\"isModalVisible\" class=\"modal\" [class.is-active]=\"isModalVisible\">\n    <div class=\"modal-background\" (click)=\"closeModal()\"></div>\n    <div class=\"modal-content\">\n      <img class=\"modal-img\" [srcset]=\"modalPic.source_set | picSrcSet\" [alt]=\"modalPic.name\" />\n    </div>\n    <button class=\"modal-close is-large\" aria-label=\"close\" (click)=\"closeModal()\"></button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/project-detail/project-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal .modal-content .modal-img {\n  max-height: calc(100vh - 40px);\n  max-width: 100% !important;\n  width: auto !important;\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n.slides-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n\n.slides {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  overflow-x: auto;\n  min-width: 65vw;\n  height: 70%;\n  border: none;\n  margin: 0;\n  padding: 0; }\n  @media screen and (max-width: 1023px) {\n    .slides {\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      width: 100%;\n      overflow: hidden; } }\n  .slides .slide {\n    cursor: pointer;\n    -ms-flex: 0 0 auto;\n        flex: 0 0 auto;\n    padding: 0.3rem;\n    height: 100%;\n    transition: opacity 0.5s ease-in-out;\n    opacity: 0.7; }\n    @media screen and (max-width: 1023px) {\n      .slides .slide {\n        opacity: 1;\n        width: 100%;\n        height: auto; } }\n    .slides .slide:hover {\n      opacity: 1; }\n    .slides .slide img {\n      -o-object-fit: cover;\n         object-fit: cover;\n      -o-object-position: center center;\n         object-position: center center;\n      height: 100%;\n      width: auto; }\n      @media screen and (max-width: 1023px) {\n        .slides .slide img {\n          width: 100%;\n          height: auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/projects/project-detail/project-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_service__ = __webpack_require__("./src/app/projects/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(route, projectsService) {
        this.route = route;
        this.projectsService = projectsService;
        this.currentPic = null;
        this.modalPic = null;
        this.isModalVisible = false;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.setRouteSubcription();
    };
    ProjectDetailComponent.prototype.openModal = function (picture) {
        this.modalPic = picture;
        this.isModalVisible = true;
    };
    ProjectDetailComponent.prototype.closeModal = function () {
        this.isModalVisible = false;
    };
    ProjectDetailComponent.prototype.setCurrentPic = function (index) {
        this.currentPic = index;
    };
    ProjectDetailComponent.prototype.setRouteSubcription = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* switchMap */])(function (params) {
            var id = params.get('id');
            _this.getProject(id);
            return id;
        })).subscribe(function () {
            _this.setCurrentPic(0);
        });
    };
    ProjectDetailComponent.prototype.getProject = function (id) {
        var _this = this;
        this.projectsService.getProject(id).subscribe(function (project) {
            _this.project = project;
        });
    };
    ProjectDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lmp-project-detail',
            template: __webpack_require__("./src/app/projects/project-detail/project-detail.component.html"),
            styles: [__webpack_require__("./src/app/projects/project-detail/project-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__projects_service__["a" /* ProjectsService */]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/projects/project-list/project-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n\t<div class=\"columns is-variable is-1 is-multiline\">\n\t\t<div class=\"column is-4\" *ngFor=\"let project of projects; trackBy: trackById\">\n\t\t\t<a [routerLink]=\"['/projects', 'detail', project.id]\">\n\t\t\t\t<div class=\"item\">\n\t\t\t\t\t<img [src]=\"project.cover\" [alt]=\"project.name\">\n\t\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t\t<h3 class=\"text title is-3 has-text-centered has-text-light\">{{project.name}}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/project-list/project-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item {\n  position: relative;\n  overflow: hidden; }\n  .item .overlay {\n    content: '';\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; }\n    @media screen and (max-width: 1023px) {\n      .item .overlay {\n        opacity: 1;\n        background-color: rgba(81, 81, 81, 0.5); } }\n  .item img {\n    transition: transform 0.3s ease-in-out; }\n    @media screen and (max-width: 1023px) {\n      .item img {\n        transform: scale(1.2); } }\n  .item:hover .overlay {\n    opacity: 1;\n    background-color: rgba(255, 0, 0, 0.7); }\n  .item:hover img {\n    transform: scale(1.2); }\n  .item .text {\n    position: absolute;\n    padding: 1rem;\n    bottom: 1rem;\n    right: 0;\n    left: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/projects/project-list/project-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_service__ = __webpack_require__("./src/app/projects/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(route, projectsService) {
        this.route = route;
        this.projectsService = projectsService;
        this.projects = [];
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.setRouteSubcription();
    };
    ProjectListComponent.prototype.trackById = function (index, item) {
        if (this.projects && this.projects.length) {
            return this.projects[index].id;
        }
        return undefined;
    };
    ProjectListComponent.prototype.setRouteSubcription = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* switchMap */])(function (params) {
            var label = params.get('label');
            _this.getProjects(label);
            return label;
        })).subscribe(function () {
            _this.isLoaded = true;
        });
    };
    ProjectListComponent.prototype.getProjects = function (label) {
        var _this = this;
        this.projectsService.getProjects(label).subscribe(function (projects) {
            _this.projects = projects;
        });
    };
    ProjectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lmp-project-list',
            template: __webpack_require__("./src/app/projects/project-list/project-list.component.html"),
            styles: [__webpack_require__("./src/app/projects/project-list/project-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__projects_service__["a" /* ProjectsService */]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_list_project_list_component__ = __webpack_require__("./src/app/projects/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_detail_project_detail_component__ = __webpack_require__("./src/app/projects/project-detail/project-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'list/:label',
        component: __WEBPACK_IMPORTED_MODULE_2__project_list_project_list_component__["a" /* ProjectListComponent */],
    },
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
    },
    {
        path: '',
        redirectTo: '/list/all',
        pathMatch: 'full'
    },
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_routing_module__ = __webpack_require__("./src/app/projects/projects-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_list_project_list_component__ = __webpack_require__("./src/app/projects/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_detail_project_detail_component__ = __webpack_require__("./src/app/projects/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_service__ = __webpack_require__("./src/app/projects/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_utils_module__ = __webpack_require__("./src/app/utils/utils.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__projects_routing_module__["a" /* ProjectsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__utils_utils_module__["a" /* UtilsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__project_list_project_list_component__["a" /* ProjectListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__project_detail_project_detail_component__["a" /* ProjectDetailComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__projects_service__["a" /* ProjectsService */]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/projects/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsService = /** @class */ (function () {
    function ProjectsService(http) {
        this.http = http;
    }
    ProjectsService.prototype.getProject = function (id) {
        return this.getProjects().pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* map */])(function (projects) {
            return projects.find(function (project) { return project.id === id; });
        }));
    };
    ProjectsService.prototype.getProjects = function (label) {
        var _this = this;
        var observable;
        if (this.projects) {
            observable = this.projectsSubject;
        }
        else {
            observable = this.retrieveProjects();
        }
        if (label && label !== 'all') {
            return observable.pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* map */])(function (projects) {
                return _this.projects.filter(function (project) { return project.type === label; });
            }));
        }
        else {
            return observable;
        }
    };
    ProjectsService.prototype.retrieveProjects = function () {
        var _this = this;
        return this.http.get("assets/projects/projects.json").pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["a" /* map */])(function (response) {
            _this.projects = response.projects.map(function (project) {
                _this.mapProjectCover(project);
                return project;
            });
            _this.projectsSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](_this.projects);
            return _this.projects;
        }));
    };
    ProjectsService.prototype.getProjectsByType = function (projType) {
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.projects.filter(function (project) { return project.type === projType; }));
    };
    ProjectsService.prototype.mapProjectCover = function (project) {
        if (!project.collection.length) {
            return null;
        }
        var coverPicture = project.collection.reduce(function (result, picture) {
            if (!result || picture.isCover) {
                return picture;
            }
            return result;
        }, null);
        project.cover = coverPicture.source_set[0];
        return project.cover;
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ })

});
//# sourceMappingURL=0.chunk.js.map