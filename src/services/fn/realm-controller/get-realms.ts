/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Realm } from '../../models/realm';

export interface GetRealms$Params {
}

export function getRealms(http: HttpClient, rootUrl: string, params?: GetRealms$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Realm>>> {
  const rb = new RequestBuilder(rootUrl, getRealms.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Realm>>;
    })
  );
}

getRealms.PATH = '/realms';
