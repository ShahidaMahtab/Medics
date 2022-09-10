import { Routes, Route } from 'react-router-dom';
import About from './Pages/AboutPage/About/About';
import AddDoctors from './Pages/DashboardComponents/Admin/AddDoctors/AddDoctors';
import MakeAdmin from './Pages/DashboardComponents/Admin/MakeAdmin/MakeAdmin';
import ManageAppointments from './Pages/DashboardComponents/Admin/ManageAppoinments/ManageAppointments';
import Dashboard from './Pages/DashboardComponents/Dashboard/Dashboard';
import GiveReview from './Pages/DashboardComponents/User/GiveReview/GiveReview';
import MyAppointments from './Pages/DashboardComponents/User/MyAppointments/MyAppointments';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/LoginPages/Login/Login';
import Register from './Pages/LoginPages/Register/Register';
import RequireAuth from './Pages/LoginPages/RequireAuth/RequireAuth';
import MakeAppoinment from './Pages/MakeAppoinment/MakeAppoinment';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/ServicesPage/Services/Services';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />

				<Route
					path='/services'
					element={
						<RequireAuth>
							<Services />
						</RequireAuth>
					}
				/>

				<Route
					path='dashboard'
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				>
					<Route index element={<MyAppointments />} />
					<Route path='reviews' element={<GiveReview />} />
					<Route path='addDoctor' element={<AddDoctors />} />
					<Route
						path='manageAppointments'
						element={<ManageAppointments />}
					/>
					<Route path='makeAdmin' element={<MakeAdmin />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/makeappoinment' element={<MakeAppoinment />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
