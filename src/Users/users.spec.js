import { types, actions, reducer} from './users';
import store from '../store';
import { act } from '@testing-library/react';

const payload = {
    pageNo: 10,
    recordsPerPage: 10
};

describe('Get Users List', () => {
    it('Should Contain The Right Action Type', () => {
        const payload = {
            pageNo: 10,
            recordsPerPage: 10
        };
        const action = actions.getUsersList(payload);
        expect(action.type).toEqual(types.GET_USERS);
        expect(action.payload.pageNo).toEqual(10);
    });
});

describe('Testing The Reducer', () => {
    it('Should Test The Users List', async () => {
        const usersData = await reducer(undefined, actions.getUsersList(payload));
        expect(usersData.usersList.length).toEqual(10);
    });
});

describe('Testing The Store', () => {
    it('Should Test The Initial State Of the Store', async () => {
        const state = store.getState();
        expect(state.usersList).toEqual([]);
        expect(state.pageNo).toEqual(1);
        expect(state.recordsPerPage).toEqual(10);
    });

    it('Should Dispatch The Action And Change The State', async () => {
        const action = actions.getUsersList(payload);
        store.dispatch(action);
    });
});