import re


class PhoneNumber:
    def __init__(self, number):
        self.original = number
        special_char_reg_exp = re.compile('[+()\-.\s]+')
        cleaned_number = special_char_reg_exp.sub('', number)
        if not cleaned_number.isdigit():
            raise ValueError(number)
        if len(cleaned_number) < 10 or len(cleaned_number) > 11:
            raise ValueError(number)
        if len(cleaned_number) == 11 and cleaned_number[0] != '1':
            raise ValueError(number)
        self.number = cleaned_number[len(cleaned_number) - 10:]
        area_code = self.number[:3:]
        exchange_code = self.number[3:6:]
        if area_code.startswith('0') or area_code.startswith('1'):
            raise ValueError(area_code)
        if exchange_code.startswith('0') or exchange_code.startswith('1'):
            raise ValueError(exchange_code)
        self.area_code = area_code
        self.exchange_code = exchange_code
        self.subscriber_code = self.number[6:10]

    def pretty(self):
        """Could be computed in initialization"""
        return "({})-{}-{}".format(self.area_code, self.exchange_code, self.subscriber_code)


