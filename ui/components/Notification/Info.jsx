import { useSelector } from "react-redux";

export default function Info() {
  const { Title, Message } = useSelector((state) => state.Notification);

  return (
    <div className="ml-3 w-0 flex-1 pt-0.5">
      <p className="text-sm font-medium text-gray-900">{Title}</p>
      <p className="mt-1 text-sm text-gray-500">{Message}</p>
    </div>
  );
}
