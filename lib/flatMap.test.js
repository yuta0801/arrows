// flatMap(n => [n, n + 1])([1, 3]) -> [1, 2, 3, 4]

((assert, join) => (
  (flatMap => (
    assert('flatMap', join(',')(flatMap(n => [n, n + 1])([1, 3])), '1,2,3,4')
  ))(load('flatMap'))
))(load('assert'), load('join'))
