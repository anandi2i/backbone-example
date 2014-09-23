define([
  'jquery',
  'underscore',
  'backbone',
  'models/register/RegisterModel',
  'libs/backbone/backbone.localStorage-min'
], function($, _, Backbone, RegisterModel, localStorage){
  var UserCollection = Backbone.Collection.extend({
    model: RegisterModel,
    localStorage: new Backbone.LocalStorage("users")
  });
  return UserCollection;
});