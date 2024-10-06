import { endpoints } from './constants'
import type { LanguageCode, Word } from './types'

export {
  fwew,
  fwewReverse,
  fwew1D,
  fwew1DReverse,
  fwewSimple,
  search
}

/**
 * Search 1 or more words Na'vi -> Local
 * @param {string} navi Na'vi words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function fwew(navi: string, init?: RequestInit): Promise<Word[][]> {
  if (navi === '') return [[]]
  const url = endpoints.fwew.nav_url.replace('{nav}', navi)
  const response = await fetch(url, init)
  return (await response.json()) as Word[][]
}

/**
 * Search 1 or more words Local -> Na'vi
 * @param {LanguageCode} lang language code
 * @param {string} local local words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function fwewReverse(
  lang: LanguageCode,
  local: string,
  init?: RequestInit
): Promise<Word[][]> {
  if (local === '') return [[]]
  const url = endpoints.fwew.reverse_url
    .replace('{lang}', lang)
    .replace('{local}', local)
  const response = await fetch(url, init)
  return (await response.json()) as Word[][]
}

/**
 * Search 1 or more words Na'vi -> Local, return only 1D array
 * @param {string} navi Na'vi words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function fwew1D(navi: string, init?: RequestInit): Promise<Word[]> {
  if (navi === '') return []
  const url = endpoints.fwew.flat_url.replace('{nav}', navi)
  const response = await fetch(url, init)
  return (await response.json()) as Word[]
}

/**
 * Search 1 or more words Local -> Na'vi, return only 1D array
 * @param {LanguageCode} lang language code
 * @param {string} local local words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function fwew1DReverse(
  lang: LanguageCode,
  local: string,
  init?: RequestInit
): Promise<Word[]> {
  if (local === '') return []
  const url = endpoints.fwew.flat_reverse_url
    .replace('{lang}', lang)
    .replace('{local}', local)
  const response = await fetch(url, init)
  return (await response.json()) as Word[]
}

/**
 * Search 1 or more words Na'vi -> Local, ignoring all affixed words
 * Use this only when you know you are searching a listed root word
 * @param {string} navi Na'vi words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function fwewSimple(navi: string, init?: RequestInit): Promise<Word[][]> {
  if (navi === '') return [[]]
  const url = endpoints.fwew.simple_url.replace('{nav}', navi)
  const response = await fetch(url, init)
  return (await response.json()) as Word[][]
}

/**
 * Search 1 or more words in both directions (Na'vi first)
 * @param {LanguageCode} lang language code
 * @param {string} words words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function search(
  lang: LanguageCode,
  words: string,
  init?: RequestInit
): Promise<Word[][]> {
  if (words === '') return [[]]
  const url = endpoints.fwew.search_url
    .replace('{lang}', lang)
    .replace('{words}', words)
  const response = await fetch(url, init)
  return (await response.json()) as Word[][]
}
