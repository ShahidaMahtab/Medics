import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

const Dashboard = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<div className='grid grid-cols-12 md:h-screen'>
			{/* mobile sidebar */}
			<div
				className={`absolute  ${
					isDrawerOpen ? 'left-0 top-0' : '-left-full top-0'
				} transition-all duration-500 md:hidden`}
			>
				<DashboardSidebar setIsDrawerOpen={setIsDrawerOpen} />
			</div>
			{/* desktop sidebar */}
			<div
				className={`hidden md:block md:col-span-3 xl:col-span-2 transition-all duration-500`}
			>
				<DashboardSidebar setIsDrawerOpen={setIsDrawerOpen} />
			</div>
			<div className='col-span-12 md:col-span-9 xl:col-span-10 px-4 space-y-4 overflow-y-auto'>
				<DashboardHeader
					isDrawerOpen={isDrawerOpen}
					setIsDrawerOpen={setIsDrawerOpen}
				/>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Dashboard;
