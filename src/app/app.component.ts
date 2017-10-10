import { Component } from '@angular/core';
import { CoreComponent } from './core/core.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  entryComponents: [CoreComponent]
})
export class AppComponent {
}
