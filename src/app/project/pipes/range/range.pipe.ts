import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let arr = new Array(value)
    arr = arr.fill(0).map((v, i) => i)
    return arr
  }

}
