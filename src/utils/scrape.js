var client = require('cheerio-httpcli'),
  fs = require('fs');

// callbackを指定しなかったのでPromiseオブジェクトが返る
var p = client.fetch('http://www.tonya.co.jp/shop/e/esC20_dD/'),
  itemDatas = [];

const saveFilePath = './src/data/example.json';

p.then(function (result) {
  // レスポンスヘッダを参照
  // console.log(result.response.headers);

  // リンク一覧を表示
  result.$('.StyleD_Item_').each(function (idx) {
    var $this = result.$(this);

    let data = {
      name: null,
      price: null,
      saleprice: null,
      link: null,
      rate: null,
      img: null,
      points: {
        acid: null,
        bitter: null,
        sweet: null,
        body: null,
        aroma: null,
      }
    };
    var pointsArrIndex = [];
    for (key in data.points) {
      pointsArrIndex.push(key);
    }

    data.name = $this.find('.goods_name_').text();
    data.price = $this
      .find('.price_inner_')
      .text()
      .match(/[1-9](,)?[0-9]\d*/)[0];
    data.saleprice = $this.find('.price_pop_').length ? data.price : null;
    data.link = $this.find('.btn_').attr('href');
    data.img = $this.find('div.img_ img').attr('src');

    var rate = $this
      .find('.userreview_ img')
      .attr('src')
      .match(/([1-9]\.[0-9])\.(png|jpg|gif)/);
    data.rate = rate ? rate[1] : null;
    /**
     * chart loop
     */
    result.$(this).find('.chart_img_').each(function (i, e) {
      /**
       * rate loop
       */
      result.$(this).find('li').each(function (i, e) {
        var point = result.$(this).attr('class').replace(/chart/, '');
        point = point.replace(/(.)/, '$1.');

        data.points[pointsArrIndex[i]] = point;
      });
    });
    // console.log(data)
    itemDatas.push(data)
    return data
  });
  // console.log(itemDatas);

  fs.writeFileSync(saveFilePath, JSON.stringify(itemDatas), 'utf-8');
});

p.catch(function (err) {
  console.log(err);
});

p.finally(function () {
  console.log('done');
});

module.exports = itemDatas;