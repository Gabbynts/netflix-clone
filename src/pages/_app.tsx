import { AuthProvider } from 'hooks/useAuth';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import '@/styles/globals.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
    {/* Higher Order Component */}
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </RecoilRoot>) 
}

export default MyApp;
