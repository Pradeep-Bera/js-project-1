const sayPradeep = () => {
    console.log("Pradeep");
};

const call = () => { (document.querySelector('h1').innerHTML = 'Hello Pradeep !') }

const change = setTimeout(call, 5000);

const stoped = document.querySelector('#stop')
const clear = stoped.addEventListener('click', function () {
    clearTimeout(change)
    console.log("Stopped")
})


