import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  public returnUrl: string;
  public loading: boolean = false;
  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private currentRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required],
    });
    this.returnUrl = this.currentRoute.snapshot.queryParams['returnUrl'] || '/orders';
  }

  get fields() {
    return this.loginForm.controls;
  }

  public onSubmit() {
    this.loading = true;
    this.subscription = this.authService.login(this.fields.username.value, this.fields.password.value)
    .pipe(first())
    .subscribe(
      (data) => {
        this.router.navigate([this.returnUrl]);
      },
      (err) => {
        this.loading = false;
      }
    )
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
