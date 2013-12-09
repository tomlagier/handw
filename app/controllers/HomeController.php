<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	| You may wish to use controllers instead of, or in addition to, Closure
	|
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/
	
	
	/**
	*	Returns the specified page view
	*/
	public function getPage( $page )
	{
		return View::make( 'home.pages.' . $page );
	}
	
	/**
	*	Sets up the index page view
	*/
	public function getIndex(){
		return View::make( 'home.index' );
	}
	
	public function getPosts(){
		$posts = Wardrobe::posts();
		return $posts;
	}
}