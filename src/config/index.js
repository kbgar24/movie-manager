export const genreOptions = [
  { key: 'null', text: '', value: '' },
  { key: 'h', text: 'Horror', value: 'horror' },
  { key: 'a', text: 'Action', value: 'action' },
  { key: 'd', text: 'Drama', value: 'drama' },
  { key: 'c', text: 'Comedy', value: 'comedy' },
  { key: 'an', text: 'Animation', value: 'animation' },
  { key: 'm', text: 'Musical', value: 'musical' },
  { key: 'do', text: 'Documentary', value: 'documentary' },
  { key: 'we', text: 'Western', value: 'western' },
  { key: 's', text: 'Science Fiction', value: 'science' },
];

export const ratingOptions = [
  { key: 'null', text: '', value: '' },
  { key: '1', text: '5', value: '5' },
  { key: '2', text: '4', value: '4' },
  { key: '3', text: '3', value: '3' },
  { key: '4', text: '2', value: '2' },
  { key: '5', text: '1', value: '1' },
];

export const mpaaRatingOptions = [
  { key: 'null', text: '', value: '' },
  { key: '1', text: 'G', value: 'G' },
  { key: '2', text: 'PG', value: 'PG' },
  { key: '3', text: 'PG-13', value: 'PG-13' },
  { key: '4', text: 'R', value: 'R' },
  { key: '5', text: 'NC-17', value: 'NC-17' },
  { key: '6', text: 'Unrated', value: 'Unrated' },
];

export const sortOptions = [
  { key: '1', value: 'TITLE', text: 'Title' },
  { key: '2', value: 'RELEASE', text: 'Release Date' },
  { key: '3', value: 'CREATED', text: 'Date Added' },
];

export const orderOptions = [
  { key: '1', value: 1, text: 'Ascedending' },
  { key: '2', value: -1, text: 'Descending' },
]