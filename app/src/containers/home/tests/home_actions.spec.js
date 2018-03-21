import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import { expect } from '../../../utils/test_helper';
import { GET_EXPRESS_DATA, fetchExpressData } from '../actions_home';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Home Actions', () => {
  describe('fetchExpressData', () => {
    let store;
    beforeEach(() => {
      store = mockStore({});
      nock('http://localhost:5000/api/hello')
      .get('')
      .reply(200, {
        'message': 'Hello From Express',
      });
    });
    afterEach(() => {
      nock.cleanAll();
    })
    it('has the correct type', () => {
      return store.dispatch(fetchExpressData())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).to.equal(GET_EXPRESS_DATA);
        });
    });
    it('has the correct payload - server running dependency', () => {
      return store.dispatch(fetchExpressData())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].payload.data).to.deep.equal({ message: 'Hello From Express' });
        });
    });
  });
});
