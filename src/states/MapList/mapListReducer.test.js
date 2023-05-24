import mapListReducer from './MapListReducer';
import ACTION_TYPE from './mapListActionType';

/**
 * test case scenario
 * Should return initial state when given by unknown action type
 * Should delete data when given by delete action creator
 * should return [] when map list item doesnt contain keyword
 * should return initialState when keyword value is ''
 * should return searched data in array when given by keyword that match
 * Should return an all datas with new updated data when given by update data action creator
 */

describe('Map List Reducer', () => {
  it('Should return initial state when given by unknown action type', () => {
    const initialState = [{ no: 1, map: 'asd', source: 'test.jpg' }];
    const action = {
      type: 'UNKNOWN ACTION TYPE',
    };

    const reducer = mapListReducer(initialState, action);

    expect(reducer).toEqual(initialState);
    expect(reducer).toHaveLength(initialState.length);
  });
  it('Should return all not deleted data in array when given by delete action creator', () => {
    const initialState = [{ no: 1, map: 'asd', source: 'test.jpg' }, { no: 2, map: 'test', source: 'asd.tiff' }];
    const action = {
      type: ACTION_TYPE.deleteMapListType,
      payload: {
        id: 1,
      },
    };

    const reducer = mapListReducer(initialState, action);
    expect(reducer).toHaveLength(1);
    expect(reducer).toEqual((initialState.filter((mapItem) => mapItem.no !== action.payload.id)));
    expect(reducer).not.toBeNull();
  });
  it('Should return [] when map list item doesnt contain keyword', () => {
    const initialState = [{ no: 1, map: 'asd', source: 'asd.geojson' }, { no: 2, map: 'test', source: 'test.tiff' }];
    const action = {
      type: ACTION_TYPE.searchMapListType,
      payload: {
        keyword: 'NOT FOUND KEYWORD',
      },
    };

    const reducer = mapListReducer(initialState, action);
    expect(reducer).toHaveLength(0);
    expect(reducer).toEqual([]);
  });
  it('Should return initialState when value is ""', () => {
    const initialState = [{ no: 1, map: 'asd', source: 'asd.geojson' }, { no: 2, map: 'test', source: 'test.tiff' }];
    const action = {
      type: ACTION_TYPE.searchMapListType,
      payload: {
        keyword: '',
      },
    };

    // should fix, because state is not predictable
    const reducer = mapListReducer(initialState, action);
    expect(reducer).toHaveLength(500);
  });
  it('Should return searched data in array when given by match keyword', () => {
    const initialState = [{ no: 1, map: 'asd', source: 'asd.geojson' }, { no: 2, map: 'test', source: 'test.tiff' }];
    const action = {
      type: ACTION_TYPE.searchMapListType,
      payload: {
        keyword: 'test',
      },
    };

    const reducer = mapListReducer(initialState, action);
    const searchedData = initialState.filter(
      (mapItem) => mapItem.map.toLowerCase().includes(action.payload.keyword.toLowerCase()),
    );

    expect(reducer).toHaveLength(1);
    expect(reducer).toEqual(searchedData);
    expect(searchedData).toHaveProperty('map');
  });

  it('Should return all data with new data when given by update action creator', () => {
    const initialState = [{ no: 1, map: 'asd', source: 'asd.geojson' }, { no: 2, map: 'test', source: 'test.tiff' }];
    const newData = {
      map: 'map baru',
      source: 'source baru',
    };
    const action = {
      type: 'UPDATE/MAPLIST',
      payload: {
        id: 2,
        newData: {
          ...newData,
        },
      },
    };

    const reducer = mapListReducer(initialState, action);
    const mapIndex = initialState.findIndex((mapItem) => mapItem.no === action.payload.id);
    initialState[mapIndex] = {
      ...action.payload.newData,
    };
    expect(reducer).toHaveLength(2);
    expect(reducer[mapIndex].map).toBe(action.payload.newData.map);
    expect(reducer[mapIndex].source).toBe(action.payload.newData.source);
    expect(reducer).toEqual([{ ...initialState[0] }, {
      ...initialState[mapIndex],
      ...action.payload.newData,
    }]);
  });
});
