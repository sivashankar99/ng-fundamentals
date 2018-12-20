import { Routes} from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolverService,
    EventResolver,
    CreateSessionComponent} from './events/index';

export const appRoutes: Routes = [
    {path: '' , redirectTo: '/events', pathMatch: 'full'},
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
    {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404' , component: Error404Component},
    {path: 'user', loadChildren: './user/user.module#UserModule'},
    {path: '**' , redirectTo: '/404'}
];
