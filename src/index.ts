import yargs from 'yargs';
import commandCreate from './commands/create';

yargs
  .command(commandCreate)
//   .command(commandB)
  .demandCommand()
  .help().argv;