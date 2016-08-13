import { PolymerElement } from '@vaadin/angular2-polymer';
import { FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'poly-app',
  templateUrl: 'poly.component.html',
  styleUrls: ['poly.component.css'],
  directives: [
    PolymerElement('paper-scroll-header-panel'),
    PolymerElement('paper-toolbar'),
    PolymerElement('paper-input'),
    REACTIVE_FORM_DIRECTIVES,
  ]
})
export class PolyAppComponent implements OnInit {
  title = 'poly works!';

  deviseForm: FormGroup;
  form: Form;


  /**
   * OnInit : Initialisation du formulaire
   */
  ngOnInit() {

    this.deviseForm = new FormGroup({
      code: new FormControl('', []),
      designation: new FormControl('', []),
    });
  }
}
