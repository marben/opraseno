#!/usr/bin/env python
import sys
sys.dont_write_bytecode = True
import convert

outWidth = 250
def main():
    convert.convert(outWidth, "small")

main()
