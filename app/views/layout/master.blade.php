<!DOCTYPE html>
 <html>
	<head>
 		@yield('head')
	</head>
	 <body>
		 <div id="header">
		 	@yield('header')
		 </div>
		 @include('home.side-nav')
		 <div id="content">
		 	@yield('content')
		 </div>
		 <div id="footer">
		 	@yield('footer')
		 </div>
	 </body>
 </html> 
