/* eslint-disable react/prop-types */

import { useContext } from "react";
import { BikeContext } from "../contexts/bikeContext";

const CreateEditBikeForm = ()=>{
	const [values, setValues] = useContext(BikeContext);
	const updateImage =async(event)=>{
		const [file] = event.target.files;
		try {
			const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_PROJECT}/image/upload`;
			const formData = new FormData();
			formData.append("file", file);
			formData.append("upload_preset",import.meta.env.VITE_CLOUDINARY_PRESET);
			const response = await fetch(url,{
				method: "POST",
				body: formData
			});
			const info = await response.json();
			setValues({...values,image:info.url});
		} catch (error) {
			setValues({...values,image:""});
			alert("Image upload failed");
		}
	}
	return (
		<form>
				<input
                    key={`model`}
                    type="search"
					value={values.model}
					className="text-left text-sm w-full border-black border-2 border-solid"
					onChange={(event) => {
						event.persist();
						setValues({...values,model:event.target.value});
					}}
                    placeholder={`model`}
                  />
				<input
                    key={"size"}
                    type="search"
					value={values.size}
					onChange={(event) => {
						event.persist();
						setValues({...values,size:event.target.value});

					}}
					className="text-left text-sm w-full border-black border-2 border-solid"
                    placeholder={`size`}
                  />
				<input
                    key={`color`}
                    type="search"
					value={values.color}
					onChange={(event) => {
						event.persist();
						setValues({...values,color:event.target.value});

					}}
					className="text-left text-sm w-full border-black border-2 border-solid"
                    placeholder={`color`}
                  />
				<>
				<input
                    key="image"
                    type="file"
					className="text-left text-sm w-full border-black border-2 border-solid"
                    placeholder='file'
					onChange={updateImage}
                  />
				{values.image &&<img className="inline-block justify-center object-contain aspect-auto h-11 w-15 aspect-auto" src={values.image} alt="" />}
				</>
		</form>
	)
}

export default CreateEditBikeForm;