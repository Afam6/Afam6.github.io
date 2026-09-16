import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const deviconRoot = join(process.cwd(), 'node_modules', 'devicon', 'icons');
const destinationRoot = join(process.cwd(), 'public', 'tech-icons');

const icons = {
  'anaconda.svg': ['anaconda', 'anaconda-original.svg'],
  'apache.svg': ['apache', 'apache-original.svg'],
  'arduino.svg': ['arduino', 'arduino-original.svg'],
  'aws.svg': ['amazonwebservices', 'amazonwebservices-original-wordmark.svg'],
  'azure-devops.svg': ['azuredevops', 'azuredevops-original.svg'],
  'azure.svg': ['azure', 'azure-original.svg'],
  'confluence.svg': ['confluence', 'confluence-original.svg'],
  'csharp.svg': ['csharp', 'csharp-original.svg'],
  'eclipse.svg': ['eclipse', 'eclipse-original.svg'],
  'gitlab.svg': ['gitlab', 'gitlab-original.svg'],
  'heroku.svg': ['heroku', 'heroku-original.svg'],
  'java.svg': ['java', 'java-original.svg'],
  'jenkins.svg': ['jenkins', 'jenkins-original.svg'],
  'jira.svg': ['jira', 'jira-original.svg'],
  'junit.svg': ['junit', 'junit-original.svg'],
  'jupyter.svg': ['jupyter', 'jupyter-original.svg'],
  'karma.svg': ['karma', 'karma-original.svg'],
  'numpy.svg': ['numpy', 'numpy-original.svg'],
  'oracle.svg': ['oracle', 'oracle-original.svg'],
  'pycharm.svg': ['pycharm', 'pycharm-original.svg'],
  'sql-server.svg': ['microsoftsqlserver', 'microsoftsqlserver-original.svg'],
  'visual-studio.svg': ['visualstudio', 'visualstudio-original.svg'],
  'vscode.svg': ['vscode', 'vscode-original.svg'],
  'xml.svg': ['xml', 'xml-original.svg'],
};

if (!existsSync(deviconRoot)) {
  throw new Error(
    'Devicon was not found. Run `npm install devicon` before this script.',
  );
}

mkdirSync(destinationRoot, { recursive: true });

for (const [destinationName, [directoryName, sourceName]] of Object.entries(
  icons,
)) {
  const source = join(deviconRoot, directoryName, sourceName);
  const destination = join(destinationRoot, destinationName);

  if (!existsSync(source)) {
    throw new Error(`Missing Devicon asset: ${source}`);
  }

  copyFileSync(source, destination);
}

console.log(`Copied ${Object.keys(icons).length} icons to public/tech-icons.`);
