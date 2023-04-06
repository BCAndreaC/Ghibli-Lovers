import { sortByNewest, sortByOldest, filterDirector } from '../src/data.js';

const dataSample = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1986",
    "people": [
      {
        "name": "Pazu",
        "gender": "Male",
        "age": "13",
      },
      {
        "name": "Lusheeta Toel Ul Laputa",
        "gender": "Female",
        "age": "13",
      },
      {
        "name": "Dola",
        "gender": "Female",
        "age": "60",
      },
    ]
  },
  {
    "title": "Whisper of the Heart",
    "director": "Yoshifumi Kondō",
    "release_date": "1995",
    "people": [
      {
        "name": "Shizuku Tsukishima",
        "gender": "Female",
        "age": "14",
      },
      {
        "name": "Seiji Amasawa",
        "gender": "Male",
        "age": "15",
      },
      {
        "name": "Chu Totoro",
        "gender": "NA",
        "age": "",
      },
    ]
  },
]


describe('sortByNewest', () => {
  const expectedNewestFilms = [
    {
      "title": "Whisper of the Heart",
      "director": "Yoshifumi Kondō",
      "release_date": "1995",
      "people": [
        {
          "name": "Shizuku Tsukishima",
          "gender": "Female",
          "age": "14",
        },
        {
          "name": "Seiji Amasawa",
          "gender": "Male",
          "age": "15",
        },
        {
          "name": "Chu Totoro",
          "gender": "NA",
          "age": "",
        },
      ]
    },
    {
      "title": "Castle in the Sky",
      "director": "Hayao Miyazaki",
      "release_date": "1986",
      "people": [
        {
          "name": "Pazu",
          "gender": "Male",
          "age": "13",
        },
        {
          "name": "Lusheeta Toel Ul Laputa",
          "gender": "Female",
          "age": "13",
        },
        {
          "name": "Dola",
          "gender": "Female",
          "age": "60",
        },
      ]
    }
  ]


  it('is a function', () => {
    expect(typeof sortByNewest).toBe('function');
  });

  it('must return the newest movies', () => {
    expect(sortByNewest(dataSample)).toEqual(expectedNewestFilms);
  });
});

describe('sortByOldest', () => {
  it('is a function', () => {
    expect(typeof sortByOldest).toBe('function');
  });

  it('must return the oldest movies', () => {
    expect(sortByOldest(dataSample)).toEqual(dataSample);
  });
});

describe('filterDirector', () => {
  const directorSample = 'Hayao Miyazaki';
  const expectedFilms = [
    {
      "title": "Castle in the Sky",
      "director": "Hayao Miyazaki",
      "release_date": "1986",
      "people": [
        {
          "name": "Pazu",
          "gender": "Male",
          "age": "13",
        },
        {
          "name": "Lusheeta Toel Ul Laputa",
          "gender": "Female",
          "age": "13",
        },
        {
          "name": "Dola",
          "gender": "Female",
          "age": "60",
        },
      ]}];

  it('is a function', () => {
    expect(typeof filterDirector).toBe('function');
  });  

  it('must return only from director Hayao Miyazaki', () => {
    expect(filterDirector(dataSample, directorSample)).toEqual(expectedFilms);
  })
}); 
