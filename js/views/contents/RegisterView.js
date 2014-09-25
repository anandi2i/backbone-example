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
        var regModel = new RegisterModel({id:'1',email:'one@gmail.com',password:'hai'});

        var users = new UserCollection();
        users.fetch();
        var user = new RegisterModel({id:id,email:email,password:pwd});
        users.add(user);
        user.save();
        $("#event-bind").off('click').on('click',function() {
            alert("hellow ");
        });
        $("#event-unbind").off('click').on('click',function() {
            alert("hellow unbind ");
            $(this).listenTo($("#event-bind"));
        });
        //To navigate to others.
        //var MyApp = new Backbone.Router();
        //MyApp.navigate('', {trigger: true});
    }
  });
 
  return RegisterView;
});

