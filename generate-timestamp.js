import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const timestamp = new Date().toISOString();
const filePath = path.resolve(__dirname, 'public', 'build-timestamp.txt');

fs.writeFileSync(filePath, timestamp, 'utf8');
console.log(`Build timestamp written to ${filePath}`);
