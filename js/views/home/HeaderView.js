define([
  'text!templates/home/headerTemplate.html'
], function(headerTemplate){

  var HeaderView = Backbone.View.extend({
    el: $("#header"),
    render: function() {
      this.$el.html(headerTemplate);
    }
  });
  return HeaderView;
});
