import {AuthService} from "../providers/auth-service/auth-service";
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
    declarations: [
        MyApp,
        LoginPage,
        RegisterPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage,
        RegisterPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthService
    ]
})
export class AppModule {}
