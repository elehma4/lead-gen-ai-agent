// src/utils/index.ts

import fs from 'fs';
import path from 'path';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const estimateTokenCount = (text: string): number => {
  const tokens = text.split(/\s+/).length;
  return tokens;
};

const saveDataToFile = (data: string, fileType: string, processRunId: string) => {
  const date = new Date().toISOString().replace(/:/g, '-').split('.')[0]; // Format date-time
  const filename = `data-${date}-${processRunId}.${fileType}`;
  const filePath = path.join(process.cwd(), 'data', filename);

  // Ensure the directory exists
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  fs.appendFileSync(filePath, data + '\n\n', 'utf8');
};

export { delay, estimateTokenCount, saveDataToFile };