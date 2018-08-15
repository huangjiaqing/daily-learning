const Rx = require('rxjs');

function onSubscribe(observer) {
  observer.next(1)
}

const observable$ = new Rx.Observable(onSubscribe);

observable$.subscribe(v => console.log(v));
