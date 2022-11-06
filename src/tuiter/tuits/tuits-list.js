import React from "react";
import './index.css';
import './bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import postsArray from './posts.json';
import TuitItem from "./tuit-item";

// import tuits from "./tuits.json";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const tuitArray = useSelector(state => state.tuits);
    return (
        <div className="list-group">
            {tuitArray.map(tuit => 
        <TuitItem key={tuit._id} tuit={tuit}/>
    )}
        </div>
    )

};
export default TuitsList;