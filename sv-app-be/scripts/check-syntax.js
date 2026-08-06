//Smoke test: kiểm tra cú pháp toàn bộ file .js trong src
//Không cần cài node_modules, chỉ dùng Node built-in
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.join(__dirname, '..', 'src');
const files = [];

(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.js')) files.push(full);
  }
})(root);

let failed = 0;
for (const file of files) {
  const result = spawnSync(process.execPath, ['--check', file], { stdio: 'pipe' });
  if (result.status !== 0) {
    failed++;
    console.error(`[FAIL] ${path.relative(path.join(__dirname, '..'), file)}`);
    console.error(result.stderr.toString());
  }
}

if (failed) {
  console.error(`\n${failed}/${files.length} file(s) có lỗi cú pháp`);
  process.exit(1);
}
console.log(`OK - ${files.length} file(s) passed syntax check`);
