import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`

  <div class="row">
  <!-- search field and cog -->
  <div class="wd-search-bar-wrapper ">
<i class="fa fa-search text-secondary ps-3 position-absolute"></i>
<input class="wd-search-bar bg-dark" class="form-control" placeholder="Search Tuiter" >

</input>
<a class="wd-setting pe-3" href="explore-settings.html">
  <i class="fa fa-cog fs-6"></i>
</a>
</div>

<ul class="nav nav-tabs">
<li class="nav-item">
<a class="nav-link" href="for-you.html">For you</a>
</li>
<li class="nav-item">
<a class="nav-link" href="tending.html">Trending</a>
</li>
<li class="nav-item">
<a class="nav-link" href="news.html">News</a>
</li>
<li class="nav-item">
<a class="nav-link" href="sports.html">Sports</a>
</li>
<li class="nav-item ">
<a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
</li>
</ul>
</div>
</ul>

<div >
<div class="position-relative">
<img src="./teslabot.jpg" class="img-fluid border border-secondary" />
<h2 class="wd-img-label">Tesla's Teslabot</h2>
</div>
</div>


 ${PostSummaryList()}
`);

        
  
}
export default ExploreComponent;

{/* <div class="wd-search-bar-wrapper ">
<i class="fa fa-search text-secondary ps-3 position-absolute"></i>
<input class="wd-search-bar bg-dark" class="form-control" placeholder="Search Tuiter" >

</input>
<a class="wd-setting pe-3" href="explore-settings.html">
  <i class="fa fa-cog text-light fs-6"></i>
</a>
</div>

<ul class="nav mb-2 nav-tabs">
<li class="nav-item">
<a class="nav-link text-secondary" href="for-you.html">For you</a>
</li>
<li class="nav-item">
<a class="nav-link text-secondary" href="tending.html">Trending</a>
</li>
<li class="nav-item">
<a class="nav-link text-secondary" href="news.html">News</a>
</li>
<li class="nav-item">
<a class="nav-link text-secondary" href="sports.html">Sports</a>
</li>
<li class="nav-item ">
<a class="nav-link d-none d-md-block text-secondary" href="entertainment.html">Entertainment</a>
</li>
</ul>
<!-- image with overlaid text -->
<div class="mt-2">
<div class="position-relative">
<img src="./teslabot.jpg" class="img-fluid border border-dark" />
<h2 class="wd-img-label">Tesla's Teslabot</h2>
</div>
</div> */}
