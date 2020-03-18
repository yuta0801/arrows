(() => (
  (def => (
    def({
      join: load('../lib/join')
    }, ({ join }) => (
      log(join(' ')(['Hello', 'world!']))
    ))
  ))((value, cb) => cb(value))
))()
