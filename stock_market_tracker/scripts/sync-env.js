const fs = require('fs');
const path = require('path');

// Read .env file
const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');

// Parse environment variables
const envVars = {};
envContent.split('\n').forEach(line => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...valueParts] = trimmed.split('=');
    if (key && valueParts.length > 0) {
      envVars[key.trim()] = valueParts.join('=').trim();
    }
  }
});

// Generate environment.ts
const envTsContent = `export const environment = {
  production: false,
  finnhubApiKey: '${envVars.FINNHUB_API_KEY || ''}'
};
`;

// Generate environment.prod.ts
const envProdTsContent = `export const environment = {
  production: true,
  finnhubApiKey: '${envVars.FINNHUB_API_KEY || ''}'
};
`;

// Write environment files
const envTsPath = path.join(__dirname, '..', 'src', 'environments', 'environment.ts');
const envProdTsPath = path.join(__dirname, '..', 'src', 'environments', 'environment.prod.ts');

fs.writeFileSync(envTsPath, envTsContent);
fs.writeFileSync(envProdTsPath, envProdTsContent);

console.log('✅ Environment files synced from .env');
