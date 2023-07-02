import { bool } from "prop-types";
import { Translation } from "../../../utils/Translations";

export default function GivenStatus({ isGiven }) {
    if (isGiven) return (
        <span className="text-xs font-medium inline-block py-[0.15rem] px-1.5 rounded text-[#C2473F] bg-[#fdf4f3]">
            {Translation("given")}
        </span>
    );

    else return (
        <span className="text-xs font-medium inline-block py-[0.15rem] px-1.5 rounded text-[#3C745E] bg-[#f1faf6]">
            {Translation("not-given")}
        </span>
    );
}


GivenStatus.propTypes = {
    isGiven: bool.isRequired,
}