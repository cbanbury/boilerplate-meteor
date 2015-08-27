Template.home.onRendered(function() {
    $('.modal-trigger').leanModal();
});

Template.home.onCreated(function() {
    var title = 'Meteor boilerplate';
    var description = 'Heroku Compatible Meteor Boilerplate with FlowRouter, Materialize and other default goodies';
    SEO.set({
        title: title,
        description: description,
        meta: {
            'property="og:title"': title,
            'property="og:description"': description
        }
    });
});
