import { ArgumentsCamelCase, CommandModule } from 'yargs';
import langSelector from '../utils/langSelector';

const commandCreate: CommandModule = {
  command: 'create',
  describe: 'Create a new project template ready to get started.',
  builder: {
    lang: {
      alias: 'l',
      describe: 'Specify the programming language for the project',
      demandOption: false, // Hace que sea obligatorio proporcionar este parámetro
      type: 'string', // Define el tipo de dato del parámetro
    },
  },
  handler: (argv: ArgumentsCamelCase<{ lang?: 'js' | 'ts' }>) => {
    if(!['ts', 'js'].includes(argv.lang || 'ts')){
      throw 'Unknown selected language. `--lang ts` or `--lang js` allowed'
    }
    langSelector(argv.lang ? argv.lang : 'ts');
  },
};

export default commandCreate;