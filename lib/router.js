FlowRouter.route('/', {
    name: "home",
    action: function() {
        BlazeLayout.render("masterLayout", {main: "home"});
    }
});
