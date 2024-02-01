import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  standalone: true,
  template: `
    <h2 class="">{{title}}</h2>
  `,
  imports: [CommonModule],
})
export class TitleComponent {

  @Input({ required: true })
  public title: string = '';

}
