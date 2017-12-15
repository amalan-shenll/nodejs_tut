console.log(__dirname);
console.log(process.cwd());

console.log(__filename);

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
