const Rx = require('rxjs');

// function onSubscribe(observer) {
//   observer.next(1)
// }
//
// const observable$ = new Rx.Observable(onSubscribe);
//
// observable$.subscribe(v => console.log(v));

// or

const observable$ = Rx.Observable.create(function subscribe(observer) {
  observer.next(1)

  setTimeout(() => {
    observer.next(2)
  }, 1000);
});

observable$.subscribe(v => console.log(v));
