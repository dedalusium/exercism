def convert(number):
    dropSound = ""
    if number % 3 == 0:
        dropSound += "Pling"
    if number % 5 == 0:
        dropSound += "Plang"
    if number % 7 == 0:
        dropSound += "Plong"
    return dropSound or str(number)
