import { Version } from './types';
export { version };
/**
 * Get the version of fwew-api, fwew-lib, and the dictionary
 * @returns {Promise<Version>}
 */
declare function version(): Promise<Version>;
