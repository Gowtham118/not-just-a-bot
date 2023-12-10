// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.18;

import {BaseAccount, UserOperation} from "@account-abstraction/contracts/core/BaseAccount.sol";
import {IEntryPoint} from "@account-abstraction/contracts/interfaces/IEntryPoint.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

abstract contract BaseWallet is BaseAccount {
    IEntryPoint immutable _entryPoint;

    uint248 _nonce;
    address _owner;

    // solhint-disable-next-line no-empty-blocks
    receive() external payable {}

    modifier onlyOwner() {
        require(
            _owner == msg.sender,
            "account: only owners can call this function"
        );
        _;
    }

    modifier onlyEntryPoint() {
        require(
            msg.sender == address(entryPoint()),
            "account: not an EntryPoint"
        );
        _;
    }

    constructor(IEntryPoint entryPoint_, address owner_) {
        _entryPoint = entryPoint_;
        _owner = owner_;
    }

    function nonce() public view virtual returns (uint256) {
        return _nonce;
    }

    function entryPoint() public view virtual override returns (IEntryPoint) {
        return _entryPoint;
    }

    /**
     * execute a transaction (called directly from owner, or by entryPoint)
     */
    function execute(
        address dest,
        uint256 value,
        bytes calldata func
    ) external onlyEntryPoint {
        _call(dest, value, func);
    }

    /**
     * execute a sequence of transactions
     */
    function executeBatch(
        address[] calldata dest,
        bytes[] calldata func
    ) external onlyEntryPoint {
        require(dest.length == func.length, "wrong array lengths");
        for (uint256 i = 0; i < dest.length; i++) {
            _call(dest[i], 0, func[i]);
        }
    }

    function _validateSignature(
        UserOperation calldata userOp,
        bytes32 userOpHash
    ) internal virtual override returns (uint256 validationData);

    function _validateAndUpdateNonce(
        UserOperation calldata userOp
    ) internal virtual {
        require(_nonce++ == userOp.nonce, "InstantWallet : invalid _nonce");
    }

    function _call(address target, uint256 value, bytes memory data) internal {
        (bool success, bytes memory result) = target.call{value: value}(data);
        if (!success) {
            assembly {
                revert(add(result, 32), mload(result))
            }
        }
    }

    function toEthSignedMessageHash(
        bytes32 messageHash
    ) internal pure returns (bytes32 digest) {
        /// @solidity memory-safe-assembly
        assembly {
            mstore(0x00, "\x19Ethereum Signed Message:\n32") // 32 is the bytes-length of messageHash
            mstore(0x1c, messageHash) // 0x1c (28) is the length of the prefix
            digest := keccak256(0x00, 0x3c) // 0x3c is the length of the prefix (0x1c) + messageHash (0x20)
        }
    }
}