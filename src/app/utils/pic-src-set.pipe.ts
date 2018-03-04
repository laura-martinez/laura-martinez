import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'picSrcSet'
})
export class PicSrcSetPipe implements PipeTransform {

  transform(sources: string[], args?: any): any {
    return sources.map((source, index) => {
		if(index === 0) {
			return source
		}
		return `${source} ${index+1}x`
	}).join(', ');
  }

}
