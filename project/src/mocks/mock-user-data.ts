import {datatype, name, system, internet} from 'faker';
import {UserData} from '../types/user-data';

const mockUserData = (): UserData => ({
  avatarUrl: system.filePath(),
  email: internet.email(),
  id: datatype.number(),
  isPro: datatype.boolean(),
  name: name.firstName(),
  token: datatype.string(),
});

export default mockUserData;
