import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState} from 'react';
import Product from '../Product/Product';
const Allproducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, [])

    return (
        <div className=" 2xl:container 2xl:mx-auto">
            <div style={{textAlign: 'center'}} className=" py-6 lg:px-20 md:px-6 px-4">
            <Typography style={{ fontWeight: 700}} variant="h4" sx={{mb: 4}}>All Products</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Grid>
            </Box>
            </div>
        </div>
    );
};

export default Allproducts;