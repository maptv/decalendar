letters = list(map(chr, range(65, 91)))

def myslice(arr, start=None, span=None, reverse=False):
    sign = not reverse or -1
    # stop = start + span * sign
    return arr[start::sign][:span]

myslice(letters, 7, 9)
myslice(letters, 7, 9, reverse=True)

myslice(letters, -7, 9)
myslice(letters, -7, 9, reverse=True)