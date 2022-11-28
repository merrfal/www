export default function Pagination({ nPages, currentPage, setCurrentPage }) {
  let pageNumbers = [...Array(0).keys()].slice(1);

  if (nPages) pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  console.log('data', nPages, currentPage);

  return (
    nPages >= 2 && (
      <div class='flex justify-center m-10'>
        <nav>
          <ul class='flex list-style-none'>
            <li class='page-item'>
              <a
                class='mr-2 page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                style={currentPage === 1 ? { display: 'none' } : {}}
                onClick={prevPage}>
                E mëparshmja
              </a>
            </li>

            {pageNumbers.map((pgNumber) => (
              <li
                onClick={() => setCurrentPage(pgNumber)}
                key={pgNumber}
                class={
                    currentPage === pgNumber
                    ? 'page-link relative block text-gray-800 focus:shadow-none bg-gray-200 page-item w-10 h-10 flex justify-center items-center rounded border-0 cursor-pointer bg-transparent outline-none transition-all duration-300 cursor-pointer mr-2'
                    : 'page-link relative block text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none page-item w-10 h-10 flex justify-center items-center rounded border-0 cursor-pointer bg-transparent outline-none transition-all duration-300 cursor-pointer mr-2' 
                }>
                  {pgNumber}
              </li>
            ))}

            <li class='page-item'>
              <a
                style={currentPage === nPages ? { display: 'none' } : {}}
                onClick={nextPage}
                class='page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
                >
                Tjetra
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  );
}