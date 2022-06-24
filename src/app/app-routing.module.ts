import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Workout }              from './pages/workout/workout';
import { Dashboard }            from './pages/dashboard/dashboard';
import { History }              from './pages/history/history';

const routes: Routes = [
    { path: 'dashboard', component: Dashboard },
    { path: 'workout', component: Workout },
    { path: 'history', component: History },
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    },
)
export class AppRoutingModule {}
