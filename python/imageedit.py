

from rembg import remove
from PIL import Image


def remove_bg(path):
    inp = Image.open(path)
    output = remove(inp)
    path_out = "".join(path.split('.').insert(1, '_bgremoved'))
    output.save(path_out)