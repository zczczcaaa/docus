#!/usr/bin/env node

import { createCLI } from './cli'

const cli = createCLI({
  name: 'Docus',
  description: 'Docus Docs CLI',
  setup: {
    defaults: {},
  },
})

cli.runMain()
