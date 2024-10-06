import { endpoints } from './constants'
import type { LenitionTable, Word } from './types'

export {
  dictLenEN,
  dictLen,
  homonyms,
  lenition,
  multiIPA,
  multiWords,
  oddballs,
  phonemeFrequencyEN,
  phonemeFrequency,
  reefMe,
  validEN,
  valid,
  validWithLimit
}

/**
 * Returns a string saying how long the dict is, in English
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function dictLenEN(init?: RequestInit): Promise<string> {
  const url = endpoints.other.dict_len_en_url
  const response = await fetch(url, init)
  return (await response.json()) as string
}

/**
 * Returns a string saying how long the dict is, in English
 * @param {string} lang results/ui language
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function dictLen(lang: string, init?: RequestInit): Promise<string> {
  const url = endpoints.other.dict_len_url.replace('{lang}', lang)
  const response = await fetch(url, init)
  return (await response.json()) as string
}

/**
 * Returns all the words with more than one dictionary entry
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function homonyms(init?: RequestInit): Promise<Word[][]> {
  const url = endpoints.other.homonyms_url
  const response = await fetch(url, init)
  return (await response.json()) as Word[][]
}

/**
 * Get the Na'vi lenition table
 * @returns {Promise<LenitionTable>}
 */
async function lenition(): Promise<LenitionTable> {
  const url = endpoints.other.lenition_url
  const response = await fetch(url)
  return (await response.json()) as LenitionTable
}

/**
 * Returns all the words with multiple IPAs
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function multiIPA(init?: RequestInit): Promise<Word[][]> {
  const url = endpoints.other.multi_ipa_url
  const response = await fetch(url, init)
  return (await response.json()) as Word[][]
}

/**
 * Get the multi-word Na'vi words
 * i.e., those Na'vi words that are spelled with at least one space character
 * @returns {Promise<Word[]>}
 */
async function multiWords(): Promise<Word[]> {
  const url = endpoints.other.multiword_url
  const response = await fetch(url)
  return (await response.json()) as Word[]
}

/**
 * Returns all the words which fall outside normal Na'vi phonotactics
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function oddballs(init?: RequestInit): Promise<Word[][]> {
  const url = endpoints.other.oddballs_url
  const response = await fetch(url, init)
  return (await response.json()) as Word[][]
}

/**
 * Returns a map of how often every phoneme appears in Na'vi, in English
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string[][][]>}
 */
async function phonemeFrequencyEN(init?: RequestInit): Promise<string[][][]> {
  const url = endpoints.other.phonemes_en_url
  const response = await fetch(url, init)
  return (await response.json()) as Promise<string[][][]>
}

/**
 * Returns a map of how often every phoneme appears in Na'vi
 * @param {string} lang results/ui language
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string[][][]>}
 */
async function phonemeFrequency(
  lang: string,
  init?: RequestInit
): Promise<string[][][]> {
  const url = endpoints.other.phonemes_url.replace('{lang}', lang)
  const response = await fetch(url, init)
  return (await response.json()) as Promise<string[][][]>
}

/**
 * Returns reef dialect spelling and IPA given interdialect IPA
 * @param {string} ipa IPA of forest words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string[]>}
 */
async function reefMe(ipa: string, init?: RequestInit): Promise<string[]> {
  const url = new URL(endpoints.other.reef_ipa_url.replace('{i}', ipa))
  const response = await fetch(url.toString(), init)
  return (await response.json()) as string[]
}

/**
 * Returns whether the given string is valid Na'vi, in English
 * @param {string} words words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function validEN(words: string, init?: RequestInit): Promise<string> {
  const url = new URL(endpoints.other.validity_en_url.replace('{i}', words))
  const response = await fetch(url.toString(), init)
  return (await response.json()) as string
}

/**
 * Returns whether the given string is valid Na'vi
 * @param {string} lang
 * @param {string} words words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function valid(
  lang: string,
  words: string,
  init?: RequestInit
): Promise<string> {
  const url = new URL(
    endpoints.other.validity_url.replace('{lang}', lang).replace('{i}', words)
  )
  const response = await fetch(url.toString(), init)
  return (await response.json()) as string
}

/**
 * Returns whether the given string is valid Na'vi
 * @param {string} lang
 * @param {string} words words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function validWithLimit(
  lang: string,
  words: string,
  init?: RequestInit
): Promise<string> {
  const url = new URL(
    endpoints.other.validity_discord_url
      .replace('{lang}', lang)
      .replace('{i}', words)
  )
  const response = await fetch(url.toString(), init)
  return (await response.json()) as string
}
