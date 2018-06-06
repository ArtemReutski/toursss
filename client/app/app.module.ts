import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import {
    AlertService,
    AuthenticationService,
    UserService,
    MessageService,
    TodoService
} from './_services/index';
import { HomeComponent } from './home/index';
import { HeaderComponent } from './header/index';
import { ServicesComponent } from './services/index';
import { PopularToursComponent } from './popularTours/index';
import { AboutUsComponent } from './aboutUs/index';
import { TeamComponent } from './team/index';
import { ContactUsComponent } from './contactUs/index';
import { AdminPanelComponent } from './adminpanel/index';
import { UserInterfaceComponent } from './adminpanel/user-interface/index';
import { ToDoComponent } from './adminpanel/todo/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { NavigationComponent } from './adminpanel/navigation/index';
import { MessageComponent } from './adminpanel/message/index'; 
import { CreateToDosComponent } from './adminpanel/create-todos/index'; 


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        ServicesComponent,
        PopularToursComponent,
        AboutUsComponent,
        TeamComponent,
        ContactUsComponent,
        AdminPanelComponent,
        UserInterfaceComponent,
        NavigationComponent,
        ToDoComponent,
        MessageComponent,
        CreateToDosComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        JwtInterceptorProvider,
        ErrorInterceptorProvider,
        MessageService,
        UserInterfaceComponent,
        TodoService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }