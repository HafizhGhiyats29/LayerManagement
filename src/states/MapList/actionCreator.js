import ACTION_TYPE from './mapListActionType';

export const deleteMapListActionCreator = (id) => ({
  type: ACTION_TYPE.deleteMapListType,
  payload: {
    id,
  },
});

export const editMapListActionCreator = ({ id, newData }) => ({
  type: ACTION_TYPE.putMapListType,
  payload: {
    id,
    newData,
  },
});
