import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { RiLineChartLine, RiMoneyPoundCircleLine } from 'react-icons/ri';

function App() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 overflow-y-scroll h-screen">
        <Header />
        {/* Section-1 */}
        <section className="grid md:grid-cols-2 xl:grid-cols-4 mt-10 gap-4">
          {/* Card-1 */}
          <div className="bg-indigo-600 p-8 rounded-xl text-gray-300 flex flex-col gap-4 justify-between drop-shadow-xl">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl">Earnings</h4>
            <div className="flex items-center gap-1 text-4xl text-white">
              <RiMoneyPoundCircleLine /> 8,350
            </div>
            <span className="py-1 px-3 bg-indigo-900 rounded-full">+ 10% since last month</span>
          </div>
          {/* Card-2 */}
          <div className="bg-white rounded-xl p-4 flex flex-col gap-4 justify-between drop-shadow-xl">
            <div className="p-4 flex items-center gap-4 bg-indigo-100 rounded-xl">
              <span className="p-4 bg-indigo-900 text-white rounded-xl text-2xl">98</span>
              <div>
                <p className="font-bold">Rank</p>
                <p className="text-gray-500">In top 30%</p>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-4 bg-indigo-100 rounded-xl">
              <div className="flex items-center gap-4">
                <span className="p-4 bg-indigo-900 text-white rounded-xl text-2xl">32</span>
                <div>
                  <p className="font-bold">Rank</p>
                  <p className="text-gray-500">In top 30%</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="py-1 px-3 bg-indigo-300 rounded-full">Mobile app</span>
                <span className="py-1 px-3 bg-indigo-300 rounded-full">Branding</span>
              </div>
            </div>
          </div>
          {/* Card-3 */}
          <div className="rounded-xl md:col-span-2 flex flex-col justify-between gap-4 drop-shadow-xl">
            <h2 className="text-2xl font-bold">Your projects</h2>
            <div className="bg-white rounded-xl p-8 flex flex-col justify-between gap-8">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556784.jpg?w=900&t=st=1668592966~exp=1668593566~hmac=f79fe387458c1dd5e8318877c3ece360369fa45a27af732ec73ac3242c1213d4"
                  alt="avatar"
                />
                <div>
                  <p className="font-bold">Logo design for Bakery</p>
                  <p className="text-gray-500">1 day remaining</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 object-cover rounded-full"
                  src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556784.jpg?w=900&t=st=1668592966~exp=1668593566~hmac=f79fe387458c1dd5e8318877c3ece360369fa45a27af732ec73ac3242c1213d4"
                  alt="avatar"
                />
                <div>
                  <p className="font-bold">Logo design for Bakery</p>
                  <p className="text-gray-500">1 day remaining</p>
                </div>
              </div>
              <button className="flex justify-end">See all projects</button>
            </div>
          </div>
        </section>
        {/* Section-2 */}
        <section className="grid xl:grid-cols-2 mt-10 gap-4">
          {/* Card-1 */}
          <div className="gap-4 flex flex-col drop-shadow-xl">
            <h2 className="text-2xl font-bold">Recent invoices</h2>
            <div className="p-8 bg-white flex flex-col gap-8 justify-between rounded-xl">
              {/* Invoice-1 */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-4 w-full">
                  <img
                    className="w-12 h-12 object-cover rounded-lg"
                    src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556784.jpg?w=900&t=st=1668592966~exp=1668593566~hmac=f79fe387458c1dd5e8318877c3ece360369fa45a27af732ec73ac3242c1213d4"
                    alt="avatar"
                  />
                  <div>
                    <p className="font-bold">Alexander Williams</p>
                    <p className="text-gray-500">JQ Holdings</p>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <span className="py-1 px-5 bg-green-200 text-green-900 rounded-full">Paid</span>
                  <span className="font-bold flex items-center gap-1">
                    <RiMoneyPoundCircleLine />
                    1200,87
                  </span>
                </div>
              </div>
              {/* Invoice-2 */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-4 w-full">
                  <img
                    className="w-12 h-12 object-cover rounded-lg"
                    src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556784.jpg?w=900&t=st=1668592966~exp=1668593566~hmac=f79fe387458c1dd5e8318877c3ece360369fa45a27af732ec73ac3242c1213d4"
                    alt="avatar"
                  />
                  <div>
                    <p className="font-bold">Alexander Williams</p>
                    <p className="text-gray-500">JQ Holdings</p>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <span className="py-1 px-5 bg-red-200 text-red-900 rounded-full">Late</span>
                  <span className="font-bold flex items-center gap-1">
                    <RiMoneyPoundCircleLine />
                    1200,87
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Card-2 */}
          <div className="gap-4 flex flex-col drop-shadow-xl">
            <h2 className="text-2xl font-bold">Recommended project</h2>
            <div className="p-8 bg-white flex flex-col gap-8 justify-between rounded-xl">
              <div className='flex items-center'>
                <div className="flex items-center gap-4 w-full">
                  <img
                    className="w-12 h-12 object-cover rounded-full"
                    src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556784.jpg?w=900&t=st=1668592966~exp=1668593566~hmac=f79fe387458c1dd5e8318877c3ece360369fa45a27af732ec73ac3242c1213d4"
                    alt="avatar"
                  />
                  <div>
                    <p className="font-bold">Thomas Martin</p>
                    <p className="text-gray-500">Updated 10m ago</p>
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  <span className="py-1 px-5 bg-indigo-900 text-white rounded-full">Design</span>
                </div>
              </div>
              <div>
                <h3 className='font-bold text-md'>Need a designer to form branding essentials for my business</h3>
                <p className='text-gray-500'>Looking for a talented brand designer to create all the branding materials my new startup</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
