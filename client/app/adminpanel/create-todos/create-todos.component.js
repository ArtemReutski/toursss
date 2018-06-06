"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../../_services/index");
var CreateToDosComponent = /** @class */ (function () {
    function CreateToDosComponent(router, userService, alertService, todoService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.todoService = todoService;
        this.model = {};
        this.loading = false;
        this.task = {};
        this.tsk = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    CreateToDosComponent.prototype.createTodo = function () {
        var _this = this;
        this.loading = true;
        this.model.creator = this.currentUser.username;
        this.todoService.createTodos(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Список создан', true);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    CreateToDosComponent.prototype.createTask = function () {
        this.tsk = JSON.stringify({ tasks: { taskName: this.taskName, taskDescrition: this.taskDescrition } });
        this.task = JSON.parse(this.tsk);
        this.todoService.createTask(this.createListTitle, this.task).subscribe();
    };
    CreateToDosComponent = __decorate([
        core_1.Component({
            selector: 'create-todos',
            moduleId: module.id,
            templateUrl: 'create-todos.component.html',
            styleUrls: ['./create-todos.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.UserService,
            index_1.AlertService,
            index_1.TodoService])
    ], CreateToDosComponent);
    return CreateToDosComponent;
}());
exports.CreateToDosComponent = CreateToDosComponent;
//# sourceMappingURL=create-todos.component.js.map