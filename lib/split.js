// split('ll')('hello') -> ['he', 'o']
// split('a')('hello') -> ['hello']

(target => input => (
  (def => (
    def({
      length: load('length'),
      slice: load('slice'),
      indexOf: load('indexOf')
    }, ({ slice, length, indexOf }) => (
      def((fn, text, acc) => (
        def(indexOf(target)(text), index => (
          index < 0 ? [...acc, text]
          : fn(fn, (
            slice(index + length(target), length(text))(text)
          ), [...acc, slice(0, index)(text)])
        ))
      ), fn => fn(fn, input, []))
    ))
  ))((val, cb) => cb(val))
))
