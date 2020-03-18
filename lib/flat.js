// flat(1)([[1, 2], [3, 4]]) -> [1, 2, 3, 4]

(array => (
  (def => (
    def((fn, [one, ...rest], acc) => (
      one ? fn(fn, rest, [...acc, ...one])
      : acc
    ), fn => fn(fn, array, []))
  ))((value, cb) => cb(value))
))
