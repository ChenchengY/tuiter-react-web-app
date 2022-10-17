import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../whoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";

function exploreComponent() {
  let active="explore"
  $('#wd-explore').append(`
  
<div class="row mt-2">
  <div class="col-lg-1 col-xl-2 col-md-2 col-sm-2">

  ${NavigationSidebar(active)}
  </div>

  <div class="col-9 col-lg-7 col-xl-6">
  ${ExploreComponent()}
  </div>
  <div class="d-none col-lg-3 d-lg-block">
  ${WhoToFollowList()}
  </div>
</div>
`);
}

$(exploreComponent);
