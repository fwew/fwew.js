export { endpoints }

const API_BASE = 'https://tirea.learnnavi.org/api'

const endpoints = {
  fwew: {
    nav_url: `${API_BASE}/fwew/{nav}`,
    reverse_url: `${API_BASE}/fwew/r/{lang}/{local}`,
    flat_url: `${API_BASE}/fwew-1d/{nav}`,
    flat_reverse_url: `${API_BASE}/fwew-1d/r/{lang}/{local}`,
    simple_url: `${API_BASE}/fwew-simple/{nav}`,
    search_url: `${API_BASE}/search/{lang}/{words}`
  },
  list: {
    base_url: `${API_BASE}/list`,
    filter_url: `${API_BASE}/list/{args}`,
    filter_digraphs_url: `${API_BASE}/list2/{c}/{args}`
  },
  names: {
    alu_url: `${API_BASE}/name/alu/{n}/{s}/{nm}/{am}/{dialect}`,
    full_url: `${API_BASE}/name/full/{ending}/{n}/{s1}/{s2}/{s3}/{dialect}`,
    full_discord_url: `${API_BASE}/name/full/d/{ending}/{n}/{s1}/{s2}/{s3}/{dialect}`,
    single_url: `${API_BASE}/name/single/{n}/{s}/{dialect}`
  },
  numbers: {
    num_url: `${API_BASE}/number/r/{num}`,
    word_url: `${API_BASE}/number/{word}`
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
    validity_discord_url: `${API_BASE}/valid/d/{lang}/{i}`
  },
  random: {
    base_url: `${API_BASE}/random/{n}`,
    filter_url: `${API_BASE}/random/{n}/{args}`,
    digraphs_url: `${API_BASE}/random2/{n}/{c}`,
    filter_digraphs_url: `${API_BASE}/random2/{n}/{c}/{args}`
  },
  util: {
    version_url: `${API_BASE}/version`
  }
}
