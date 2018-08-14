const Rx = require('rxjs');

const timeA$ = Rx.Observable.interval(1000);
const timeB$ = timeA$.filter(num => {
  return (num % 2 != 0)
    && (num % 3 != 0)
    && (num % 5 != 0)
    && (num % 7 != 0)
});
const timeC$ = timeB$.debounceTime(3000)
const timeD$ = timeC$.delay(2000)

timeA$.subscribe(A => console.log('A: ', A));
timeB$.subscribe(B => console.log('B: ', B));
timeC$.subscribe(C => console.log('C: ', C));
timeD$.subscribe(D => console.log('D: ', D));
