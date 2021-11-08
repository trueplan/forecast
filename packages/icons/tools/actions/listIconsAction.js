import path from 'path';
import {
  readdirAsync,
  removeTsxExtension,
  maybeHandleError,
} from '../utils.js';
import { REACT_PATH, BLOCKLIST_FILES } from '../constants.js';
import { buildListTemplate } from '../templates/buildListTemplate.js';
import { jsonTemplate } from '../templates/jsonTemplate.js';
import { writeToFile } from '../writeToFile.js';

const __dirname = path.resolve();

async function listIconsAction() {
  let destinationFiles;
  try {
    destinationFiles = await readdirAsync(REACT_PATH);
    destinationFiles = destinationFiles
      .filter((fileName) => !BLOCKLIST_FILES.includes(fileName))
      .map(removeTsxExtension);
  } catch (error) {
    maybeHandleError('Error occurred while generating icon list!', error);
  }

  // Write the icons list to JSON
  writeToFile(
    path.join(__dirname, './json/icons.json'),
    jsonTemplate(destinationFiles),
    'utf8',
    {
      errorMessage: `Couldn't update raw JSON file!`,
    }
  );

  // Write the export file for the system
  writeToFile(
    path.join(__dirname, './index.ts'),
    buildListTemplate(destinationFiles),
    'utf8',
    {
      errorMessage: `Couldn't update index export file!`,
    }
  );
}

export { listIconsAction };
