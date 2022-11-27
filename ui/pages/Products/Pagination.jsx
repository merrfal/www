export default function Pagination({ nPages, currentPage, setCurrentPage }) {

    let pageNumbers = [...Array(0).keys()].slice(1)

    if (nPages) {
        pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    }

    const nextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }
    return (
        nPages >= 2 && (<div class="flex justify-center m-10">
            <nav aria-label="Page navigation example">
                <ul class="flex list-style-none">
                    <li class="page-item"><a
                        class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                        style={currentPage === 1 ? { display: 'none' } : {}}
                        onClick={prevPage}

                        href="#">Previous</a></li>

                    {
                        pageNumbers.map(pgNumber => (
                            <li key={pgNumber} class="page-item">
                                <a
                                    class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                    onClick={() => setCurrentPage(pgNumber)}> {pgNumber}</a>
                            </li>
                        ))
                    }


                    <li class="page-item"><a
                        style={currentPage === nPages ? { display: 'none' } : {}}
                        onClick={nextPage}
                        class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                        href="#">Next</a></li>
                </ul>
            </nav>
        </div>
        )
    )

}
