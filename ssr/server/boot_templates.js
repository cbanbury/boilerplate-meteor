SSR.compileTemplate('masterLayout', Assets.getText('master.html'));
Template.masterLayout.helpers({
  getDocType: function() {
    return "<!DOCTYPE html>";
  }
});

SSR.compileTemplate('home', Assets.getText('home.html'));
