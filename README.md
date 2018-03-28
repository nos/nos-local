# nOS Local

An environment for nOS development.

**TODO:** Make the following all automatic:

For now, manually start the `neo-local` environment and load contracts:

```sh
cd neo-local
cp ../contracts/*.py ./smart-contracts

make
```

Once you're at the `neo-python` prompt (wallet password is "coz"):

```
open wallet ./neo-privnet.wallet
build /smart-contracts/contract.py
import contract /smart-contracts/contract.avm 0705070505 05 True False
```

Wait a hot minute and the nOS name service contract is deployed!
