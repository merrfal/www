import { Normal } from '../../layouts';
import { Animation, Link, Info } from './';

export default function Error({code}) {
  return (
    <Normal>
      <div className="min-h-full pt-28 pb-32 flex flex-col bg-white">
        <div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <Animation />
              <Info code={code} />
              <Link />
            </div>
          </div>
        </div>
      </div>
    </Normal>
  );
}
