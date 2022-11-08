import React from 'react';
import './index.css';
import './bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import TuitStats from './tuit-stats';
import {useDispatch} from "react-redux";
import { deleteTuit } from './tuits-reducer';

const TuitItem = (
{
  tuit = {
    "_id": 234,
    "topic": "Space",
    "userName": "SpaceX",
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
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}
  return (
  <>
  <div className="wd-flex-col border border-secondary border-opacity-10 border-r p-3">
      <div className='wd-flex-row'>
          <div className='wd-flex-col d-inline-block'>
            <img width={40} height={40} className="rounded-circle" src={require(`../images/teslabot.jpg`)} 
              alt=""/>
          </div>
          <div className='ps-3 wd-flex-col-wd90'>
              <div className='wd-flex-row-redux'>
              
                  <div>
                    <div className="fw-bold">
                    {tuit.userName} 
                    <FontAwesomeIcon icon={faCircleCheck} style={{color:"royalblue"}} /> 
                    <span className=" fw-normal text-muted"> {tuit.handle} · {tuit.time}</span>
                    </div>
                  </div>
                  
                  <i className="bi bi-x-lg float-end" 
                  onClick={() => deleteTuitHandler(tuit._id)}></i>
                  
              </div> 
              <p>{tuit.tuit}</p>
              
          </div>
      </div>

      
      <TuitStats key={tuit._id} tuit={tuit} />

    </div>

      
  </>);
};

export default TuitItem;