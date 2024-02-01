import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

}
