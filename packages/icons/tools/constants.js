import path, { join } from 'path';
const __dirname = path.resolve();

const SVG_PATH = join(__dirname, './svg');
const REACT_PATH = join(__dirname, './src');

const BLOCKLIST_FILES = ['.DS_Store', 'helpers', 'types'];

export { SVG_PATH, REACT_PATH, BLOCKLIST_FILES };
