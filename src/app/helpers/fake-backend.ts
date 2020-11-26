import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, dematerialize, delay } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';


let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch(true) {
        case url.endsWith('/users/authenticate') && method == "POST":
          return authenticate();
        case url.endsWith('/users/register') && method == "POST":
          return register();
        case url.endsWith('/users') && method == "GET":
          return getUsers();
        case url.match(/\users\/d+$/) && method == "DELETE":
            return deleteUser();
        default:
          return next.handle(request);
      }
    }

    function authenticate() {
      const {username, password } = body;
      const user = users.find(x => x.username === username && x.password === password);
      if (!user) {
        return error('');
      }
      return ok({
        id: user.id,
        username: user.username,
        firstname: user.firstname,
        lasstname: user.lasstname,
        token: 'fake-jwt-token'
      })
    }

    function register() {
      const user = body;
      if (users.find(x => x.username == user.username)) {
        return error(`Username ${user.username} existe déjà`);
      }
      user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    function getUsers() {
      if (!isLoggedIn()) {
        return unauthorized();
      }
      return ok(users);
    }

    function deleteUser() {
      if (!isLoggedIn()) {
        return unauthorized();
      }
      users = users.filter(x => x.id !== idFromUrl());
      localStorage.setItem('users',  JSON.stringify(users));
      return ok();
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message }});
    }

    function unauthorized() {
      return throwError({ status: 401, error: {message: 'Unauthorized'} });
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
  }
}

export const fakeBackendProvider = {
  provider: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
  provide: FakeBackendInterceptor
}
