import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  text=" this is where we'll split - split: " 
  

  transform(text: string ,index: number = 1):string[] {
    let arr = text.split('-'); 
    arr.splice(-1)// split text by "by" parameter
    return arr // after splitting to array return wanted index
  }

}
