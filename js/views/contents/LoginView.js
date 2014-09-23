define([
  'jquery',
  'underscore',
  'backbone',
  'models/register/RegisterModel',
  'collections/register/UserCollection',
  'text!templates/data/loginTemplate.html'
], function($, _, Backbone, RegisterModel, UserCollection, loginTemplate){

  var loginView = Backbone.View.extend({
    el: $("#page"),
    render : function() {
        this.$el.html(loginTemplate);
    },
    events:{
        'click #login':'ValidateUserDetails'
    },
    ValidateUserDetails : function(ev) {
        ev.stopImmediatePropagation();
        var email = this.$el.find("#login-email").val();
        var pwd = this.$el.find("#login-pwd").val();
        var users = new UserCollection();
        users.fetch();
        var self = this; 
        users.models.forEach(function(model){
            if(email === model.get('email') && pwd === model.get('password')) {
                console.log("in login: " + model.get('id'),model.get('email'),model.get('password'));
                var loginSuccess = "<div class='row'>"+ 
                                        "<div class='col-sm-4'></div>"+
                                        "<div class='col-sm-4'>Login Successfull</div>"+
                                        "<div class='col-sm-4'></div>"+
                                   "</div>";
                self.$el.html(loginSuccess);
            }
            
        });
    }
  });
  return loginView;
});
