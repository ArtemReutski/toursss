"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./header/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./adminpanel/index");
var index_5 = require("./_guards/index");
var index_6 = require("./adminpanel/user-interface/index");
var index_7 = require("./adminpanel/todo/index");
var index_8 = require("./adminpanel/message/index");
var index_9 = require("./adminpanel/create-todos/index");
var appRoutes = [
    { path: '', component: index_1.HeaderComponent },
    { path: 'home', component: index_4.AdminPanelComponent, canActivate: [index_5.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'adminpanel', component: index_4.AdminPanelComponent, canActivate: [index_5.AuthGuard] },
    { path: 'user-interface', component: index_6.UserInterfaceComponent, canActivate: [index_5.AuthGuard] },
    { path: 'todo', component: index_7.ToDoComponent, canActivate: [index_5.AuthGuard] },
    { path: 'message', component: index_8.MessageComponent, canActivate: [index_5.AuthGuard] },
    { path: 'create-todos', component: index_9.CreateToDosComponent, canActivate: [index_5.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map