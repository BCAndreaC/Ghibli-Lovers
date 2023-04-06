import { sortByNewest, sortByOldest, filterDirector } from '../src/data.js';
import { dataMock, dataMockOrder, /*dataMockFilteredByDirector*/ } from './mockdata.js';



describe('sortByNewest', () => {
  it('is a function', () => {
    expect(typeof sortByNewest).toBe('function');
  });

  it('must return de newest movies', () => {
    expect(sortByNewest(dataMock)).toEqual(dataMockOrder);
  });
});

describe('sortByOldest', () => {
  it('is a function', () => {
    expect(typeof sortByOldest).toBe('function');
  });

  it('must return the oldest movies', () => {
    expect(sortByOldest(dataMock)).toEqual(dataMock);
  });
});

describe('filterDirector', () => {
  const directorSample = 'Director A';
  const films = [    { title: 'Film A', director: 'Director A' },    { title: 'Film B', director: 'Director B' },    { title: 'Film C', director: 'Director A' },    { title: 'Film D', director: 'Director C' },  ];
  const expectedFilms = [      { title: 'Film A', director: 'Director A' },      { title: 'Film C', director: 'Director A' },    ];

  it('is a function', () => {
    expect(typeof filterDirector).toBe('function');
  });  

  it('must return only Director A', () => {
    expect(filterDirector(films, directorSample)).toEqual(expectedFilms);
  })
}); 


