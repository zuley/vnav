FROM node:19.2.0

# 设置工作目录
WORKDIR /app

# 复制构建好的程序目录，到当前工作目录
# 为节省资源和加快速度，构建在本地运行并上传
COPY .output .

# 暴露应用程序运行的端口
EXPOSE 3000

# 定义启动应用程序的命令
CMD ["node", "./server/index.mjs"]