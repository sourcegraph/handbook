/**
 * %-Encodes a path component of a URI.
 *
 * It encodes all special characters except forward slashes and the plus sign `+`. The plus sign only has meaning
 * as a space in the query component of a URL, because its special meaning is defined for the
 * `application/x-www-form-urlencoded` MIME type, which is used for queries. It is not part of the general
 * `%`-encoding for URLs.
 *
 * @param {string} component A path component of a URL.
 * @returns {string} The path component with special characters encoded.
 */
export const encodeURIPathComponent = component =>
    component.split('/').map(encodeURIComponent).join('/').replace(/%2B/g, '+')
