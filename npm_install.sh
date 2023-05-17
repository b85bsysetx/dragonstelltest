docker rm vue-webpack
cd $1
git checkout package-lock.json
git pull
docker run --name vue-webpack -v $1:/app -w /app vue-webpack:14.15  npm install
docker rm vue-webpack
