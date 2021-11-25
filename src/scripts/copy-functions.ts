/* TODO: Extract common logic between this file and copy-assets.ts */

import fs from 'fs/promises'
import path from 'path'

import globby from 'globby'
import mkdirp from 'mkdirp'

import { FUNCTIONS_FOLDER } from '../lib/constants'

const TARGET_FOLDER = 'netlify/functions'

export default async function copyFiles(): Promise<void> {
    const targetFiles = globby.sync(['**/*.js'], { cwd: path.join(process.cwd(), FUNCTIONS_FOLDER) })
    console.log(`Copying from ${FUNCTIONS_FOLDER} to ${TARGET_FOLDER}`)

    const targetFolder = path.join(process.cwd(), TARGET_FOLDER)
    const sourceFolder = path.join(process.cwd(), FUNCTIONS_FOLDER)

    for (const file of targetFiles) {
        const directoryName = path.dirname(file)
        await mkdirp(path.join(targetFolder, directoryName))
        const sourcePath = path.join(sourceFolder, file)
        const destinationPath = path.join(targetFolder, file)

        console.log(`copying ${sourcePath} to ${destinationPath}`)

        await fs.copyFile(sourcePath, destinationPath)
    }
}

copyFiles().catch(error => {
    console.error(error)
    process.exit(1)
})
