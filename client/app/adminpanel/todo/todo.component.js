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
var index_1 = require("../../_services/index");
var index_2 = require("../../_services/index");
var ToDoComponent = /** @class */ (function () {
    function ToDoComponent(todoService, userService) {
        this.todoService = todoService;
        this.userService = userService;
        this.lists = [];
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ToDoComponent.prototype.ngOnInit = function () {
        this.getAllLists();
    };
    ToDoComponent.prototype.deleteList = function (_id) {
        var _this = this;
        this.todoService.deleteLists(_id).subscribe(function () {
            _this.getAllLists();
        });
    };
    ToDoComponent.prototype.getAllLists = function () {
        var _this = this;
        this.todoService.getAllLists().subscribe(function (lists) {
            _this.lists = lists;
        });
    };
    ToDoComponent = __decorate([
        core_1.Component({
            selector: 'todo',
            moduleId: module.id,
            templateUrl: 'todo.component.html',
            styleUrls: ['./todo.component.css']
        }),
        __metadata("design:paramtypes", [index_2.TodoService,
            index_1.UserService])
    ], ToDoComponent);
    return ToDoComponent;
}());
exports.ToDoComponent = ToDoComponent;
//# sourceMappingURL=todo.component.js.map