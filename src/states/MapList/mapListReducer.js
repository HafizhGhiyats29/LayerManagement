import ACTION_TYPE from './mapListActionType';
import MOCK_DATA from '../../MOCK_DATA.json';

const initialState = MOCK_DATA;

const mapListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE.deleteMapListType:
      return state.filter((map) => map.no !== action.payload.id);
    default: return state;
  }
};

export default mapListReducer;
