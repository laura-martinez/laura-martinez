import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject' 


export type ResponsiveSizes = '2x' | '3x'
export type ProjectType = 'all' | 'portrait' | 'headshot' | 'personal' | 'photo-book'

export interface IPicture {
	name: string,
	isCover?: boolean,
	resource_name?: string,
	resource_extension?: string,
	responsive_sizes?: ResponsiveSizes[],
	source_set: string[],
}

export interface IProject {
	name: string,
	id: string,
	description: string,
	date: string,
	cover: string,
	type: string,
	collection: IPicture[]
}

@Injectable()
export class ProjectsService {

	private projects: IProject[]
	private projectsSubject: BehaviorSubject<IProject[]>

	constructor(private http: HttpClient) { }

	public getProject(id: string): Observable<IProject> {
		return this.getProjects().pipe(
			map((projects) => {
				return projects.find((project) => project.id === id)
			})
		)
	}

	public getProjects(label?: ProjectType): Observable<IProject[]> {
		let observable
		if(this.projects) {
			observable = this.projectsSubject
		} else {
			observable = this.retrieveProjects()
		}

		if(label && label !== 'all'){
			return observable.pipe(
				map((projects) => {
					return this.projects.filter((project) => project.type === label)
				})
			)
		} else {
			return observable
		}
	}

	private retrieveProjects(): Observable<IProject[]> {
		return this.http.get<{ projects: IProject[] }>(`assets/projects/projects.json`).pipe(
			map((response) => {
				this.projects = response.projects.map((project) => {
					this.mapProjectCover(project)
					return project
				})
				this.projectsSubject = new BehaviorSubject(this.projects)
				return this.projects
			})
		)
	}

	private getProjectsByType(projType: ProjectType): Observable<IProject[]> {
		return new BehaviorSubject<IProject[]>(this.projects.filter((project) => project.type === projType))
	}

	private mapProjectCover(project: IProject): string {

		if(!project.collection.length) {
			return null
		}

		const coverPicture = project.collection.reduce((result, picture) => {
			if (!result || picture.isCover) {
				return picture
			}
			return result
		}, null)

		project.cover = coverPicture.source_set[0]
		return project.cover
	}

}
