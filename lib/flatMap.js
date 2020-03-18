// flatMap(n => [n, n + 1])([1, 3]) -> [1, 2, 3, 4]

(cb => arr => (
  (def => (
    def({
      map: load('map'),
      flat: load('flat'),
    }, ({ map, flat }) => (
      flat(map(cb)(arr))
    ))
  ))((value, cb) => cb(value))
))
