def latest(scores):
    sorted_scores = list(reversed(scores))
    return sorted_scores[0]


def invert_sort(scores):
    sorted_scores = list(sorted(scores, reverse=True))
    return sorted_scores


def personal_best(scores):
    return invert_sort(scores)[0]


def personal_top_three(scores):
    return invert_sort(scores)[0:3]
