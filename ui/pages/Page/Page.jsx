import { Normal } from '../../layouts';

export default function Profile({ meta, content }) {
  console.log('meta', meta);
  console.log('content', content);

  return (
    <Normal>
      {meta}
      <div className='max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl mb-2 font-extrabold tracking-tight text-gray-900'>
          {content.title}
        </h1>
        <div className='mt-4 w-full text-m text-gray-700 mb-20'>
          {content.content.map(item => {
            return (
              <div>
                <h1 className='text-3xl mb-2 font-extrabold tracking-tight text-gray-900'>
                  {item.h1}
                </h1>
                <h3 className='text-2xl mb-2 font-extrabold tracking-tight text-gray-900'>
                  {item.h3}
                </h3>
                <p className='mt-4 w-full text-m text-gray-700 mb-20'>
                  {item.p}
                </p>
              </div>
            )

          })}
        </div>
      </div>
    </Normal >
  );
}
