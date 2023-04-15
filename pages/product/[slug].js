import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Link,
  List,
  ListItem,
  Rating,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import classes from '../../utils/classes';
import client from '../../utils/client';
import { urlFor } from '../../utils/image';
import { urlForThumbnail } from '../../utils/image';

export default function ProductScreen(props) {
  const { slug } = props;
  const [state, setState] = useState({
    product: null,
    loading: true,
    error: '',
  });
  const { product, loading, error } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch(
          `
            *[_type == "product" && slug.current == $slug][0]`,
          { slug }
        );
        setState({ ...state, product, loading: false });
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
  }, []);

  return (
    <Layout title={product?.title}>

      <div class="container">
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <span class="badge rounded-pill bg-light text-dark m-1">Market</span>
            <span class="badge rounded-pill bg-light text-dark m-1">Asia</span>
            <span class="badge rounded-pill bg-light text-dark m-1">Europe</span>
            <span class="badge rounded-pill bg-secondary text-dark m-1">US</span>
        </div>
      </div>
    </div>
  </nav>

<nav  aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Comp tools</li>
      
      <li class="breadcrumb-item active" aria-current="page">Job Profile</li>
    </ol>
  </nav>


  <nav class="navbar bg-light">
    <div class="container-fluid">
      <a class="navbar-brand text-dark">Graphic Design Specialist 1</a>
      <form class="d-flex" role="search">
        
        <button class="btn btn-outline-success m-2" type="submit">Follow</button>
        
        <button class="btn btn-outline-success m-2" type="submit">Search</button>
      </form>
    </div>
  </nav>


  <div class="row">
    <div class="col-md-6  mt-3 ">

      <div class="row">
        <div class="card rounded " >
          <div class="card-body">
            <h5 class="card-title">Graphic Design Specialist 1</h5>
            <h6 class="card-subtitle mb-2 text-muted">Brief</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <span class="card-link p-3">Example People</span>
            <span  class="card-link p-4">profiles</span> <br/>
            <span class="card-link p-3">Example job post</span>
            <span href="#" class=" p-3">  Job Posts</span>
          </div>
          
        </div>
      </div>

      <div class="row">
        <div class="card rounded p-2 m-2" >
          <div class="card-body">
            <h5 class="card-title">Capabilities</h5>
            <nav class="navbar navbar-expand-lg navbar-light ">
              <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                      <span class="badge rounded-pill bg-light text-dark m-1">Graphic Design</span>
                      <span class="badge rounded-pill bg-light text-dark m-1">Graphic Design software</span>
                      <span class="badge rounded-pill bg-light text-dark m-1">Graphic art </span>
                     
                  </div>
                </div>
              </div>
            </nav>
          </div>
          
        </div>
      </div>
      
      
     
    
   
     

     
    </div>

    <div class="col-md-5 m-2 ">
 <div class="row  border border-1 rounded pt-2 mt-2">
  <table class="table ">
    <thead>
      <tr>
       
        <th scope="col">compensation</th>
        <th scope="col"></th>
      </tr>
      
    </thead>
    
    <tbody>
      <tr>
        <th scope="row">united states</th>
        <td>USD</td>
       
      </tr>

      <tr>
        <td scope="row">Total medium target cash</td>
        <td>$75k</td>
       
      </tr>
      <tr>
        <td scope="row">Total medium target cash</td>
        <td>$75k</td>
       
      </tr>

      <tr>
        <td scope="row">Total medium target cash</td>
        <td>$75k</td>
       
      </tr>

      <tr>
        <td scope="row">Total medium target cash</td>
        <td>$75k</td>
       
      </tr>


     
     
    </tbody>
  </table>
 </div>
 <div class="row  border border-1 rounded pt-2 mt-2">
  <table class="table ">
    <thead>
      <tr>
       
        <th scope="col">compensation</th>
        <th scope="col"></th>
      </tr>
      
    </thead>
    
    <tbody>
      <tr>
        <th scope="row">united states</th>
        <td>USD</td>
       
      </tr>

      <tr>
        <td scope="row">Total medium target cash</td>
        <td>$75k</td>
       
      </tr>
      <tr>
        <td scope="row">Total medium target cash</td>
        <td>$75k</td>
       
      </tr>

      <tr>
        <td scope="row">Total medium target cash</td>
        <td>$75k</td>
       
      </tr>

      <tr>
        <td scope="row">Total medium target cash</td>
        <td>$75k</td>
       
      </tr>


     
     
    </tbody>
  </table>
 </div>
      
    </div>

    
  </div>

</div>
      
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <Box>
          <Box sx={classes.section}>
            <NextLink href="/" passHref>
              <Link>
                <Typography>back to result</Typography>
              </Link>
            </NextLink>
          </Box>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <Image
                src={urlForThumbnail(product.image)}
                alt={product.name}
                layout="responsive"
                width={640}
                height={640}
              />
            </Grid>
            <Grid md={3} xs={12}>
              <List>
                <ListItem>
                  <Typography component="h1" variant="h1">
                    {product.name}
                  </Typography>
                </ListItem>
                <ListItem>Category: {product.category}</ListItem>
                <ListItem>Brand: {product.brand}</ListItem>
                <ListItem>
                  <Rating value={product.rating} readOnly></Rating>
                  {/* <Typography sx={classes.smallText}>
                    ({product.numReviews} reviews)
                  </Typography> */}
                </ListItem>
                <ListItem>
                  <Typography>Description: {product.description}</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} xs={12}>
              {/* <Card>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>Price</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>${product.price}</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography>Status</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>
                          {product.countInStock > 0
                            ? 'In stock'
                            : 'Unavailable'}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Button fullWidth variant="contained">
                      Add to cart
                    </Button>
                  </ListItem>
                </List>
              </Card> */}
            </Grid>
          </Grid>
        </Box>
      )}



    </Layout>

    
  );
}

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}
