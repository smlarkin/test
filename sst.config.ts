/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    // sst deploy --stage prod

    // test-prod-nameofbucket

    /**
     * environments:
     * - production
     * - preview
     * - development
     */

    return {
      name: 'test',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
      providers: {
        aws: {
          profile: 'test',
        },
      },
    };
  },

  async run() {
    const auth = new sst.aws.Auth('Auth', {
      issuer: 'packages/backend/src/auth.handler',
    });

    new sst.aws.Function('Api', {
      url: true,
      handler: 'packages/backend/server.handler',
    });
  },
});
