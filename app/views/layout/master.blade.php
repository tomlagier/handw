<!DOCTYPE html>
 <html>
        <head>
                 @yield('head')
        </head>
         <div class="window-green-line top"></div>
         <body>
                         <div id="header" data-sized='false'>
                                 @yield('header')
                         </div>
                         @include('home.side-nav')
                         <div id="content">
                                 @yield('content')
                         </div>
                         <div id="footer" data-sized='false'>
                                 @yield('footer')
                         </div>
         </body>
         <div class="window-green-line bottom"></div>
 </html> 