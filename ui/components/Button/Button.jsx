export default function Input(props) {
  const { size, method, text } = props;

  if (size === "large") {
    return (
      <button
        className="w-auto bg-[#387CFF] inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-[#508DFF] focus:outline-none  transition-all"
        onClick={() => method}
      >
        {text}
      </button>
    );
  } else return <p>soon</p>;
}
