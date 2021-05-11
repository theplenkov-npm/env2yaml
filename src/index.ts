import {Command, flags} from '@oclif/command'
import {stringify} from 'yaml'
import {writeFile} from 'fs/promises'

class Env2Yaml extends Command {
  static description = 'Outputs environment variables to yaml'

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    output: flags.string({
      char: 'o',
      description: 'Output file',
      default: 'env.yaml',
    }),
  }

  static args = [
    {
      name: 'variables',
      description: 'Comma-separated list of variables to output',
    },
  ]

  async run() {
    const {args, flags} = this.parse(Env2Yaml)

    const env = new Proxy(process.env, {
      ownKeys: target => args.variables?.split(',') || Reflect.ownKeys(target),
    })

    writeFile(flags.output, stringify(env))
  }
}

export = Env2Yaml