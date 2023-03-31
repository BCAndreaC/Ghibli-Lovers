import { sortByNewest, sortByOldest } from '../src/data.js';
import { dataMock, dataMockOrder } from './mockdata.js';



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


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
