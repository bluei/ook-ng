import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  /* Always 4 parts to an output property
    1 create the property and assign it a new event emitter
    2 go to the method (cancel in this case) and emit some data
    3 go to the parent (Home) component and add the event to the componenent
      EX: <app-register [valuesFromHome]="values" (cancelRegister)="cancelRegisterMode($event)"></app-register>
    SO the cancel event in this Register component emits the cancelRegister event (false) in the home component
  */

  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('registration successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
