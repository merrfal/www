import Link from 'next/link';

import { Normal } from '../../layouts';

export default function Error() {
  return (
    <Normal>
      <div class="min-h-full pt-32 pb-32 flex flex-col bg-white">
        <div class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div class="py-16">
            <div class="text-center">
              <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Dicka shkoi gabim</p>
              <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Faqja nuk u gjend!</h1>
              <p class="mt-2 text-base text-gray-500">Na falni, por faqja që ju po kërkoni nuk u gjend.</p>
              <div class="mt-6">
                <Link href="/">
                  <a href="/" class="text-base font-medium text-indigo-600 hover:text-indigo-500">Kthehu në Ballinë<span aria-hidden="true"> &rarr;</span></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Normal>
  );
}
