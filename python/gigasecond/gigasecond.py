from datetime import timedelta


def add(moment):
    giga_second = timedelta(seconds=10 ** 9)
    return moment + giga_second
