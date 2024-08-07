import { endpoints } from './constants'
import type { Word } from './types'

/**
 * Get given number of random words, optionally filtered by args
 * @param {number} n number of random words to get
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
export async function random(
  n: number,
  args?: string,
  init?: RequestInit
): Promise<Word[]> {
  if (args) {
    const url = endpoints.random_filter_url
      .replace('{n}', n.toString())
      .replace('{args}', args)
    const response = await fetch(url, init)
    return (await response.json()) as Word[]
  }
  const url = endpoints.random_url.replace('{n}', n.toString())
  const response = await fetch(url, init)
  return (await response.json()) as Word[]
}
