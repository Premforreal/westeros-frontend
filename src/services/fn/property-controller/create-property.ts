/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Property } from '../../models/property';

export interface CreateProperty$Params {
      body?: {
}
}

export function createProperty(http: HttpClient, rootUrl: string, params?: CreateProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<Property>> {
  const rb = new RequestBuilder(rootUrl, createProperty.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

createProperty.PATH = '/properties';
