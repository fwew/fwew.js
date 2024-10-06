import { endpoints } from './constants'
import { Version } from './types'

export { version }

/**
 * Get the version of fwew-api, fwew-lib, and the dictionary
 * @returns {Promise<Version>}
 */
async function version(): Promise<Version> {
  const url = endpoints.util.version_url
  const response = await fetch(url)
  return (await response.json()) as Version
}
