#! /usr/bin/env node

const packer = require('../src/index.js');
const { spawn } = require('child_process');

(async () => {
  const args = process.argv.slice(2);

  await packer.isReady;

  console.log(`[*] Using Packer at ${packer.executablePath}`);

  const proc = spawn(packer.executablePath, args, {
    stdio: [process.stdin, process.stdout, process.stderr]
  });

  proc.on('close', code => process.exit(code));
})();