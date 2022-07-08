import { useEffect,useState,useMemo,useContext } from "react";
import {addDocument, listDocuments, updateDocument, deleteDocument} from "../utilities/firebaseIntegration"
import Modal from "./Modal";
import { Table } from "../utilities/Table";
import { BikeContext } from "./contexts/bikeContext";
import CreateEditBikeForm from "./common/CreateEditBikeForm";

const Page = ()=>{
	const [collection,setCollection] = useState([]);
	const [addModalOpen,setAddModalOpen]=useState(false);
	const [editModalOpen,setEditModalOpen]=useState(false);
	const [deleteModalOpen,setDeleteModalOpen]=useState(false);
	const [deleteId,setDeleteId]=useState(null);

	const [values,setValues] = useContext(BikeContext);

	const columns = useMemo(()=>([
		{ label: "id", accessor: "id", sortable: true,  sortbyOrder: "desc"},
		{ label: "Model", accessor: "model", sortable: true, sortbyOrder: "desc" },
		{ label: "Size", accessor: "size", sortable: true, sortbyOrder: "desc" },
		{ label: "Image", accessor: "image", sortable: true, sortbyOrder: "desc" },
		{ label: "Color", accessor: "color", sortable: true, sortbyOrder: "desc" },
		{ label: "Actions", accessor: "actions", sortable: false }
	]),[]);

	const setState = async()=>{
		const list = await listDocuments();
		setCollection(list);
	}

	const createNewBike =async(event)=>{
		event.preventDefault();
		const newBike = await addDocument(values);
		setCollection([...collection,newBike]);
		setValues({id:"",image:"",model:"",size:""});
		setAddModalOpen(false);
	}

	const deleteBike=(id)=>{
		setDeleteId(id);
		setDeleteModalOpen(true);
	}
	const editBike=(bike)=>{
		setValues(bike);
		setEditModalOpen(true);
	}

	const deleteBikeAction=async()=>{
			await deleteDocument(deleteId);
			setCollection([...collection.filter(bike=>bike.id!==deleteId)]);
			setDeleteId(null);
			setDeleteModalOpen(false);
	}

	const editBikeAction=async()=>{
		await updateDocument(values.id,values);
		const index = collection.indexOf(values);
		collection.splice(index,1,values);
		setCollection([...collection]);
		setValues({id:"",image:"",model:"",size:""});
		setEditModalOpen(false);
	}

	useEffect(()=>{
		setState();
	},[])

	return (<div className="h-screen w-screen">
		<div className="flex justify-items-center relative h-screen w-screen border-black border-solid border-spacing-2 overflow-auto">
			<Table
			key="table"
			setAdd={()=>setAddModalOpen(true)
			}
			editBike={editBike}
			deleteBike={deleteBike}
			caption="Currently Available bikes"
			rows={collection}
			columns={columns}
			/>
		{addModalOpen && <Modal
			onClose={()=>setAddModalOpen(false)}
			onAction={createNewBike}
			modalTitle="Add Bike"
			modalText="Configure new bike"
			actionButtonTitle="Add bike"
			>
			<CreateEditBikeForm/>
		</Modal>}
		{editModalOpen && <Modal
			onClose={()=>setEditModalOpen(false)}
			onAction={editBikeAction}
			modalTitle="Edit Bike"
			modalText="Change bike values"
			actionButtonTitle="Edit bike"
			>
			<CreateEditBikeForm/>
		</Modal>}
		{deleteModalOpen && <Modal
			onClose={()=>setDeleteModalOpen(false)}
			onAction={deleteBikeAction}
			modalTitle="Delete Bike"
			modalText="Are you sure you want to delete the bike"
			actionButtonTitle="Delete bike"
		/>}
		</div>
	</div>)
}

export default Page;