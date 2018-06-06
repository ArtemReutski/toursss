import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { ToDo, Tasks, Task } from '../_models/index';

@Injectable()
export class TodoService {
    constructor(private http: HttpClient) { }
    // task: any = {}
    getAllLists() {
        return this.http.get<ToDo[]>(appConfig.apiUrl + '/todos');
    }

    deleteLists(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/todos/' + _id);
    }

    createTodos(lists: ToDo) {
        return this.http.post(appConfig.apiUrl + '/todos/create-list', lists);
    }
    createTask(listTitle: string, task: Task) {
        return this.http.post(appConfig.apiUrl + '/todos/' + listTitle + '/create-task', task);
    }
}