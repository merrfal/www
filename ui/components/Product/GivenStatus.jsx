import { Translation } from "../../../utils/Translations";

export default function GivenStatus(props) {
    const { isGiven } = props;

    if (isGiven === true) return (
        <span className="text-xs font-bold inline-block py-[0.15rem] px-1.5 rounded text-[#C2473F] bg-[#fdf4f3]">
            {Translation("given")}
        </span>
    );

    else if (isGiven === false) return (
        <span className="text-xs font-bold inline-block py-[0.15rem] px-1.5 rounded text-[#3C745E] bg-[#f1faf6]">
            {Translation("not-given")}
        </span>
    );
}