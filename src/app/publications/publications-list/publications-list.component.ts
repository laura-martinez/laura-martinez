import { Component, OnInit } from '@angular/core'
import { PublicationsService, IPublication } from '../publications.service'

@Component({
	selector: 'lmp-publications-list',
	templateUrl: './publications-list.component.html',
	styleUrls: ['./publications-list.component.scss']
})
export class PublicationsListComponent implements OnInit {

	public publications: IPublication[]

	constructor(
		private publicationsService: PublicationsService
	) { }

	ngOnInit() {
		this.getPublications()
	}

	private getPublications(): void {
		this.publicationsService.getPublications().subscribe((publications) => {
			this.publications = publications
		})
	}

}
