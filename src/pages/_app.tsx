import type { AppProps } from 'next/app';
import { I18nProvider } from 'next-localization';
import { SitecorePageProps } from 'lib/page-props';
import Image from 'next/image';

import 'assets/main.scss';

function App({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  const { dictionary, ...rest } = pageProps;

  return (
    <>
      <Image
        src="https://www.mccormick.com/-/media/project/oneweb/mccormick-us/frenchs/recipes/g/frenchs-green-bean-casserole-recipe.jpg"
        alt="banner"
      />
      <h1>MKC - XM Cloud</h1>
      <p>Starter Kit</p>
      <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
        <Component {...rest} />
      </I18nProvider>
    </>
  );
}

export default App;
