import { endpoints } from './constants'
import type { Word } from './types'

export {
  list,
  list2
}

/**
 * Get a list of all words or Get a list of words filtered by args
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function list(args?: string, init?: RequestInit): Promise<Word[]> {
  const url = args
    ? new URL(
        endpoints.list.filter_url.replace('{args}', args).replace('%', '%25')
      )
    : new URL(endpoints.list.base_url)
  const response = await fetch(url.toString(), init)
  return (await response.json()) as Word[]
}

/**
 * Get a list of all words or Get a list of words filtered by args, with digraph checking options
 * @param {"true" | "false" | "maybe"} c check digraphs option
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function list2(c: "true" | "false" | "maybe", args?: string, init?: RequestInit): Promise<Word[]> {
  if (args === undefined) args = "";
  const url = new URL(
    endpoints.list.filter_digraphs_url
      .replace('{c}', c)
      .replace('{args}', args)
      .replaceAll('%', '%25')
  );
  const response = await fetch(url.toString(), init)
  return (await response.json()) as Word[]
}
