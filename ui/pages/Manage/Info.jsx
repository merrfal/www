export default function Info({half = false}) {
  return (
    <>
      <div className="flex text-sm text-gray-600">
        <label className="relative cursor-pointer rounded-md bg-white font-medium text-[#377DFF] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#377DFF] focus-within:ring-offset-2 hover:text-[#377DFF]">
          <span className="text-[#377DFF]">Ngarko një Fotografi</span>
        </label>
        {!half && <p className="pl-1">ose tërhiqe një këtu.</p>}
      </div>
      <p className="text-xs text-gray-500">
        PNG, JPG, JEPG formate te fotografive.
      </p>
    </>
  );
}
