(function($) {
  'use strict';

  var _hashReg = /#([^#]*)$/,
    _hashUrlReg = /^\s*np\s*\=\s*(.*?)\s*$/,
    _opening = false,
    _app = window.App = {
      hash: function(url) {
        url || (url = location + '');
        return _hashReg.test(url) ? RegExp.$1 : '';
      },
      hashUrl :function(url){
        var hash = _app.hash(url);
        return _hashUrlReg.test(hash) ? RegExp.$1 : ''
      },
      mainView:function(){
        return bingo.app('demo').view('main');
      },
      mainRoute:function(){
        return _app.mainView().mainRoute
      },
      open:function(url, ctrl){
        try{
          _opening = true;
          location.hash = 'np='+url;
          var view = _app.mainView();
          view && view.startProg();
         return _app.mainRoute().href(url, ctrl).then(function(r){
            view && view.endProg();
            return r;
         });
        } finally{
          _opening = false;
        }
      }
    };

  $(function() {
    /*var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });*/

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });


    $(document.body).on('click', '[data-am-dropdown]', function() {
      var jo = $(this);
      if (jo.data('init-am-dropdown') !== 1) {
        jo.data('init-am-dropdown', 1);
        jo.dropdown().dropdown('open');
      }
    });

    $(window).on('hashchange', function() {
      if (_opening == true) return;
      var url =_app.hashUrl();
      if (url) {
        _app.open(url);
      }
    });

  });

})(jQuery);
