import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect} from 'react';
import Product from '../Product/Product';

const Ourproduct = ({products, setProducts}) => {

   

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <>
            <Typography style={{textAlign: 'center', fontWeight: 700}} variant="h4" sx={{mb: 4}}>Our Products</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12, lg:12 }}>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Grid>
            </Box>
        </>
    );
};

export default Ourproduct;





