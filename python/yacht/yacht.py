from collections import Counter

YACHT = 0
ONES = 1
TWOS = 2
THREES = 3
FOURS = 4
FIVES = 5
SIXES = 6
FULL_HOUSE = 7
FOUR_OF_A_KIND = 8
LITTLE_STRAIGHT = 9
BIG_STRAIGHT = 10
CHOICE = 11


def is_four_at_least(num):
    return num >= 4


def score(dice, category):
    if category in range(1, 7):
        return dice.count(category) * category
    if category == CHOICE:
        return sum(dice)
    if category == FOUR_OF_A_KIND:
        nb_repetition = Counter(dice).most_common(1)[0][1]
        value = Counter(dice).most_common(1)[0][0]
        return 4 * value if nb_repetition >= 4 else 0
    if category == YACHT and len(set(dice)) == 1:
        return 50
    if category == BIG_STRAIGHT and sorted(dice) == [2, 3, 4, 5, 6]:
        return 30
    if category == LITTLE_STRAIGHT and sorted(dice) == [1, 2, 3, 4, 5]:
        return 30
    if category == FULL_HOUSE and sorted(Counter(dice).values()) == [2, 3]:
        return sum(dice)
    return 0
