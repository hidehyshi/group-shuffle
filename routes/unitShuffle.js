var express = require('express');
var router = express.Router();

const items = [
  'AA',
  'BB',
  'CC',
  'DD',
  'EE',
  'FF',
  'GG'
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('unitShuffle', { title: 'ユニットシャッフルを行う', items: items });
});

router.post('/shuffle', (req, res) => {
  shuffleArray(items);
  res.render('result', { shuffledList: items });
});

module.exports = router;

// 配列をシャッフルする関数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
