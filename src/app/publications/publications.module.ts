import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationsListComponent } from './publications-list/publications-list.component';
import { PublicationsService } from './publications.service';
import { UtilsModule } from '../utils/utils.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
	CommonModule,
	HttpClientModule,
	PublicationsRoutingModule,
	UtilsModule,
  ],
  declarations: [PublicationsListComponent],
  providers: [PublicationsService],
})
export class PublicationsModule { }
