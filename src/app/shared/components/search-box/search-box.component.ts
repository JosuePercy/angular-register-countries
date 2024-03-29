import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input({ required: true })
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();


  emitValue( value: string): void{
    this.onValue.emit(value)

  }

}
