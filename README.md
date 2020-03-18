# Arrows

Push the limits of Arrow Function

## Introduction

I got the feeling that infinite possibilities of Arrow Functions when I play with it like:

```js
// factorial
(f => n => f(f, n))((f, n) => n ? n * f(f, n - 1) : 1)(5) // 120
```

So Arrows was born from the belief that can do anything with only Arrow Functions.

## Conventions

Only use Arrow Functions
- Avoid using APIs of JavaScript whenever possible
  - e.g. `''.length`, `[].push()`
- Avoid using any of statements
  - e.g. `if..else`, `function fn() {}`
- Use Arrow Functions as much as you want. No one stops you

## Run Arrows

Arrows code is basic JavaScript, but has its own module system to prevent code duplication. Currently it is only assumed to run on Node.js.

```sh
$ git clone https://github.com/yuta0801/arrows.git
$ cd arrows
$ node -r ./arrows examples/hello.js
```
