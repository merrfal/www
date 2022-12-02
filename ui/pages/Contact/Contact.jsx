import { Normal } from '../../layouts';
import { useState } from 'react';
import { ContactCreate } from '../../../controllers/front';
import { Loading, Input, Button, Textarea } from '../../components';
import { useDispatch } from 'react-redux';
import { Contact as Meta } from '../../../data/metas'; 

export default function Contact() { 
  const dispatch = useDispatch();

  const state =  {
    Name: '',
    Surname: '',
    Email: '',
    Message: '',
  };

  const [fields, setFields] = useState(state);
  const [loading, setLoading] = useState(false);

  return (
    <Normal>
      <Meta />
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-extrabold tracking-tight text-gray-900'>
          Na Kontaktoni
          </h1>
          <p className='mt-4 max-w-xl text-sm text-gray-700'>
            Këtu mund të na kontaktoni për gjitchka qe keni nevoj rreth platformes.
          </p>
          <div className='bg-white'>
          <div className='mt-12'>
          {loading 
           ? 
            <Loading />
           :
            <form className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
              <Input
                label="Emri"
                type="text"
                target="Name"
                values={fields}
                setValues={setFields}
                placeholder="Emri"
                size="large"
              />
              <Input
                label="Mbiemri"
                type="text"
                target="Surname"
                values={fields}
                setValues={setFields}
                placeholder="Mbiemri"
                size="large"
              />
              <Input
                label="Adresa Elektronike"
                type="text"
                target="Email"
                values={fields}
                setValues={setFields}
                placeholder="Adresa Elektronike"
                size="large"
              />
              <Input
                label="Subjekti"
                type="text"
                target="Email"
                values={fields}
                setValues={setFields}
                placeholder="Mesazhi"
                size="large"
              />
              <Textarea
                label="Mesazhi"
                type="text"
                target="Email"
                values={fields}
                setValues={setFields}
                placeholder="Mesazhi"
                size="large"
              />
              
              <div className='sm:col-span-2'>
                <Button 
                  method={() => ContactCreate(fields, setLoading, setFields, dispatch)}
                  size="large" 
                />
              </div>
            </form>
          }
          </div>
        </div>
      </div>
    </Normal>
  );
}