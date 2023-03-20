import { useSelector } from "react-redux";
import { ErrorIcon, SuccessIcon, WarningIcon } from "../../icons";

export default function Iconer() {
  const { Type } = useSelector((state) => state.Notification);

  return (
    <div className="flex-shrink-0 mt-[.25em]">
      {
        {
          success: <SuccessIcon />,
          error: <ErrorIcon />,
          warning: <WarningIcon />,
        }[Type]
      }
    </div>
  );
}
