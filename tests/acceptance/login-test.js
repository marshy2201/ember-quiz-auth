import { module, test } from 'qunit';
import { visit, fillIn, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  test('Login with valid credentials', async function(assert) {
    const email = "lewis.marshall@example.com";
    const password = "lewis.marshall";

    await visit('/login');
    await fillIn('#email', email);
    await fillIn('#password', password);
    await click('[data-test-eq=sign-in-button]');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test-eq=hello-user]').hasText("Hello Lewis!", "Welcome message with the users first name");

    await click('[data-test-eq=logout-button]');
    
    assert.equal(currentURL(), '/login');
    assert.dom('[data-test-eq=email-input]').hasText("", "Email input reset to blank");
    assert.dom('[data-test-eq=password-input]').hasText("", "Password input reset to blank");
  });
});
