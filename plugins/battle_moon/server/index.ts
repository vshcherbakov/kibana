import { PluginInitializerContext } from '../../../src/core/server';
import { BattleMoonPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new BattleMoonPlugin(initializerContext);
}

export { BattleMoonPluginSetup, BattleMoonPluginStart } from './types';
