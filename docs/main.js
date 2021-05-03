(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chrissa/sudoku-solver-ui/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sanschristo_sudoku_solver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanschristo/sudoku-solver */ "IIx/");
/* harmony import */ var _sanschristo_sudoku_solver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanschristo_sudoku_solver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sanschristo_sudoku_solver_build_dist_src_sample_games_hard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanschristo/sudoku-solver/build/dist/src/sample-games/hard */ "/MUD");
/* harmony import */ var _sanschristo_sudoku_solver_build_dist_src_sample_games_hard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanschristo_sudoku_solver_build_dist_src_sample_games_hard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sanschristo_sudoku_solver_build_dist_src_sample_games_medium__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanschristo/sudoku-solver/build/dist/src/sample-games/medium */ "iUJS");
/* harmony import */ var _sanschristo_sudoku_solver_build_dist_src_sample_games_medium__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanschristo_sudoku_solver_build_dist_src_sample_games_medium__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sanschristo_sudoku_solver_build_dist_src_sample_games_easy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanschristo/sudoku-solver/build/dist/src/sample-games/easy */ "aplA");
/* harmony import */ var _sanschristo_sudoku_solver_build_dist_src_sample_games_easy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanschristo_sudoku_solver_build_dist_src_sample_games_easy__WEBPACK_IMPORTED_MODULE_7__);








let AppComponent = class AppComponent {
    constructor() {
        this.board = JSON.parse(JSON.stringify(_sanschristo_sudoku_solver_build_dist_src_sample_games_hard__WEBPACK_IMPORTED_MODULE_5__["hardGames"][0]));
    }
    solve() {
        const game = new _sanschristo_sudoku_solver__WEBPACK_IMPORTED_MODULE_4__["Game"](this.board);
        game.solve();
        game.logBoard();
    }
    chooseGame(difficulty, gameNumber) {
        switch (difficulty) {
            case 'hard':
                this.board = JSON.parse(JSON.stringify(_sanschristo_sudoku_solver_build_dist_src_sample_games_hard__WEBPACK_IMPORTED_MODULE_5__["hardGames"][gameNumber]));
                break;
            case 'med':
                this.board = JSON.parse(JSON.stringify(_sanschristo_sudoku_solver_build_dist_src_sample_games_medium__WEBPACK_IMPORTED_MODULE_6__["mediumGames"][gameNumber]));
                break;
            case 'easy':
                this.board = JSON.parse(JSON.stringify(_sanschristo_sudoku_solver_build_dist_src_sample_games_easy__WEBPACK_IMPORTED_MODULE_7__["easyGames"][gameNumber]));
                break;
        }
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <button mat-icon-button aria-label=\"Menu icon\"\n          (click)=\"drawer.toggle()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>Sudoku Solver</span>\n</mat-toolbar>\n\n<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer id=\"drawer\" class=\"example-sidenav\" mode=\"over\">\n    <h2>Select difficulty:</h2>\n    <button class=\"nav-button\" mat-raised-button color=\"accent\" (click)=\"chooseGame('easy', 0)\">Easy Game</button>\n    <br>\n    <button class=\"nav-button\" mat-raised-button color=\"accent\" (click)=\"chooseGame('med', 0)\">Med Game</button>\n    <br>\n    <button class=\"nav-button\" mat-raised-button color=\"accent\" (click)=\"chooseGame('hard', 0)\">Hard Game</button>\n    <br>\n  </mat-drawer>\n\n  <div class=\"main-content\">\n    <div class=\"sudoku-board\">\n      <mat-grid-list cols=\"9\" rowHeight=\"1:1\" gutterSize=\"1\">\n        <div *ngFor=\"let row of board\">\n          <mat-grid-tile *ngFor=\"let square of row\">\n            <input value=\"{{square | noZeroes}}\"\n                   class=\"sudoku-square-input\">\n          </mat-grid-tile>\n        </div>\n      </mat-grid-list>\n\n      <button id=\"solve-button\" mat-raised-button color=\"primary\" (click)=\"solve()\">SOLVE</button>\n    </div>\n  </div>\n\n</mat-drawer-container>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _no_zeroes_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./no-zeroes.pipe */ "g2dU");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _no_zeroes_pipe__WEBPACK_IMPORTED_MODULE_11__["NoZeroesPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "g2dU":
/*!***********************************!*\
  !*** ./src/app/no-zeroes.pipe.ts ***!
  \***********************************/
/*! exports provided: NoZeroesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoZeroesPipe", function() { return NoZeroesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let NoZeroesPipe = class NoZeroesPipe {
    transform(value, ...args) {
        if (value === 0)
            return null;
        return value;
    }
};
NoZeroesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'noZeroes'
    })
], NoZeroesPipe);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sudoku-board {\n  max-height: 100vh;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10vh;\n}\n\nmat-grid-list {\n  background: whitesmoke;\n  padding-bottom: 0;\n}\n\nmat-grid-tile {\n  border: 1px solid black;\n}\n\n.sudoku-square-input {\n  width: 100%;\n  background: whitesmoke;\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n  border: none;\n}\n\n#solve-button {\n  font-size: 3em;\n  padding: 10px;\n}\n\n.nav-button, #solve-button {\n  width: 90%;\n  margin: 5%;\n}\n\n.main-content {\n  height: 95vh;\n}\n\nh2 {\n  padding: 10%;\n  font-size: 2em;\n}\n\n#drawer {\n  width: 15%;\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUVGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWRva3UtYm9hcmQge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTB2aDtcbn1cblxubWF0LWdyaWQtbGlzdCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5tYXQtZ3JpZC10aWxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5zdWRva3Utc3F1YXJlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG4jc29sdmUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5uYXYtYnV0dG9uLCAjc29sdmUtYnV0dG9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1JTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGhlaWdodDogOTV2aDtcbn1cblxuaDIge1xuICBwYWRkaW5nOiAxMCU7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4jZHJhd2VyIHtcbiAgd2lkdGg6IDE1JTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map