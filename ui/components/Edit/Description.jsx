import { UserBioValidation } from "../../../utils/Forms";

export default function Description({ user, onInput, validations }) {
  const validation = UserBioValidation(user.userData.bio);
  
  return (
    <div className="col-span-6 sm:col-span-6">
      <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
        Përshkrimi
      </label>

      <textarea
        type="text"
        id="bio"
        className="mt-1 block p-3 resize-none w-full rounded-md border-gray-300 shadow-sm focus:border-[#387DFF] focus:ring-[#387DFF] sm:text-sm"
        placeholder="Përshkrimi juaj"
        rows="5"
        value={user.userData.bio}
        onChange={(e) => onInput("bio", e)}
      />

      {validations.bio && validation.error && (
        <p className="text-xs mt-1 ml-[1px] text-red-500">
          {validation.message}
        </p>
      )}
    </div>
  );
}
