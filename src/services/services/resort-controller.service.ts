/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getResort } from '../fn/resort-controller/get-resort';
import { GetResort$Params } from '../fn/resort-controller/get-resort';
import { getResorts } from '../fn/resort-controller/get-resorts';
import { GetResorts$Params } from '../fn/resort-controller/get-resorts';
import { Resort } from '../models/resort';

@Injectable({ providedIn: 'root' })
export class ResortControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `resortControllerGetResort()` */
  static readonly ResortControllerGetResortPath = '/resorts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResort()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResort$Response(params: GetResort$Params, context?: HttpContext): Observable<StrictHttpResponse<Resort>> {
    return getResort(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getResort$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResort(params: GetResort$Params, context?: HttpContext): Observable<Resort> {
    return this.getResort$Response(params, context).pipe(
      map((r: StrictHttpResponse<Resort>): Resort => r.body)
    );
  }

  /** Path part for operation `resortControllerGetResorts()` */
  static readonly ResortControllerGetResortsPath = '/resorts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResorts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResorts$Response(params?: GetResorts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Resort>>> {
    return getResorts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getResorts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResorts(params?: GetResorts$Params, context?: HttpContext): Observable<Array<Resort>> {
    return this.getResorts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Resort>>): Array<Resort> => r.body)
    );
  }

}
