Template.navbarMenu.events({
    'click .nav-home': function() {
        FlowRouter.go('home');
    }
});

Template.navbarMenu.helpers({
    activeIfNameIs: function(name) {
        if (FlowRouter.getRouteName() === name) {
            return "active";
        }
    }
});
