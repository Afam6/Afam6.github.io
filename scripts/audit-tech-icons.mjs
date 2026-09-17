import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

const sourceRoot = join(process.cwd(), 'src');
const publicRoot = join(process.cwd(), 'public');
const sourceExtensions = new Set(['.ts', '.tsx', '.css']);
const references = new Map();

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);

    if (statSync(path).isDirectory()) {
      walk(path);
      continue;
    }

    if (!sourceExtensions.has(extname(path))) continue;

    const source = readFileSync(path, 'utf8');
    const matches = source.matchAll(/['"](\/tech-icons\/[^'"?]+)['"]/g);

    for (const match of matches) {
      const reference = match[1];
      const files = references.get(reference) ?? [];
      files.push(path.replace(`${process.cwd()}/`, ''));
      references.set(reference, files);
    }
  }
}

if (!existsSync(sourceRoot)) {
  throw new Error(
    'The src directory was not found. Run this from the project root.',
  );
}

walk(sourceRoot);

const missing = [...references.entries()].filter(
  ([reference]) => !existsSync(join(publicRoot, reference.replace(/^\//, ''))),
);

if (missing.length > 0) {
  console.error('Missing technology icon files:\n');

  for (const [reference, files] of missing) {
    console.error(`- ${reference}`);
    console.error(`  referenced by: ${files.join(', ')}`);
  }

  process.exitCode = 1;
} else {
  console.log(`All ${references.size} local technology icons are present.`);
}
