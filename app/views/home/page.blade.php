 <!-- Begin page wrapper -->
 <div class="page <?php if ($page !== 'services') echo 'page-load'?>" data-contents="{{$page}}">
 	<div class="loader"><img class="spinner" src="/img/loader.gif"/></div>
 	<div id="{{$page}}" class="page-contents fadein" data-loaded="false"></div>
 </div>
 <!-- End page wrapper-->