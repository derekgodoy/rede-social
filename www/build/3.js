webpackJsonp([3],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function() { return CategoriasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorias__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoriasPageModule = /** @class */ (function () {
    function CategoriasPageModule() {
    }
    CategoriasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categorias__["a" /* CategoriasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categorias__["a" /* CategoriasPage */]),
            ],
        })
    ], CategoriasPageModule);
    return CategoriasPageModule;
}());

//# sourceMappingURL=categorias.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriasPage = /** @class */ (function () {
    function CategoriasPage(navCtrl, navParams, postService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postService = postService;
        this.posts = [];
        this.postService.getPosts()
            .subscribe(function (response) {
            console.log(response);
            _this.posts = response;
        });
    }
    CategoriasPage.prototype.detalheNoticia = function (id) {
        this.navCtrl.push('PostPage', { 'id': id });
    };
    CategoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categorias',template:/*ion-inline-start:"c:\rede-social\src\pages\categorias\categorias.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Página Inicial</ion-title>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let n of posts">\n\n    <ion-item >\n      <ion-avatar item-start>\n        <img src="{{n.foto}}">\n      </ion-avatar>\n      <h2>{{n.name}}</h2>\n    </ion-item>\n    <h3 text-center>{{n.titulo}}</h3>\n    <img src="{{n.image}}">\n  \n    <ion-card-content>\n      \n      <p>{{n.texto}}</p>\n    </ion-card-content>\n  \n    <ion-row>\n       <ion-col text-center>\n        <button ion-button icon-start clear small>\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>Likes</div>\n        </button>\n      </ion-col>\n       <ion-col text-center>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>Comments</div>\n        </button>\n      </ion-col>\n       <ion-col text-center>\n        <button ion-button icon-start clear small>\n          <ion-icon name="md-share-alt"></ion-icon>\n          <div>Share</div>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n          <ion-list>\n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png">\n                </ion-avatar>\n                <ion-input type="text" placeholder="Digite seu comentário"></ion-input>\n              </ion-item>\n          </ion-list>\n      </ion-col>\n    </ion-row>  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"c:\rede-social\src\pages\categorias\categorias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostsService */]])
    ], CategoriasPage);
    return CategoriasPage;
}());

//# sourceMappingURL=categorias.js.map

/***/ })

});
//# sourceMappingURL=3.js.map