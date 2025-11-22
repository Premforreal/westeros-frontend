/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getProductConfig } from '../fn/product-config-controller/get-product-config';
import { GetProductConfig$Params } from '../fn/product-config-controller/get-product-config';
import { ProductConfig } from '../models/product-config';

@Injectable({ providedIn: 'root' })
export class ProductConfigControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productConfigControllerGetProductConfig()` */
  static readonly ProductConfigControllerGetProductConfigPath = '/product-config';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductConfig()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductConfig$Response(params?: GetProductConfig$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductConfig>> {
    return getProductConfig(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductConfig$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductConfig(params?: GetProductConfig$Params, context?: HttpContext): Observable<ProductConfig> {
    return this.getProductConfig$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductConfig>): ProductConfig => r.body)
    );
  }

}
