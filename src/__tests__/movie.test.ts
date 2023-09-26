import Movie from '../movie';

test.each([
  ['Movie', 
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
])// eslint-disable-next-line
('testin Movie class with %s name', (_, expected) => {
  const result = new Movie(125, 'Мстители', 'The Avengers', 2012, 'США', '"Avengers Assemble!"', 'Фантастика, Боевик, Комедия', '137 мин./02:17', 250);
  
  expect(result).toEqual(expected);
});
