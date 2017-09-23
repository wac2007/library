import { Component } from '@angular/core';
import { CoreComponent } from './core/core.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [CoreComponent]
})
export class AppComponent {
}
