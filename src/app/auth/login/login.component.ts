import { Component, OnInit } from '@angular/core';
import{FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.fb.group({
    userName:[''],
    password:['']
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
