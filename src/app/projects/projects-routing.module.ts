import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component'

const routes: Routes = [
	{
		path: 'list/:label',
		component: ProjectListComponent,
	},
	{
		path: 'detail/:id',
		component: ProjectDetailComponent,
	},
	{
		path: '',
		redirectTo: '/list/all',
		pathMatch: 'full'
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProjectsRoutingModule { }
