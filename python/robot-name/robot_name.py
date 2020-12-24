import random
from string import ascii_uppercase


class Robot:
    every_name = []

    def __init__(self):
        self.name = self.generate_name()
        Robot.every_name.append(self.name)

    @staticmethod
    def generate_prefix():
        random_capital_letters = random.sample(ascii_uppercase, 2)
        prefix = ''.join(random_capital_letters)
        return prefix

    @staticmethod
    def generate_suffix():
        random_numbers = [random.randint(0, 9) for x in range(3)]
        random_numbers_as_string = map(lambda l: str(l), random_numbers)
        suffix = ''.join(random_numbers_as_string)
        return suffix

    @staticmethod
    def generate_name():
        random.seed()
        name = Robot.generate_prefix() + Robot.generate_suffix()
        while name in Robot.every_name:
            name = Robot.generate_prefix() + Robot.generate_suffix()
        return name

    def reset(self):
        Robot.every_name.remove(self.name)
        self.name = self.generate_name()
        Robot.every_name.append(self.name)
