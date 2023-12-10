export const Welcome = () => {
  return (
    <div className="bg-black rounded-xl border-[1px] border-[#27272a] text-white p-4 my-4 ">
      <div>
        Welcome to NATTY, not just another chat bot. Now access your web3 wallet
        using username and password. How cool is that?
      </div>
      <div> Try : </div>
      <p>
        <div>- I want to swap my 100 matic on polygon to ETH on Arbitrum.</div>
        <div>
          -Send my 0.3 ETH to 0x1dD950A2051c217357C3441dcFb6d08dB6AeF54C.
        </div>
        <div>- Trade my 10 USDT to DAI on Optimism.</div>
      </p>
      <div>
        {" "}
        You can start a conversation here or try the following examples:
      </div>
    </div>
  );
};
