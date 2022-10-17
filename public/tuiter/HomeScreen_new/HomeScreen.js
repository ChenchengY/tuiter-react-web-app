import HomeComponent from "./HomeComponent.js";
import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import PostSummaryList from "../explore/PostSummaryList/index.js";

function HomeScreen() {
    let active="home"
    $('#wd-home').append(`
    <div class="row mt-2">
    <div class="col-lg-1 col-xl-2 col-md-2 col-sm-2">
    
  
    ${NavigationSidebar(active)}
    </div>
    <div class="col-9 col-lg-7 col-xl-6">
    ${HomeComponent(active)}
    </div>
    <div class="d-none col-lg-3 d-lg-block">
    ${PostSummaryList()}
    </div>
  
  
  </div>
  `);
  }
  
  $(HomeScreen);



