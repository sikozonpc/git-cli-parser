const getBranches = () => exec('git branch', (err, stdout, stdin) => {
  const lines = stdout.split('\n')
  lines[0] = lines[0].slice(1)
  console.log(lines)
})