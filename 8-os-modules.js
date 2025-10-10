const os = require('os')
//built in modules ko lagi 'os'

//info about current user:
const user = os.userInfo()
console.log(user)
//System uptime in seconds
const uptime = os.uptime();
console.log(`${uptime} seconds`)

const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}
console.log(currentOS);

