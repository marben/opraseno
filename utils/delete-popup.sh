#!/bin/bash
jpgs=(`ls *.jpg| grep "\-popup"`)
for i in "${jpgs[@]}"
do
 echo "deleting: $i"
 rm "$i"
done
