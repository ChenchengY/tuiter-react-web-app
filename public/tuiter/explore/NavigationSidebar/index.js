const NavigationSidebar = (active) => {
  $(document).ready(function () {
    console.log(active);
    $('#' + active).addClass('active');
});
  return(`
    <div class="list-group">
      <a class="list-group-item" href="/">
      <i class="fab fa-twitter"></i></a>

      <a class="list-group-item" id="home" href="../HomeScreen_new/index.html">
      <i class="fa fa-home"></i>
      <span class="d-none d-xl-inline">Home</span></a>

      <a class="list-group-item" id="explore" href="../explore/index_5.html">
      <i class="fa fa-hashtag"></i>
      <span class="d-none d-xl-inline">Explore</span></a>

      <a class="list-group-item" href="/">
      <i class="fa fa-bell"></i>
      <span class="d-none d-xl-inline">Notification</span></a>

      <a class="list-group-item" href="/">
      <i class="fa fa-envelope"></i>
      <span class="d-none d-xl-inline">Messages</span></a>

      <a class="list-group-item" href="/">
      <i class="fa fa-bookmark"></i>
      <span class="d-none d-xl-inline">Bookmarks</span></a>

      <a class="list-group-item" href="/">
      <i class="fa fa-list"></i>
      <span class="d-none d-xl-inline">Lists</span></a>

      <a class="list-group-item" href="/">
      <i class="fa fa-user"></i>
      <span class="d-none d-xl-inline">Profile</span></a>

      <a class="list-group-item" href="/">
      <i class="fa fa-ellipsis-h"></i>
      <span class="d-none d-xl-inline">More</span></a>

        <!-- continue rest of list, e.g.,
             Home, Explore, Notifications,  Messages, etc. -->
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `);
 }
 export default NavigationSidebar;