const PostSummaryItem = (post) => {
  return(
    `
    <div class="d-flex wd-post-container text-white border border-secondary">
    <div class="p-3">
    ${post.topic !=""  ?
          `<div class="text-muted">
          ${post.topic}
          </div>` : ""}
      ${post.userName !=="" ? `<div class="fw-bold text-white">
        ${post.userName}
        <i class="fa fa-check-circle"></i><span class=" fw-normal text-muted"> - ${post.time}</span>
      </div>` :  ""}

      ${post.userName ==="" ? `<i class="fa fa-check-circle"></i><span class=" fw-normal text-muted"> - ${post.time}</span>` : ""}
      ${post.title !== "" ? `<div class="fw-bold">
          ${post.title}
          </div>`  : ""}

      ${post.tweets ? `<div class="text-muted">
          ${post.tweets}
        </div>` : ""
        }
    </div>
    <div class="wd-img-container">
      <img class="wd-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png">
    </div>
  </div>`
  );
 }


 export default PostSummaryItem;