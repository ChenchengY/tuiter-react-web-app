
const PostItem = (p) => {
    return (`
    <div class="wd-flex-column border border-secondary border-r p-3">
        <div class='wd-flex-row'>
            <div class='wd-flex-column d-inline-block'>
            <img width="40" height="40" src='teslabot.jpg' class="rounded-circle">
            </div>
            <div class='ps-3'>
                <div class="d-flex justify-content-between">
                    <div>
                    <div class="fw-bold text-white">${p.userName} <i class="fa fa-check-circle"><span class=" fw-normal text-muted"> @${p.account} · ${p.time}</span></i></div>
                    </div>
                </div>
                <p class="text-white">${p.title}</p>
            </div>
        </div>
        
        <div class='wd-borderRadius12px border border-secondary col-11 ms-5'>
            <img src=${p.image}  width="100%" height="264px" class="wd-post-pic">
            ${p.descriptionHeading != "" ?
            `
              <p class="p-2  border-top border-secondary">
                  <span class="fw-bold text-white"> ${p.descriptionHeading} </span>
                  <br>
                  <span class="text-muted">${p.description}</span>
              </p>
            `
: ``}
        </div>
            
        <div class="flex-row wd-flex-justifySpaceBetween ms-5 mt-2 text-muted">
        <div>
            <i class="far fa-comment"></i>
            ${p.comment}
        </div>
        <div>
            <i class="fas fa-retweet"></i>
            ${p.retweet}
        </div>
        <div>
            <i class="far fa-heart"></i>
            ${p.like}
        </div>
        <div>
            <i class="fas fa-external-link-alt"></i>
        </div>
    </div>
            </div>

        
    `)
}
export default PostItem