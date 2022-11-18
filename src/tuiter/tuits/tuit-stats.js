import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt} from '@fortawesome/free-solid-svg-icons';
import { updateTuitThunk } from '../../services/tuits-thunks';
import {useDispatch}
  from "react-redux";

const TuitStats = (
{
  tuit = {
    "_id": 234,
    "topic": "Space",
    "username": "SpaceX",
    "time": "2h",
    "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    "image": "teslabot.jpg",
    "liked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  }
}

) => {
  // const {tuitlike} = useSelector((state) => state.tuitsData)
  const dispatch = useDispatch();

 
	useEffect(() => {
		dispatch(updateTuitThunk())
	}, [dispatch]);
 
  return (
    <div className="flex-row wd-flex-justifySpaceBetween ms-5 mt-2 text-muted pe-5">
    <div>
        <i className="bi bi-chat-left"> </i>
        {tuit.replies}
    </div>
    <div>
        <i className="bi bi-repeat"> </i>
        {tuit.retuits}
    </div>
    {/* <div>
        {!tuit.liked ? <i className="bi bi-suit-heart" />:
        <FontAwesomeIcon icon={faHeart} style={{color:"red"}} />}
        &nbsp;{tuit.likes}
         
    </div> */}
    <div>
     Likes: {tuit.likes}
     <i onClick={() => dispatch(updateTuitThunk({
       ...tuit,
       likes: tuit.likes + 1
     }))} className="bi bi-heart-fill me-2 text-danger"></i>
     Disikes
     <i onClick={() => dispatch(updateTuitThunk({
       ...tuit,
       likes: tuit.likes - 1
     }))} className="bi bi-hand-thumbs-down"></i>
   </div>

    <div>
        {/* <i className="fas fa-external-link-alt"> </i> */}
        {/* <FontAwesomeIcon icon={faShareAlt} /> */}
        <FontAwesomeIcon icon={faShareAlt} />
        {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
    </div>
  </div>
  )

};
export default TuitStats;