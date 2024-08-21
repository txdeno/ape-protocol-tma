import { useInitData } from "@telegram-apps/sdk-react";
import { beginCell, toNano } from "@ton/core";
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";

const body = beginCell()
  .storeUint(0, 32) // write 32 zero bits to indicate that a text comment will follow
  .storeStringTail("Hello, TON!") // write our text comment
  .endCell();

const transaction = {
  validUntil: Math.floor(Date.now() / 1000) + 360,
  messages: [
    {
      address:
        "0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F", // destination address

      amount: toNano(0.05).toString(),
      payload: body.toBoc().toString("base64"), // payload with comment in body
    },
  ],
};

function App() {
  const initData = useInitData();
  const [tonConnectUI] = useTonConnectUI();
  console.log(initData?.user?.username);

  return (
    <div className="p-6 w-screen h-screen flex flex-col items-center gap-6">
      <TonConnectButton />
      <img src="logo.webp" className="mt-10 aspect-square object-cover w-1/2" />
      <div className="flex flex-col items-center">
        <span className="font-bold text-4xl">100</span>
        <span className="font-bold text-2xl text-white/60">$APC</span>
      </div>
      <button
        className="w-full rounded-lg bg-white font-semibold p-3 text-black active:opacity-80 transition-opacity"
        onClick={() => tonConnectUI.sendTransaction(transaction)}
      >
        Withdraw
      </button>
    </div>
  );
}

export default App;
