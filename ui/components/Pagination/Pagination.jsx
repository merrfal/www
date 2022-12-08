export default function Pagination({ nPages, currentPage, setCurrentPage }) {
  let pageNumbers = [...Array(0).keys()].slice(1);

  if (nPages) pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    nPages >= 2 && (
      <div className="flex justify-center m-10">
        <nav>
          <ul className="flex list-style-none">
            <li
              onClick={prevPage}
              style={currentPage === 1 ? { display: "none" } : {}}
              className="mr-2 page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
            >
              E mëparshmja
            </li>

            {pageNumbers.map((pgNumber) => (
              <li
                onClick={() => setCurrentPage(pgNumber)}
                key={pgNumber}
                className={
                  currentPage === pgNumber
                    ? "page-link relative text-gray-800 focus:shadow-none bg-gray-200 page-item w-9 h-9 flex justify-center items-center rounded border-0  bg-transparent outline-none transition-all duration-300 cursor-pointer mr-2"
                    : "page-link relative text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none page-item w-9 h-9 flex justify-center items-center rounded border-0 bg-transparent outline-none transition-all duration-300 cursor-pointer mr-2"
                }
              >
                {pgNumber}
              </li>
            ))}

            <li
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer"
              onClick={nextPage}
              style={currentPage === nPages ? { display: "none" } : {}}
            >
              Tjetra
            </li>
          </ul>
        </nav>
      </div>
    )
  );
}
