def distance(strand_a, strand_b):
    strand_length = len(strand_a)
    hamming_distance = 0
    if strand_length != len(strand_b):
        raise ValueError('strand are not equal length')
    for i in range(0, strand_length):
        if strand_a[i] != strand_b[i]:
            hamming_distance += 1
    return hamming_distance
