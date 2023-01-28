const ClientTemplates = () => {
  const websiteTemplates = [
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669294540/WBSITE%20SALES/ew_whxyul.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
    "https://res.cloudinary.com/promotion-army/image/upload/v1669290311/WBSITE%20SALES/webpage_f3gfdg.png",
  ];

  return (
    <>
      <div className="w-full h-screen mx-1 py-0 flex flex-col bg-white overflow-y-scroll">
        <h1 className="mx-10 mt-4  text-5xl text-blue-700 font-courgette">Templates</h1>

        <div className="w-full h-auto bg-white">
          <div className="w-full my-0 h-auto p-5 md:p-5 flex flex-row flex-wrap">
            <div className="w-36  h-24 mx-auto my-3 p-5 transition-colors bg-blue-600 bg-gradient-to-bl from-indigo-300 hover:bg-indigo-300 hover:from-blue-600 rounded  shadow-lg hover:shadow-xl  flex items-center ">
              <p className="m-auto text-xl text-white text-center font-courgette">Sales</p>
            </div>

            <div className="w-36  h-24 mx-auto  my-3  p-5 bg-pink-500 bg-gradient-to-bl from-pink-200  hover:bg-pink-300  hover:from-pink-500 rounded  shadow-lg hover:shadow-xl flex items-center ">
              <p className="m-auto text-xl text-white text-center font-courgette">fashon</p>
            </div>

            <div className="w-36  h-24 mx-auto my-3  p-5 bg-green-500 bg-gradient-to-bl from-green-200  hover:bg-green-200  hover:from-green-500 rounded   shadow-lg hover:shadow-xl flex items-center ">
              <p className="m-auto text-xl text-white text-center font-courgette">Company</p>
            </div>

            <div className="w-36  h-24 mx-auto my-3  p-5 bg-yellow-500 bg-gradient-to-bl from-yellow-200   hover:bg-yellow-200   hover:from-yellow-500 rounded  shadow-lg hover:shadow-xl  flex items-center ">
              <p className="m-auto text-xl text-white text-center font-courgette">Services</p>
            </div>

            <div className="w-36  h-24 mx-auto my-3  p-5 bg-red-500 bg-gradient-to-bl from-red-300  hover:bg-red-300  hover:from-red-500 rounded  shadow-lg hover:shadow-xl flex items-center ">
              <p className="m-auto text-xl text-white text-center font-courgette">Personal</p>
            </div>

            <div className="w-36  h-24 mx-auto my-3  p-5 bg-purple-700 bg-gradient-to-bl from-purple-200 rounded  shadow-lg hover:shadow-xl  flex items-center ">
              <h3 className="m-auto text-lg text-white text-center font-courgette">
                Organisation
              </h3>
            </div>
          </div>

          <div className="mx-auto h-auto py-3 px-8 md:px-24 md:w-10/12  flex flex-row items-center">
            <input
              type="text"
              placeholder="Search template.."
              className="mx-0 h-auto w-10/12 px-4 py-1 rounded outline-violet-400 border-2 border-slate-2s00"
            />
            <button className="mx-0 h-auto px-4 py-1.5   text-white  text-base font-nunito  rounded-sm bg-sky-400 hover:bg-purple-600 bg-gradient-to-r from-purple-600 hover:from-sky-400 transition-colors shadow-md">
              Search
            </button>
          </div>
        </div>

        <div className="my-2 p-5 w-full h-auto flex flex-row flex-wrap ">
          {websiteTemplates.map((img, i) => (
            <div className=" m-5 mx-auto w-auto h-auto  " key={i}>
              <img
                src={img}
                alt=""
                className="m-0 p-0 w-42 h-auto md:w-72  object-cover rounded-sm  shadow  hover:shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="my-2 mx-auto p-3 w-10/12 md:w-3/5 h-auto flex flex-row self-center">
          <a
            href="#"
            className="py-3 px-5 mx-auto text-base   text-center text-blue-600 rounded shadow  hover:shadow-lg"
          >
            Prev
          </a>
          <h2 className="px-5 py-3 mx-auto text-base text-slate-600 rounded shadow">
            page...1
          </h2>
          <a
            href="#"
            className="py-3 px-5 mx-auto text-base   text-center text-blue-600 rounded shadow  hover:shadow-lg"
          >
            Next
          </a>
        </div>
        {/* 
      <CustomerequestCard />

      <Footer /> */}
      </div>
    </>
  );
};

export default ClientTemplates;
