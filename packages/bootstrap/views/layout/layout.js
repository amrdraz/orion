Template.orionBootstrapLayout.events({
  'click .orion-bootstrap-admin.toggled': function() {
    $(".orion-bootstrap-admin").removeClass("toggled");
    $("html,body").removeClass("no-overflow");
  },
  'click .menu-toggle': function () {
    $(".orion-bootstrap-admin").toggleClass("toggled");
    $("html,body").toggleClass("no-overflow");
  }
});