// import Link from "next/link";

// import { useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Search as Searcher } from "../../../controllers/Product";
// import { SmSearchIcon, InfoIcon, SmLocationIcon } from "../../icons";

// import {
//   OpenSearch,
//   CloseSearch,
//   SetSearchTerm,
// } from "../../../controllers/Slices";

// export default function Search() {
//   const dispatch = useDispatch();
//   const search = useSelector((state) => state.search);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     document.addEventListener(
//       "keydown",
//       (event) => {
//         var name = event.key;

//         if (name === "/") {
//           if (search.Visibility === false) {
//             dispatch(OpenSearch());
//             document.getElementById("floating-search").focus();
//             dispatch(SetSearchTerm(""));
//           }
//         }

//         if (name === "Escape") {
//           if (search.Visibility === true) {
//             dispatch(CloseSearch());
//             document.getElementById("floating-search").focus();
//             dispatch(SetSearchTerm(""));
//           }
//         }
//       },
//       false
//     );
//   }, []);

//   useEffect(() => {
//     if (search.Visibility) Searcher(search.Term, dispatch);
//   }, [search]);

//   useEffect(() => {
//     if (search.Visibility) inputRef.current.focus();
//   }, []);

//   const lottie = {
//     src: "https://lottie.host/c47c3f04-5fb5-45e5-b0ab-c7f2990effe4/tDIHWvQxqp.json",
//     background: "transparent",
//     speed: "1",
//     style: { width: "64px", height: "64px" },
//     loop: true,
//     autoplay: true,
//   };

//   const container = {
//     width: "100%",
//     height: "auto",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   if (search.Visibility)
//     return (
//       <div className="fixed inset-0 z-20 p-4 sm:p-6 md:p-20 overflow-hidden">
//         <div
//           onClick={() => dispatch(CloseSearch())}
//           className="fixed inset-0 bg-gray-700 bg-opacity-25 transition-opacity overflow-hidden"
//         />
//         <div className="mx-auto max-w-xl transform divide-y divide-gray-100 rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all overflow-hidden">
//           <div className="relative">
//             <SmSearchIcon />
//             <input
//               id="floating-search"
//               type="text"
//               style={{ verticalAlign: "baseline" }}
//               ref={inputRef}
//               value={search.Term}
//               onChange={(e) => dispatch(SetSearchTerm(e.target.value))}
//               className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-0"
//               placeholder="Kërko produkte..."
//             />
//           </div>

//           {search.Loading || search.Loaded ? (
//             <div className="py-14 px-6 text-center text-sm sm:px-14 w-full flex align-center items-center">
//               <div style={container}>
//                 <lottie-player {...lottie} />
//               </div>
//             </div>
//           ) : search.Results.length === 0 ? (
//             <div className="py-14 px-6 text-center text-sm sm:px-14">
//               <InfoIcon />
//               <p className="mt-4 font-semibold text-gray-900">
//                 Nuk u gjet asnjë rezultat
//               </p>
//               <p className="mt-2 text-gray-500">
//                 Nuk u gjet asnjë produkt për këtë term kërkimi. Ju lutemi
//                 provoni përsëri.
//               </p>
//             </div>
//           ) : (
//             <ul
//               className="max-h-96 scroll-py-3 overflow-y-auto p-3"
//               id="options"
//               role="listbox"
//             >
//               {search.Results.map((product, index) => (
//                 <Link href={`/produktet/${product.Slug}`}>
//                   <li
//                     onClick={() => {
//                       dispatch(SetSearchTerm(""));
//                       dispatch(CloseSearch());
//                     }}
//                     key={index}
//                     className="group flex cursor-default select-none rounded-xl p-3 hover:opacity-75 hover:cursor-pointer"
//                   >
//                     <div className="flex h-10 w-10 flex-none items-center justify-center bg-gray-500 rounded">
//                       <img
//                         src={
//                           product.Gallery.length === 0
//                             ? "/product-no.png"
//                             : product.Gallery[0]
//                         }
//                         className="h-10 w-10 rounded"
//                       />
//                     </div>
//                     <div className="ml-4 flex-auto">
//                       <p className="text-sm font-medium text-gray-700">
//                         {product.Name}
//                       </p>
//                       <p className="text-sm text-gray-500 flex items-center">
//                         <SmLocationIcon />
//                         {product.Address}, {product.Zip}, {product.City}
//                       </p>
//                     </div>
//                   </li>
//                 </Link>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     );
// }

export default function Search() {
  return <div />;
}
