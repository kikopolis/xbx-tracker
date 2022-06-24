import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Header }                  from './layout/header/header';
import { Workout }                 from './pages/workout/workout';
import { Dashboard }               from './pages/dashboard/dashboard';
import { History }                 from './pages/history/history';
import { HeadingOne }              from './layout/components/headings/heading-one/heading-one';
import { MatSelectModule }         from '@angular/material/select';

@NgModule(
    {
        declarations: [
            AppComponent,
            Header,
            Workout,
            Dashboard,
            History,
            HeadingOne
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            MatSelectModule,
        ],
        providers   : [],
        bootstrap   : [AppComponent],
    })
export class AppModule {}
