
# JP Word Of The Day

Well, a different Japanese word everyday. 

## Installation

```bash
npm install japanese-wotd
```

## Usage

```js
const jwtd = require('japanese-wotd');

async function start() {
  const wtd = await jwtd.getJapaneseWordOfTheDay();
  console.info(wtd);
}

start();
```

You'll get something similar to this:

```js
{
   "word": "氷",
   "kana": "こおり",
   "romaji": "kōri",
   "english": "ice",
   "audio": "https://d1pra95f92lrn3.cloudfront.net/audio/898.mp3",
   "wotd_class": "noun",
   "date": "Jul 10, 2021",
   "example": {
      "ex":"子供達が氷の上でアイススケートをしている。",
      "ex_kana": "こどもたちがこおりのうえでアイススケートをしている。",
      "ex_romaji":"Kodomo-tachi ga kōri no ue de aisu sukēto o shite iru.",
      "ex_english": "The children are ice skating on the ice.",
      "ex_audio": "https://d1pra95f92lrn3.cloudfront.net/audio/907.mp3"
   }
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
