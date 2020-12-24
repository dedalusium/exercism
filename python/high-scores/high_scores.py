def latest(scores):
    scores.reverse()
    return scores[0]

def invert_sort(scores):
    scores.sort()
    scores.reverse()
    return scores[:]


def personal_best(scores):
    return invert_sort(scores)[0]


def personal_top_three(scores):
    return invert_sort(scores)[0:3]
