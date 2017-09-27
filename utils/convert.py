# just a module to be imported
import os
import glob
import tempfile

# apply's jpegicc to convert jpeg file to sRGB colorspace
# returns pointer to tmpfile containing the converted input jpeg
def normalizeColorspace(infile):
    _, tmp = tempfile.mkstemp();
    cmd = "jpgicc -q 100 " + infile + " " + tmp
    print "converting to sRGB colorspace:"
    print cmd
    os.system(cmd)
    return tmp

#converts all *.jpg files in current directory
def convert(outWidth, outSuffix, quality=80):
    imgs = glob.glob("*.jpg")
    for img in imgs:
        img_sRGB = normalizeColorspace(img)

        filename, extension = os.path.splitext(img)
        outFilename = filename + "-" + outSuffix + extension
        cmd = "convert " + img_sRGB +" -colorspace RGB -strip -resize x" + str(outWidth) + " -colorspace sRGB -interlace Plane -quality " + str(quality) + " " + outFilename
        print cmd
        os.system(cmd)

        os.remove(img_sRGB)
