import * as types from '../constants/ActionTypes';

// Action для добавляения поста.


export const addPost = (payload) => ({type: types.ADD_POST, payload});
export const updateContentToggler = (payload) => ({type: types.UPDATE_CONTENT_TOGGLER, payload});