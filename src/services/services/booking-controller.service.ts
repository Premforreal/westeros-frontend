/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Booking } from '../models/booking';
import { createBooking } from '../fn/booking-controller/create-booking';
import { CreateBooking$Params } from '../fn/booking-controller/create-booking';
import { getBooking } from '../fn/booking-controller/get-booking';
import { GetBooking$Params } from '../fn/booking-controller/get-booking';
import { getBookings } from '../fn/booking-controller/get-bookings';
import { GetBookings$Params } from '../fn/booking-controller/get-bookings';

@Injectable({ providedIn: 'root' })
export class BookingControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `bookingControllerGetBooking()` */
  static readonly BookingControllerGetBookingPath = '/bookings/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBooking()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBooking$Response(params: GetBooking$Params, context?: HttpContext): Observable<StrictHttpResponse<Booking>> {
    return getBooking(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBooking$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBooking(params: GetBooking$Params, context?: HttpContext): Observable<Booking> {
    return this.getBooking$Response(params, context).pipe(
      map((r: StrictHttpResponse<Booking>): Booking => r.body)
    );
  }

  /** Path part for operation `bookingControllerGetBookings()` */
  static readonly BookingControllerGetBookingsPath = '/bookings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBookings()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookings$Response(params?: GetBookings$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Booking>>> {
    return getBookings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBookings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBookings(params?: GetBookings$Params, context?: HttpContext): Observable<Array<Booking>> {
    return this.getBookings$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Booking>>): Array<Booking> => r.body)
    );
  }

  /** Path part for operation `bookingControllerCreateBooking()` */
  static readonly BookingControllerCreateBookingPath = '/bookings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createBooking()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createBooking$Response(params?: CreateBooking$Params, context?: HttpContext): Observable<StrictHttpResponse<Booking>> {
    return createBooking(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createBooking$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createBooking(params?: CreateBooking$Params, context?: HttpContext): Observable<Booking> {
    return this.createBooking$Response(params, context).pipe(
      map((r: StrictHttpResponse<Booking>): Booking => r.body)
    );
  }

}
