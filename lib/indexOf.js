// indexOf('l')('hello') -> 2
// indexOf('a')('hello') -> -1
// indexOf('')('hello') -> 0

(target => input => (
  (def => (
    def({
      length: load('length'),
      slice: load('slice')
    }, ({ length, slice }) => (
      def((fn, text, i) => (
        length(target) === 0 ? 0
        : i >= length(text) - 1 ? -1
        : (
          slice(i, i + length(target))(text) === target
        ) ? i
        : fn(fn, text, i + 1)
      ), fn => fn(fn, input, 0))
    ))
  ))((val, cb) => cb(val))
))
