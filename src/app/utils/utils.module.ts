import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicSrcSetPipe } from './pic-src-set.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PicSrcSetPipe],
  exports: [PicSrcSetPipe]
})
export class UtilsModule { }
