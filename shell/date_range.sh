#!/bin/sh

# 实现 date range 功能，打印 介于 d 和 d_end 之间的日期
# 参考：
# 1. http://stackoverflow.com/questions/28226229/bash-looping-through-dates
# 2. http://man.linuxde.net/date

d=2016-05-21
d_end=2016-05-23
while [ "$d" != "$d_end" ]; do
  d_to_show=$(date -d "$d" +"%Y%m%d")
  echo $d_to_show
  d=$(date -I -d "$d + 1 day")
done
