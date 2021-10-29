/**
 * Mocking client-server processing
 */
import {Product} from "../model/Product";

const _products = [
  new Product(1, 'iPad 4 Mini', 500.01, 2),
  new Product(2, 'H&M T-Shirt White', 10.99, 10),
  new Product(3, 'Charli XCX - Sucker CD', 19.99, 5)
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
