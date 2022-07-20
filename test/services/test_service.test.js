const assert = require('assert');
const app = require('../../src/app');

describe('\'test_service\' service', () => {
  it('registered the service', () => {
    const service = app.service('test-service');

    assert.ok(service, 'Registered the service');
  });
});
