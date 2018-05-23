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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _live_feed_live_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./live-feed/live-feed.component */ "./src/app/live-feed/live-feed.component.ts");
/* harmony import */ var _maze_maze_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maze/maze.component */ "./src/app/maze/maze.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _live_feed_live_feed_component__WEBPACK_IMPORTED_MODULE_5__["LiveFeedComponent"],
                _maze_maze_component__WEBPACK_IMPORTED_MODULE_6__["MazeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _live_feed_live_feed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-feed/live-feed.component */ "./src/app/live-feed/live-feed.component.ts");
/* harmony import */ var _maze_maze_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maze/maze.component */ "./src/app/maze/maze.component.ts");



var routes = [
    {
        path: '',
        redirectTo: '/feed',
        pathMatch: 'full'
    },
    { path: 'feed', component: _live_feed_live_feed_component__WEBPACK_IMPORTED_MODULE_1__["LiveFeedComponent"] },
    { path: 'maze', component: _maze_maze_component__WEBPACK_IMPORTED_MODULE_2__["MazeComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/live-feed/live-feed.component.css":
/*!***************************************************!*\
  !*** ./src/app/live-feed/live-feed.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: white;\r\n}\r\n\r\n/* the new scrollbar will have a flat appearance with the set background color */\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color:  #696969;\r\n  border-radius: 4px;\r\n}\r\n\r\n/* this will style the thumb, ignoring the track */\r\n\r\n::-webkit-scrollbar-button {\r\n    display: none;\r\n}\r\n\r\n/* optionally, you can style the top and the bottom buttons (left and right for horizontal bars) */\r\n\r\n::-webkit-scrollbar-corner {\r\n    background-color: black;\r\n}\r\n\r\n/* if both the vertical and the horizontal bars appear, then perhaps the right bottom corner also needs to be styled */\r\n\r\n:host {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n}\r\n\r\n.title {\r\n    background: #222222;\r\n    font-size: 2em;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 8px;\r\n}\r\n\r\n.name-wrapper {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.padding-wrapper {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    padding: 8px 64px;\r\n}\r\n\r\n.message-list-container {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    /* margin-top: 8px; */\r\n    background: #d1d1d1;\r\n    border-radius: 4px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    padding: 8px 24px;\r\n    /* margin: 8px 64px 0 64px; */\r\n}\r\n\r\n.message-list {\r\n    overflow-y: auto;\r\n}\r\n\r\n.message-row {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 4px;\r\n    max-width: 85%;\r\n}\r\n\r\n.message-row.system-msg {\r\n    max-width: 100%;\r\n    justify-content: center;\r\n}\r\n\r\n.message /deep/ img {\r\n    max-width: 100%;\r\n    max-height: 600px;\r\n}\r\n\r\n.user-name {\r\n    font-size: 2em;\r\n    min-width: 40px;\r\n    width: 7%;\r\n    text-align: right;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.message {\r\n    font-size: 1.5em;\r\n    margin-left: 32px;\r\n    padding: 8px;\r\n    border-radius: 4px;\r\n    color: white;\r\n    max-width: 100%;\r\n}\r\n\r\n.system-msg .message {\r\n    color: black;\r\n    margin: 0;\r\n}\r\n\r\n.input-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    /* height: 80px; */\r\n    /* margin: 0px 64px 16px 64px; */\r\n}\r\n\r\n.input-container input {\r\n    flex-grow: 1;\r\n    padding: 8px 16px;\r\n    font-size: 3em;\r\n    border: none;\r\n    background: #efefef;\r\n    border-radius: 8px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.name-wrapper input {\r\n    text-align: center;\r\n}\r\n\r\n.input-container input:focus {\r\n    outline: none;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .padding-wrapper {\r\n        padding: 0;\r\n    }\r\n\r\n    .title {\r\n        display: none;\r\n    }\r\n\r\n    .input-container input {\r\n        font-size: 2em;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .padding-wrapper {\r\n        padding: 0;\r\n    }\r\n\r\n    .title {\r\n        display: none;\r\n    }\r\n\r\n    .message {\r\n        font-size: 1em;\r\n        margin-left: 8px;\r\n        padding: 4px 8px;\r\n    }\r\n\r\n    .user-name {\r\n        font-size: .8em;\r\n    }\r\n\r\n    .input-container input {\r\n        font-size: 1em;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/live-feed/live-feed.component.html":
/*!****************************************************!*\
  !*** ./src/app/live-feed/live-feed.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"title\">\n    {{title}}\n  </div>\n  \n  \n  <div class=\"name-wrapper\" *ngIf=\"!connected\">\n    <div class=\"message-row system-msg\">\n      <div class=\"message\">disconnected</div>\n    </div>\n  </div>\n  \n  <div class=\"name-wrapper\" *ngIf=\"connected && !savedName\">\n    <div class=\"input-container\">\n      <input type=\"text\" placeholder=\"enter name\" maxLength=\"24\" [disabled]=\"!connected\" [(ngModel)]=\"nameIn\" (keyup.enter)=\"saveName()\"\n      />\n    </div>\n  </div>\n  \n  <div class=\"padding-wrapper\" *ngIf=\"connected && savedName\">\n    <div class=\"message-list-container\">\n      <div #feed class=\"message-list\" (scroll)=\"onScroll()\">\n        <ng-container *ngFor=\"let msg of messageList\">\n          <div class=\"message-row\" *ngIf=\"!msg.isSystem && !msg.isImage\">\n            <div class=\"user-name\">{{msg.user}}</div>\n            <div class=\"message\" [style.backgroundColor]=\"msg.color\">{{msg.message}}</div>\n          </div>\n  \n          <div class=\"message-row\" *ngIf=\"msg.isImage\">\n            <div class=\"user-name\">{{msg.user}}</div>\n            <div class=\"message\" [style.backgroundColor]=\"msg.color\">\n              <img [src]=\"msg.message\" />\n            </div>\n          </div>\n  \n          <div class=\"message-row system-msg\" *ngIf=\"msg.isSystem\">\n            <div class=\"message\">{{msg.message}}</div>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n    <div class=\"input-container\">\n      <input type=\"text\" placeholder=\"enter a message\" [disabled]=\"!connected\" [(ngModel)]=\"newMessage\" (keyup.enter)=\"sendMessage()\"\n      />\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/live-feed/live-feed.component.ts":
/*!**************************************************!*\
  !*** ./src/app/live-feed/live-feed.component.ts ***!
  \**************************************************/
/*! exports provided: LiveFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveFeedComponent", function() { return LiveFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LiveFeedComponent = /** @class */ (function () {
    function LiveFeedComponent() {
        this.colorList = {
            green: '#00963e',
            blue: '#123cba',
            red: '#93020c',
            pink: '#b50e99',
            purple: '#78058c',
            grey: '#333333',
            black: '#000000',
            default: '#299ac7'
        };
        this.title = 'Sendy Words';
        this.messageList = new Array();
        this.color = "#299ac7";
        this.connected = false;
        this.connecting = false;
    }
    LiveFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ON INIT");
        var hubBuilder = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]();
        hubBuilder.withUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "chat");
        hubBuilder.configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information);
        this.sendyHub = hubBuilder.build();
        this.sendyHub.on("ReceiveMessage", function (user, message, color) {
            _this.messageReceived(user, message, color);
        });
        this.sendyHub.on("ReceiveImage", function (user, url, color) {
            _this.imageReceived(user, url, color);
        });
        this.sendyHub.on("SetTitle", function (title) {
            _this.setTitle(title);
        });
        this.sendyHub.on("SystemMessage", function (message) {
            _this.systemMessage(message);
        });
        this.sendyHub.on("ClearAll", function () {
            _this.clearAll();
        });
        this.connecting = true;
        this.sendyHub.onclose(function () { return _this.connected = false; });
        this.sendyHub.start().then(function () {
            console.log("SENDY HUB CONNECTED");
            _this.connected = true;
            _this.connecting = false;
        }).catch(function (err) {
            console.error("SENDY HUB FAILURE", err);
            _this.connecting = false;
        });
    };
    LiveFeedComponent.prototype.ngOnDestroy = function () {
        console.log("FEED DESTROY");
        this.sendyHub.stop().then(function () { console.log("HUB STOPPED"); });
    };
    LiveFeedComponent.prototype.ngAfterViewChecked = function () {
        if (this.scrollLock) {
            this.scrollToBottom();
        }
    };
    LiveFeedComponent.prototype.messageReceived = function (user, message, color) {
        this.messageList.push(new Message(user, message, color));
    };
    LiveFeedComponent.prototype.imageReceived = function (user, url, color) {
        var msg = new Message(user, url, color);
        msg.isImage = true;
        this.messageList.push(msg);
    };
    LiveFeedComponent.prototype.systemMessage = function (message) {
        var msg = new Message();
        msg.message = message;
        msg.isSystem = true;
        this.messageList.push(msg);
    };
    LiveFeedComponent.prototype.setTitle = function (title) {
        this.title = title;
    };
    LiveFeedComponent.prototype.clearAll = function () {
        this.savedName = undefined;
        this.color = this.colorList.default;
        this.messageList = new Array();
        this.title = "Sendy Words";
        this.nameIn = undefined;
    };
    LiveFeedComponent.prototype.sendMessage = function () {
        var _this = this;
        var m = this.handleMessage(this.newMessage);
        if (m == null) {
            this.newMessage = "";
            return;
        }
        this.sendyHub.invoke("SendMessage", this.savedName, m, this.color).then(function (response) { console.log("RESPONSE", response); _this.newMessage = ""; }).catch(function (err) { return console.log("ERROR", err); });
        this.scrollToBottom();
    };
    LiveFeedComponent.prototype.saveName = function () {
        if (this.nameIn && this.nameIn.trim() !== '') {
            this.savedName = this.nameIn;
            this.nameIn = undefined;
            this.sendyHub.invoke("UserJoin", this.savedName).then(function (response) { console.log("RESPONSE", response); }).catch(function (err) { return console.log("ERROR", err); });
        }
    };
    LiveFeedComponent.prototype.handleMessage = function (msg) {
        if (msg.startsWith('/title')) {
            var t = msg.substr(7);
            if (t && t.trim() != '') {
                this.sendyHub.invoke("SetTitle", t, this.savedName).then(function () { }).catch(function (err) { return console.log("ERROR", err); });
                return null;
            }
        }
        if (msg.startsWith('/color')) {
            var c = msg.substr(7);
            if (c.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
                this.color = c;
                return 'I am now ' + c + '!';
            }
            if (this.colorList[c]) {
                this.color = this.colorList[c];
                return 'I am now ' + c + '!';
            }
        }
        if (msg.startsWith('/swap')) {
            var words = msg.split(' ');
            if (words.length === 3) {
                this.sendyHub.invoke("AddSwap", words[1], words[2], this.savedName).then(function () { }).catch(function (err) { return console.log("ERROR", err); });
                return null;
            }
        }
        if (msg.startsWith('/clear')) {
            var words = msg.split(' ');
            if (words.length === 2) {
                this.sendyHub.invoke("ClearAll", words[1]).then(function () { }).catch(function (err) { return console.log("ERROR", err); });
                return null;
            }
        }
        msg = msg.replace('/shruggie', '¯\\_(ツ)_/¯');
        return msg;
    };
    LiveFeedComponent.prototype.onScroll = function () {
        var frame = this.feed.nativeElement;
        if ((frame.scrollTop + frame.clientHeight) == frame.scrollHeight) {
            this.scrollLock = true;
        }
        else {
            this.scrollLock = false;
        }
    };
    LiveFeedComponent.prototype.scrollToBottom = function () {
        this.feed.nativeElement.scrollTop = this.feed.nativeElement.scrollHeight;
        this.scrollLock = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('feed'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LiveFeedComponent.prototype, "feed", void 0);
    LiveFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live-feed',
            template: __webpack_require__(/*! ./live-feed.component.html */ "./src/app/live-feed/live-feed.component.html"),
            styles: [__webpack_require__(/*! ./live-feed.component.css */ "./src/app/live-feed/live-feed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LiveFeedComponent);
    return LiveFeedComponent;
}());

var Message = /** @class */ (function () {
    function Message(u, m, c) {
        this.user = u;
        this.message = m;
        this.color = c;
    }
    return Message;
}());


/***/ }),

/***/ "./src/app/maze/maze.component.css":
/*!*****************************************!*\
  !*** ./src/app/maze/maze.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: white;\r\n}\r\n\r\n/* the new scrollbar will have a flat appearance with the set background color */\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color:  #696969;\r\n  border-radius: 4px;\r\n}\r\n\r\n/* this will style the thumb, ignoring the track */\r\n\r\n::-webkit-scrollbar-button {\r\n    display: none;\r\n}\r\n\r\n/* optionally, you can style the top and the bottom buttons (left and right for horizontal bars) */\r\n\r\n::-webkit-scrollbar-corner {\r\n    background-color: black;\r\n}\r\n\r\n/* if both the vertical and the horizontal bars appear, then perhaps the right bottom corner also needs to be styled */\r\n\r\n:host {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n}\r\n\r\n.title {\r\n    background: #222222;\r\n    font-size: 2em;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 8px;\r\n}\r\n\r\n.name-wrapper {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.padding-wrapper {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    padding: 8px 64px;\r\n}\r\n\r\n.message-list-container {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    /* margin-top: 8px; */\r\n    background: #d1d1d1;\r\n    border-radius: 4px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    padding: 8px 24px;\r\n    /* margin: 8px 64px 0 64px; */\r\n}\r\n\r\n.message-list {\r\n    overflow-y: auto;\r\n}\r\n\r\n.message-row {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 4px;\r\n    max-width: 85%;\r\n}\r\n\r\n.message-row.system-msg {\r\n    max-width: 100%;\r\n    justify-content: center;\r\n}\r\n\r\n.message /deep/ img {\r\n    max-width: 100%;\r\n    max-height: 600px;\r\n}\r\n\r\n.user-name {\r\n    font-size: 2em;\r\n    min-width: 40px;\r\n    width: 7%;\r\n    text-align: right;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.message {\r\n    font-size: 1.5em;\r\n    margin-left: 32px;\r\n    padding: 8px;\r\n    border-radius: 4px;\r\n    color: white;\r\n    max-width: 100%;\r\n}\r\n\r\n.system-msg .message {\r\n    color: black;\r\n    margin: 0;\r\n}\r\n\r\n.input-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    /* height: 80px; */\r\n    /* margin: 0px 64px 16px 64px; */\r\n}\r\n\r\n.input-container input {\r\n    flex-grow: 1;\r\n    padding: 8px 16px;\r\n    font-size: 3em;\r\n    border: none;\r\n    background: #efefef;\r\n    border-radius: 8px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n\r\n.name-wrapper input {\r\n    text-align: center;\r\n}\r\n\r\n.input-container input:focus {\r\n    outline: none;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .padding-wrapper {\r\n        padding: 0;\r\n    }\r\n\r\n    .title {\r\n        display: none;\r\n    }\r\n\r\n    .input-container input {\r\n        font-size: 2em;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n    .padding-wrapper {\r\n        padding: 0;\r\n    }\r\n\r\n    .title {\r\n        display: none;\r\n    }\r\n\r\n    .message {\r\n        font-size: 1em;\r\n        margin-left: 8px;\r\n        padding: 4px 8px;\r\n    }\r\n\r\n    .user-name {\r\n        font-size: .8em;\r\n    }\r\n\r\n    .input-container input {\r\n        font-size: 1em;\r\n    }\r\n}\r\n\r\n.maze-container {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    /* flex-direction: column; */\r\n    /* align-items: stretch; */\r\n    /* margin-top: 8px; */\r\n    background: white;\r\n    border-radius: 4px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n    padding: 8px 24px;\r\n    /* margin: 8px 64px 0 64px; */\r\n}\r\n\r\n.maze {\r\n    overflow-y: auto;\r\n}\r\n\r\n.btn {\r\n    cursor: pointer;\r\n    padding: 8px;\r\n    border-radius: 4px;\r\n    color: white;\r\n}\r\n\r\n.join {\r\n    background: #00963e;\r\n}\r\n\r\n.create {\r\n    background: #299ac7;\r\n}\r\n\r\n.maze {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.maze:focus {\r\n    outline: none;\r\n}\r\n\r\n.grid-row {\r\n    display: flex;\r\n}\r\n\r\n.maze-cell {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 40px;\r\n    height: 40px;\r\n    border: 1px solid white;\r\n}\r\n\r\n.player-circle {\r\n    width: 32px;\r\n    height: 32px;\r\n    border-radius: 100%;\r\n}\r\n\r\n.north {\r\n    border-top: 1px solid black;\r\n}\r\n\r\n.south {\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.east {\r\n    border-right: 1px solid black;\r\n}\r\n\r\n.west {\r\n    border-left: 1px solid black;\r\n}\r\n\r\n.start {\r\n    background: rgba(0, 128, 0, 0.308);\r\n    border-top: white;\r\n}\r\n\r\n.end {\r\n    background: rgba(255, 0, 0, 0.301);\r\n    border-bottom: white;\r\n}\r\n\r\n.player-container {\r\n    margin-left: 32px;\r\n}\r\n\r\n.player-row {\r\n    margin-top: 8px;\r\n    font-size: 2em;\r\n    padding: 4px 8px;\r\n    border-radius: 4px;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/maze/maze.component.html":
/*!******************************************!*\
  !*** ./src/app/maze/maze.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  Maze Racer\n</div>\n\n\n<div class=\"name-wrapper\" *ngIf=\"!connected\">\n  <div class=\"message-row system-msg\">\n    <div class=\"message\">disconnected</div>\n  </div>\n</div>\n\n<div class=\"name-wrapper\" *ngIf=\"connected && !playerId\">\n  <div class=\"input-container\">\n    <input type=\"text\" placeholder=\"enter name\" maxLength=\"24\" [disabled]=\"!connected\" [(ngModel)]=\"nameIn\" (keyup.enter)=\"saveName()\"\n    />\n  </div>\n</div>\n\n<div class=\"padding-wrapper\" *ngIf=\"connected && playerId && !currentGame\">\n  <div class=\"message-list-container\">\n    <div class=\"btn create\" (click)=\"createGame()\">new game</div>\n    <div class=\"message-list\" (scroll)=\"onScroll()\">\n\n      <div class=\"message-row\" *ngIf=\"!availableGames || availableGames.length === 0\">\n        <div class=\"message\">No Games Available</div>\n      </div>\n\n      <div class=\"message-row\" *ngFor=\"let id of availableGames\">\n        <div class=\"btn join\" (click)=\"joinGame(id)\">join</div>\n        <div class=\"message\">Game {{id}}</div>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n\n<div class=\"padding-wrapper\" *ngIf=\"connected && playerId && currentGame\">\n  <div class=\"maze-container\">\n    <div #maze class=\"maze\" tabindex=\"0\" (keydown)=\"move($event)\" *ngIf=\"!currentGame.winner\">\n      <div class=\"grid-row\" *ngFor=\"let row of currentGame.mazeGrid;  let i = index\">\n        <div *ngFor=\"let cell of row;  let j = index\" [class]=\"getCellClass(cell)\" [style.border]=\"specialBorder(j,i)\">\n          <!-- <div class=\"player-circle\" *ngIf=\"currentGame.players.length > 1 && (currentGame.players[0].x || currentGame.players[0].x === 0) && (currentGame.players[0].y || currentGame.players[0].y === 0) && (currentGame.players[0].y == j && currentGame.players[0].y == i)\" [style.backgroundColor]=\"currentGame.players[0].color\"></div> -->\n          <ng-container *ngFor=\"let player of currentGame.players\">\n              <div class=\"player-circle\" *ngIf=\" (player.x || player.x === 0) && (player.y || player.y === 0) && (player.x == j && player.y == i)\" [style.backgroundColor]=\"player.color\"></div>\n          </ng-container>\n          \n        </div>\n      </div>\n    </div>\n\n    <div class=\"maze\" *ngIf=\"currentGame.winner\">\n      <h1>{{currentGame.winner}} wins!</h1>\n      <div class=\"btn create\" (click)=\"quitGame()\">exit</div>\n    </div>\n\n    <div class=\"player-container\">\n      <div class=\"player-row\" *ngFor=\"let player of currentGame.players\" [style.background]=\"player.color\">\n        {{player.name}}\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/maze/maze.component.ts":
/*!****************************************!*\
  !*** ./src/app/maze/maze.component.ts ***!
  \****************************************/
/*! exports provided: MazeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MazeComponent", function() { return MazeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MazeComponent = /** @class */ (function () {
    function MazeComponent() {
        this.colorList = {
            green: '#00963e',
            blue: '#123cba',
            red: '#93020c',
            pink: '#b50e99',
            purple: '#78058c',
            grey: '#333333',
            black: '#000000',
            default: '#299ac7'
        };
        this.title = 'The Maze';
        this.color = "#299ac7";
        this.connected = false;
        this.connecting = false;
    }
    MazeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ON INIT");
        var hubBuilder = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]();
        hubBuilder.withUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "race");
        hubBuilder.configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information);
        this.sendyHub = hubBuilder.build();
        this.sendyHub.on("InitPlayer", function (player, games) {
            _this.initPlayer(player, games);
        });
        this.sendyHub.on("GameList", function (games) {
            _this.gameListUpdate(games);
        });
        this.sendyHub.on("GameUpdate", function (game) {
            _this.gameUpdate(game);
        });
        this.sendyHub.on("StartGame", function (gameId) {
            _this.startGame(gameId);
        });
        this.sendyHub.on("MovePlayer", function (playerId, x, y) {
            _this.movePlayer(playerId, x, y);
        });
        this.sendyHub.on("GameWinner", function (gameId, player) {
            _this.gameWinner(gameId, player);
        });
        this.sendyHub.on("ClearAll", function () {
            _this.clearAll();
        });
        this.connecting = true;
        this.sendyHub.onclose(function () { return _this.connected = false; });
        this.sendyHub.start().then(function () {
            console.log("SENDY HUB CONNECTED");
            _this.connected = true;
            _this.connecting = false;
        }).catch(function (err) {
            console.error("SENDY HUB FAILURE", err);
            _this.connecting = false;
        });
    };
    MazeComponent.prototype.ngOnDestroy = function () {
        console.log("FEED DESTROY");
        this.sendyHub.stop().then(function () { console.log("HUB STOPPED"); });
    };
    MazeComponent.prototype.initPlayer = function (player, games) {
        this.playerId = player.id;
        this.playerName = player.name;
        // this.player = player;
        this.availableGames = games;
    };
    MazeComponent.prototype.gameListUpdate = function (games) {
        this.availableGames = games;
    };
    MazeComponent.prototype.gameUpdate = function (game) {
        this.currentGame = game; //JSON.parse(game);
        // this.player = game.players.find((p) => p.id === this.player.id);
        console.log("CURRENT GAME", this.currentGame);
    };
    MazeComponent.prototype.startGame = function (gameId) {
        if (this.currentGame.id === gameId) {
            this.currentGame.active = true;
        }
    };
    MazeComponent.prototype.gameWinner = function (gameId, winner) {
        if (this.currentGame.id === gameId) {
            this.currentGame.active = false;
            this.currentGame.winner = winner;
        }
    };
    MazeComponent.prototype.movePlayer = function (playerId, x, y) {
        var player = this.currentGame.players.find(function (p) { return p.id === playerId; });
        player.x = x;
        player.y = y;
    };
    MazeComponent.prototype.clearAll = function () {
        this.playerName = undefined;
        this.color = this.colorList.default;
        this.nameIn = undefined;
    };
    MazeComponent.prototype.move = function (keyEvent) {
        var _this = this;
        if (!this.currentGame.active) {
            return;
        }
        var dir;
        var player = this.currentGame.players.find(function (p) { return p.id === _this.playerId; });
        var newX = player.x;
        var newY = player.y;
        switch (keyEvent.keyCode) {
            case 38:
                dir = Direction.Up;
                newY--;
                break;
            case 39:
                dir = Direction.Right;
                newX++;
                break;
            case 40:
                dir = Direction.Down;
                newY++;
                break;
            case 37:
                dir = Direction.Left;
                newX--;
                break;
            default:
                return;
        }
        if (!(this.currentGame.mazeGrid[player.y][player.x] & dir)) {
            player.x = newX;
            player.y = newY;
            // console.log("MOVE DIR", dir)
            this.sendyHub.invoke("MovePlayer", this.currentGame.id, player.id, dir).then(function (response) { console.log("RESPONSE", response); }).catch(function (err) { return console.log("ERROR", err); });
        }
    };
    MazeComponent.prototype.saveName = function () {
        if (this.nameIn && this.nameIn.trim() !== '') {
            this.playerName = this.nameIn;
            this.nameIn = undefined;
            this.sendyHub.invoke("UserJoin", this.playerName).then(function (response) { console.log("RESPONSE", response); }).catch(function (err) { return console.log("ERROR", err); });
        }
    };
    MazeComponent.prototype.joinGame = function (id) {
        this.sendyHub.invoke("JoinGame", this.playerId, id).then(function (response) { console.log("RESPONSE", response); }).catch(function (err) { return console.log("ERROR", err); });
    };
    MazeComponent.prototype.createGame = function () {
        this.sendyHub.invoke("NewGame", this.playerId).then(function (response) { console.log("RESPONSE", response); }).catch(function (err) { return console.log("ERROR", err); });
    };
    MazeComponent.prototype.quitGame = function () {
        this.currentGame = undefined;
    };
    MazeComponent.prototype.getCellClass = function (direction) {
        var cls = "maze-cell";
        if (direction & Direction.Up) {
            cls += " north";
        }
        if (direction & Direction.Down) {
            cls += " south";
        }
        if (direction & Direction.Left) {
            cls += " west";
        }
        if (direction & Direction.Right) {
            cls += " east";
        }
        return cls;
    };
    MazeComponent.prototype.specialBorder = function (x, y) {
        if (this.currentGame.startX == x && this.currentGame.startY == y) {
            if (this.currentGame.players && this.currentGame.players.length > 0) {
                return "2px solid " + this.currentGame.players[0].color;
            }
            return "2px solid #00963e";
        }
        if (this.currentGame.endX == x && this.currentGame.endY == y) {
            if (this.currentGame.players && this.currentGame.players.length > 1) {
                return "2px solid " + this.currentGame.players[1].color;
            }
            return "2px solid #cccccc";
        }
        return null;
    };
    MazeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maze',
            template: __webpack_require__(/*! ./maze.component.html */ "./src/app/maze/maze.component.html"),
            styles: [__webpack_require__(/*! ./maze.component.css */ "./src/app/maze/maze.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MazeComponent);
    return MazeComponent;
}());

var Direction;
(function (Direction) {
    Direction[Direction["None"] = 0] = "None";
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Down"] = 4] = "Down";
    Direction[Direction["Left"] = 8] = "Left";
})(Direction || (Direction = {}));
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
var Game = /** @class */ (function () {
    function Game() {
    }
    return Game;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'https://localhost:44332/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\projects\career-day\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map