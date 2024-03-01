import math
letters = [chr(i) for i in range(97, 123)]
letters[9:0:-1]
arr = list(map(chr, range(65, 91)))
arr[9::-1]

def slice(arr, start, span, reverse=False):
    step = not reverse or -1
    return arr[start::step][:span]

slice(arr, 0, 9, reverse=False)
arr[0:9]

slice(arr, 9, 9, reverse=True)
arr[9:0:-1]

def get_span(arr, start, stop, step):
    return len(arr[start:stop:step])

get_span(arr, 0, 9, 2)
math.ceil((9 - 0) / 2)

get_span(arr, 0, 9, 3)
math.ceil((9 - 0) / 3)


get_span(arr, -1, 9, 3)
math.ceil((9 - -1) / 3)