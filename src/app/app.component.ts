import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, faBell, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentIcon: IconDefinition = faBell;
  availableIcons: IconDefinition[] = [];
  constructor(private library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
    this.availableIcons = Object.values({ ...fas, ...far, ...fab });
  }
  showIcons = () => {
    const randomIndex = Math.floor(Math.random() * this.availableIcons.length);
    setTimeout(() => {
      this.currentIcon = this.availableIcons[randomIndex];
      console.log('done!');
    }, 3000);
  };
}
