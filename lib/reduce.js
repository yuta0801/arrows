// ((a, c) => a + c, 0)([1, 2, 3]) -> 6

((cb, init) => arr => (
  (def => (
    def(((fn, [one, ...rest], acc) => (
      one ? fn(fn, rest, cb(acc, one))
      : acc
    )), fn => fn(fn, arr, init))
  ))((value, cb) => cb(value))
))
