import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "image": "teslabot.jpg",
 };
 
 const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "title": "100s of SpaceX Starships land on Mars after a 6",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
 }

//  {
//   "_id": 234,
//   "topic": "Space",
//   "userName": "SpaceX",
//   "time": "2h",
//   "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
//   "image": "teslabot.jpg",
//   "liked": false,
//   "replies": 555,
//   "retuits": 66,
//   "likes": 121,
//   "handle": "@spacex",
//   "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
// }, 
 

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
  createTuit(state, action) {
    state.unshift({
      ...action.payload,
      ...templateTuit,
      _id: (new Date()).getTime(),
    })
  },
  deleteTuit(state, action) {
    const index = state
       .findIndex(tuit =>
          tuit._id === action.payload);
    state.splice(index, 1);
  },
 }

});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;