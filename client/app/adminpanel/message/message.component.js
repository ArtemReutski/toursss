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
var MessageComponent = /** @class */ (function () {
    function MessageComponent(messageService, userService) {
        this.messageService = messageService;
        this.userService = userService;
        this.messages = [];
        this.newMessages = [];
        this.oldMessages = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.loadAllMessages();
        this.loadNewMessage();
        this.loadOldMessage();
    };
    MessageComponent.prototype.deleteMessage = function (_id) {
        var _this = this;
        this.messageService.deleteMessages(_id).subscribe(function () { _this.loadAllMessages(); });
    };
    MessageComponent.prototype.loadNewMessage = function () {
        var _this = this;
        this.messageService.getByStatus('new').subscribe(function (newMessages) { _this.newMessages = newMessages; });
    };
    MessageComponent.prototype.loadOldMessage = function () {
        var _this = this;
        this.messageService.getByStatus('old').subscribe(function (oldMessages) { _this.oldMessages = oldMessages; });
    };
    MessageComponent.prototype.loadAllMessages = function () {
        var _this = this;
        this.messageService.getAllMessages().subscribe(function (messages) { _this.messages = messages; });
    };
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'message',
            moduleId: module.id,
            templateUrl: 'message.component.html',
            styleUrls: ['./message.component.css']
        }),
        __metadata("design:paramtypes", [index_2.MessageService, index_1.UserService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map