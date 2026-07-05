
C:\Users\USER\OneDrive\Desktop\solana-form-clean>npm run build

> solana-form-clean@1.0.0 build
> next build

  ▲ Next.js 14.2.5

   Linting and checking validity of types  ...
   We detected TypeScript in your project and created a tsconfig.json file for you.
 ✓ Linting and checking validity of types
   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Collecting page data
   Generating static pages (2/3)  [   =]Error: You have tried to read "publicKey" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.
    at logMissingProviderError (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js:52:19)
    at Object.get (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js:47:9)
    at c (C:\Users\USER\OneDrive\Desktop\solana-form-clean\.next\server\pages\index.js:1:2097)
    at Wc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:68:44)
    at Zc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:70:253)
    at Z (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:76:89)
    at Xc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:68:409)
    at Zc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:70:210)
    at Z (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:76:89)
    at Zc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:70:481)
Error: You have tried to read "publicKey" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.
    at logMissingProviderError (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js:52:19)
    at Object.get (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js:47:9)
    at useWalletMultiButton (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-base-ui/lib/esm/useWalletMultiButton.js:4:72)
    at BaseWalletMultiButton (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-react-ui/lib/esm/BaseWalletMultiButton.js:7:89)
    at Wc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:68:44)
    at Zc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:70:253)
    at Z (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:76:89)
    at Zc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:70:481)
    at Z (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:76:89)
    at $c (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:78:98)
Error: You have tried to read "wallet" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.
    at logMissingProviderError (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js:52:19)
    at Object.get (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js:41:9)
    at useWalletMultiButton (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-base-ui/lib/esm/useWalletMultiButton.js:4:91)
    at BaseWalletMultiButton (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-react-ui/lib/esm/BaseWalletMultiButton.js:7:89)
    at Wc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:68:44)
    at Zc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:70:253)
    at Z (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:76:89)
    at Zc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:70:481)
    at Z (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:76:89)
    at $c (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:78:98)
Error: You have tried to read "wallets" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.
    at logMissingProviderError (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js:52:19)
    at Object.get (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js:35:9)
    at useWalletMultiButton (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-base-ui/lib/esm/useWalletMultiButton.js:4:99)
    at BaseWalletMultiButton (file:///C:/Users/USER/OneDrive/Desktop/solana-form-clean/node_modules/@solana/wallet-adapter-react-ui/lib/esm/BaseWalletMultiButton.js:7:89)
    at Wc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:68:44)
    at Zc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:70:253)
    at Z (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:76:89)
    at Zc (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:70:481)
    at Z (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:76:89)
    at $c (C:\Users\USER\OneDrive\Desktop\solana-form-clean\node_modules\react-dom\cjs\react-dom-server.browser.production.min.js:78:98)
 ✓ Generating static pages (3/3)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (pages)                             Size     First Load JS
┌ ○ / (2281 ms)                           83.2 kB         161 kB
├ ○ /404                                  180 B          78.4 kB
└ ƒ /api/submit                           0 B            78.2 kB
+ First Load JS shared by all             78.2 kB
  ├ chunks/framework-ecc4130bc7a58a64.js  45.2 kB
  ├ chunks/main-cb4281779d2d79ab.js       32 kB
  └ other shared chunks (total)           995 B

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


C:\Users\USER\OneDrive\Desktop\solana-form-clean>
C:\Users\USER\OneDrive\Desktop\solana-form-clean>
C:\Users\USER\OneDrive\Desktop\solana-form-clean>


















































