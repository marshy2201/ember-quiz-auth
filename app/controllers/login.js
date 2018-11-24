import Controller from '@ember/controller';
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service(),

  actions: {
    async login(event) {
      event.preventDefault();
      
      const { email, password } = this;
      
      try {
        await this.session.authenticate('authenticator:credentials', email, password);
        this.transitionToRoute('/');
      } catch (err) {
        this.set('errorMessage', "Email or Password is incorrect");
      }
      
    }
  }
});
