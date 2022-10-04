import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router, 
        private loginService: LoginService
        ) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (!this.loginService.status) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
