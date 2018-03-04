import { Component, OnInit } from '@angular/core';

export interface INavigationSection {
	name: string,
	url: string | string[],
	subsections?: {
		name: string,
		url: string | string[],
	}[]
}

@Component({
	selector: 'lmp-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	public parentLinkOptions = {
		"exact": false
	}

	public sections: INavigationSection[] = [
		{
			'name': `News`,
			'url': `/news`
		},
		{
			'name': `Projects`,
			'url': [`/projects`, 'list', 'all'],
			'subsections': [
				{
					'name': 'Portraits',
					'url': ['/projects', 'list', 'portrait']
				},
				{
					'name': 'Personal',
					'url': ['/projects', 'list', 'personal']
				},
				{
					'name': 'Photo Books',
					'url': ['/projects', 'list', 'photo-book']
				}
			]
		},
		{
			'name': `Publications`,
			'url': `/publications`
		},
		{
			'name': `About`,
			'url': `/about`
		},
		{
			'name': `Contact`,
			'url': `/contact`
		}
	]

	constructor() { }

	ngOnInit() {
	}

}
