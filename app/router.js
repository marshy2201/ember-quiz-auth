import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('history');
  this.route('sport');
  this.route('geography');
  this.route('science');
  this.route('filmstv');
  this.route('foodanddrink');
});

export default Router;
