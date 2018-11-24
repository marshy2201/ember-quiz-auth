import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  session: service(),
  store: service(),

  async init() {
    this._super(...arguments);
    this.set('user', await this.store.findRecord('user', this.session.data.authenticated.user_id));
  }
});
