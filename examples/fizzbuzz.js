(() => (
  (def => (
    def({
      loop: ([init, cond, inc], cb) => def((fn, i) => (
        cond(i) && (cb(i), fn(fn, inc(i)))
      ), fn => fn(fn, init)),
      when: (cond, t, f) => cond ? t() : f()
    }, ({ loop, when }) => (
      loop([1, i => i <= 20, i => ++i], i => (
      when(i % 15 === 0, () => log('Fizz Buzz'),
      () => when(i % 3 === 0, () => log('Fizz'),
      () => when(i % 5 === 0, () => log('Buzz'),
      () => log(i))))))
    ))
  ))((val, cb) => cb(val))
))()
