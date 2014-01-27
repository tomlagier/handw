<!DOCTYPE html>
 <html>
        <head>
                 @yield('head')
        </head>
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

                 <div id="overlays" class="hidden bottom">
                        @yield('overlays')
                 </div>
         </body>
 </html> 