// sum([1, 2, 3]) -> 6
// sum([]) -> 0

(assert => (
  (sum => (
    assert('sum', sum(([1, 2, 3])), 6),
    assert('sum', sum(([])), 0)
  ))(load('sum'))
))(load('assert'))
