// length('') -> 0
// length('123') -> 3

(assert => (
  (length => (
    assert('length', length(''), 0),
    assert('length', length('123'), 3)
  ))(load('length'))
))(load('assert'))
