import { itemsReducer } from './items.reducer';
import { itemsInitialState } from './items.init';
import { Items } from './items.interfaces';
import { DataLoaded } from './items.actions';

describe('itemsReducer', () => {
  it('should work', () => {
    const state: Items = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = itemsReducer(state, action);
    expect(actual).toEqual({});
  });
});
