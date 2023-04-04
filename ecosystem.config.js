module.exports = {
  apps : [{
    name: 'HR',
    script: 'yarn',
    args: 'start',
    env: {
      NODE_ENV: 'production',
    }
  }]
}
