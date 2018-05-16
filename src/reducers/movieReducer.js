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
    
    default: return state;
    }
}

export default movieReducer;