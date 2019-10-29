const params = process.argv.slice(2);
const fs = require('fs'),
    path = `${__dirname}/package.json`,
    packageJson = JSON.parse(fs.readFileSync(path).toString());

if (params.length === 2 && params[0].trim() === '--rollback' && params[1].trim().split('.').length === 3) {
    packageJson.version = params[1].trim();
} else {
    const prevVersion = packageJson.version,
        versions = packageJson.version.split('.');
    versions[2]++;
    packageJson.version = versions.join('.');
    console.log(prevVersion);
}
fs.writeFileSync(path, JSON.stringify(packageJson, null, 2));
