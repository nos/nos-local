const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')
const suppose = require('suppose')

const start = () => {
  process.chdir(path.resolve(__dirname, '..', 'neo-local'))
  exec('make setup-network', () => {
    deploy()
  }).stdout.pipe(process.stdout)
}

const stop = () => {
  process.chdir(path.resolve(__dirname, '..', 'neo-local'))
  exec('make stop').stdout.pipe(process.stdout)
}

// TODO: Get this working.
const deploy = () => {
  process.chdir(path.resolve(__dirname, '..'))
  suppose('docker', ['exec', '-it', 'neo-python', 'np-prompt', '-p', '-v'], {
    debug: fs.createWriteStream('debug.txt')
  })
    .when('neo>')
    .respond('help\n')
    .when('neo>')
    .respond('quit\n')
    .on('error', err => {
      console.log(err.message)
    })
    .end(code => {
      console.log(`code: ${code}`)
    })
}
