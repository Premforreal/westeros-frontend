/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { login } from '../fn/auth-controller/login';
import { Login$Params } from '../fn/auth-controller/login';
import { logout } from '../fn/auth-controller/logout';
import { Logout$Params } from '../fn/auth-controller/logout';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authControllerLogin()` */
  static readonly AuthControllerLoginPath = '/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params?: Login$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'token'?: string;
'user'?: User;
}>> {
    return login(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params?: Login$Params, context?: HttpContext): Observable<{
'token'?: string;
'user'?: User;
}> {
    return this.login$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'token'?: string;
'user'?: User;
}>): {
'token'?: string;
'user'?: User;
} => r.body)
    );
  }

  /** Path part for operation `authControllerLogout()` */
  static readonly AuthControllerLogoutPath = '/auth/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logout()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout$Response(params?: Logout$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'success'?: boolean;
'data'?: {
};
}>> {
    return logout(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logout(params?: Logout$Params, context?: HttpContext): Observable<{
'success'?: boolean;
'data'?: {
};
}> {
    return this.logout$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'success'?: boolean;
'data'?: {
};
}>): {
'success'?: boolean;
'data'?: {
};
} => r.body)
    );
  }

}
