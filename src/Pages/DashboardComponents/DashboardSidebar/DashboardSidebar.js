import React from 'react';
import { Link } from 'react-router-dom';

import { BsBagCheckFill } from 'react-icons/bs';
import {
	MdRateReview,
	MdAdminPanelSettings,
	MdLibraryAdd,
	MdLogout,
} from 'react-icons/md';
import { FaUsersCog, FaHome } from 'react-icons/fa';

const DashboardSidebar = ({ setIsDrawerOpen }) => {
	const userLinks = [
		{ icon: <FaHome />, to: '/home', text: 'Home' },

		{
			icon: <BsBagCheckFill />,
			to: '/dashboard',
			text: 'My Appointments',
		},
		{ icon: <MdRateReview />, to: `/dashboard/reviews`, text: 'Review' },
	];

	const adminLinks = [
		{ icon: <FaHome />, to: '/home', text: 'Home' },
		{
			icon: <FaUsersCog />,
			to: `/dashboard/manageAppointments`,
			text: 'Manage Appointments',
		},
		{
			icon: <MdAdminPanelSettings />,
			to: `/dashboard/makeAdmin`,
			text: 'Make Admin',
		},
		{
			icon: <MdLibraryAdd />,
			to: `/dashboard/addDoctor`,
			text: 'Add Doctors',
		},
	];

	return (
		<div
			className='h-screen w-28 md:w-full flex flex-col justify-between items-center px-4 space-y-4'
			style={{ zIndex: '9999' }}
		>
			<div className=''>
				<div className='py-4 mb-10'>
					<h1 className='hidden md:block text-2xl'>Medics</h1>
					<button
						className='md:hidden'
						onClick={() => setIsDrawerOpen(false)}
					>
						Close
					</button>
				</div>
				<div
					onClick={() => setIsDrawerOpen(false)}
					className='flex flex-col space-y-2'
				>
					{/* user links */}
					{userLinks.map(({ icon, to, text }, index) => (
						<Link
							className='md:space-x-2 flex flex-col md:flex-row items-center text-gray-500 border border-white hover:bg-red-100 hover:text-brand transition duration-300 rounded-lg p-1 md:px-4 md:py-2'
							key={index}
							to={to}
						>
							<span className='text-xl'>{icon}</span>
							<span className='text-xs text-center md:text-base md:text-left'>
								{text}
							</span>
						</Link>
					))}
					{/* admin links */}
					{adminLinks.map(({ icon, to, text }, index) => (
						<Link
							className='md:space-x-2 flex flex-col md:flex-row items-center text-gray-500 border border-white hover:bg-red-100 hover:text-brand transition duration-300 rounded-lg p-1 md:px-4 md:py-2'
							key={index}
							to={to}
						>
							<span className='text-xl'>{icon}</span>
							<span className='text-xs text-center md:text-base md:text-left'>
								{text}
							</span>
						</Link>
					))}
				</div>
			</div>
			<div
				onClick={() => setIsDrawerOpen(false)}
				className='pb-10 w-full'
			>
				<button className='md:space-x-2 flex flex-col md:flex-row justify-center items-center text-gray-500 border border-white hover:bg-red-100 hover:text-brand transition duration-300 rounded-lg p-1 md:px-4 md:py-2'>
					<span className='text-xl'>
						<MdLogout />
					</span>
					<span className='text-xs text-center md:text-base md:text-left'>
						Log Out
					</span>
				</button>
			</div>
		</div>
	);
};

export default DashboardSidebar;
