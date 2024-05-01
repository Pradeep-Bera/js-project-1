
// const stopInterval = clearInterval(startInterval);

const startStopButton = () => {
    const sayDate = () => {
        console.log("Pradeep", Date.now());
    }
    let startInterval;
    let start = document.getElementById('start').addEventListener('click', () => {

        startInterval = setInterval(sayDate, 1000);

    })

    let stop = document.getElementById('stop').addEventListener('click', () => {
        clearInterval(startInterval)
    })

}
startStopButton();
