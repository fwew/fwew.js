import { endpoints } from './constants'
import type { Word } from './types'

/**
 * Returns all the words with multiple IPAs
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function multiIPA(init?: RequestInit): Promise<Word[][]> {
  const url = endpoints.multi_ipa_url
  const response = await fetch(url, init)
  const data = (await response.json()) as Word[][]
  return data
}

/**
 * Returns all the words which fall outside of normal Na'vi phonotactics
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function oddballs(init?: RequestInit): Promise<Word[][]> {
  const url = endpoints.oddballs_url
  const response = await fetch(url, init)
  const data = (await response.json()) as Word[][]
  return data
}

/**
 * Returns all the words with more than one dictionary entry
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function homonyms(init?: RequestInit): Promise<Word[][]> {
  const url = endpoints.oddballs_url
  const response = await fetch(url, init)
  const data = (await response.json()) as Word[][]
  return data
}

/**
 * Returns whether or not the given string is valid Na'vi
 * @param {RequestInit | undefined} init fetch options (optional)
 * @param {string} words words to search
 * @returns {Promise<Word[][]>}
 */
async function valid(words: string, init?: RequestInit): Promise<String> {
  const url = endpoints.validity_url.replace('{i}', words)
  const response = await fetch(url, init)
  const data = (await response.json()) as String
  return data
}

/**
 * Returns a string saying how long the dict is
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function dictLen(init?: RequestInit): Promise<String> {
  const url = endpoints.dict_len_url
  const response = await fetch(url, init)
  const data = (await response.json()) as String
  return data
}

/**
 * Returns whether or not the given string is valid Na'vi
 * @param {RequestInit | undefined} init fetch options (optional)
 * @param {string} words words to search
 * @returns {Promise<Word[][]>}
 */
async function reefMe(words: string, init?: RequestInit): Promise<String[]> {
  const url = endpoints.reef_ipa_url.replace('{i}', words)
  const response = await fetch(url, init)
  const data = (await response.json()) as String[]
  return data
}

/**
 * Returns whether or not the given string is valid Na'vi
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function phonemeFrequency(init?: RequestInit): Promise<Map<string,Map<string,Map<string,number>>>> {
  const url = endpoints.reef_ipa_url
  const response = await fetch(url, init)
  const data = (await response.json()) as Promise<Map<string,Map<string,Map<string,number>>>>
  return data
}

export { multiIPA, oddballs, homonyms, valid, dictLen, reefMe, phonemeFrequency }