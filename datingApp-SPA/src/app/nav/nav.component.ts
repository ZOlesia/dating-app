import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  user: string;
  constructor(private _authService: AuthService) { } // injecting auth service to our constructor and importing AuthService

  ngOnInit() {
  }

  login() {
    this._authService.login(this.model).subscribe(next => {
      console.log('logged in successfully');
    }, error => {
      console.log('failed');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    this.user = this.model.username;
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
