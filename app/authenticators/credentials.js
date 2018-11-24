import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from "@ember/service";

export default Base.extend({
  ajax: service(),

  async authenticate(email, password) {
    const response = await this.ajax.post('/token', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({ email, password })
    });
    
    const { user_id, token } = response;
    return { user_id, token };
  },

  async restore(data) {
    return data;
  }
});
