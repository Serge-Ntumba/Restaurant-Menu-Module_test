
 import React, { useState, useEffect } from "react";
 import MediaCard from "./Component/Card";
 import axios from "axios";
 import "./App.css";
 import Appbar from "./Component/appBar";
 import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

 function App() {
     const [image, getImage] = useState("");
     useEffect (() => {
         fetchImage();
     }, []);

     const fetchImage = () => {
         axios.get("https://api.unsplash.com/photos/random?client_id=0w2ykWZ2Nk-cBGbGdEceJm47p0VHqnGhAg7CLXcR_tw&query=food&&count=1")
               .then((res) => {
                   const picture = res.data[0].urls;
                   getImage(picture);
               })
               .catch(error => console.log(error));
     }
     return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
        
            <Appbar />
            <MediaCard image={image.regular} key={image.id} />

        </Container>
      </React.Fragment>

       
     );
 }
 
 export default App;












