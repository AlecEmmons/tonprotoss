const marketPositions = [
  {"date": "07-09-2020 10:20:40", "close": 8.55, "open": 74.55},
  {"date": "07-09-2020 10:20:38", "close": 4.55, "open": 69.55},
  {"date": "07-09-2020 10:20:36", "close": 9.55, "open": 62.55},
  {"date": "07-09-2020 10:20:34", "close": 2.55, "open": 56.55},
  {"date": "07-09-2020 10:20:32", "close": 6.55, "open": 59.55},
  {"date": "07-09-2020 10:20:30", "close": 9.86, "open": 65.86},
  {"date": "07-09-2020 10:20:28", "close": 2.62, "open": 65.62},
  {"date": "07-09-2020 10:20:26", "close": 4.48, "open": 60.48},
  {"date": "07-09-2020 10:20:24", "close": 0.98, "open": 55.98},
  {"date": "07-09-2020 10:20:22", "close": 8.13, "open": 53.13},
  {"date": "07-09-2020 10:20:20", "close": 8.55, "open": 74.55},
  {"date": "07-09-2020 10:20:18", "close": 4.55, "open": 69.55},
  {"date": "07-09-2020 10:20:16", "close": 9.55, "open": 62.55},
  {"date": "07-09-2020 10:20:14", "close": 2.55, "open": 56.55},
  {"date": "07-09-2020 10:20:12", "close": 6.55, "open": 59.55},
  {"date": "07-09-2020 10:20:10", "close": 9.86, "open": 65.86},
  {"date": "07-09-2020 10:20:08", "close": 2.62, "open": 65.62},
  {"date": "07-09-2020 10:20:06", "close": 4.48, "open": 60.48},
  {"date": "07-09-2020 10:20:04", "close": 0.98, "open": 55.98},
  {"date": "07-09-2020 10:20:02", "close": 8.13, "open": 53.13}
];

module.exports = {
  marketPositions,
};

const moment = require('moment');

// const marketPositions ...

let counter = 0;

function updateMarket() {
  const diff1 = Math.floor(Math.random() * 1000) / 50 + Math.random()*50;
  const diff2 = Math.floor(Math.random() * 1000) / 500 + Math.random()*5;
  const lastSecond = moment(marketPositions[0].date, 'MM-DD-YYYY HH:mm:ss').add(2, 'seconds');
  let open;
  let close;

  if (counter % 2 === 0) {
    open = marketPositions[0].open + diff1;
    close = marketPositions[0].close + diff2;
  } else {
    open = Math.abs(marketPositions[0].open - diff1);
    close = Math.abs(marketPositions[0].close - diff2);
  }

  marketPositions.unshift({
    date: lastSecond.format('MM-DD-YYYY HH:mm:ss'),
    open,
    close
  });
  counter++;
}

module.exports = {
  marketPositions,
  updateMarket,
};