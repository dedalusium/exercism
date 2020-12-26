def slices(series, length):
    series_length = len(series)
    if length <= 0 or series_length <= 0 or length > series_length:
        raise ValueError(length)
    return [series[i:i + length] for i in range(series_length - length + 1)]
