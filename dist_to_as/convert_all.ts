import fs from "fs";
import path from "path";

// Define the output directory for AssemblyScript files
const ASSEMBLY_DIR = "./assembly";
const DIST_DIR = "./dist";

// Create a mapping of file extensions to content types
const CONTENT_TYPES: { [key: string]: string } = {
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.html': 'text/html; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=UTF-8',
  '.map': 'application/json; charset=UTF-8'
};

// Function to get content type based on file extension
function getContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  return CONTENT_TYPES[ext] || 'application/octet-stream';
}

// Function to convert a file to AssemblyScript constant
function convertFileToAs(inputPath: string, varName: string): void {
  const fileContent = fs.readFileSync(inputPath, { encoding: "utf8" });
  
  // Escape backticks and other special characters for template literal
  // Need to escape $ before ` to avoid issues with template literals
  // First escape any existing backslashes, then escape $ characters, then escape backticks
  let escapedContent = fileContent
    .replace(/\\/g, "\\\\")  // First escape any existing backslashes
    .replace(/\$\{/g, "\\${")  // Then escape template literal expressions
    .replace(/`/g, "\\`");  // Finally escape backticks
  
  // Determine content type
  const contentType = getContentType(inputPath);
  
  // Create AssemblyScript export
  const asContent = `// Auto-generated from ${inputPath}
// Content-Type: ${contentType}
export const ${varName} = \`${escapedContent}\`;\n`;
  
  // Write to assembly directory with same relative path structure
  const relativePath = path.relative(DIST_DIR, inputPath);
  const outputFileName = varName + '.ts';
  const outputPath = path.join(ASSEMBLY_DIR, outputFileName);
  
  fs.writeFileSync(outputPath, asContent);
  console.log(`Converted ${inputPath} -> ${outputPath}`);
}

// Function to get all files in dist directory recursively
function getAllDistFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllDistFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// Main function to convert all dist files
function convertAllDistFiles(): void {
  const distFiles = getAllDistFiles(DIST_DIR);
  
  for (const filePath of distFiles) {
    // Skip source maps for now as they might be too large
    if (filePath.endsWith('.map')) {
      console.log(`Skipping source map: ${filePath}`);
      continue;
    }
    
    // Create a safe variable name from the file path
    // Replace non-alphanumeric characters with underscores and ensure it starts with a letter
    const relativePath = path.relative(DIST_DIR, filePath);
    let varName = relativePath
      .replace(/\//g, '_')  // Replace path separators
      .replace(/\./g, '_')  // Replace dots
      .replace(/[^a-zA-Z0-9_]/g, '_')  // Replace any other non-alphanumeric
      .replace(/^(\d)/, '_$1');  // Ensure it doesn't start with a number
    
    // Ensure the variable name starts with a letter or underscore
    if (!/^[a-zA-Z_]/.test(varName)) {
      varName = '_' + varName;
    }
    
    // Add a prefix to distinguish generated files
    varName = 'asset_' + varName;
    
    convertFileToAs(filePath, varName);
  }
  
  console.log(`\nConversion complete! Converted ${distFiles.length} files from ${DIST_DIR}`);
  
  // Generate an index file to export all assets
  generateAssetIndex(distFiles);
}

// Generate an index file to export all assets
function generateAssetIndex(distFiles: string[]): void {
  const indexContent = [
    '// Auto-generated asset index',
    '// This file exports all converted assets for easy import',
    ''
  ];
  
  for (const filePath of distFiles) {
    if (!filePath.endsWith('.map')) { // Skip source maps
      const relativePath = path.relative(DIST_DIR, filePath);
      let varName = relativePath
        .replace(/\//g, '_')
        .replace(/\./g, '_')
        .replace(/[^a-zA-Z0-9_]/g, '_')
        .replace(/^(\d)/, '_$1');
      
      if (!/^[a-zA-Z_]/.test(varName)) {
        varName = '_' + varName;
      }
      
      varName = 'asset_' + varName;
      indexContent.push(`export { ${varName} } from './${varName}';`);
    }
  }
  
  const indexPath = path.join(ASSEMBLY_DIR, 'assets.ts');
  fs.writeFileSync(indexPath, indexContent.join('\n'));
  console.log(`Generated asset index: ${indexPath}`);
}

// Run the conversion
convertAllDistFiles();