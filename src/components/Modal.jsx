/* eslint-disable react/prop-types */
const Modal = ({onClose,onAction,modalTitle,modalText,actionButtonTitle,children})=>{

	return(<div id="large-modal" tabIndex="-1" className="overflow-y-auto fixed overflow-x-hidden m-25 border-black border-solid border-box z-100 w-full h-modal">
		<div className="relative p-4 w-full max-w-4xl h-full md:h-auto">
			<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
				<div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
					<h3 className="text-xl font-medium text-gray-900 dark:text-white">
						{modalTitle}
					</h3>
					<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="large-modal"
					onClick={onClose}
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

					</button>
				</div>
				<div className="p-6 space-y-6">
					<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
					{modalText}
					</p>
					{children}
				</div>
				<div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
					<button data-modal-toggle="large-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					onClick={onAction}
					>
						{actionButtonTitle}
					</button>
					<button data-modal-toggle="large-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
					onClick={onClose}
					>Close
					</button>
				</div>
			</div>
		</div>
	</div>
	)

// 	return(<>
// 	<div className="modal fade absolute inset-8 h-1/2 w-1/2 outline-2 border-solid overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
// 		<div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
// 		<div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
// 			<div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
// 			<h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
// 				{modalTitle}
// 			</h5>
// 			<button type="button"
// 				className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
// 				data-bs-dismiss="modal" aria-label="Close"></button>
// 			</div>
// 			<div className="modal-body relative p-4">
// 			<p>{modalText}</p>
// 			</div>
// 			{children}
// 			<div
// 			className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
// 			<button type="button"
// 				className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
// 				data-bs-dismiss="modal"
// 				onClick={onClose}
// 				>
// 				Close
// 			</button>
// 			<button type="button"
// 				className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
// 				onClick={onAction}
// 				>
// 				{actionButtonTitle}
// 			</button>
// 			</div>
// 		</div>
// 		</div>
// 	</div>
//   </>)
}

export default Modal;