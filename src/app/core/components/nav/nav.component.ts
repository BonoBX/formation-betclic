import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  public currentUser: User;
  public subscription: Subscription;

  constructor(
    private router: Router,
    private authService : AuthenticationService
  ) {
    this.subscription = this.authService.currentUser$.subscribe(
      (user) => this.currentUser = user
    );
  }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
