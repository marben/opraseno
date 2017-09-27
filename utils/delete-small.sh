#!/bin/bash
jpgs=(`ls *.jpg| grep "\-small"`)
for i in "${jpgs[@]}"
do
 echo "deleting: $i"
 rm "$i"
done
