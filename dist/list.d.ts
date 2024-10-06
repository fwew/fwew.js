import type { Word } from './types';
export { list, list2 };
/**
 * Get a list of all words or Get a list of words filtered by args
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
declare function list(args?: string, init?: RequestInit): Promise<Word[]>;
/**
 * Get a list of all words or Get a list of words filtered by args, with digraph checking options
 * @param {"true" | "false" | "maybe"} c check digraphs option
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
declare function list2(c: "true" | "false" | "maybe", args?: string, init?: RequestInit): Promise<Word[]>;
