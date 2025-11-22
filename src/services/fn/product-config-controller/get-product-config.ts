/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductConfig } from '../../models/product-config';

export interface GetProductConfig$Params {
}

export function getProductConfig(http: HttpClient, rootUrl: string, params?: GetProductConfig$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductConfig>> {
  const rb = new RequestBuilder(rootUrl, getProductConfig.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductConfig>;
    })
  );
}

getProductConfig.PATH = '/product-config';
