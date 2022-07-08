import { useEffect,useState,useMemo } from "react";
import {addDocument, deleteDoc, listDocuments, updateDocument, getDocument, deleteDocument} from "../utilities/firebaseIntegration"
import Modal from "./Modal";
import { Table } from "../utilities/Table";
const Page = ()=>{
	const [collection,setCollection] = useState([]);
	const [addModalOpen,setAddModalOpen]=useState(false);

	const columns = useMemo(()=>([
		{ label: "id", accessor: "id", sortable: true,  sortbyOrder: "desc"},
		{ label: "Model", accessor: "model", sortable: true, sortbyOrder: "desc" },
		{ label: "Size", accessor: "size", sortable: true, sortbyOrder: "desc" },
		{ label: "Image", accessor: "image", sortable: true, sortbyOrder: "desc" },
		{ label: "color", accessor: "color", sortable: true, sortbyOrder: "desc" }
	]),[]);

	const setState = async()=>{
		const list = await listDocuments();
		setCollection(list);
	}

	const createNewBike =async(values)=>{
		const newBike = await addDocument(values);
		setCollection([...collection,newBike]);
	}

	useEffect(()=>{
		setState();
	},[])

	return (<div className="h-screen w-screen">
		<div className="mt-10 ml-5 border-black border-solid border-spacing-2 overflow-auto">
			<Table
			key="table"
			setAdd={()=>setAddModalOpen(true)
			}
			caption="Currently Available bikes"
			rows={collection}
			columns={columns}
			/>
		</div>
		{addModalOpen && <Modal
			onClose={()=>setAddModalOpen(false)}
			onAction={createNewBike}
			modalTitle="Add Bike"
			modalText="Configure new bike"
			actionButtonTitle="Add bike"
		>

		</Modal>}
	</div>)
}

export default Page;