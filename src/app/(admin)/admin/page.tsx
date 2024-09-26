export default function Home() {
  return (
    <>
      <div className="max-auto">
        <div className="bg-sky-700 p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* First sub-div */}
            <div className=" place-items-center justify-between p-10  flex flex-col items-center">
              {/* <h3 className="text-xl font-semibold mb-4">First Sub-Div</h3> */}

              <div className="flex flex-col items-center space-y-4">
                <div className="border-2 rounded-lg border-gray-700">
                  <img
                    src="https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png"
                    alt="Dummy Image"
                    className="w-40 h-40 rounded-lg"
                  />
                </div>

                <div className="border-2 rounded-lg border-gray-700">
                  <img
                    src="https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png"
                    alt="Dummy Image"
                    className="w-40 h-40 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Second sub-div (spanning 2 columns) */}
            <div className=" text-white p-16  md:col-span-2">
              <h3 className="text-3xl font-semibold mb-4">
                Find the Right Services,
              </h3>
              <h3 className="text-3xl font-semibold mb-4">Right Away</h3>
              {/* <p className="mb-4">
                This is the content of the second sub-div, which spans 2
                columns.
              </p> */}

              {/* Search bar */}
              <div className=" mt-10 relative">
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="absolute right-2 top-2 bg-gradient-to-r from-sky-950 px-8  via-sky-700 via-30% to-sky-600 to-70%
    bg-blend-multiply text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Third sub-div */}
            <div className=" place-items-center justify-between p-10  flex flex-col items-center">
              {/* <h3 className="text-xl font-semibold mb-4">First Sub-Div</h3> */}

              <div className="flex flex-col items-center space-y-4">
                <div className="border-2 rounded-lg border-gray-700">
                  <img
                    src="https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png"
                    alt="Dummy Image"
                    className="w-40 h-40 rounded-lg"
                  />
                </div>

                <div className="border-2 rounded-lg border-gray-700">
                  <img
                    src="https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png"
                    alt="Dummy Image"
                    className="w-40 h-40 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 bg-gray-100">
          <div>
            <h2 className="text-3xl"> Popular Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-4 ">
            {/* Card 1 */}
            <div className="bg-sky-700 p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-white text-xl font-semibold mb-4 text-center">
                AI Services
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className=" border-2 mt-8 rounded-lg border-gray-700">
                <img
                  src="/images/AI.jpg"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-sky-700 p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-white text-xl font-semibold mb-4 text-center">
                NFT and Smart Contracts
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className="  border-2 mt-2 rounded-lg border-gray-700">
                <img
                  src="/images/nft.jpg"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-sky-700 p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-white  text-xl font-semibold mb-4 text-center">
                {" "}
                Web Development
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className="border-2 mt-2 rounded-lg border-gray-700">
                <img
                  src="/images/web.jpg"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-sky-700 p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-white text-xl font-semibold mb-4 text-center">
                Blockchain Services
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className=" border-2 mt-2 rounded-lg border-gray-700">
                <img
                  src="/images/bit.jpg"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-sky-700  p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-xl text-white font-semibold mb-4 text-center">
                Cybersecurity
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className=" border-2 mt-8 rounded-lg border-gray-700">
                <img
                  src="/images/hacker.png"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-sky-700 p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-white text-center">
                Programming & Tech
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className="bg-white border-2 rounded-lg border-gray-700">
                <img
                  src="https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
