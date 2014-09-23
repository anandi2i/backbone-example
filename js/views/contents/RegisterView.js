define([
  'jquery',
  'underscore',
  'backbone',
  'models/register/RegisterModel',
  'collections/register/UserCollection',
  'text!templates/data/registerTemplate.html'
], function($, _, Backbone, RegisterModel, UserCollection, registerTemplate){

  var RegisterView = Backbone.View.extend({
    el: $("#page"),
    render : function() {
        this.$el.html(registerTemplate);
        return this;
    },
    events:{
        'click #ass-signup':'registerUser'
    },
    registerUser : function(ev) {
        ev.stopImmediatePropagation();
        var email = this.$el.find("#exampleInputEmail2").val();
        var pwd = this.$el.find("#exampleInputPassword2").val();
        var id = _.uniqueId('user_');
        var users = new UserCollection();
        users.fetch();
        var user = new RegisterModel({id:id,email:email,password:pwd});
        users.add(user);
        user.save();
        users.models.forEach(function(model){
        });
       var MyApp = new Backbone.Router();
       MyApp.navigate('', {trigger: true}); 
    }
  });
  return RegisterView;
});
