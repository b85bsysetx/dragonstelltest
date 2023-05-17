cd $1
git checkout package-lock.json
git pull
docker run --name vue-webpack -e TZ="Asia/Taipei" -v $1:/app -w /app vue-webpack:14.15  npm run build:testing
docker rm vue-webpack
docker cp $1/dist/ nginx_smartcic:$2
