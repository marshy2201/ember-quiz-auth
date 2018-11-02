import Controller from '@ember/controller';
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service(),

  actions: {
    async login(event) {
      event.preventDefault();
      
      const { email, password } = this;
      await this.get('session.isAuthenticated');
    }
  }
});
