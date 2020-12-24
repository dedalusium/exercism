def latest(scores):
    scores.reverse()
    return scores[0]


def personal_best(scores):
    scores.sort()
    scores.reverse()
    return scores[0]


def personal_top_three(scores):
    scores.sort()
    scores.reverse()
    return scores[0:3]
