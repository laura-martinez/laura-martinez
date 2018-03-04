import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs/observable'
import { switchMap } from 'rxjs/operators'
import { IProject, ProjectsService, IPicture } from '../projects.service'

@Component({
	selector: 'lmp-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

	public project: IProject
	public currentPic = null
	public modalPic = null
	public isModalVisible = false

	constructor(
		private route: ActivatedRoute,
		private projectsService: ProjectsService
	) { }

	ngOnInit() {
		this.setRouteSubcription()
	}

	public openModal(picture: IPicture): void {
		this.modalPic = picture
		this.isModalVisible = true
	}

	public closeModal(): void {
		this.isModalVisible = false
	}

	private setCurrentPic(index: number): void {
		this.currentPic = index
	}

	private setRouteSubcription(): void {
		this.route.paramMap.pipe(
			switchMap((params: ParamMap) => {
				const id = params.get('id')
				this.getProject(id)
				return id
			})
		).subscribe(() => {
			this.setCurrentPic(0)
		})
	}

	private getProject(id: string) {
		this.projectsService.getProject(id).subscribe((project: IProject) => {
			this.project = project
		})
	}

}
