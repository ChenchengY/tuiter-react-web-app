import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

import './index.css';
import './bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import postsArray from './posts.json';
// import TuitItem from "./tuit-item";


const TuitsList = () => {
	const {tuits, loading} = useSelector(
		state => state.tuitsData)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(findTuitsThunk())
	}, [dispatch]);
       
  // const tuitArray = useSelector(state => state.tuits);
	return (
			<div className="list-group">
				{
				loading &&
				<li className="list-group-item">
						Loading...
				</li>
				}

					{tuits.map(tuit => 
			<TuitItem key={tuit._id} tuit={tuit}/>
				)} 
			{/* {tuits.map(tuit => <TuitItem key={tuit._ud} tuit={tuit} />)} */}
			</div>
	)

};
export default TuitsList;