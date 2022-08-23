
const browsers = {

    CHROME: 'chrome',
    FF: 'firefox',
    EDGE: 'Edge',
    ELECTRON: 'electron'
}

let browser = browsers.CHROME

function execute() {  //switch statement ya da if statement olabilir 

    switch (browser) {
        case browsers.CHROME:
            console.log('execute on chrome')
            break
        case browsers.FF:
            console.log('execute on FF')
            break
        case browsers.EDGE:
            console.log('execute on EDGE')
            break
        case browsers.ELECTRON:
            console.log('execute on ELECTRON')
            break
    }

}

console.log(execute())
