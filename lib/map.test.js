// map(n => n * 2)([1, 2, 3])) -> [2, 4, 6]
// map(n => n)([])) -> []

((assert, join) => (
  (map => (
    assert('map', join(',')(map(n => n * 2)([1, 2, 3])), '2,4,6')
  ))(load('map'))
))(load('assert'), load('join'))

