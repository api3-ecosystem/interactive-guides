## Step 3: Writing the Solidity Contract

Create a new file `contracts/GetterSetter.sol` and add the following code:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GetterSetter {
    uint256 private value;

    function setValue(uint256 _value) public {
        value = _value;
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
```

- `setValue` is a `public` function that sets the value of the `value` variable.
- `getValue` is a `public view` function that returns the value of the `value` variable.