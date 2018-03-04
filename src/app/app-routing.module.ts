import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsModule } from './projects/projects.module';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'contact',
		component: ContactComponent,
	},
	{
		path: 'publications',
		loadChildren: 'app/publications/publications.module#PublicationsModule',
	},
	{
		path: 'projects',
		loadChildren: 'app/projects/projects.module#ProjectsModule',
	},
	{
		path: '**',
		redirectTo: 'home',
	},
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
