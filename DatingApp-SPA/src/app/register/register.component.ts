import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() valuesFromHome: any = {};
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  Register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('Registeration successfull');
    }, error => {
      console.log(error);
    });
  }

  Cancel() {
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }

}
