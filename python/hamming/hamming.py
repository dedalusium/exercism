from functools import reduce


def distance(strand_a, strand_b):
    strand_length = len(strand_a)
    if strand_length != len(strand_b):
        raise ValueError('strand are not equal length')
    return reduce(lambda acc, next_pair: acc+(1, 0)[next_pair[0] == next_pair[1]], zip(strand_a, strand_b), 0)
