if (Meteor.isClient) {
  Session.setDefault('counter', 0);

  Template.Projects.helpers({
    projects: [
      {id: 1, title: 'Project One', colors: {primary: '#A7D7B0', secondary: '#5BA36A'}},
      {id: 2, title: 'Project Two', colors: {primary: '#CBE7F5', secondary: '#07B5E5'}}
    ]
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
  this.render('Projects');
  this.render('HeaderTemp', {to: 'header'});
  this.render('Footer', {to: 'footer'});
});
