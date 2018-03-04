import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { ProjectsRoutingModule } from './projects-routing.module'
import { ProjectListComponent } from './project-list/project-list.component'
import { ProjectDetailComponent } from './project-detail/project-detail.component'
import { ProjectsService } from './projects.service'
import { UtilsModule } from '../utils/utils.module'

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		ProjectsRoutingModule,
		UtilsModule,
	],
	declarations: [
		ProjectListComponent,
		ProjectDetailComponent
	],
	providers: [
		ProjectsService
	]
})
export class ProjectsModule { }
