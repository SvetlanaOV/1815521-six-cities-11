import {actionProcess, changeCity, changeSortType} from './action-process';
import {ActionProcess} from '../../types/state';
import mockCity from '../../mocks/mock-city';
import {SortType, DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../../components/const';

const city = mockCity();

describe('Reducer: offers', () => {
  let state: ActionProcess;

  beforeEach(() => {
    state = {
      city: DEFAULT_CITY,
      sortType: DEFAULT_SORT_TYPE,
      handlerStatus: true,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(actionProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('changeCity test', () => {
    it('should change the name of current location', () => {
      expect(actionProcess.reducer(state, {type: changeCity.type, payload: city}))
        .toEqual({...state, city});
    });
  });

  describe('changeSortType test', () => {
    it('should change sort type', () => {
      expect(actionProcess.reducer(state, {type: changeSortType.type, payload: SortType.HighToLow}))
        .toEqual({...state, sortType: SortType.HighToLow});
    });
  });
});
