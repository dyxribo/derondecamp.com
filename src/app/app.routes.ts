import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  {path: 'home', component: HomePageComponent, title: 'Deron Decamp: ITS & SWE'},
  {path: 'projects', component: ProjectsPageComponent, title: 'Deron Decamp: Projects'},
  {path: 'contact', component: ContactPageComponent, title: 'Deron Decamp: Contact'},
  {path: '', component: HomePageComponent, title: 'Deron Decamp: ITS & SWE'},
  {path: '**', component: NotFoundPageComponent},
];
