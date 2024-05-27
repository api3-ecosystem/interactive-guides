## 2. Read a dAPI

The solidity smart contract below demonstrates how to read a dAPI using a proxy
contract address and the `IProxy` interface. You do not read directly from the
proxy contract itself but rather by using the `IProxy` interface. Look at the
`read()` function of the IProxy interface on line 24 below.

To read a different dAPI, your smart contract does not need to change the code
itself, rather it just needs to use a different proxy contract address, see line
13 below. `IProxy` will call the proxy contract associated with the dAPI for
you.

```solidity{13,24}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts@4.9.5/access/Ownable.sol";
import "@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol";

contract DataFeedReaderExample is Ownable {
    // The proxy contract address obtained from the API3 Market UI.
    address public proxyAddress;

    // Updating the proxy contract address is a security-critical
    // action. In this example, only the owner is allowed to do so.
    function setProxyAddress(address _proxyAddress) public onlyOwner {
        proxyAddress = _proxyAddress;
    }

    function readDataFeed()
        external
        view
        returns (int224 value, uint256 timestamp)
    {
        // Use the IProxy interface to read a dAPI via its
        // proxy contract .
        (value, timestamp) = IProxy(proxyAddress).read();
        // If you have any assumptions about `value` and `timestamp`,
        // make sure to validate them after reading from the proxy.
    }
}
```

> Note that this contract is an example and should not be used for production purposes without proper security audits and testing.
