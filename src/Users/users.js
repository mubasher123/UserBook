import axios from "axios";
import { AppConstants } from "../Core/AppConstants";

export const types = {
    GET_USERS: 'GET_USERS',
    FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
    FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
    FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE'
};

const DEFAULT_STATE = {
    loading: false,
    pageNo: AppConstants.INITIAL_USERS_PAGE_NO,
    recordsPerPage: AppConstants.NO_OF_USERS_PER_PAGE,
    usersList: [],
    error: null
};

export function reducer(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case types.FETCH_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          usersList: action.payload,
        };
      case types.FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    
    }
};

export const actions = {
    getUsersList(params){
        return {
            type: types.GET_USERS,
            payload: params
        };
    },
    fetchUsersList(){
        return function(dispatch, getState){
            dispatch({
                type: types.FETCH_USERS_REQUEST
            });
            return axios.get(AppConstants.GET_USERS_URL, {
                params: {
                  results: 100,
                  page: 1,
                }
              }).then((userData) => {
                dispatch({
                    type: types.FETCH_USERS_SUCCESS,
                    payload: userData.data.results
                });
              }).catch((error) => {
                dispatch({
                    type: types.FETCH_USERS_FAILURE,
                    payload: error.message
                });
              });
        }
    },
}; 