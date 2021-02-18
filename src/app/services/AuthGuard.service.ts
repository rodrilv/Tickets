import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        if (!this.loginService.status) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
