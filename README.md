# nOS Local

An environment for nOS development.

For now, manually start the `neo-local` environment and load contracts:

```sh
$ git clone https://github.com/nos/nos-local.git
$ cd nos-local
$ make run
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
testinvoke e60a3fa8149a853eb4dff4f6ed93c931646a9e22 RegisterDomain ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'bucket.nos', 'AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'https://ihasabucket.com/']
```

Wait for the TX to clear, and test your domain is registered:

```
testinvoke e60a3fa8149a853eb4dff4f6ed93c931646a9e22 GetDomain ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y', 'bucket.nos']
```

Visit `bucket.nos` in the client!
