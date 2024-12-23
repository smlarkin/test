/// <reference path="./.sst/platform/config.d.ts" />

import { sst } from 'sst'

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
    }
  },
  async run() {
    new sst.aws.Function('Api', {
      url: true,
      handler: 'index.handler',
    })
  },
})
