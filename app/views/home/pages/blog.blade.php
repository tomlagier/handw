<!-- Begin blog page -->
<script src="/js/blog.js"></script>
<div id="blog-nav" class="left-content">
<?php $posts = Wardrobe::posts(); ?>
	<ul id="blog-nav-menu">
		<?php $active = true; ?>
		@foreach($posts as $post)
			<?php 
				$date =  date( 'F j, Y' , strtotime($post['publish_date']));
				if($active){
					$activePost = true;
					$active = false;	
				}
			?>
			<li class="blog-nav-item {{($activePost ? 'active' : '')}}" data-anchor="{{$post['slug']}}">{{$date}}: {{$post['title']}}</li>
			<?php $activePost = false; ?>
		@endforeach
	</ul>
</div>

<div id="blog-posts" class="right-content column-2">
	<?php $active = true; ?>
	@foreach($posts as $post)
		<?php 
			if($active){
				$activePost = true;
				$active = false;	
			}
		?>
		<div class="blog-post {{($activePost ? 'active' : '')}}" id="{{$post['slug']}}">
			{{$post['content']}}
		</div>
		<?php $activePost = false; ?>
	@endforeach
</div>
<!-- End blog page -->