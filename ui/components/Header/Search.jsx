import { useRouter } from "next/router";
import { useState } from "react";
import { SearchIcon } from "../../icons";

export default function Search() {
  const router = useRouter();
  const [term, setTerm] = useState("");

  useState(() => {
    let path = typeof window !== "undefined" && window.location;
    path = path?.pathname?.split("/")[2];
    const base = path?.pathname?.split("/")[1];

    if (path !== undefined && path !== "" && term === "" && base === "kerko") setTerm(path);
  }, [router]);

  return (
    <div className="w-auto relative hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon />
      </div>

      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        maxLength={32}
        required
        type="text"
        className="border w-[230px] border-gray-200 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-1.5 "
        placeholder="Kërko produkte..."
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            router.push(`/kerko/${term}`);
          }
        }}
      />
    </div>
  );
}
