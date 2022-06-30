import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Search from './Search';

function Evenimed() {
	return (
		<>
			{/* Header */}
			<NavigationBar />
			{/* Body */}
			<div className='evenimed-body mt-3 mb-3'>
				<Search />
			</div>
			{/* Footer */}
			<Footer />
		</>
	);
}

export default Evenimed;
