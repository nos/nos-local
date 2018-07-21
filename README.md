# nOS Local

An environment for nOS development.

For now, manually start the `neo-local` environment and load contracts:

```sh
$ git clone https://github.com/nos/nos-local.git
$ cd nos-local
$ make run
```

If you exit the neo-python prompt, access it again with Docker:
```
$ sudo docker exec -it neo-python /bin/sh -c /bin/bash
$ np-prompt -p -v
 ```

Windows enviroment

Install Docker: https://docs.docker.com/docker-for-windows/install/#what-to-know-before-you-install
Switch to linux containers (right click on tray icon)

```sh
$ git clone https://github.com/nos/nos-local.git
$ cd nos-local
$ makeWIN
```

Once you're at the `neo-python` prompt (wallet password is "coz"):

```
open wallet ./neo-privnet.wallet
build /smart-contracts/contract.py
import contract /smart-contracts/contract.avm 0710 05 True False
```

Fill out the prompts for the contract meta data. Just hit `[enter]` if you're in a hurry 😉.

Wait a 🔥 minute and the nOS name service contract is deployed!

Let's register an example domain name with nOS:

```
testinvoke 9a309cfe03cead5b653bbb11f68ff6beced8f031 RegisterDomain ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'bucket.neo', 'https://ihasabucket.com/', 'AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y']
```

Wait for the TX to clear, and test your domain is registered:

```
testinvoke 9a309cfe03cead5b653bbb11f68ff6beced8f031 GetDomain ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'bucket.neo']
```

Visit `nos://bucket.neo` in the client!
