/**
 * Returns a copy of the object which does not contain any fields that have a
 * value of `undefined`. Those fields are omitted entirely in the returned
 * object.
 *
 * This is a workaround for the limitation of Next.js in which undefined fields
 * throw an error during serialization.
 *
 * Next.js discussion: https://github.com/vercel/next.js/discussions/11209
 */
export default function omitUndefinedFields<T>(object: T): T {
    if (object && typeof object === 'object') {
        return Object.fromEntries(
            Object.entries(object)
                .filter(([, value]) => value !== undefined)
                .map(([key, value]) => {
                    if (Array.isArray(value)) {
                        return [key, value.map(omitUndefinedFields)]
                    }
                    return [key, omitUndefinedFields(value)]
                })
        ) as T
    }

    return object
}
