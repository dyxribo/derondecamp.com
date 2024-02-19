import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const routes: Routes = [
  {path: 'home-page', component: HomePageComponent, title: 'Deron Decamp: ITS & SWE'},
  {path: 'projects-page', component: ProjectsPageComponent, title: 'Deron Decamp: Projects'},
  {path: '', component: HomePageComponent},
  {path: '**', component: NotFoundPageComponent},
];
