import ACTION_TYPE from './mapListActionType';

export const deleteMapList = (id) => ({
  type: ACTION_TYPE.deleteMapListType,
  payload: {
    id,
  },
});

export const editMapList = (id) => ({
  type: ACTION_TYPE.putMapListType,
  payload: {
    id,
  },
});
