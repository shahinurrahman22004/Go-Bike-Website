import React, {useState} from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import Ourproduct from '../Ourproduct/Ourproduct';
import Partner from '../Partner/Partner';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    const [products, setProducts] = useState([]);
    return (
        <div>
           <Header></Header> 
            <Banner></Banner>
            <Ourproduct products={products} setProducts={setProducts}></Ourproduct>
            <Testimonials></Testimonials>
            <Partner></Partner>
           <Footer></Footer>
        </div>
    );
};

export default Home;