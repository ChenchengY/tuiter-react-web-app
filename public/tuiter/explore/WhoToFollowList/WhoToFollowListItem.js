const WhoToFollowListItem = (who) => {
  return(`
 
  <div class="list-group-item">
  <div class="row">
      <div class="col-lg-2 align-self-center">
          <div class="wd-images-to-follow">
              <img width="40" height="40" src=${who.avatarIcon} class="rounded-circle">
          </div>
      </div>
      <div class="col-lg-6">
        <div class="fw-bold">${who.userName} <i class="fa fa-check-circle"></i></div>
        <div>@${who.handle}</div>
      </div>
      <div class="col-4 align-self-center">
        <button type="button" class="btn btn-primary rounded-pill float-end fw-bold">Follow</button>
      </div>
  </div>
</div>
  `);
 }


 export default WhoToFollowListItem;

