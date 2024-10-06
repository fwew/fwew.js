import type { LenitionTable, Word } from './types';
export { dictLenEN, dictLen, homonyms, lenition, multiIPA, multiWords, oddballs, phonemeFrequencyEN, phonemeFrequency, reefMe, validEN, valid, validWithLimit };
/**
 * Returns a string saying how long the dict is, in English
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
declare function dictLenEN(init?: RequestInit): Promise<string>;
/**
 * Returns a string saying how long the dict is, in English
 * @param {string} lang results/ui language
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
declare function dictLen(lang: string, init?: RequestInit): Promise<string>;
/**
 * Returns all the words with more than one dictionary entry
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
declare function homonyms(init?: RequestInit): Promise<Word[][]>;
/**
 * Get the Na'vi lenition table
 * @returns {Promise<LenitionTable>}
 */
declare function lenition(): Promise<LenitionTable>;
/**
 * Returns all the words with multiple IPAs
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
declare function multiIPA(init?: RequestInit): Promise<Word[][]>;
/**
 * Get the multi-word Na'vi words
 * i.e., those Na'vi words that are spelled with at least one space character
 * @returns {Promise<Word[]>}
 */
declare function multiWords(): Promise<Word[]>;
/**
 * Returns all the words which fall outside normal Na'vi phonotactics
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
declare function oddballs(init?: RequestInit): Promise<Word[][]>;
/**
 * Returns a map of how often every phoneme appears in Na'vi, in English
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string[][][]>}
 */
declare function phonemeFrequencyEN(init?: RequestInit): Promise<string[][][]>;
/**
 * Returns a map of how often every phoneme appears in Na'vi
 * @param {string} lang results/ui language
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string[][][]>}
 */
declare function phonemeFrequency(lang: string, init?: RequestInit): Promise<string[][][]>;
/**
 * Returns reef dialect spelling and IPA given interdialect IPA
 * @param {string} ipa IPA of forest words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string[]>}
 */
declare function reefMe(ipa: string, init?: RequestInit): Promise<string[]>;
/**
 * Returns whether the given string is valid Na'vi, in English
 * @param {string} words words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
declare function validEN(words: string, init?: RequestInit): Promise<string>;
/**
 * Returns whether the given string is valid Na'vi
 * @param {string} lang
 * @param {string} words words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
declare function valid(lang: string, words: string, init?: RequestInit): Promise<string>;
/**
 * Returns whether the given string is valid Na'vi
 * @param {string} lang
 * @param {string} words words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
declare function validWithLimit(lang: string, words: string, init?: RequestInit): Promise<string>;
