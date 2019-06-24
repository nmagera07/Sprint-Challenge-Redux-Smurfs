import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from '../actions';

const initialState = {
  error: '',
  fetchingData: false,
  smurfs: [],
  addSmurfs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: '',
        fetchingData: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        smurfs: action.payload
          
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        fetchingData: true,
        error: ''
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        smurfs: action.payload,
        addSmurfs: action.payload
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
