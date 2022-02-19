import React from "react";
import "./Project.css"

import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  
  Typography,
  
} from "@material-ui/core";
import Fade from "react-reveal/Fade";
import project1 from "./images/ecommerce.PNG";
import project2 from "./images/NoteZipper.png";
import project3 from "./images/Insta clone.png";
import project4 from "./images/Capture2.png";
import project5 from "./images/Pizza.png";
import project6 from "./images/makeup.png";




const Projects = () => {
  
  return (
    
    <Box component="div" className="mainContainer">
      <Fade left cascade>
      <Grid container justify="center">
      
        <Grid items xs={12} sm={7} md={6}>
       
          <Card className="cardContainer">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Ecommerce-MERN
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                This ecommerce store enable two main different flows Buyers browse the store categories, products and brands and Admins to manage and control the entire store components
                </Typography>
                <p>
                Technologies Used-<span className="card-text">React,Nodejs,MongoDB</span>
                </p>
              </CardContent>
            </CardActionArea>
            <CardActions className="cards">
              <a href="https://github.com/vinu94-s/Ecommerce-Task" className="btn d-lg-inline-block" onClick={() => window.open("https://github.com/vinu94-s/Ecommerce-Task")} target="_blank" rel="noopener noreferrer">
                
                  Source Code
                
              </a>
              <a href="https://myshop-mern-ecommerce.herokuapp.com/" className="btn d-lg-inline-block" onClick={() => window.open("https://myshop-mern-ecommerce.herokuapp.com/")} target="_blank" rel="noopener noreferrer">
              
                Live Demo
              
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={8} md={6}>
          <Card className="cardContainer">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  CRUD Operation-MERN
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 This app is used to create the user notes,edit and delete the user note.
                 Then user edit and update their profile.It is Responsive design and
                 Real-time Api call with backend.
                </Typography>
                <p>
                Technologies Used-<span className="card-text">React,Nodejs,MongoDB</span>
                </p>
              </CardContent>
            </CardActionArea>
            <CardActions className="cards">
                <a href="https://github.com/vinu94-s/CRUD-MERN" className="btn d-lg-inline-block" onClick={() => window.open("https://github.com/vinu94-s/CRUD-MERN")} target="_blank" rel="noopener noreferrer">
            
                Source Code
            
              </a>
              <a href="https://notezipper.herokuapp.com/" className="btn d-lg-inline-block" onClick={() => window.open("https://notezipper.herokuapp.com/" )} target="_blank" rel="noopener noreferrer">
              
                Live Demo
              
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={8} md={6}>
          <Card className="cardContainer">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Instagram-Clone MERN
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Insta-clone is social-media clone.The user can share their thoughts and post their pictures
                and update their profile .The post can seen by others ,they can like and comment the post.
                </Typography>
                <p>
                Technologies Used-<span className="card-text">React,Nodejs,MongoDB</span>
                </p>
              </CardContent>
            </CardActionArea>
            <CardActions className="cards">
                <a href="https://github.com/vinu94-s/insta-clone" className="btn d-lg-inline-block" onClick={() => window.open("https://github.com/vinu94-s/insta-clone")} target="_blank" rel="noopener noreferrer">
              
                Source Code
              
              </a>
              <a href ="https://insta-alsq.herokuapp.com/" className="btn d-lg-inline-block" onClick={() => window.open("https://insta-alsq.herokuapp.com/")} target="_blank" rel="noopener noreferrer">
              
                Live Demo
            
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={8} md={6}>
          <Card className="cardContainer">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Food App-MERN
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is food delivery app created with MERN,user can search the restaurants select their food and place the order.
                  It is responsive design.
                </Typography>
                <p>
                Technologies Used-<span className="card-text">React,Nodejs,MongoDB</span>
                </p>
              </CardContent>
            </CardActionArea>
            <CardActions className="cards">
              
            <a href="https://github.com/vinu94-s/Food-app" className="btn d-lg-inline-block"  onClick={() => window.open("https://github.com/vinu94-s/Food-app" )} target="_blank" rel="noopener noreferrer">
              
                Source Code
              
              </a>
              <a href="https://foodtime-app.herokuapp.com/" className="btn d-lg-inline-block" onClick={() => window.open("https://foodtime-app.herokuapp.com/" )}  target="_blank" rel="noopener noreferrer">
              
              
                Live Demo
              
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={8} md={6}>
          <Card className="cardContainer">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 5"
                height="140"
                image={project5}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Pizza-App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This Pizza-app is created with React and styled component Bootstrap.
                  This is fully responsive webpage that can use pizza data API for pulling pizza
                  and displayed on menu page.
                </Typography>
                <p>
                Technologies Used-
                <span className="card-text">React JS,MUI,React libraries</span>
                </p>
              </CardContent>
            </CardActionArea>
            <CardActions className="cards">
                <a href="https://github.com/vinu94-s/Pizza-app" className="btn d-lg-inline-block" onClick={() => window.open("https://github.com/vinu94-s/Pizza-app")} target="_blank" rel="noopener noreferrer">
              
                Source Code
              
              </a>
              <a href="https://pizza-app-19bb3.web.app" className="btn d-lg-inline-block" onClick={() => window.open("https://pizza-app-19bb3.web.app")} target="_blank" rel="noopener noreferrer">
              
                Live Demo
            
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid items xs={12} sm={8} md={6}>
          <Card className="cardContainer">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 6"
                height="140"
                image={project6}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  MakeUp API
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 This website app is created when i was learning how to use CSS libraries and HTML,JS.
                 This is fully responsive website design,
               the website has been coded by hand no theme used
                </Typography>
                <p>
                Technologies Used-
                <span className="card-text">HTML,CSS,JS</span>
                </p>
              </CardContent>
            </CardActionArea>
            <CardActions className="cards">
            <a href="https://github.com/vinu94-s/Makeup" className="btn d-lg-inline-block" onClick={() => window.open("https://github.com/vinu94-s/Makeup")}  target="_blank" rel="noopener noreferrer">
              
                Source Code
            
              </a>
              <a href="https://wonderful-ride-d679be.netlify.app"className="btn d-lg-inline-block"onClick={() => window.open("https://wonderful-ride-d679be.netlify.app")}  target="_blank" rel="noopener noreferrer">
              
                Live Demo
              
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      </Fade>
    </Box>
  );
};

export default Projects;