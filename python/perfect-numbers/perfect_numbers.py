def split_in_proper_dividers(number):
    dividers = []
    d = number - 1
    while d > 0:
        if number % d == 0:
            dividers.append(d)
        d -= 1
    dividers.sort()
    return dividers


def classify(number):
    if number <= 0:
        raise ValueError(number)
    aliquot_sum = sum(split_in_proper_dividers(number))
    if aliquot_sum > number:
        return 'abundant'
    if aliquot_sum < number:
        return 'deficient'
    return 'perfect'
