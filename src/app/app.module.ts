import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Header }                  from './layout/header/header';
import { Workout }                 from './pages/workout/workout';
import { Dashboard }               from './pages/dashboard/dashboard';
import { History }                 from './pages/history/history';

@NgModule(
    {
        declarations: [
            AppComponent,
            Header,
            Workout,
            Dashboard,
            History,
        ],
        imports     : [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
        ],
        providers   : [],
        bootstrap   : [AppComponent],
    })
export class AppModule {}
