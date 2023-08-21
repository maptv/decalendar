import itertools


def myslice(start, stop, *steps):
    if all(s > 0 for s in steps):
        steps = itertools.cycle(steps)
        while start < stop:
            yield start
            start += next(steps)
    else:
        raise ValueError("All steps must be greater than zero.")


def my_slice(start, stop, *steps):
    ascending = start < stop
    sum_steps = sum(steps)
    if sum_steps == 0:
        raise ValueError("The sum of steps cannot be zero.")
    elif ascending and sum_steps < 0:
        raise ValueError("The sum of steps must be positive if start is less than stop.")
    elif not ascending and sum_steps > 0:
        raise ValueError("The sum of steps must be negative if start is greater than stop.")
    steps = itertools.cycle(steps)
    while ascending == (start < stop):
       yield start
       start += next(steps)

list(my_slice(80, 170, 2, 3, 2, 3))
list(my_slice(80, 170, 2, 3, -2, 3))
list(my_slice(80, 170, -2, 3, -2, 3))
list(my_slice(170, 80, -2, -3, -2, -3))
list(my_slice(170, 80, 2, -3, -2, -3))
list(my_slice(170, 80, 2, 3, -2, 3))
list(my_slice(80, 170, *[2, 3, 2, 3]))
list(my_slice(-49, 32, *[2, 3, 2, 3]))

class MyList(list):
    def init(self, data):
        self.data = data
    def __getitem__(self, key):
        if isinstance(key, slice):
            return [self[i] for i in range(*key.indices(len(self)))]
        return self[key]

