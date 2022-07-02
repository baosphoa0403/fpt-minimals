// scroll bar
import 'simplebar/src/simplebar.css';

// ----------------------------------------------------------------------
import { useEffect } from 'react';
// next
import Head from 'next/head';
import type { AppProps } from 'next/app';
// theme
import ThemeConfig from 'src/theme';
// contexts
import { SettingsProvider } from 'src/contexts/SettingsContext';
import { CollapseDrawerProvider } from 'src/contexts/CollapseDrawerContext';
// components
import RtlLayout from 'src/components/RtlLayout';
import Settings from 'src/components/settings';
import TopProgressBar from 'src/components/TopProgressBar';
import ThemePrimaryColor from 'src/components/ThemePrimaryColor';

// ----------------------------------------------------------------------

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <SettingsProvider>
      <CollapseDrawerProvider>
        <ThemeConfig>
          <ThemePrimaryColor>
            <RtlLayout>
              <Settings />
              <Head>
                <meta
                  name='viewport'
                  content='width=device-width, initial-scale=1, shrink-to-fit=no'
                />
              </Head>
              <TopProgressBar />
              <Component {...pageProps} />
            </RtlLayout>
          </ThemePrimaryColor>
        </ThemeConfig>
      </CollapseDrawerProvider>
    </SettingsProvider>
  );
}
