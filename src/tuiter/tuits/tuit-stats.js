import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCircleCheck, faShareAlt, faHeart } from '@fortawesome/free-solid-svg-icons';

const TuitStats = (
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
    <div>
        {!tuit.liked ? <i className="bi bi-suit-heart" />:
        <FontAwesomeIcon icon={faHeart} style={{color:"red"}} />}
        &nbsp;{tuit.likes}
         
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