import { Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        // Demo protectiing multiiple routes with a single auth guard
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'messages', component: MessagesComponent},
            { path: 'lists', component: ListsComponent},
        ]
    },
    { path: 'members', component: MemberListComponent, canActivate: [AuthGuard]}, // Adding AuthGuard to a single route
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
