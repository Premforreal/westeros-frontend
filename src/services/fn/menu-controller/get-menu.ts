/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MenuItem } from '../../models/menu-item';

export interface GetMenu$Params {
}

export function getMenu(http: HttpClient, rootUrl: string, params?: GetMenu$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MenuItem>>> {
  const rb = new RequestBuilder(rootUrl, getMenu.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MenuItem>>;
    })
  );
}

getMenu.PATH = '/menu';
