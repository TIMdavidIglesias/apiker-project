#!/usr/bin/env node

import yargs from 'yargs';
import commandCreate from './cmd/create';

yargs
  .command(commandCreate)
//   .command(commandB)
  .demandCommand()
  .help().argv;