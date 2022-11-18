import React, { useState } from 'react';
import {
  RiHome3Line,
  RiProjectorLine,
  RiWallet2Line,
  RiDonutChartLine,
  RiMore2Fill,
  RiCloseFill,
} from 'react-icons/ri';

const Sidebar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <aside
        className={`bg-indigo-900 h-full fixed lg:static w-4/6 md:w-2/6 lg:w-full top-0 transition-all duration-300 z-20 ${
          nav ? 'left-0' : '-left-full'
        }`}
      >
        {/* Top Side */}
        <div className="p-8 gap-2 flex flex-col items-center justify-center h-[30vh]">
          <img
            className="rounded-full w-20 h-20 object-cover ring-2 ring-gray-300 "
            src="https://img.freepik.com/premium-photo/3d-character-male-cartoon-with-eye-glasses-yellow-orange-polo-shirt-good-profile-picture_477250-8.jpg?w=740"
            alt="user"
          />
          <h1 className="text-xl text-white font-bold">Jorge Luis Trejo</h1>
          <p className="bg-indigo-600 py-1 px-3 rounded-full text-white">Pro Level</p>
        </div>
        {/* Bottom Side */}
        <div className="px-4 py-6 bg-indigo-600 rounded-tr-[3rem] flex flex-col justify-between h-[70vh]">
          <nav className="flex flex-col gap-4">
            <a
              className="flex items-center gap-2 text-white hover:bg-indigo-900/70 py-2 px-4 rounded-xl transition-colors"
              href="#"
            >
              <RiHome3Line /> Home
            </a>
            <a
              className="flex items-center gap-2 text-white hover:bg-indigo-900/70 py-2 px-4 rounded-xl transition-colors"
              href="#"
            >
              <RiProjectorLine /> Projects
            </a>
            <a
              className="flex items-center gap-2 text-white hover:bg-indigo-900/70 py-2 px-4 rounded-xl transition-colors"
              href="#"
            >
              <RiWallet2Line /> Invoices
            </a>
            <a
              className="flex items-center gap-2 text-white hover:bg-indigo-900/70 py-2 px-4 rounded-xl transition-colors"
              href="#"
            >
              <RiDonutChartLine /> Reports
            </a>
          </nav>
          <div className="p-4 rounded-xl bg-indigo-900/70">
            <p className="text-gray-400">Having troubles?</p>
            <a className="text-white" href="#">
              Contact us
            </a>
          </div>
        </div>
      </aside>
      <button
        onClick={() => setNav(!nav)}
        className=" z-20 fixed lg:hidden right-4 bottom-4 text-2xl bg-indigo-900 hover:bg-indigo-900/90 transition-colors rounded-full text-white p-2"
      >
        {nav ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;
