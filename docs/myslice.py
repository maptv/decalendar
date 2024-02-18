letters = list(map(chr, range(65, 91)))

def myslice(arr, start=None, span=None, reverse=False):
    sign = not reverse or -1
    stop = start + span * sign
    return arr[start:stop:sign]

myslice(letters, 9, 9)
myslice(letters, 9, 9, reverse=True)

myslice(letters, -10, 9)
myslice(letters, -10, 9, reverse=True)