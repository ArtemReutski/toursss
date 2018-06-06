import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../_models/index';
import { User } from '../../_models/index';
import { UserService } from '../../_services/index';
import { TodoService } from '../../_services/index';

@Component({
    selector: 'todo',
    moduleId: module.id,
    templateUrl: 'todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class ToDoComponent {
    currentUser: User;
    lists: ToDo[] = [];
    loading = false;

    constructor(
        private todoService: TodoService,
        private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.getAllLists();
    }

    deleteList(_id: string) {
        this.todoService.deleteLists(_id).subscribe(() => {
            this.getAllLists()
        });
    }
    private getAllLists() {
        this.todoService.getAllLists().subscribe(lists => {
            this.lists = lists;
        });

    }
}