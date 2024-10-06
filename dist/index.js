'use strict';

const API_BASE = 'https://tirea.learnnavi.org/api';
const endpoints = {
    fwew: {
        nav_url: `${API_BASE}/fwew/{nav}`,
        reverse_url: `${API_BASE}/fwew/r/{lang}/{local}`,
        flat_url: `${API_BASE}/fwew-1d/{nav}`,
        flat_reverse_url: `${API_BASE}/fwew-1d/r/{lang}/{local}`,
        simple_url: `${API_BASE}/fwew-simple/{nav}`,
        search_url: `${API_BASE}/search/{lang}/{words}`,
    },
    list: {
        base_url: `${API_BASE}/list`,
        filter_url: `${API_BASE}/list/{args}`,
        filter_digraphs_url: `${API_BASE}/list2/{c}/{args}`,
    },
    names: {
        alu_url: `${API_BASE}/name/alu/{n}/{s}/{nm}/{am}/{dialect}`,
        full_url: `${API_BASE}/name/full/{ending}/{n}/{s1}/{s2}/{s3}/{dialect}`,
        full_discord_url: `${API_BASE}/name/full/d/{ending}/{n}/{s1}/{s2}/{s3}/{dialect}`,
        single_url: `${API_BASE}/name/single/{n}/{s}/{dialect}`,
    },
    numbers: {
        num_url: `${API_BASE}/number/r/{num}`,
        word_url: `${API_BASE}/number/{word}`,
    },
    other: {
        dict_len_en_url: `${API_BASE}/total-words`,
        dict_len_url: `${API_BASE}/total-words/{lang}`,
        homonyms_url: `${API_BASE}/homonyms`,
        lenition_url: `${API_BASE}/lenition`,
        multi_ipa_url: `${API_BASE}/multi-ipa`,
        multiword_url: `${API_BASE}/multiwordwords`,
        oddballs_url: `${API_BASE}/oddballs`,
        phonemes_en_url: `${API_BASE}/phonemedistros`,
        phonemes_url: `${API_BASE}/phonemedistros/{lang}`,
        reef_ipa_url: `${API_BASE}/reef/{i}`,
        validity_en_url: `${API_BASE}/valid/{i}`,
        validity_url: `${API_BASE}/valid/{lang}/{i}`,
        validity_discord_url: `${API_BASE}/valid/d/{lang}/{i}`,
    },
    random: {
        base_url: `${API_BASE}/random/{n}`,
        filter_url: `${API_BASE}/random/{n}/{args}`,
        digraphs_url: `${API_BASE}/random2/{n}/{c}`,
        filter_digraphs_url: `${API_BASE}/random2/{n}/{c}/{args}`,
    },
    util: {
        version_url: `${API_BASE}/version`,
    }
};

/**
 * Search 1 or more words Na'vi -> Local
 * @param {string} navi Na'vi words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function fwew(navi, init) {
    if (navi === '')
        return [[]];
    const url = endpoints.fwew.nav_url.replace('{nav}', navi);
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Search 1 or more words Local -> Na'vi
 * @param {LanguageCode} lang language code
 * @param {string} local local words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function fwewReverse(lang, local, init) {
    if (local === '')
        return [[]];
    const url = endpoints.fwew.reverse_url
        .replace('{lang}', lang)
        .replace('{local}', local);
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Search 1 or more words Na'vi -> Local, return only 1D array
 * @param {string} navi Na'vi words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function fwew1D(navi, init) {
    if (navi === '')
        return [];
    const url = endpoints.fwew.flat_url.replace('{nav}', navi);
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Search 1 or more words Local -> Na'vi, return only 1D array
 * @param {LanguageCode} lang language code
 * @param {string} local local words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function fwew1DReverse(lang, local, init) {
    if (local === '')
        return [];
    const url = endpoints.fwew.flat_reverse_url
        .replace('{lang}', lang)
        .replace('{local}', local);
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Search 1 or more words Na'vi -> Local, ignoring all affixed words
 * Use this only when you know you are searching a listed root word
 * @param {string} navi Na'vi words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function fwewSimple(navi, init) {
    if (navi === '')
        return [[]];
    const url = endpoints.fwew.simple_url.replace('{nav}', navi);
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Search 1 or more words in both directions (Na'vi first)
 * @param {LanguageCode} lang language code
 * @param {string} words words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function search(lang, words, init) {
    if (words === '')
        return [[]];
    const url = endpoints.fwew.search_url
        .replace('{lang}', lang)
        .replace('{words}', words);
    const response = await fetch(url, init);
    return (await response.json());
}

/**
 * Get a list of all words or Get a list of words filtered by args
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function list(args, init) {
    const url = args
        ? new URL(endpoints.list.filter_url.replace('{args}', args).replace('%', '%25'))
        : new URL(endpoints.list.base_url);
    const response = await fetch(url.toString(), init);
    return (await response.json());
}
/**
 * Get a list of all words or Get a list of words filtered by args, with digraph checking options
 * @param {"true" | "false" | "maybe"} c check digraphs option
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function list2(c, args, init) {
    if (args === undefined)
        args = "";
    const url = new URL(endpoints.list.filter_digraphs_url
        .replace('{c}', c)
        .replace('{args}', args)
        .replaceAll('%', '%25'));
    const response = await fetch(url.toString(), init);
    return (await response.json());
}

/**
 * Generate a Na'vi name with alu
 * @param {string} n number of names to generate [1-50]
 * @param {string} s number of syllables in first name [0-4]
 * @param {NounMode} nm noun mode
 * @param {AdjectiveMode} am adjective mode
 * @param {Dialect} dialect dialect to use ('interdialect' | 'forest' | 'reef')
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function nameAlu(n, s, nm, am, dialect, init) {
    const url = endpoints.names.alu_url
        .replace('{n}', n)
        .replace('{s}', s)
        .replace('{nm}', nm)
        .replace('{am}', am)
        .replace('{dialect}', dialect);
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Generate a Na'vi full name
 * @param {NameEnding} ending random for random, 'ite for female, 'itan for male, 'itu for non-binary
 * @param {string} n number of names to generate [1-50]
 * @param {string} s1 number of syllables in first name [0-4]
 * @param {string} s2 number of syllables in family name [0-4]
 * @param {string} s3 number of syllables in parent's name [0-4]
 * @param {Dialect} dialect dialect to use ('interdialect' | 'forest' | 'reef')
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function nameFull(ending, n, s1, s2, s3, dialect, init) {
    const url = endpoints.names.full_url
        .replace('{ending}', ending)
        .replace('{n}', n)
        .replace('{s1}', s1)
        .replace('{s2}', s2)
        .replace('{s3}', s3)
        .replace('{dialect}', dialect);
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Generate a Na'vi full name within Discord character limit
 * @param {NameEnding} ending random for random, 'ite for female, 'itan for male, 'itu for non-binary
 * @param {string} n number of names to generate [1-50]
 * @param {string} s1 number of syllables in first name [0-4]
 * @param {string} s2 number of syllables in family name [0-4]
 * @param {string} s3 number of syllables in parent's name [0-4]
 * @param {Dialect} dialect dialect to use ('interdialect' | 'forest' | 'reef')
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function nameFullWithLimit(ending, n, s1, s2, s3, dialect, init) {
    const url = endpoints.names.full_discord_url
        .replace('{ending}', ending)
        .replace('{n}', n)
        .replace('{s1}', s1)
        .replace('{s2}', s2)
        .replace('{s3}', s3)
        .replace('{dialect}', dialect);
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Generate a single Na'vi first name
 * @param {string} n number of names to generate [1-50]
 * @param {string} s number of syllables per name [0-4]
 * @param {Dialect} dialect dialect to use ('interdialect' | 'forest' | 'reef')
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function nameSingle(n, s, dialect, init) {
    const url = endpoints.names.single_url
        .replace('{n}', n)
        .replace('{s}', s)
        .replace('{dialect}', dialect);
    const response = await fetch(url, init);
    return (await response.json());
}

/**
 * Convert a decimal integer in closed range [0,32767] to Na'vi
 * @param num number to convert to Na'vi;
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<FwewNumber | FwewError>}
 */
async function numberToNavi(num, init) {
    const url = endpoints.numbers.num_url.replace('{num}', num.toString());
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Convert a Na'vi number word to decimal and octal
 * @param word Na'vi number word
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<FwewNumber | FwewError>}
 */
async function naviToNumber(word, init) {
    const url = endpoints.numbers.word_url.replace('{word}', word);
    const response = await fetch(url, init);
    return (await response.json());
}

/**
 * Returns a string saying how long the dict is, in English
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function dictLenEN(init) {
    const url = endpoints.other.dict_len_en_url;
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Returns a string saying how long the dict is, in English
 * @param {string} lang results/ui language
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function dictLen(lang, init) {
    const url = endpoints.other.dict_len_url.replace('{lang}', lang);
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Returns all the words with more than one dictionary entry
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function homonyms(init) {
    const url = endpoints.other.homonyms_url;
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Get the Na'vi lenition table
 * @returns {Promise<LenitionTable>}
 */
async function lenition() {
    const url = endpoints.other.lenition_url;
    const response = await fetch(url);
    return (await response.json());
}
/**
 * Returns all the words with multiple IPAs
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function multiIPA(init) {
    const url = endpoints.other.multi_ipa_url;
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Get the multi-word Na'vi words
 * i.e., those Na'vi words that are spelled with at least one space character
 * @returns {Promise<Word[]>}
 */
async function multiWords() {
    const url = endpoints.other.multiword_url;
    const response = await fetch(url);
    return (await response.json());
}
/**
 * Returns all the words which fall outside normal Na'vi phonotactics
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[][]>}
 */
async function oddballs(init) {
    const url = endpoints.other.oddballs_url;
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Returns a map of how often every phoneme appears in Na'vi, in English
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string[][][]>}
 */
async function phonemeFrequencyEN(init) {
    const url = endpoints.other.phonemes_en_url;
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Returns a map of how often every phoneme appears in Na'vi
 * @param {string} lang results/ui language
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string[][][]>}
 */
async function phonemeFrequency(lang, init) {
    const url = endpoints.other.phonemes_url.replace('{lang}', lang);
    const response = await fetch(url, init);
    return (await response.json());
}
/**
 * Returns reef dialect spelling and IPA given interdialect IPA
 * @param {string} ipa IPA of forest words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string[]>}
 */
async function reefMe(ipa, init) {
    const url = new URL(endpoints.other.reef_ipa_url
        .replace('{i}', ipa));
    const response = await fetch(url.toString(), init);
    return (await response.json());
}
/**
 * Returns whether the given string is valid Na'vi, in English
 * @param {string} words words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function validEN(words, init) {
    const url = new URL(endpoints.other.validity_en_url
        .replace('{i}', words));
    const response = await fetch(url.toString(), init);
    return (await response.json());
}
/**
 * Returns whether the given string is valid Na'vi
 * @param {string} lang
 * @param {string} words words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function valid(lang, words, init) {
    const url = new URL(endpoints.other.validity_url
        .replace('{lang}', lang)
        .replace('{i}', words));
    const response = await fetch(url.toString(), init);
    return (await response.json());
}
/**
 * Returns whether the given string is valid Na'vi
 * @param {string} lang
 * @param {string} words words to search
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<string>}
 */
async function validWithLimit(lang, words, init) {
    const url = new URL(endpoints.other.validity_discord_url
        .replace('{lang}', lang)
        .replace('{i}', words));
    const response = await fetch(url.toString(), init);
    return (await response.json());
}

/**
 * Get given number of random words, optionally filtered by args
 * @param {number} n number of random words to get
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function random(n, args, init) {
    if (args) {
        const url = new URL(endpoints.random.filter_url
            .replace('{n}', n.toString())
            .replace('{args}', args)
            .replaceAll('%', '%25'));
        const response = await fetch(url.toString(), init);
        return (await response.json());
    }
    const url = new URL(endpoints.random.base_url
        .replace('{n}', n.toString()));
    const response = await fetch(url.toString(), init);
    return (await response.json());
}
/**
 * Get given number of random words, optionally filtered by args, with digraph checking options
 * @param {number} n number of random words to get
 * @param {"true" | "false" | "maybe"} c check digraphs option
 * @param {string | undefined} args filter arguments e.g., 'word has kx' or 'word has kx and pos is vin.'
 * @param {RequestInit | undefined} init fetch options (optional)
 * @returns {Promise<Word[]>}
 */
async function random2(n, c, args, init) {
    if (args) {
        const url = new URL(endpoints.random.filter_digraphs_url
            .replace('{n}', n.toString())
            .replace('{c}', c)
            .replace('{args}', args)
            .replaceAll('%', '%25'));
        const response = await fetch(url.toString(), init);
        return (await response.json());
    }
    const url = new URL(endpoints.random.digraphs_url
        .replace('{n}', n.toString())
        .replace('{c}', c));
    const response = await fetch(url.toString(), init);
    return (await response.json());
}

/**
 * Get the version of fwew-api, fwew-lib, and the dictionary
 * @returns {Promise<Version>}
 */
async function version() {
    const url = endpoints.util.version_url;
    const response = await fetch(url);
    return (await response.json());
}

exports.dictLen = dictLen;
exports.dictLenEN = dictLenEN;
exports.fwew = fwew;
exports.fwew1D = fwew1D;
exports.fwew1DReverse = fwew1DReverse;
exports.fwewReverse = fwewReverse;
exports.fwewSimple = fwewSimple;
exports.homonyms = homonyms;
exports.lenition = lenition;
exports.list = list;
exports.list2 = list2;
exports.multiIPA = multiIPA;
exports.multiWords = multiWords;
exports.nameAlu = nameAlu;
exports.nameFull = nameFull;
exports.nameFullWithLimit = nameFullWithLimit;
exports.nameSingle = nameSingle;
exports.naviToNumber = naviToNumber;
exports.numberToNavi = numberToNavi;
exports.oddballs = oddballs;
exports.phonemeFrequency = phonemeFrequency;
exports.phonemeFrequencyEN = phonemeFrequencyEN;
exports.random = random;
exports.random2 = random2;
exports.reefMe = reefMe;
exports.search = search;
exports.valid = valid;
exports.validEN = validEN;
exports.validWithLimit = validWithLimit;
exports.version = version;
