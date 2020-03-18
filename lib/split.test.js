// skip: split('l')('hello') -> ['he', '', 'o']
// split('ll')('hello') -> ['he', 'o']
// split('a')('hello') -> ['hello']
// skip: split('')('hello') -> ['h', 'e', 'l', 'l', 'o']
// skip: split('\n')('a\nb\n') -> ['a', 'b', '']

((assert, join) => (
  (split => (
    // skip: assert('split', join(',')(split('l')('hello')), 'he,,o'),
    assert('split', join(',')(split('ll')('hello')), 'he,o'),
    assert('split', join(',')(split('a')('hello')), 'hello')
    // skip: assert('split', join(',')(split('')('hello')), 'h,e,l,l,o'),
    // skip: assert('split', join(',')(split('\n')('a\nb\n')), 'a,b,')
  ))(load('split'))
))(load('assert'), load('join'))
