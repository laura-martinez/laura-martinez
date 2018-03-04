import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs/observable'
import { switchMap } from 'rxjs/operators'
import { ProjectsService, IProject, ProjectType } from '../projects.service'

@Component({
	selector: 'lmp-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

	public isLoaded: boolean
	public projects: IProject[] = []

	constructor(
		private route: ActivatedRoute,
		private projectsService: ProjectsService
	) { }

	ngOnInit() {
		this.setRouteSubcription()
	}

	public trackById(index: number, item: any){
		if (this.projects && this.projects.length){
			return this.projects[index].id
		}
		return undefined
	}

	private setRouteSubcription(): void {
		this.route.paramMap.pipe(
			switchMap((params: ParamMap) => {
				const label = params.get('label')
				this.getProjects(label as ProjectType)
				return label
			})
		).subscribe(() => {
			this.isLoaded = true
		})
	}

	private getProjects(label?: ProjectType) {
		this.projectsService.getProjects(label).subscribe((projects: IProject[]) => {
			this.projects = projects
		});
	}
}
