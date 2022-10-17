import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
   return (`
   <div class="flex-column border border-secondary rounded">
        ${
          exploreItems.map(post => {
            return(PostSummaryItem(post));
          }).join('')
        }
  </div>
      
`); }

export default PostSummaryList;


// $('#post-summary').append(`
//    <div class="container">
//     ${PostSummaryList()}
//    </div>
//     `);