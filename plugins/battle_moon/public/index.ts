import './index.scss';

import { BattleMoonPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new BattleMoonPlugin();
}
export { BattleMoonPluginSetup, BattleMoonPluginStart } from './types';
