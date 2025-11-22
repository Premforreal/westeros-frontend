/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Property } from '../../models/property';

export interface GetProperty$Params {
  id: string;
}

export function getProperty(http: HttpClient, rootUrl: string, params: GetProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<Property>> {
  const rb = new RequestBuilder(rootUrl, getProperty.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Property>;
    })
  );
}

getProperty.PATH = '/properties/{id}';
