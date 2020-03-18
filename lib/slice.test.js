// slice(2, 4)('hello') -> 'll'
// skip: slice(2, -1)('hello') -> 'll'

(assert => (
  (slice => (
    assert('slice', slice(2, 4)('hello'), 'll')
    // skip: assert('slice', slice(2, -1)('hello'), 'll')
  ))(load('slice'))
))(load('assert'))
