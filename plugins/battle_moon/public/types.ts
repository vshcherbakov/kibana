import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface BattleMoonPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BattleMoonPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
