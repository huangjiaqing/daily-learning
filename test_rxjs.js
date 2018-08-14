const Rx = require('rxjs');

const subject$ = new Rx.Subject();

subject$.subscribe(v => console.log(v));
