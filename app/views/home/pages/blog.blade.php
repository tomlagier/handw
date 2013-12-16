<!-- Begin blog page -->
<div id="blog-nav" class="left-content">
<?php $posts = Wardrobe::posts(); ?>
	<ul id="blog-nav-menu">
		@foreach($posts as $post)
			<?php $date =  date( 'F j, Y' , strtotime($post['publish_date']));?>
			<li class="blog-nav-item" data-target="{{$post['slug']}}">{{$date}}: {{$post['title']}}</li>
		@endforeach
	</ul>
</div>

<div id="blog-posts" class="right-content col-2">
	@foreach($posts as $post)
		<div class="blog-post" id="{{$post['slug']}}">
			{{$post['content']}}
		</div>
	@endforeach
</div>
<!-- End blog page -->