
const CreateBikeForm = ()=>{


	return (
		<form>
				<input
                    key={`model`}
                    type="search"
					className="text-left text-sm w-full border-black border-2 border-solid"
                    placeholder={`model`}
                  />
				<input
                    key={"size"}
                    type="search"
					className="text-left text-sm w-full border-black border-2 border-solid"
                    placeholder={`size`}

                  />
				<input
                    key={`color`}
                    type="search"
					className="text-left text-sm w-full border-black border-2 border-solid"
                    placeholder={`color`}
                  />
				<input
                    key="image"
                    type="file"
					className="text-left text-sm w-full border-black border-2 border-solid"
                    placeholder={`file`}
                  />
		</form>
	)
}

export default CreateBikeForm;