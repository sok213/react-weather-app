import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    // below is the es6 version of the following code:
    // return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ];
  }
  return state;
}
