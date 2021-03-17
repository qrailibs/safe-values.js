import * as safevals from '../lib/safe-values'

console.log('100 is int? - ' + safevals.isint(100))

console.log('"hello" is string? - ' + safevals.isstring('hello'))

console.log('true is bool? - ' + safevals.isbool(true))

console.log('()=>{} is function? - ' + safevals.isfunc(()=>{}))

console.log('[1,2,3] is array? - ' + safevals.isarray([1,2,3]))

console.log('{a:"b"} is object? - ' + safevals.isobj({a:'b'}))

console.log('{a:"b"} is has a? - ' + safevals.objhas({a:'b'}, ['a']))

console.log('"A" is value of enum ["A","B","C"]? - ' + safevals.isenum('A', ['A','B','C']))