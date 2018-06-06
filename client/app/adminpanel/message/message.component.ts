import { Component, OnInit } from '@angular/core';
import { Message } from '../../_models/index';
import { User } from '../../_models/index';
import { UserService } from '../../_services/index';
import { MessageService } from '../../_services/index';

@Component({
    selector: 'message',
    moduleId: module.id,
    templateUrl: 'message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
    currentUser: User;
    messages: Message[] = [];
    newMessages: Message[] = [];
    oldMessages: Message[] = [];    
    constructor(private messageService: MessageService, private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.loadAllMessages();
        this.loadNewMessage();
        this.loadOldMessage();
    }
    deleteMessage(_id: string) {
        this.messageService.deleteMessages(_id).subscribe(() => { this.loadAllMessages() });
    }

    private loadNewMessage() {
        this.messageService.getByStatus('new').subscribe(newMessages => { this.newMessages = newMessages; });
    }

    private loadOldMessage() {
        this.messageService.getByStatus('old').subscribe(oldMessages => { this.oldMessages = oldMessages; });
    }

    private loadAllMessages() {
        this.messageService.getAllMessages().subscribe(messages => { this.messages = messages; });
    }
}