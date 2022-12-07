import { Normal } from "../../layouts";
import { useState } from "react";
import { ContactCreate } from "../../../controllers/front";
import { Loading, Input, Button, Textarea } from "../../components";
import { useDispatch } from "react-redux";
import { Contact as Meta } from "../../../data/metas";

export default function Contact() {
  const dispatch = useDispatch();

  const state = {
    Name: "",
    Surname: "",
    Email: "",
    Message: "",
  };

  const [fields, setFields] = useState(state);
  const [loading, setLoading] = useState(false);

  return (
    <Normal>
      <Meta />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Na Kontaktoni
        </h1>
        <p className="mt-4 max-w-xl text-sm text-gray-700">
          Për të gjitha brengat, problemet apo rekomandimet qe keni mund ta
          kontaktoni ekipin tonë, e ata më shumë se të kënaquar do të jenë që të
          ju përgjigjën.
        </p>
        <div className="bg-white">
          <div className="mt-12">
            {loading ? (
              <Loading />
            ) : (
              <form
                action='#'
                method='POST'
                className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
                <div>
                  <label
                    for='first-name'
                    className='block text-sm font-medium text-gray-700'>
                    Emri
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='first-name'
                      value={fields.Name}
                      placeholder="Emri"
                      onChange={(e) => setFields({ ...fields, Name: e.target.value })}
                      className='py-3 px-4 block w-full shadow-sm focus:ring-[#387CFF] focus:border-[#387CFF] border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div>
                  <label
                    for='last-name'
                    className='block text-sm font-medium text-gray-700'>
                    Mbiemri
                  </label>
                  <div className='mt-1'>
                    <input
                      placeholder="Mbiemri"
                      type='text'
                      value={fields.Surname}
                      onChange={(e) => setFields({ ...fields, Surname: e.target.value })}
                      id='last-name'
                      className='py-3 px-4 block w-full shadow-sm focus:ring-[#387CFF] focus:border-[#387CFF] border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    for='email'
                    className='block text-sm font-medium text-gray-700'>
                    Adresa Elektronike
                  </label>
                  <div className='mt-1'>
                    <input
                      placeholder="Adresa Elektronike"
                      id='email'
                      value={fields.Email}
                      onChange={(e) => setFields({ ...fields, Email: e.target.value })}
                      type='email'
                      className='py-3 px-4 block w-full shadow-sm focus:ring-[#387CFF] focus:border-[#387CFF] border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    for='message'
                    className='block text-sm font-medium text-gray-700'>
                    Mesazhi
                  </label>
                  <div className='mt-1'>
                    <textarea
                      placeholder="Message"
                      id='message'
                      value={fields.Message}
                      rows='4'
                      onChange={(e) => setFields({ ...fields, Message: e.target.value })}
                      className='py-3 px-4 block w-full shadow-sm focus:ring-[#387CFF] focus:border-[#387CFF] border border-gray-300 rounded-md'></textarea>
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <button
                    type='submit'
                    className={
                      fields.Email !== '' && fields.Message !== '' && fields.Name !== '' && fields.Surname !== ''
                        ? "w-auto bg-[#387CFF] inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-[#387CFF95] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#387CFF]"
                        : "w-auto bg-[#387CFF] inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-[#387CFF95] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#387CFF] cursor-not-allowed opacity-[.75]"
                    }
                    disabled={fields.Email !== '' && fields.Message !== '' && fields.Name !== '' && fields.Surname !== '' ? false : true}
                    onClick={() => ContactCreate(fields, setLoading, setFields, dispatch)}
                  >
                    Dërgo Mesazhin
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Normal>
  );
}
