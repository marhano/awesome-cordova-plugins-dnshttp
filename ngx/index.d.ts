import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name dnshttp
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { dnshttp } from '@awesome-cordova-plugins/dnshttp';
 *
 *
 * constructor(private dnshttp: dnshttp) { }
 *
 * ...
 *
 *
 * this.dnshttp.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
/**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * @publicApi
 **/
export declare interface HttpParameterCodec {
    encodeKey(key: string): string;
    encodeValue(value: string): string;
    decodeKey(key: string): string;
    decodeValue(value: string): string;
}
/**
 * Options used to construct an `HttpParams` instance.
 *
 * @publicApi
 */
export declare interface HttpParamsOptions {
    /**
     * String representation of the HTTP parameters in URL-query-string format.
     * Mutually exclusive with `fromObject`.
     */
    fromString?: string;
    /** Object map of the HTTP parameters. Mutually exclusive with `fromString`. */
    fromObject?: {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    /** Encoding codec used to parse and serialize the parameters. */
    encoder?: HttpParameterCodec;
}
export declare class HttpParams {
    private map;
    private encoder;
    private updates;
    private cloneFrom;
    constructor(options?: HttpParamsOptions);
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param param The parameter name.
     * @returns True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param: string): boolean;
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param: string): string | null;
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param: string): string[] | null;
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */
    keys(): string[];
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */
    append(param: string, value: string | number | boolean): HttpParams;
    /**
     * Constructs a new body with appended values for the given parameter name.
     * @param params parameters and values
     * @return A new body with the new value.
     */
    appendAll(params: {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    }): HttpParams;
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */
    set(param: string, value: string | number | boolean): HttpParams;
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param: string, value?: string | number | boolean): HttpParams;
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    toString(): string;
    private clone;
    private init;
}
/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
export declare class HttpHeaders {
    /**
     * Internal map of lowercase header names to values.
     */
    private headers;
    /**
     * Internal map of lowercased header names to the normalized
     * form of the name (the form seen first).
     */
    private normalizedNames;
    /**
     * Complete the lazy initialization of this object (needed before reading).
     */
    private lazyInit;
    /**
     * Queued updates to be materialized the next initialization.
     */
    private lazyUpdate;
    /**  Constructs a new HTTP header object with the given values.*/
    constructor(headers?: string | {
        [name: string]: string | number | (string | number)[];
    } | Headers);
    /**
     * Checks for existence of a given header.
     *
     * @param name The header name to check for existence.
     *
     * @returns True if the header exists, false otherwise.
     */
    has(name: string): boolean;
    /**
     * Retrieves the first value of a given header.
     *
     * @param name The header name.
     *
     * @returns The value string if the header exists, null otherwise
     */
    get(name: string): string | null;
    /**
     * Retrieves the names of the headers.
     *
     * @returns A list of header names.
     */
    keys(): string[];
    /**
     * Retrieves a list of values for a given header.
     *
     * @param name The header name from which to retrieve values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    getAll(name: string): string[] | null;
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param name The header name for which to append the values.
     * @param value The value to append.
     *
     * @returns A clone of the HTTP headers object with the value appended to the given header.
     */
    append(name: string, value: string | string[]): HttpHeaders;
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param name The header name.
     * @param value The value or values to set or override for the given header.
     *
     * @returns A clone of the HTTP headers object with the newly set header value.
     */
    set(name: string, value: string | string[]): HttpHeaders;
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param name The header name.
     * @param value The value or values to delete for the given header.
     *
     * @returns A clone of the HTTP headers object with the given value deleted.
     */
    delete(name: string, value?: string | string[]): HttpHeaders;
    private maybeSetNormalizedName;
    private init;
    private copyFrom;
    private clone;
    private applyUpdate;
    private setHeaderEntries;
}
export declare class dnshttp extends AwesomeCordovaNativePlugin {
    /**
     * Constructs a `POST` request that interprets the body as a `Blob` and returns the full
     * `HttpResponse`.
     *
     * @param url The endpoint URL.
     * @param body The content to replace with.
     * @param options HTTP options
     *
     * @return An `Observable` of the `HttpResponse` for the request,
     * with the response body as a `Blob`.
     */
    post(url: string, body: any | null, options: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: any;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
        transferCache?: {
            includeHeaders?: string[];
        } | boolean;
        dnsServer?: string;
    }): Promise<any>;
}
