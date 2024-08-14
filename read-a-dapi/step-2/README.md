## Coding the `DapiReader.sol` Contract

In this step, we will code the `DapiReader.sol` contract. This contract will be responsible for reading the data from a dAPI.

### Create the `DapiReader.sol` Contract

Create a new file named `DapiReader.sol` in the `contracts` directory and add the following code:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
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

### Explanation

- The `DataFeedReaderExample` contract is an example contract that reads data from a dAPI.

- The contract imports the `IProxy` interface from the `@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol` library, which defines a function called `read()` that reads data from a dAPI data feed.

- The contract has a public variable called `proxyAddress` which is the address of the proxy contract that will be used to access the desired dAPI via its proxy contract. The `setProxyAddress()` function is a public function that allows the owner of the contract to update the proxy contract address.

- The `readDataFeed()` function is a public function that reads from a dAPI through the `IProxy` interface. The function returns two values representing the latest `value` with 18 decimals (type `int224`) and `timestamp` (type `uint256`) of the dAPI that the proxy is reading from.