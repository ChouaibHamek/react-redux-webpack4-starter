import { expect } from '../../../utils/test_helper';
import expressReducer from '../reducers_home';
import { GET_EXPRESS_DATA } from '../actions_home';

describe('Express Reducer', () => {
  it('handles actions with unknown type', () => {
    expect(expressReducer(undefined, {})).to.eql({});
  });

  it('handles action of type GET_EXPRESS_DATA', () => {
    const action = { type: GET_EXPRESS_DATA, payload: { data: { message: 'Hello From Express' } } };
    expect(expressReducer({}, action)).to.eql({ message: 'Hello From Express' });
  });
});
