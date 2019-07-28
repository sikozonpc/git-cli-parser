const getCurrentBranch = () => exec('git branch', (err, stdout, stdin) => {
  const lines = stdout.split('\n')
  return lines[0].slice(1)
})