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
var index_1 = require("../_services/index");
var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(router, messageService, alertService) {
        this.router = router;
        this.messageService = messageService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    ContactUsComponent.prototype.sendMessage = function () {
        var _this = this;
        this.model.status = "new";
        this.loading = true;
        this.messageService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Спасибо, ожидайте обратной связи от наших специалистов', true);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ContactUsComponent = __decorate([
        core_1.Component({
            selector: 'contact-us',
            moduleId: module.id,
            templateUrl: 'contactUs.component.html',
            styleUrls: ['./contactUs.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.MessageService,
            index_1.AlertService])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
exports.ContactUsComponent = ContactUsComponent;
//# sourceMappingURL=contactUs.component.js.map