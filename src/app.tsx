
// app.tsx
import { DynamicWidget, DynamicContextProvider } from '@dynamic-labs/sdk-react-core';

export default function App({ Component, pageProps }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV!,
        projectId: process.env.NEXT_PUBLIC_DYNAMIC_PROJECT_ID!,
        walletConnectors: ['metamask', 'walletconnect'],
      }}
    >
      <Component {...pageProps} />
    </DynamicContextProvider>
  );
}
