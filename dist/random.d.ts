import type { Word } from './types';
export { random, random2 };
/**
 * Get given number of random words, optionally filtered by args
 * @param {number} n number of random words to get
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
declare function random(n: number, args?: string, init?: RequestInit): Promise<Word[]>;
/**
 * Get given number of random words, optionally filtered by args, with digraph checking options
 * @param {number} n number of random words to get
 * @param {"true" | "false" | "maybe"} c check digraphs option
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
declare function random2(n: number, c: "true" | "false" | "maybe", args?: string, init?: RequestInit): Promise<Word[]>;
