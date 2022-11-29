import {NameSpace} from '../../components/const';
import {State} from '../../types/state';

export const getCity = (state: State) => state[NameSpace.Action].city;
export const getSortType = (state: State) => state[NameSpace.Action].sortType;
