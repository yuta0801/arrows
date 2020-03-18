// indexOf('l')('hello') -> 2
// indexOf('a')('hello') -> -1
// indexOf('')('hello') -> 0

(assert => (
  (indexOf => (
    assert('indexOf', indexOf('ll')('hello'), 2),
    assert('indexOf', indexOf('a')('hello'), -1),
    assert('indexOf', indexOf('')('hello'), 0)
  ))(load('indexOf'))
))(load('assert'))
