import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, ToDo, Tasks } from '../../_models/index';
import { TodoService, AlertService, UserService } from '../../_services/index';

@Component({
    selector: 'create-todos',
    moduleId: module.id,
    templateUrl: 'create-todos.component.html',
    styleUrls: ['./create-todos.component.css']
})

export class CreateToDosComponent {
    model: any = {};
    loading = false;
    currentUser: User;
    createListTitle: any;
    taskName: any;
    taskDescrition: any;
    task: any = {};
    tsk: any = {};
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private todoService: TodoService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));    
    }

    createTodo() {
        this.loading = true;
        this.model.creator = this.currentUser.username;
        this.todoService.createTodos(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Список создан', true);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    
    createTask() {
        this.tsk = JSON.stringify({tasks:{taskName:this.taskName,taskDescrition:this.taskDescrition}})
        this.task = JSON.parse(this.tsk);
        this.todoService.createTask(this.createListTitle,this.task).subscribe();
    }
}