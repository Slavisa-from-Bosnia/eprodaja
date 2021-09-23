import React from 'react'
import {useRouter} from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import Image from 'next/image';
import {Link, Grid, List, ListItem, Typography, Card } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import useStyles from '../../utils/styles';

export default function ProductScreen() {
    const classes = useStyles();
    const router = useRouter();
    const {slug} = router.query;
    const product = data.products.find((a)=>a.slug===slug);
    if (!product) {
        return<div>Product Not Found</div>
    }
    return (
        <Layout title={product.name}>
            <div className={classes.section}> 
                <NextLink href="/" passHref>
                    <Link>
                        <Typography>back to product</Typography>
                    </Link>
                </NextLink>
            </div>
            <Grid container spacing={1}> 
                <Grid item md={6} xs={12}>
                    <Image
                        src={product.image} 
                        alt={product.name} 
                        width={640}
                        height={640}
                        layout="responsive" 
                    >
                    </Image> 
                </Grid > 
                <Grid item md={3} xs={12}> 
                    <List>
                        <ListItem>
                            <Typography>Category: {product.category}</Typography> 
                        </ListItem> 
                        <ListItem>
                            <Typography>Brand: {product.brand}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Rating: {product.raiting}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Description: {product.description}</Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item md={3} xs={12}> 
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item>
                                        <Typography>Price</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>${product.price}</Typography>
                                    </Grid>
                                        
                                </Grid>

                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>

        </Layout>
    ) 
}
