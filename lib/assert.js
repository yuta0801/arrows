((message, actual, expect) => (
  log(
    expect === actual ? message + ' : Ok'
    : message + ` : Failed. Expected ${expect} but was ${actual}`
  )
))
