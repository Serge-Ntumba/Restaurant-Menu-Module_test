import React from 'react';
import Data from "../data.json";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    marginLeft: "10%",
    marginRight: "10%",
    
    backgroundColor: theme.palette.background.paper,
  },
  section: {
    margin: theme.spacing(0.1, 1),
  },
  
}));


const  { products } = Data;



export default function PostData() {

  const classes = useStyles();


return (
  <div>
   {Object.keys(products).map(function(key, i) {
       return (
           <div className={classes.root}>
                 <div  className={classes.section} key={i}>
              
                     <Grid container alignItems="center">
                       <Grid item xs>
                          <Typography gutterBottom variant="h5" component="h2">
                             {products[key].name }
                          </Typography>
                        </Grid>
                     <Grid item>
                     <Typography gutterBottom variant="h6">
                              ${products[key].price }
                     </Typography>
                    </Grid>
                    </Grid>
                    <Typography color="textSecondary" variant="body2">
                    {
                         products[key].stock >= 6 && products[key].stock <=10 ?  <label>Low Stock</label>
                           : products[key].stock >= 1 && products[key].stock <= 5  ?  <label>Almost gone</label>
                           : products[key].stock < 10 ?   <label>In stock</label>
                           : <label>Out of stock</label>
                   }
         
                     </Typography>  
                </div>
           </div>                
       );
      
   } )}
  
</div>
)
  }
