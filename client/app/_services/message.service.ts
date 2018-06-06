import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { Message } from '../_models/index';

@Injectable()
export class MessageService {
    constructor(private http: HttpClient) { }

    getAllMessages() {
        return this.http.get<Message[]>(appConfig.apiUrl + '/messages/get-all-messages');
    }
    
    getByStatus(status: string) {
        return this.http.get<Message[]>(appConfig.apiUrl + '/messages/' + status);
    }

    create(message: Message) {
        return this.http.post(appConfig.apiUrl + '/messages/create-message', message);
    }

    deleteMessages(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/messages/' + _id);
    }
}