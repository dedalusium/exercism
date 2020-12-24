def is_armstrong_number(number):
    as_string = str(number)
    size = len(as_string)
    computation = sum([int(x) ** size for x in as_string])
    return number == computation
