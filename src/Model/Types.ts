/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2023-09-06T15:09:69+02:00
 * @Copyright: Technology Studio
**/

import type { SeedBuilder } from '@txo/test-automation-seed'

declare global {
  function seedEntities<ASSETS extends Record<string, unknown>>(seedBuilder: SeedBuilder<ASSETS>): Promise<ASSETS>
}
