import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
    constructor( private userService: UserService, private router: Router,
        private alertify: AlertifyService, private authService: AuthService) { }

    // This gets the data from our route, rather than going directly to the user service
    // from the component. It gets the data before we activate the route itself.
    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        console.log('Hit member edit resolver');
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem retreiving your user data.');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }

}