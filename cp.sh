#########################################################################
# File Name: cp.sh
# Author: ma6174
# mail: ma6174@163.com
# Created Time: 2018年03月22日 星期四 11时48分23秒
#########################################################################
#!/bin/bash

rm -rf views
cp -r ../myapp/dist views
/etc/init.d/fnode restart
