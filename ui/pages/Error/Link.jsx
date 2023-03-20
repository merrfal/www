import Href from "next/link";

export default function Link() {
  return (
    <div className="mt-6">
      <Href href="/">
        <a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
          Kthehu në Ballinë &rarr;
        </a>
      </Href>
    </div>
  );
}
