// map(n => n * 2)([1, 2, 3])) -> [2, 4, 6]
// map(n => n)([])) -> []

(cb => arr => (
  (def => (
    def(((fn, [one, ...rest], acc) => (
      one ? fn(fn, rest, [...acc, cb(one)])
      : acc
    )), fn => fn(fn, arr, []))
  ))((value, cb) => cb(value))
))
