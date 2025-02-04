/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2024-05-20T21:05:10+02:00
 * @Copyright: Technology Studio
 */

import { test } from '@playwright/test'
import { v5 as uuid } from 'uuid'
import * as path from 'path'
import { configManager } from '@txo-peer-dep/test-automation-seed'
import type { SeedExecutor } from '@txo-peer-dep/test-automation-seed'

export function getTestTitle(): string {
  const testInfo = test.info()
  return testInfo.title
}

export function getTestFilePath(): string {
  const testInfo = test.info()
  const relativePath = path.relative(__dirname, testInfo.file)
  return relativePath.replace(/^(\.\.\/)*/, '')
}

export function getTestRidge(): string {
  return getTestTitle() + getTestFilePath()
}

export const seedEntities = async <ASSETS> (
  seedExecutor: SeedExecutor<ASSETS>,
): Promise<ASSETS> => {
  const fingerprint = uuid(configManager.config.getRidge() + getTestRidge(), '1b671a64-40d5-491e-99b0-da01ff1f3341')

  return await seedExecutor.execute(fingerprint)
}

configManager.update({
  seedEntities: () => seedEntities,
})
