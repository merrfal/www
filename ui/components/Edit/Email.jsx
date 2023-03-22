export default function Email({ user }) {
  return (
    <div className="col-span-6 sm:col-span-3 opacity-50">
      <label htmlFor="emai" className="block text-sm font-medium text-gray-700">
        Adresa Elektronike
      </label>
      <input
        type="text"
        id="email"
        className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        placeholder="Email"
        disabled={true}
        value={user.userData.email}
      />
    </div>
  );
}
