/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getMenu } from '../fn/menu-controller/get-menu';
import { GetMenu$Params } from '../fn/menu-controller/get-menu';
import { MenuItem } from '../models/menu-item';

@Injectable({ providedIn: 'root' })
export class MenuControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `menuControllerGetMenu()` */
  static readonly MenuControllerGetMenuPath = '/menu';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMenu()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMenu$Response(params?: GetMenu$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MenuItem>>> {
    return getMenu(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMenu$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMenu(params?: GetMenu$Params, context?: HttpContext): Observable<Array<MenuItem>> {
    return this.getMenu$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MenuItem>>): Array<MenuItem> => r.body)
    );
  }

}
