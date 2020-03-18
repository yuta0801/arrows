// join(',')([1, 2, 3]) -> '1,2,3'
// join('')([1, 2, 3]) -> '123'
// join(',')([]) -> ''
// join('')([]) -> ''

(separator => array => (
  (def => (
    def((fn, [one, ...rest], acc) => (
      one ? fn(fn, rest, acc + (
        acc ? separator : ''
      ) + one)
      : acc
    ), (fn => fn(fn, array, '')))
  ))((value, cb) => cb(value))
))
