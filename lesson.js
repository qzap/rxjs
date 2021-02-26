
const observable = Rx.Observable.create( observer => {
    observer.next( 'hello' ) 
    observer.next( 'world' )
});

observable.subscribe(val => print(val))

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved!')
    }, 1000)
});

const obsvPromise = Rx.Observable.fromPromise(promise)

obsvPromise.subscribe(result => print(result) )


















































///  always in bottom
/// helper to print values

function print(val) {
    let el = document.createElement('p')
    el.innerText = val
    document.body.appendChild(el)
}

