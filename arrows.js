global.log = m => console.log(m)
global.load = m => (
  (def => (
    def({
      path: require('path'),
      fs: require('fs'),
    }, ({ path: { dirname, join }, fs: { readFileSync } }) => (
      def(join(dirname(process.argv[1]), m + '.js'), file => (
        eval(readFileSync(file, 'utf8'))
      ))
    ))
  ))((value, cb) => cb(value))
)
