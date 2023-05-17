cp -r ./app/dragon/ /home/systexadmin/2023/basicSetting/src/app/
cp -r ./app/setup.json /home/systexadmin/2023/basicSetting/src/app/
sh npm_install.sh /home/systexadmin/2023/basicSetting/
sh npm_install.sh /home/systexadmin/2023/dragonstell

sh npm_build_test.sh /home/systexadmin/2023/basicSetting/ /var/www/
docker exec -it nginx_smartcic mkdir /var/www/dragonsteel/
sh npm_build_test.sh /home/systexadmin/2023/dragonstell   /var/www/dragonsteel/

#docker cp ./nginx/default.conf nginx_smartcic/etc/nginx/conf.d/
#docker restart nginx_smartcic
