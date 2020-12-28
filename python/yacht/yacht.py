"""
This exercise stub and the test suite contain several enumerated constants.

Since Python 2 does not have the enum module, the idiomatic way to write
enumerated constants has traditionally been a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it’s memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""

# Score categories.
# Change the values as you see fit.
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
    try:
        occurencies = [dice.count(n) for n in range(1, 7)]
        if category in range(1, 7):
            return dice.count(category) * category
        if category == CHOICE:
            return sum(dice)
        if category == FOUR_OF_A_KIND:
            is_four = list(filter(is_four_at_least, occurencies))
            if len(is_four) == 1:
                return 4 * (occurencies.index(is_four[0]) + 1)
        if category == YACHT and occurencies.index(5):
            return 50
        if category == BIG_STRAIGHT and occurencies.count(1) == 5 and min(dice) == 2 and max(dice) == 6:
            return 30
        if category == LITTLE_STRAIGHT and occurencies.count(1) == 5 and min(dice) == 1 and max(dice) == 5:
            return 30
        if category == FULL_HOUSE and occurencies.count(3) == 1 and occurencies.count(2) == 1:
            return sum(dice)
    except:
        pass
    return 0
