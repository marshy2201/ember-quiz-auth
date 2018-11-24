import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async signup(event) {
      event.preventDefault();
      const { firstName, lastName, email, password } = this;

      const user = this.store.createRecord('user', {firstName, lastName, email, password});
      await user.save();
      this.transitionToRoute('/login');
    }
  }
});
