import {test} from '@oclif/test'

import cmd = require('../src')

describe('env2yaml', () => {
  test.stdout().do(() => cmd.run([]))
  // .it('runs hello', ctx => {
  //   // expect(ctx.stdout).to.contain('hello world')
  // }    )

  test.stdout().do(() => cmd.run(['npm_package_name', '-o', 'env2.yaml']))
  // .it('runs hello --name jeff', ctx => {
  //   // expect(ctx.stdout).to.contain('hello jeff')
  // })
})
