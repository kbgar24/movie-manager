const defaultState = {
  movies: []
}

const movieReducer = ( state = defaultState, action ) => {
  switch(action.type){
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'ADD_MOVIE': 
      return {
        ...state,
        movies: [
          ...state.movies,
          action.payload,
        ]
      };
    case 'DELETE_MOVIE': 
      return {
        ...state,
        movies: state.movies.filter(({id}) => id !== action.payload)
      };
    
    case 'SORT_BY_TITLE':
      const moviesTitle = state.movies.slice().sort((a,b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          return titleA < titleB ? -1 : 1
        });
      action.payload === -1 && moviesTitle.reverse();
      return {
        ...state,
        movies: moviesTitle,
      }

    case 'SORT_BY_RELEASE':
      const moviesRelease = state.movies.slice().sort((a,b) => {
          const yearA= Number(a.year);
          const yearB = Number(b.year);
          return yearA < yearB ? -1 : 1
        })
      action.payload === -1 && moviesRelease.reverse();
      return {
          ...state,
          movies: moviesRelease,
        }
    case 'SORT_BY_CREATED':
      const moviesCreated = state.movies.slice().sort((a,b) => {
          const dateA= Date.parse(a.createdAt);
          const dateB = Date.parse(b.createdAt);
          return dateA < dateB ? -1 : 1
        })
      action.payload === -1 && moviesCreated.reverse()
      return {
          ...state,
          movies: moviesCreated,
        }

    default: return state;
    }
}

//alphabetical 
// Year Rleasesed (asc)
// Year Rleasesed (Desc)
// Recently Added

//

export default movieReducer;