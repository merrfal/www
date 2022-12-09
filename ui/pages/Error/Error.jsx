import Link from 'next/link';

import { Normal } from '../../layouts';
import { Error as Meta } from '../../../data/metas'; 

export default function Error() {
  return (
    <Normal>
      <Meta />
      <div className="min-h-full pt-28 pb-32 flex flex-col bg-white">
        <div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <div className="flex justify-center align-center items-center">
                <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_f2vwipdy.json"  background="transparent"  speed="1"  style={{width: '320px'}} loop  autoplay />
              </div>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Faqja nuk u gjend!</h1>
              <p className="mt-5 text-base text-gray-500">Na falni por faqja që ju po kërkoni nuk u gjend ose është fshirë.</p>
              <div className="mt-6">
                <Link href="/">
                  <a href="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">Kthehu në Ballinë<span> &rarr;</span></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Normal>
  );
}
