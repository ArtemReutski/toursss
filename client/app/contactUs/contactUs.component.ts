import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, MessageService } from '../_services/index';

@Component({
    selector: 'contact-us',
    moduleId: module.id,
    templateUrl: 'contactUs.component.html',
    styleUrls: ['./contactUs.component.css']
})

export class ContactUsComponent{
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private messageService: MessageService,
        private alertService: AlertService) { }

    sendMessage() {
        this.model.status = "new";
        this.loading = true;
        this.messageService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Спасибо, ожидайте обратной связи от наших специалистов', true);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}