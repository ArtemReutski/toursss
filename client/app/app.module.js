"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./_directives/index");
var index_2 = require("./_guards/index");
var index_3 = require("./_helpers/index");
var index_4 = require("./_services/index");
var index_5 = require("./home/index");
var index_6 = require("./header/index");
var index_7 = require("./services/index");
var index_8 = require("./popularTours/index");
var index_9 = require("./aboutUs/index");
var index_10 = require("./team/index");
var index_11 = require("./contactUs/index");
var index_12 = require("./adminpanel/index");
var index_13 = require("./adminpanel/user-interface/index");
var index_14 = require("./adminpanel/todo/index");
var index_15 = require("./login/index");
var index_16 = require("./register/index");
var index_17 = require("./adminpanel/navigation/index");
var index_18 = require("./adminpanel/message/index");
var index_19 = require("./adminpanel/create-todos/index");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                index_1.AlertComponent,
                index_5.HomeComponent,
                index_15.LoginComponent,
                index_16.RegisterComponent,
                index_6.HeaderComponent,
                index_7.ServicesComponent,
                index_8.PopularToursComponent,
                index_9.AboutUsComponent,
                index_10.TeamComponent,
                index_11.ContactUsComponent,
                index_12.AdminPanelComponent,
                index_13.UserInterfaceComponent,
                index_17.NavigationComponent,
                index_14.ToDoComponent,
                index_18.MessageComponent,
                index_19.CreateToDosComponent
            ],
            providers: [
                index_2.AuthGuard,
                index_4.AlertService,
                index_4.AuthenticationService,
                index_4.UserService,
                index_3.JwtInterceptorProvider,
                index_3.ErrorInterceptorProvider,
                index_4.MessageService,
                index_13.UserInterfaceComponent,
                index_4.TodoService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map