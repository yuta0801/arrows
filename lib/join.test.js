// join(',')([1, 2, 3]) -> '1,2,3'
// join('')([1, 2, 3]) -> '123'
// join(',')([]) -> ''
// join('')([]) -> ''

(assert => (
  (join => (
    assert('join', join(',')([1, 2, 3]), '1,2,3'),
    assert('join', join('')([1, 2, 3]), '123'),
    assert('join', join(',')([]), ''),
    assert('join', join('')([]), '')
  ))(load('join'))
))(load('assert'))
