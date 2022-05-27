import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  rootClassName: string = ''
  @Input()
  heading11: string = 'Maxwells Pest Control'
  @Input()
  heading1: string = 'Maxwells Pest Control'

  constructor() {}
}
