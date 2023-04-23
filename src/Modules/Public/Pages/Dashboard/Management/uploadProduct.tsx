import { useState } from "react";
import { MdClose } from "react-icons/md";

const UploadProduct = () => {
	const [confirm, setConfirm] = useState(false);
	const [productImage, setProductImage] = useState("");

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			setProductImage(URL.createObjectURL(event.target.files[0]));
		}
	};

	const [uploadData, setUploadData] = useState({
		//img: "/img/plannet.jpg",
		img: productImage,
		name: "",
		detail: "",
		price: "20,000",
	});

	return (
		<div className="w-full h-screen flex flex-col py-5 ">
			<>
				<img
					src={productImage ? productImage : "/img/plannet.jpg"}
					alt="img"
					className="mx-auto w-56 h-52 object-cover items-center rounded-md"
				/>

				<div className="mx-auto w-full md:w-96 my-2  h-auto flex flex-col ">
					<p className="text-base  pb-1 font-roboto">Product image</p>
					<input
						type="file"
						name=""
						id=""
						onChange={onImageChange}
						className="mx-auto w-full md:w-96 py-1 px-0.5 outline-none bg-slate-100 border-2 border-slate-400 rounded-lg hover:border-green-500"
					/>
				</div>
				<div className="mx-auto w-full md:w-96 my-2  h-auto flex flex-col ">
					<p className="text-base  pb-1 font-roboto">Product name</p>

					<input
						type="text"
						name="product name"
						id=""
						placeholder="Product name.."
						onChange={(e) => setUploadData((prev) => ({ ...prev, name: e.target.value }))}
						className="mx-auto w-full md:w-96  p-2  text-lg outline-none  border-2 border-slate-400 rounded-lg  hover:border-green-500"
					/>
				</div>
				<div className="mx-auto w-full md:w-96 my-2  h-auto flex flex-col ">
					<p className="text-base  pb-1 font-roboto">Product Detail</p>

					<input
						type="text"
						name="product detail"
						id=""
						placeholder="Product detail.."
						onChange={(e) => setUploadData((prev) => ({ ...prev, detail: e.target.value }))}
						className="mx-auto w-full md:w-96  p-2  text-lg outline-none  border-2 border-slate-400 rounded-lg  hover:border-green-500"
					/>
				</div>
				<div className="mx-auto w-full md:w-96 my-2  h-auto flex flex-col ">
					<p className="text-base pb-1 font-roboto">Price</p>

					<input
						type="number"
						name="Price"
						maxLength={8}
						id=""
						placeholder="Price"
						onChange={(e) => setUploadData((prev) => ({ ...prev, price: e.target.value }))}
						className="mx-auto w-full md:w-96  p-2  outline-none  border-2 border-slate-400 rounded-lg  hover:border-green-500"
					/>
				</div>

				<div className="mx-auto w-full md:w-96 my-2  h-auto flex flex-col ">
					<input
						type="button"
						id=""
						className="mx-auto w-full md:w-96  p-2 text-white text-xl outline-none  border-2 bg-tabGreen border-slate-100 rounded-lg  hover:bg-green-700"
						value={"Upload"}
						onClick={() => setConfirm(true)}
					/>
				</div>
			</>
			{confirm && (
				<div className="mx-auto fixed top-32 left-0 md:left-56 pt-20 right-0 md:right-5 bottom-48 w-11/12 md:w-4/6  h-full  bg-white flex flex-col border-2 rounded-xl shadow-xl items-center ">
					<MdClose
						size={30}
						className="absolute top-2 right-2 text-slate-700"
						onClick={() => setConfirm(false)}
					/>
					<h3 className="mx-auto py-3 font-bold font-courgette text-md text-green-900">Preview</h3>
					<div className="mx-auto my-5  h-auto w-52 md:h-auto  md:w-80 mt-2 border-5 bg-white flex flex-col rounded-sm shadow-md hover:shadow-lg ">
						<img
							src={productImage}
							alt=""
							className="w-full h-48 md:h-48 mx-auto object-cover items-center rounded-sm"
						/>

						<p className="w-full px-auto my-1 md:mt-5 truncate text-lg font-roboto font-bold md:text-xl  text-slate-700 text-center  ">
							{uploadData.name}
						</p>
						<p className="w-full pl-1 my-5 md:mt-5 truncate text-md md:text-xl    font-nunito   text-slate-900 text-center  ">
							{uploadData.detail}
						</p>
						<h4 className="  w-11/12 py-1 my-1 mx-auto bg-slate-800 text-xl text-white text-center rounded-sm hover:bg-slate-700 cursor-pointer">
							{uploadData.price}
						</h4>
					</div>

					<div className="mx-auto w-full my-2  h-auto flex flex-col items-center ">
						<p className="mx-auto w-11/12 md:w-96 p-2 text-white text-xl text-center outline-none  border-2 bg-tabGreen border-slate-100 rounded-md  hover:bg-green-700 cursor-pointer">
							Confirm
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default UploadProduct;
