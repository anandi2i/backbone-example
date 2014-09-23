define([
  'jquery',
  'underscore',
  'backbone',
  'models/home/homeModel',
  'text!templates/home/homeTemplate.html',
], function($, _, Backbone, homeModel, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),
    render: function() {
      this.$el.html(homeTemplate);
    }
  });
  return HomeView;
});
