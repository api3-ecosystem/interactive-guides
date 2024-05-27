## Code explanation

- The contract `DataFeedReaderExample` imports the `Ownable` contract, which is
  used to restrict certain actions to the owner of the contract.

- The contract imports the `IProxy` interface from the
  `@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol` library, which
  defines a function called `read()` that reads data from a dAPI data feed. Be
  sure to use the proper IProxy interface version for the version of Solidity
  you are using, see
  [IProxy Interface](/reference/dapis/understand/proxy-contracts.md#iproxy-interface-contracts).

- The contract has a public variable called `proxyAddress` which is the address
  of the proxy contract that will be used to access the desired dAPI via its
  proxy contract. The `setProxyAddress()` function is a public function that
  allows the owner of the contract to update the proxy contract address.

* The `readDataFeed()` function is a public function that reads from a dAPI
  through the IProxy interface. The function returns two values representing the
  latest `value` with 18 decimals (type int224) and `timestamp` (type uint256)
  of the dAPI that the proxy is reading from.

## Summary

For additional information on how to read from a dAPI proxy, please refer to the
[datafeed-reader-example](https://github.com/api3dao/data-feed-reader-example)
repository which contains a hardhat project with a sample smart contract that
reads from a dAPI proxy.
