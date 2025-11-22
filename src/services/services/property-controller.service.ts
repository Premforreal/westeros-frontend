/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createProperty } from '../fn/property-controller/create-property';
import { CreateProperty$Params } from '../fn/property-controller/create-property';
import { deleteProperty } from '../fn/property-controller/delete-property';
import { DeleteProperty$Params } from '../fn/property-controller/delete-property';
import { getProperties } from '../fn/property-controller/get-properties';
import { GetProperties$Params } from '../fn/property-controller/get-properties';
import { getProperty } from '../fn/property-controller/get-property';
import { GetProperty$Params } from '../fn/property-controller/get-property';
import { Property } from '../models/property';
import { updateProperty } from '../fn/property-controller/update-property';
import { UpdateProperty$Params } from '../fn/property-controller/update-property';

@Injectable({ providedIn: 'root' })
export class PropertyControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `propertyControllerGetProperty()` */
  static readonly PropertyControllerGetPropertyPath = '/properties/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProperty()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProperty$Response(params: GetProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<Property>> {
    return getProperty(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProperty$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProperty(params: GetProperty$Params, context?: HttpContext): Observable<Property> {
    return this.getProperty$Response(params, context).pipe(
      map((r: StrictHttpResponse<Property>): Property => r.body)
    );
  }

  /** Path part for operation `propertyControllerUpdateProperty()` */
  static readonly PropertyControllerUpdatePropertyPath = '/properties/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProperty()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProperty$Response(params: UpdateProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<Property>> {
    return updateProperty(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProperty$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProperty(params: UpdateProperty$Params, context?: HttpContext): Observable<Property> {
    return this.updateProperty$Response(params, context).pipe(
      map((r: StrictHttpResponse<Property>): Property => r.body)
    );
  }

  /** Path part for operation `propertyControllerDeleteProperty()` */
  static readonly PropertyControllerDeletePropertyPath = '/properties/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProperty()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProperty$Response(params: DeleteProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteProperty(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProperty$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProperty(params: DeleteProperty$Params, context?: HttpContext): Observable<void> {
    return this.deleteProperty$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `propertyControllerGetProperties()` */
  static readonly PropertyControllerGetPropertiesPath = '/properties';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProperties()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProperties$Response(params?: GetProperties$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Property>>> {
    return getProperties(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProperties$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProperties(params?: GetProperties$Params, context?: HttpContext): Observable<Array<Property>> {
    return this.getProperties$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Property>>): Array<Property> => r.body)
    );
  }

  /** Path part for operation `propertyControllerCreateProperty()` */
  static readonly PropertyControllerCreatePropertyPath = '/properties';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createProperty()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProperty$Response(params?: CreateProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<Property>> {
    return createProperty(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createProperty$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProperty(params?: CreateProperty$Params, context?: HttpContext): Observable<Property> {
    return this.createProperty$Response(params, context).pipe(
      map((r: StrictHttpResponse<Property>): Property => r.body)
    );
  }

}
