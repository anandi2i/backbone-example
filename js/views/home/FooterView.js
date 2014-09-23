define([
  'text!templates/home/footerTemplate.html'
], function(footerTemplate){

  var FooterView = Backbone.View.extend({
    el: $("#footer"),
    render: function() {
      this.$el.html(footerTemplate);
    }
  });
  return FooterView;
});
