define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/home/HeaderView',
  'views/home/FooterView',
  'views/contents/RegisterView',
  'views/contents/LoginView',
], function($, _, Backbone, HomeView, HeaderView, FooterView, RegisterView, LoginView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'signup': 'showSignUp',
      'login': 'showLogin',
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    app_router.on('route:showSignUp', function(){
        var signUp = new RegisterView();
        var s = signUp.render();
        console.log("s",s)
        //app_router.navigate('', true);
    });

    app_router.on('route:showLogin', function () {
        var login = new LoginView();
        login.render();
    });

    app_router.on('route:defaultAction', function (actions) {
        var homeView = new HomeView();
        var headerView = new HeaderView();
        var footerView = new FooterView();
        homeView.render();
        headerView.render();
        footerView.render();
    });
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
