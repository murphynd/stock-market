export default class CarouselPage {
  static getCarousel(first,second,third,fourth,fifth) {
    return fetch(`https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${first},${second},${third},${fourth},${fifth}&types=quote,news,chart&range=1m&last=10&token=${process.env.API_KEY}`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
  }
}