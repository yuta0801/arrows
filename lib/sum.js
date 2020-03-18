// sum([1, 2, 3]) -> 6
// sum([]) -> 0

(nums => (
  (def => (
    def({
      reduce: load('reduce')
    }, ({ reduce }) => (
      reduce((a, c) => a + c, 0)(nums)
    ))
  ))((value, cb) => cb(value))
))
