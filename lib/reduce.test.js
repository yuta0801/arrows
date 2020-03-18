// ((a, c) => a + c, 0)([1, 2, 3]) -> 6

(assert => (
  (reduce => (
    assert('reduce', reduce((a, c) => a + c, 0)([1, 2, 3]), 6)
  ))(load('reduce'))
))(load('assert'))
