import PostItem from "./PostItem.js";
import posts from "./posts.js";
const PostList = () => {
  return (
  `
   <div class="list-group rounded-20">
       
        ${
          posts.map(p => {
            return(PostItem(p));
          }).join('')
        }
  </div>
     
`); }

export default PostList;

$('#wd-pol').append(`
   
    ${(PostList())}
   
`);