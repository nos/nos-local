# FAQ/Troubleshooting Guide

These are common issues encountered when starting to develop dApps with nOS. Hopefully it can help new developers to get started quickly.

Note:  if the command is not environment specific, you may run it from Windows/MacOS/Linux.

Questions/Answers:

1. How do I access neoscan for privatenet?

    From the browser, access the link:  http://localhost:4000.  If the URL is not accessible, try to restart the container as described in question 2.


2. How to resolve sync issue when using privatenet?

    Go to command line:

    MacOS/Linux

    ```
    cd <project location>/nos-local/neo-local
    make stop

    ```
    Wait for the containers to stop completely, then run:

    ```
    cd <project location>/nos-local
    make run
    ```
    You may also check from docker command:

    ```
    docker ps
    ```

    Windows

    Run:

    ```
    cd <project location>\nos-local
    makeWIN
    ```
    or just restart docker and/or delete all images/containers if problems persist

    You may also check from docker command:

    ```
    docker ps
    ```

3. How to check current sync status from privatenet?

    First log into the command prompt:

    ```
    $ docker exec -it neo-python /bin/sh -c /bin/bash
    $ np-prompt -p -v
    ```

    From the container command prompt, run:  state

    Example:
    ```
    neo> state
    Progress: 5300 / 20043
    Block-cache length 920
    Blocks since program start 5300
    Time elapsed 3.9674691666666666 mins
    Blocks per min 1335.86419386162
    TPS: 22.302210708211764

    ```
    Make sure the block height matches the value in neoscan in question 1.


4. How to resolve network error shown in devtool console?

    Add one line to /etc/hosts:

    ```
    127.0.0.1 neo-nodes
    ```

5. How do I log into nOS client with private wallet?

    The easy way is to export the wallet from container, e.g.

    ```
    $ docker exec -it neo-python /bin/sh -c /bin/bash
    $ np-prompt -p -v

    neo> export wif AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y
    [wallet password]> ***
    WIF key export: KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr

    ```
    You can use the export string `KxDgvEKzgSBPPfuVfw67oPQBSjidEiqTHURKSDL1R7yGaGYAeYnr` to log into nOS client by choosing WIF login option.

6. Where do I find the network option of nOSLocal?

    Somethings the nOSLocal option is missing from the network setting in nOS client, to rectify it, simply click the button of 'Clear Custom Network Configuration' and it should be available again.

7. Why my NEO/GAS balance is not shown after transfer?

    You'll need to sign out and sign in nOS client again to see the new balance.

8. How to check if privatenet is working?

    When the block height of python prompt `np-prompt` is not updating with command `state`, you may check the log from container `cityofzion/neo-privatenet` to make sure it is progressing.

    First find the container id from docker

    MacOS/Linux

    ```
    docker ps | grep neo-privatenet
    05481644fe08        cityofzion/neo-privatenet                 "/bin/bash /opt/run.…"   24 hours ago        Up 24 hours         0.0.0.0:20333-20336->20333-20336/tcp, 0.0.0.0:30333-30336->30333-30336/tcp   neo-nodes
    ```

    Windows

    ```
    docker ps | findstr neo-privatenet
    05481644fe08        cityofzion/neo-privatenet                 "/bin/bash /opt/run.…"   24 hours ago        Up 24 hours         0.0.0.0:20333-20336->20333-20336/tcp, 0.0.0.0:30333-30336->30333-30336/tcp   neo-nodes
    ```


    Log into the container:

    ```
     docker exec -it 05481644fe08 /bin/bash
     tail -f /opt/node1/neo-cli/Logs/*.log

    ```

    The log should keep rolling, if not, try the `make stop` as shown in question 2.



# Error messages and solutions


- Error:
    ```
    [E 180302 22:30:01 ExecutionEngine:825] COULD NOT EXECUTE OP: Invalid list operation b'z' ROLL
    [E 180302 22:30:01 ExecutionEngine:826] Invalid list operation
    Traceback (most recent call last):
      File "/Users/thomassaunders/Workshop/neo-python/neo/VM/ExecutionEngine.py", line 823, in StepInto
        self.ExecuteOp(op, self.CurrentContext)
      File "/Users/thomassaunders/Workshop/neo-python/neo/VM/ExecutionEngine.py", line 276, in ExecuteOp
        estack.PushT(estack.Remove(n))
      File "/Users/thomassaunders/Workshop/neo-python/neo/VM/RandomAccessStack.py", line 57, in Remove
        raise Exception("Invalid list operation")
    Exception: Invalid list operation
    ```

- Possible cause:  It looks like the parameters do not match what defined in contract.
- Solution:   Review the contract code and caller code and make sure the parameters match.  
- Reference:  https://neo-python.readthedocs.io/en/latest/overview.html

# Resources

  - [nOS dAPP Getting Started Guide](https://medium.com/@SharedMocha/nos-dapp-getting-started-guide-187e72ed9ace)
