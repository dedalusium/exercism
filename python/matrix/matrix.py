class Matrix:
    def __init__(self, matrix_string):
        rows_as_string = matrix_string.split("\n")
        self.rows = [list(map(lambda n: int(n), row_as_string.split(" "))) for row_as_string in rows_as_string]
        ''' I m not sure about readability of nested list comprehension'''
        self.columns = [[row[i] for row in self.rows] for i in range(len(self.rows[0]))]

    def row(self, index):
        return self.rows[index - 1]

    def column(self, index):
        return self.columns[index - 1]
