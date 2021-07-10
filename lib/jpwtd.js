const axios = require("axios");
const cheerio = require("cheerio");
const UserAgent = require("user-agents");
const selectors = require("./utils");
const jppod_url = "https://www.japanesepod101.com/japanese-phrases";

async function getJapaneseWordOfTheDay() {
  const req_options = {
    headers: {
      "User-Agent": new UserAgent(),
      Referer: "https://www.google.com/",
      Accept: "text/html",
      "Accept-Language": "en-US",
      "Accept-Encoding": "gzip",
    },
  };

  const response = await axios.get(jppod_url, req_options);

  if (response.status != 200)
    return {
      error: "Got status code " + response.status,
    };

  const $ = cheerio.load(response.data);

  const word = $($(selectors.japanese_wtd_selector)[0]).text().trim();

  const kana = $($(selectors.japanese_wtd_kana_selector)[0]).text().trim();

  const romaji = $($(selectors.japanese_wtd_romaji_selector)[0]).text().trim();

  const english = $($(selectors.japanese_wtd_english_selector)[0])
    .text()
    .trim();

  const word_audio = $($(selectors.japanese_wtd_audio_selector)[0])
    .attr("data-audio")
    .trim();

  const word_class = $($(selectors.japanese_wtd_class_selector)[0])
    .text()
    .trim();

  const example = $($(selectors.japanese_wtd_example_selector)[0])
    .text()
    .trim();

  const example_kana = $($(selectors.japanese_wtd_example_kana_selector)[0])
    .text()
    .trim();

  const example_romaji = $($(selectors.japanese_wtd_example_romaji_selector)[0])
    .text()
    .trim();

  const example_english = $(
    $(selectors.japanese_wtd_example_english_selector)[0]
  ).text().trim;

  const example_audio = $($(selectors.japanese_wtd_example_audio_selector)[0])
    .attr("data-audio")
    .trim();

  const wotd_date = $($(selectors.japanese_wtd_date)).text().trim();

  return {
    word,
    kana,
    romaji,
    english,
    audio: word_audio,
    wotd_class: word_class,
    date: wotd_date,
    example: {
      ex: example,
      ex_kana: example_kana,
      ex_romaji: example_romaji,
      ex_english: example_english,
      ex_audio: example_audio,
    },
  };
}

module.exports = {
  getJapaneseWordOfTheDay,
};
