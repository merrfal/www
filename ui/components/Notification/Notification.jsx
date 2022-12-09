import { useSelector } from "react-redux";
import { ErrorIcon, SuccessIcon, WarningIcon } from "../../icons";

export default function Notification() {
  const notification = useSelector((state) => state.notification);
  const { Visibility, Type, Title, Message } = notification;

  if (Visibility)
    return (
      <div className="fixed inset-0 z-50 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {
                    {
                      success: <SuccessIcon />,
                      error: <ErrorIcon />,
                      warning: <WarningIcon />,
                    }[Type]
                  }
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">{Title}</p>
                  <p className="mt-1 text-sm text-gray-500">{Message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
