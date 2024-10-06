import { endpoints } from './constants'
import type { Word } from './types'

export {
  random,
  random2
}

/**
 * Get given number of random words, optionally filtered by args
 * @param {number} n number of random words to get
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function random(
  n: number,
  args?: string,
  init?: RequestInit
): Promise<Word[]> {
  if (args) {
    const url = new URL(
      endpoints.random.filter_url
        .replace('{n}', n.toString())
        .replace('{args}', args)
        .replaceAll('%', '%25')
    )
    const response = await fetch(url.toString(), init)
    return (await response.json()) as Word[]
  }
  const url = new URL(
    endpoints.random.base_url
      .replace('{n}', n.toString())
  )
  const response = await fetch(url.toString(), init)
  return (await response.json()) as Word[]
}

/**
 * Get given number of random words, optionally filtered by args, with digraph checking options
 * @param {number} n number of random words to get
 * @param {"true" | "false" | "maybe"} c check digraphs option
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function random2(
  n: number,
  c: "true" | "false" | "maybe",
  args?: string,
  init?: RequestInit
): Promise<Word[]> {
  if (args) {
    const url = new URL(
      endpoints.random.filter_digraphs_url
        .replace('{n}', n.toString())
        .replace('{c}', c)
        .replace('{args}', args)
        .replaceAll('%', '%25')
    )
    const response = await fetch(url.toString(), init)
    return (await response.json()) as Word[]
  }
  const url = new URL(
    endpoints.random.digraphs_url
      .replace('{n}', n.toString())
      .replace('{c}', c)
  )
  const response = await fetch(url.toString(), init)
  return (await response.json()) as Word[]
}