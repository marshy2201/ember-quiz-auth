import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  session: service(),
  host: 'http://localhost:3000',

  authorize(xhr) {
    let { token } = this.session.data.authenticated;
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
  }
});