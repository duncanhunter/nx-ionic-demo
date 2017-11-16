import { Items } from './items.interfaces';
import { ItemsAction } from './items.actions';

export function itemsReducer(state: Items, action: ItemsAction): Items {
  switch (action.type) {
    case 'DATA_LOADED': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
