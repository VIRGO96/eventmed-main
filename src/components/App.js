import '../css/App.css';
import React, { useEffect, useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from '../context/UserAuthContext';
import { useUserAuth } from '../context/UserAuthContext';

// Import the developed components
import Evenimed from './Evenimed';
import Login from './Login';
import Signup from './Signup';
import ResetPassword from './ResetPassword';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AboutUs from './AboutUs';
import EventCreationForm from './EventCreationForm';
import Search from './Search';
import PrivacyPolicy from './PrivacyPolicy';
import ContactUs from './ContactUs';
import UnProtect from './UnProtect';

function App() {
	// let user = localStorage.getItem("auth");
	// const [myuser, setUser] = useState(null);
	// const { user } = useUserAuth();
	// console.log(abc);
	// console.log("user", user);
	// setUser(user)
	// let myInterval = null;
	// useEffect(() => {
	//   myInterval = setInterval(() => {
	//   console.log("running");
	//   user = localStorage.getItem("auth");
	//   console.log(user);
	//   }, 1000);
	//   return () => {
	//     console.log("cleanup running");
	//     clearInterval(myInterval);
	//   };
	// }, [myuser]);

	const user = () => {
		return localStorage.getItem('auth');
	};

	return (
		<div className='App'>
			<Container fluid className='p-0'>
				<Row>
					<Col>
						<UserAuthContextProvider>
							<Routes>
								<Route path='/' element={<Evenimed />} />
								<Route path='/about_us' element={<AboutUs />} />
								<Route
									path='/login'
									element={
										<UnProtect auth={user()}>
											<Login />
										</UnProtect>
									}
								/>
								<Route
									path='/signup'
									element={
										<UnProtect auth={user()}>
											<Signup />
										</UnProtect>
									}
								/>
								<Route
									path='/reset_password'
									element={
										<UnProtect auth={user()}>
											<ResetPassword />
										</UnProtect>
									}
								/>
								<Route
									path='/privacy_policy'
									element={<PrivacyPolicy />}
								/>
								<Route
									path='/contact_us'
									element={<ContactUs />}
								/>
								<Route
									path='/home'
									element={
										<ProtectedRoute auth={user()}>
											{' '}
											<Home />{' '}
										</ProtectedRoute>
									}
								/>

								<Route
									path='/event_creation_form'
									element={
										<ProtectedRoute auth={user()}>
											<EventCreationForm />
										</ProtectedRoute>
									}
								/>
								<Route
									path='/search'
									element={
										<ProtectedRoute auth={user()}>
											<Search />
										</ProtectedRoute>
									}
								/>
							</Routes>
						</UserAuthContextProvider>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
