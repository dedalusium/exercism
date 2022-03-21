"""
Guido's Gorgeous Lasagna exercism module
"""
EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2

def bake_time_remaining(elapsed_bake_time = 0):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int baking time already elapsed.
    :return: int remaining bake time derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time
def preparation_time_in_minutes(nb_layer):
    """Calculate preperation time for a given number of lasagna layer
    """
    return PREPARATION_TIME * nb_layer
def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate total elapsed preparation time
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
    