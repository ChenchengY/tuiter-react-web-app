// const PostItem = (p) => {
//   return(
//     `
//     <div class="list-group-item">
//     <div class="row">
//         <div class="col-1>
//             <div class="wd-images-to-follow">
//                 <img width="40" height="40" src='teslabot.jpg' class="rounded-circle">
//             </div>
//         </div>
//         <div class="col-2">
//           <div class="fw-bold">elon mask <i class="fa fa-check-circle"><span class=" fw-normal text-muted"> @elonmask · 23h</span></i></div>
//           <div class="wd-img-container">
//           <img class="wd-img-post" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png">
//           </div>
//         </div>
        
//     </div>
//   </div>
//  `
//   );
//  }

//  export default PostItem;

//  $('#wd-pi').append(`
   
//     ${PostItem()}
      
   
// `);

const verifiedIcon = `<span class="fa-stack fa-xs" style="font-size: 0.5rem;">
    <i class="fas fa-certificate fa-stack-2x" style="color: white"></i>
    <i class="fas fa-check fa-inverse fa-stack-1x" style="color: black"></i>
</span>`


const PostItem = (post) => {
    return (`
            <div class="wd-flex-column">
                <div class='wd-flex-row'>
                    <div class='wd-flex-column d-inline-block'>
                        <img src=${post.profilePhoto} height="40px" width="40px" class="wd-borderRadiusCircle me-2">
                    </div>
                    <div class='wd-flex-column ps-2 w-100'>
                        <div class="d-flex justify-content-between">
                            <div>
                                 <span class="wd-font13 wd-whiteFont wd-fontBold">${post.username} </span> 
                            ${post.verified ? verifiedIcon : ``}
                            <span class="wd-font13 wd-lightGreyFont"> @${post.handle} · ${post.time} </span> 
                            </div>
                            <i class="fas fa-ellipsis-h wd-flex-noWrap"></i>
                        </div>
                        
                        <div class='mb-3'>
                            <span class="wd-font13 wd-whiteFont">${post.title}</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-2"></div>
                
                <div class='wd-borderRadius12px border border-dark col-11' style="margin-left: 48px" ">
                    <img src=${post.image}  width="100%" height="264px" class='wd-borderRadius12px'>
                    ${post.descriptionHeading != '' ?
        `
                        <br>
                        <p class="wd-font13 ps-3 pe-3 pt-3 pb-1  border-top border-dark">
                            <span class="wd-whiteFont wd-fontBold"> ${post.descriptionHeading} </span>
                            <br>
                            <span class="wd-lightGreyFont">${post.description}</span>
                            <br>
                            <i class="fa fa-link" aria-hidden="true" style="color: rgb(110, 118, 125)"></i>
                            &nbsp; <span class="wd-lightGreyFont">${post.externalLink} </span>
                        </p>
                    `
        : ``}
                </div>
            
            </div>
        <div class='wd-flex-row wd-flex-justifySpaceBetween wd-flex-alignCenter ps-4 pe-4 mt-2'style="margin-left:48px" >
            <a href='#' id='comment' class='wd-noLinkDecor wd-lightGreyFont'>
                <i class="far fa-comment"></i>
                ${post.comment}
            </a>
            <a href='#' id='retweet' class='wd-noLinkDecor'>
                <i class="fas fa-retweet"></i>
                ${post.retweet}
            </a>
            <a href='#' id='like' class='wd-noLinkDecor'>
                <i class="far fa-heart"></i>
                ${post.like}
            </a>
            <a href='#' id='share' class='wd-noLinkDecor'>
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
        <hr class='wd-whiteFont'></hr>
        
    `)

}
export default PostItem



