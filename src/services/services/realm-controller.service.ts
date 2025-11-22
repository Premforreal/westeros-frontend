/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getRealm } from '../fn/realm-controller/get-realm';
import { GetRealm$Params } from '../fn/realm-controller/get-realm';
import { getRealms } from '../fn/realm-controller/get-realms';
import { GetRealms$Params } from '../fn/realm-controller/get-realms';
import { Realm } from '../models/realm';

@Injectable({ providedIn: 'root' })
export class RealmControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `realmControllerGetRealm()` */
  static readonly RealmControllerGetRealmPath = '/realms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRealm()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRealm$Response(params: GetRealm$Params, context?: HttpContext): Observable<StrictHttpResponse<Realm>> {
    return getRealm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRealm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRealm(params: GetRealm$Params, context?: HttpContext): Observable<Realm> {
    return this.getRealm$Response(params, context).pipe(
      map((r: StrictHttpResponse<Realm>): Realm => r.body)
    );
  }

  /** Path part for operation `realmControllerGetRealms()` */
  static readonly RealmControllerGetRealmsPath = '/realms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRealms()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRealms$Response(params?: GetRealms$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Realm>>> {
    return getRealms(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRealms$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRealms(params?: GetRealms$Params, context?: HttpContext): Observable<Array<Realm>> {
    return this.getRealms$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Realm>>): Array<Realm> => r.body)
    );
  }

}
