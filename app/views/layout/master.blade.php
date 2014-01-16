<!DOCTYPE html>
 <html>
	<head>
 		@yield('head')
	</head>
	 <body>
	     <div class="window-green-line top"></div>
			 <div id="header">
			 	@yield('header')
			 </div>
			 <div id="content">
			 	@yield('content')
			 </div>
			 <div id="footer">
			 	@yield('footer')
			 </div>
		<div class="window-green-line bottom"></div>
	 </body>
 </html> 
