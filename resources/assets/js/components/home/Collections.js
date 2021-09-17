import React from 'react';

const Collections = () => (
	<div className="section">
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-xs-6">
					<div className="shop">
						<div className="shop-img">
							<img src={"./img/shop01.jpg"} height="300" alt="" />
						</div>
						<div className="shop-body">
							<h3>Car<br />Collection</h3>
							<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-xs-6">
					<div className="shop">
						<div className="shop-img">
							<img src={"./img/shop03.jpg"} height="300" alt="" />
						</div>
						<div className="shop-body">
							<h3>Accessories<br />Collection</h3>
							<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-xs-6">
					<div className="shop">
						<div className="shop-img">
							<img src={"./img/shop02.jpg"} height="300" alt="" />
						</div>
						<div className="shop-body">
							<h3>Cameras<br />Collection</h3>
							<a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Collections