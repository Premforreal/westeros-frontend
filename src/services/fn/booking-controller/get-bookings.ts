/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Booking } from '../../models/booking';

export interface GetBookings$Params {
  userId?: string;
  propertyId?: string;
  page?: number;
  limit?: number;
}

export function getBookings(http: HttpClient, rootUrl: string, params?: GetBookings$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Booking>>> {
  const rb = new RequestBuilder(rootUrl, getBookings.PATH, 'get');
  if (params) {
    rb.query('userId', params.userId, {});
    rb.query('propertyId', params.propertyId, {});
    rb.query('page', params.page, {});
    rb.query('limit', params.limit, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Booking>>;
    })
  );
}

getBookings.PATH = '/bookings';
