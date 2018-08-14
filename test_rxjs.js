const Rx = require('rxjs');

const observable$ = Rx.Observable.create(function subscribe(observer) {
  const id = setInterval(() => {
    observer.next('hi');
    observer.complete();
  }, 1000);
});

observable$.subscribe(x => console.log(x));
