import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import {map} from 'rxjs/operators'

export interface IPublication {
	name: string,
	url: string,
	source_set: string,
	description: string,
}

@Injectable()
export class PublicationsService {

	public publications: IPublication[]

	constructor(
		private http: HttpClient
	) { }

	public getPublications(): Observable<IPublication[]> {
		return this.http.get<{ publications: IPublication[] }>(`assets/publications/publications.json`).pipe(
			map((response) => {
				this.publications = response.publications.map((project) => {
					return project
				})
				
				return this.publications
			})
		)
	}

}
