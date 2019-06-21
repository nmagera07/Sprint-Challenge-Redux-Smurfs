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
  fetchingSmurf: false,
  smurfs: [],
  addSmurfs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: '',
        fetchingSmurf: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurf: false,
        smurf: action.payload
          
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurf: false,
        error: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        fetchingSmurf: true,
        error: ''
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurf: false,
        smurfs: action.payload,
        addSmurfs: action.payload
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurf: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
