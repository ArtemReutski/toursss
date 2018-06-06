import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/index';
import { HeaderComponent } from './header/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AdminPanelComponent } from './adminpanel/index';
import { AuthGuard } from './_guards/index';
import { UserInterfaceComponent } from './adminpanel/user-interface/index';
import { ToDoComponent } from './adminpanel/todo/index';
import { MessageComponent } from './adminpanel/message/index';
import { CreateToDosComponent } from './adminpanel/create-todos/index'; 

const appRoutes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'home', component: AdminPanelComponent, canActivate: [AuthGuard] },    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'adminpanel', component: AdminPanelComponent, canActivate: [AuthGuard] },
    { path: 'user-interface', component: UserInterfaceComponent, canActivate: [AuthGuard] },
    { path: 'todo', component: ToDoComponent, canActivate: [AuthGuard] },
    { path: 'message', component: MessageComponent, canActivate: [AuthGuard] }, 
    { path: 'create-todos', component: CreateToDosComponent, canActivate: [AuthGuard] },        
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);