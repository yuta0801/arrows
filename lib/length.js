// join(',')([1, 2, 3]) -> "1,2,3"
// join('')([1, 2, 3]) -> "123"
// join(',')([]) -> ""
// join('')([]) -> ""

(input => (
  (def => (
    def((fn, [char, ...text], i) => (
      char ? fn(fn, text, i + 1) : i
    ), fn => fn(fn, input, 0))
  ))((value, cb) => cb(value))
))
