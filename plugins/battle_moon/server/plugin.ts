import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { BattleMoonPluginSetup, BattleMoonPluginStart } from './types';
import { defineRoutes } from './routes';

export class BattleMoonPlugin implements Plugin<BattleMoonPluginSetup, BattleMoonPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('battleMoon: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('battleMoon: Started');
    return {};
  }

  public stop() {}
}
