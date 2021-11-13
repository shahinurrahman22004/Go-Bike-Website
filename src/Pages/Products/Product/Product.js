import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, text, price} = props.product;
    return (
        <Grid container item xs={12} sm={6} md={4}>
            <Card style={{margin: 'auto'}} sx={{ maxWidth: 345 }}>
                <img src={img} alt="" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {price} $
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link style={{margin: 'auto'}} to="/checkout">
                    <button type="submit" style={{width: '300px', marginBottom: '20px'}} className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm">
                            Buy Now
                        </button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
        
        
    );
};

export default Product;