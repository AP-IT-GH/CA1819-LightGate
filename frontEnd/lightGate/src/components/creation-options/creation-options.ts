import { Component } from '@angular/core';

/**
 * Generated class for the CreationOptionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'creation-options',
  templateUrl: 'creation-options.html'
})
export class CreationOptionsComponent {

  text: string;

  constructor() {
    console.log('Hello CreationOptionsComponent Component');
    this.text = 'Hello World';
  }

}
