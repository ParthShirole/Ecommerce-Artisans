import '../styles/home.css'
import {Link} from 'react-router-dom';


import { Carousel } from 'react-bootstrap';
const Home = () => {
    return (
        <>
            
            <h1 className="heading">Artisan's Hub</h1>
            <img className="logo" src="https://i.pinimg.com/280x280_RS/c4/b0/58/c4b05809d383fa7ec16016077b760066.jpg"></img>
            <div className="co">
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-12">
                            <Carousel>
                                <Carousel.Item>
                                    <div className="restrict-width">
                                        <img 
                                            className="d-block w-100 carousel-images"
                                            src="https://media.king5.com/assets/KING/images/67ad288d-b610-4ba8-ad1f-a21f412cfb98/67ad288d-b610-4ba8-ad1f-a21f412cfb98_1920x1080.jpg"
                                            alt="First slide"
                                        />
                                    </div>
                                    <Carousel.Caption>
                                        <h5 className="name">Pottery Handicraft</h5>
                                        <p className="desc">Designer Crockery made by Potters</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="restrict-width">
                                        <img
                                            className="d-block w-100 carousel-images"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnav6J4CZhQxmpgAhVVD0P1vXPay9qrIu0kg&usqp=CAU"
                                            alt="Second slide"
                                        />
                                    </div>

                                    <Carousel.Caption>
                                        <h5 className="name">Sheets</h5>
                                        <p className="desc">Warm and comfortable sheets from Kashmir </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="restrict-width">
                                        <img
                                            className="d-block w-100 carousel-images"
                                            src="https://tiimg.tistatic.com/fp/1/007/272/plain-pattern-jute-carry-bags-767.jpg"
                                            alt="Third slide"
                                        />
                                    </div>

                                    <Carousel.Caption>
                                        <h5 className="name">Jute Handicraft</h5>
                                        <p className="desc">Beautifully woven Jute bags</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <select className="login">
            <option>Login</option>
            <option value={`/login/buyer`}>Buyer</option>
            <option value={`/login/seller`}>Seller</option>
            </select> */}
            {/* <div className="login">
            <label for="interest">Log In</label>
            <select name="interest" id="interest">Buyer</select>
            </div> */}

            {/* <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
            </div> */}
            
            <Link to={`/login/buyer`}><button className="login-buyer">Buyer Log In</button></Link>
            <Link to={`/login/seller`}><button className="login-seller">Seller Log In</button></Link>
            <Link to={`/register/buyer`}><button className="register-buyer">Buyer Sign Up</button></Link>
            <Link to={`/register/seller`}><button className="register-seller">Seller Sign Up</button></Link>
            
            
        </>
    )
}

export default Home;