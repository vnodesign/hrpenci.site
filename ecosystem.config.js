module.exports = {
  apps: [
    {
      name: 'HR',
      append_env_to_name: true,
      script: './node_modules/next/dist/bin/next start',
      max_memory_restart: '2G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    staging: {
      user: 'root',
      key: '~/.ssh/tuanducdesign',
      host: '14.225.204.116',
      ref: 'origin/production',
      repo: 'git@github.com:tuanducdesign/hr.penci.me.git',
      path: '/www/wwwroot/hr.penci.me',
      'post-deploy': 'sh pm2-deploy.sh',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
}
