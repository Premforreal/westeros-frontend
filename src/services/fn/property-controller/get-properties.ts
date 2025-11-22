/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Property } from '../../models/property';

export interface GetProperties$Params {
  ownerId?: string;
  q?: string;
  page?: number;
  limit?: number;
}

export function getProperties(http: HttpClient, rootUrl: string, params?: GetProperties$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Property>>> {
  const rb = new RequestBuilder(rootUrl, getProperties.PATH, 'get');
  if (params) {
    rb.query('ownerId', params.ownerId, {});
    rb.query('q', params.q, {});
    rb.query('page', params.page, {});
    rb.query('limit', params.limit, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Property>>;
    })
  );
}

getProperties.PATH = '/properties';
