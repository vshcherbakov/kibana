/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { PublicMethodsOf } from '@kbn/utility-types';
import { PluginInitializerContext, PluginConfigDescriptor } from '../../../../src/core/server';
import { ActionsPlugin } from './plugin';
import { configSchema, ActionsConfig } from './config';
import { ActionsClient as ActionsClientClass } from './actions_client';
import { ActionsAuthorization as ActionsAuthorizationClass } from './authorization/actions_authorization';

export type ActionsClient = PublicMethodsOf<ActionsClientClass>;
export type ActionsAuthorization = PublicMethodsOf<ActionsAuthorizationClass>;

export type {
  ActionsPlugin,
  ActionResult,
  ActionTypeExecutorOptions,
  ActionType,
  PreConfiguredAction,
  ActionsApiRequestHandlerContext,
} from './types';

export type {
  EmailActionTypeId,
  EmailActionParams,
  IndexActionTypeId,
  IndexActionParams,
  PagerDutyActionTypeId,
  PagerDutyActionParams,
  ServerLogActionTypeId,
  ServerLogActionParams,
  SlackActionTypeId,
  SlackActionParams,
  WebhookActionTypeId,
  WebhookActionParams,
  ServiceNowITSMActionTypeId,
  ServiceNowSIRActionTypeId,
  ServiceNowActionParams,
  JiraActionTypeId,
  JiraActionParams,
  ResilientActionTypeId,
  ResilientActionParams,
  TeamsActionTypeId,
  TeamsActionParams,
} from './builtin_action_types';

export type { PluginSetupContract, PluginStartContract } from './plugin';

export { asSavedObjectExecutionSource, asHttpRequestExecutionSource } from './lib';
export { ACTION_SAVED_OBJECT_TYPE } from './constants/saved_objects';

export const plugin = (initContext: PluginInitializerContext) => new ActionsPlugin(initContext);

export const config: PluginConfigDescriptor<ActionsConfig> = {
  schema: configSchema,
  deprecations: ({ renameFromRoot }) => [
    renameFromRoot('xpack.actions.whitelistedHosts', 'xpack.actions.allowedHosts'),
  ],
};
