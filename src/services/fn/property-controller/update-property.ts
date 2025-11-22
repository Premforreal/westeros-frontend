/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Property } from '../../models/property';

export interface UpdateProperty$Params {
  id: string;
      body?: {
}
}

export function updateProperty(http: HttpClient, rootUrl: string, params: UpdateProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<Property>> {
  const rb = new RequestBuilder(rootUrl, updateProperty.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

updateProperty.PATH = '/properties/{id}';
