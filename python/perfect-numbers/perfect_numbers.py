def split_in_proper_dividers(number):
    dividers = []
    for d in range(1, number):
        if number % d == 0:
            dividers.append(d)
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
