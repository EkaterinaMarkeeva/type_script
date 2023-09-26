import Cart from '../cart';
import Movie from '../movie';

test.each([
  ['add', 
    [
      {
        id: 125,
        name: 'Мстители',
        nameEn: 'The Avengers',
        year: 2012,
        country: 'США',
        slogan: '"Avengers Assemble!"',
        genre: 'Фантастика, Боевик, Комедия',
        time: '137 мин./02:17',
        price: 250
      },
      {
        id: 255,
        name: 'Драйв',
        nameEn: 'Drive',
        year: 2011,
        country: 'США',
        slogan: 'Live on the drive',
        genre: 'Криминал, Драма',
        time: '100 мин./01:40',
        price: 350
      }
    ]
  ]
])// eslint-disable-next-line
('testin Cart class with %s method', (_, expected) => {
  const avengers = new Movie(125, 'Мстители', 'The Avengers', 2012, 'США', '"Avengers Assemble!"', 'Фантастика, Боевик, Комедия', '137 мин./02:17', 250);
  const drive = new Movie(255, 'Драйв', 'Drive', 2011, 'США', 'Live on the drive', 'Криминал, Драма', '100 мин./01:40', 350);
  const cart = new Cart;

  cart.add(avengers);
  cart.add(drive);

  cart.items.forEach((elem, index) => expect(elem).toEqual(expected[index]));
});

test.each([
  ['sum', 600]
])// eslint-disable-next-line
('testin Cart class with %s method', (_, expected) => {
  const avengers = new Movie(125, 'Мстители', 'The Avengers', 2012, 'США', '"Avengers Assemble!"', 'Фантастика, Боевик, Комедия', '137 мин./02:17', 250);
  const drive = new Movie(255, 'Драйв', 'Drive', 2011, 'США', 'Live on the drive', 'Криминал, Драма', '100 мин./01:40', 350);
  const cart = new Cart;

  cart.add(avengers);
  cart.add(drive);

  expect(cart.sum()).toBe(expected);
});

test.each([
  ['discountedAmount', 10, 540],
  ['discountedAmount', 3, 582]
])// eslint-disable-next-line
('testin Cart class with %s method', (_, discount, expected) => {
  const avengers = new Movie(125, 'Мстители', 'The Avengers', 2012, 'США', '"Avengers Assemble!"', 'Фантастика, Боевик, Комедия', '137 мин./02:17', 250);
  const drive = new Movie(255, 'Драйв', 'Drive', 2011, 'США', 'Live on the drive', 'Криминал, Драма', '100 мин./01:40', 350);
  const cart = new Cart;

  cart.add(avengers);
  cart.add(drive);

  expect(cart.discountedAmount(discount)).toBe(expected);
});

test.each([
  ['remove', 
    255, 
    [
      {
        id: 125,
        name: 'Мстители',
        nameEn: 'The Avengers',
        year: 2012,
        country: 'США',
        slogan: '"Avengers Assemble!"',
        genre: 'Фантастика, Боевик, Комедия',
        time: '137 мин./02:17',
        price: 250
      }
    ]
  ]
])// eslint-disable-next-line
('testin Cart class with %s method', (_, id, expected) => {
  const avengers = new Movie(125, 'Мстители', 'The Avengers', 2012, 'США', '"Avengers Assemble!"', 'Фантастика, Боевик, Комедия', '137 мин./02:17', 250);
  const drive = new Movie(255, 'Драйв', 'Drive', 2011, 'США', 'Live on the drive', 'Криминал, Драма', '100 мин./01:40', 350);
  const cart = new Cart;

  cart.add(avengers);
  cart.add(drive);
  cart.remove(id);

  cart.items.forEach((elem, index) => expect(elem).toEqual(expected[index]));
});
