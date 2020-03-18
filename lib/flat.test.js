// flat(1)([[1, 2], [3, 4]]) -> [1, 2, 3, 4]

((assert, join) => (
  (flat => (
    assert('flat', join(',')(flat([[1, 2], [3, 4]])), '1,2,3,4')
  ))(load('flat'))
))(load('assert'), load('join'))
