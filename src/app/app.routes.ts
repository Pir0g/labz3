import { Routes } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { guardMoveTo } from './guard/GuardMoveTo';
import { guardLeave } from './guard/GuardLeave';
import { JsonParserComponent } from './services/json-parser/json-parser.component';
export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent, canActivate: [guardMoveTo]},
    {path: 'contacts', component: ContactsComponent},
    {path: 'contacts/:value', component: ContactsComponent, canDeactivate: [guardLeave]},
    {path: 'parser', component: JsonParserComponent},
    {path: '**', component: NotFoundComponent}
];
