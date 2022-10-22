import React from 'react';
import './index.css';
import './bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
const PostItem = (
{
  post = {
    "userName": "SpaceX",
    "account": "SpaceX",
    "time": "23h",
    "title": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon -> '<a className='wd-noLinkDecor' href='netflix.com'>netflix.com</a>'",
    "image": "teslabot.jpg",
    "descriptionHeading": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    "description": "From training to launch to landing , this all-access docuseries rides along with the Inspiration4 crew on the first all civilian orbital space ...",
    "comment":"595",
    "retweet":"1,168",
    "like":"11.1K",
    "link":""
  }
}
) => {
  return (
  <>

  <div className="wd-flex-column border border-secondary border-opacity-10 border-r p-3">
  {post.retweet_notification !=="" && <div className='fw-bold text-muted pb-2'><i className="bi bi-repeat"> </i>{post.retweet_notification}</div>}
      <div className='wd-flex-row'>
          <div className='wd-flex-column d-inline-block'>
            <img width={40} height={40} className="rounded-circle" src={require(`../images/teslabot.jpg`)} alt=""/>
          </div>
          <div className='ps-3'>
              <div className="d-flex justify-content-between">
                  <div>
                  <div className="fw-bold">{post.userName} <i className="fa fa-check-circle"></i><span className=" fw-normal text-muted"> @{post.account} · {post.time}</span></div>
                  </div>
                  <span>&#8943;</span>
              </div>
              <p>{post.title} <a className='wd-noLinkDecor' href='netflix.com'>{post.link}</a></p>
              
          </div>
      </div>
      
      <div className='wd-borderRadius12px border border-secondary border-opacity-25 col-11 ms-5'>
          {post.image !== "" && <img src={require(`../images/teslabot.jpg`)}  width="100%" height="400px" className="wd-post-pic" alt=""/>}
          {post.descriptionHeading !== "" ?
          <div className='wd-flex-row'>
          <div className='wd-flex-column d-inline-block p-2'>
            <img width={30} height={30} className="rounded-circle" src={require(`../images/teslabot.jpg`)} alt=""/>
          </div>
          <div className='pt-2'>
              <div className="d-flex justify-content-between">
                  <div>
                  <div className="fw-bold">{post.retweetUserName} <i className="fa fa-check-circle"></i><span className=" fw-normal tec"> @{post.retweetAccount} · {post.retweetTime}</span></div>
                  </div>
                  
              </div>
              <p>{post.retweetTitle} <a className='wd-noLinkDecor' href='netflix.com'>{post.link}</a></p>
              
          </div>
      </div>: ""}
      </div>
          
      <div className="flex-row wd-flex-justifySpaceBetween ms-5 mt-2 text-muted pe-5">
        <div>
            <i className="bi bi-chat-left"> </i>
            {post.comment}
        </div>
        <div>
            <i className="bi bi-repeat"> </i>
            {post.retweet}
        </div>
        <div>
            <i className="bi bi-suit-heart"> </i>
            {post.like}
        </div>
        <div>
            <i className="bi bi-folder-symlink"> </i>
        </div>
      </div>
      {post.show_more && 
          <div className='ps-5 pt-3' >
            <a style={{textDecorationLine: 'none'}} href='/#'>Show this thread</a>
          </div>}

    </div>

      
  </>);
};

export default PostItem;