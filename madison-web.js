if (Meteor.isClient) {
  Session.setDefault('counter', 0);

  Template.Projects.helpers({
    projects: [
      {id: 1, title: 'Project One', colors: {primary: '#A7D7B0', secondary: '#5BA36A'}},
      {id: 2, title: 'Project Two', colors: {primary: '#CBE7F5', secondary: '#07B5E5'}},
      {id: 3, title: 'Project Two', colors: {primary: '#CBE7F5', secondary: '#07B5E5'}},
      {id: 4, title: 'Project Two', colors: {primary: '#CBE7F5', secondary: '#07B5E5'}},
      {id: 5, title: 'Project Two', colors: {primary: '#CBE7F5', secondary: '#07B5E5'}},
      {id: 6, title: 'Project Two', colors: {primary: '#CBE7F5', secondary: '#07B5E5'}},
      {id: 7, title: 'Project Two', colors: {primary: '#CBE7F5', secondary: '#07B5E5'}},
      {id: 8, title: 'Project Two', colors: {primary: '#CBE7F5', secondary: '#07B5E5'}}
    ]
  });

  Template.Header.onRendered(function() {
    var application = {
      init: function() {
        this.cacheDom();
        this.scrollEvents();
      },

      cacheDom: function() {
        this.$window = $(window);
        this.$siteHeader = $('#site-header');
      },

      scrollEvents: function() {
        var _this = this;
        var height = this.$siteHeader.innerHeight();

        this.$window.on('scroll', function() {
          if (_this.$window.scrollTop() > height) {
            _this.$siteHeader.addClass('scrolled-past');
          } else {
            _this.$siteHeader.removeClass('scrolled-past');
          }
        });
      }
    };

    application.init();
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

Router.configure({
  layoutTemplate: 'Application'
});

Router.route('/', function () {
  this.layout('Application');
});
