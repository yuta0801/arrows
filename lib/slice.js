// slice(2, 4)('hello') -> 'll'

((begin, end) => input => (
  (def => (
    def({
      length: load('length')
    }, ({ length }) => (
      def((fn, acc, i) => (
        i >= end || i >= length(input) ? acc
        : i >= begin ? fn(fn, acc + input[i], i + 1)
        : fn(fn, acc, i + 1)
      ), (fn => fn(fn, '', 0)))
    ))
  ))((value, cb) => cb(value))
))
