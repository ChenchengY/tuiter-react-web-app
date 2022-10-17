import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js"
const WhoToFollowList = () => {
   return (`
   <div class="list-group rounded-20">
       <li class="list-group-item fw-bold">
           Who to follow
       </li>
        ${
          whos.map(who => {
            return(WhoToFollowListItem(who));
          }).join('')
        }
  </div>
  </div>
      
`); }

export default WhoToFollowList;

// $('#who-follow').append(`
//    <div class="container">
//     ${WhoToFollowList()}
      
//    </div>
// `);