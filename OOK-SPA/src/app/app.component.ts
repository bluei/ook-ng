import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService) { }

  // this runs when the app loads
  ngOnInit() {
    const token = localStorage.getItem('token');

    // Because the user in local storage is a string, to convert it back to a User object
    // we need to use JSON.parse (where JSON.stringify originally made the object a string)
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (user) {
      this.authService.currentUser = user;

      // once a response comes back (user) we run the changeMemberPhoto to set the image.
      this.authService.changeMemberPhoto(user.photoUrl);
    }
  }

}
