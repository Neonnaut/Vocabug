import neocities
#import html5lib
import os
from secret import SECRET
# https://neocities.org/settings/neonnaut#api_key

free_file_types = "apng", "asc", "atom", "avif", "bin", "cjs", "css", "csv", "dae", "eot", "epub", "geojson", "gif", "glb", "gltf", "gpg", "htm", "html", "ico", "jpeg", "jpg", "js", "json", "key", "kml", "knowl", "less", "manifest", "map", "markdown", "md", "mf", "mid", "midi", "mjs", "mtl", "obj", "opml", "osdx", "otf", "pdf", "pgp", "pls", "png", "py", "rdf", "resolveHandle", "rss", "sass", "scss", "svg", "text", "toml", "ts", "tsv", "ttf", "txt", "webapp", "webmanifest", "webp", "woff", "woff2", "xcf", "xml", "yaml", "yml"


e = ['apng', 'asc', 'atom', 'avif', 'bin', 'cjs', 'css', 'csv', 'dae', 'eot', 'epub', 'geojson', 'gif', 'glb',
     'gltf', 'gpg', 'htm', 'html', 'ico', 'jpeg', 'jpg', 'js', 'json', 'key', 'kml', 'knowl', 'less', 'manifest',
     'map', 'markdown', 'md', 'mf', 'mid', 'midi', 'mjs', 'mtl', 'obj', 'opml', 'osdx', 'otf', 'pdf', 'pgp', 'pls',
     'png', 'py', 'rdf', 'resolveHandle', 'rss', 'sass', 'scss', 'svg', 'text', 'toml', 'ts', 'tsv', 'ttf', 'txt',
     'webapp', 'webmanifest', 'webp', 'woff', 'woff2', 'xcf', 'xml', 'yaml', 'yml']

ignore = ['.py', '.gitignore']

nc = neocities.NeoCities(api_key=SECRET)

response = nc.info()

items = nc.listitems()

print(response)

#


# html5parser = html5lib.HTMLParser(strict=True)
# html5parser.parse('<html></html>')


rootdir = '.'

for subdir, dirs, files in os.walk(rootdir):
    for file in files:

        extension = file.split(".")[-1]

        ofFolders = subdir.split('\\')
        if ".git" in ofFolders:
            pass
        elif "mouth_shapes" in ofFolders:
            pass
        #elif "img" in ofFolders:
        #    pass
        elif "88x31" in ofFolders:
            pass
        elif "__pycache__" in ofFolders:
            pass
        elif "myPython" in ofFolders:
            pass
        elif "test" in ofFolders:
            pass
        elif ".gitattributes" == file:
            pass
        elif ".gitignore" == file:
            pass
        elif "LICENSE" == file:
            pass
        elif extension == "py":
            pass
        elif extension not in e:
            pass
        else:
            myFile = os.path.join(subdir, file)[2:].replace('\\', '/')

            try:
                nc.upload((myFile, myFile))
                print(myFile)
            except:
                pass
