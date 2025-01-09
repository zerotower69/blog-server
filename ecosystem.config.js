module.exports = {
  apps: [
    {
      name: 'blog-service', // 应用名称
      script: './dist/main.js', // 启动脚本路径
      instances: 1, // 单机模式（单实例）
      exec_mode: 'fork', // 使用 fork 模式
      watch: true, // 开启文件监控，修改后自动重启
      ignore_watch: ['node_modules', 'logs'], // 忽略监控的目录
      max_memory_restart: '1024M', // 内存占用超过 1024M 自动重启
      //   env: {
      //     NODE_ENV: 'development', // 开发环境变量
      //     PORT: 3000,
      //   },
      //   env_production: {
      //     NODE_ENV: 'production', // 生产环境变量
      //     PORT: 8080,
      //   },
      log_date_format: 'YYYY-MM-DD HH:mm Z', // 日志时间格式
      error_file: './logs/error.log', // 错误日志文件
      out_file: './logs/output.log', // 输出日志文件
      combine_logs: true, // 合并日志
    },
  ],
};
