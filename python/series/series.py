def slices(series, length):
    series_length = len(series)
    if length <= 0 or series_length <= 0 or length > series_length:
        raise ValueError(length)
    return [series[series.index(c, ind):series.index(c, ind) + length] for ind, c in enumerate(series) if
            ind + length <= series_length]
