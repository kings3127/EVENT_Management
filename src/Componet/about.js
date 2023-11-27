import {Grid, Paper} from "@mui/material";
import * as React from 'react';
function About1()
{
    const paperStyle={padding:20,width:1000,margin:"20px auto"}
    return(
        <div>
 <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <Grid>
            <Paper elevation={10} style={paperStyle} className="a">
            <div>
                <h1>ABOUT US</h1>
                <div >
                    We believe events are the
                    best way to accelerate 
                    relationships at scale.
                </div>
                <div style={{ justifyContent:"flex-end"}}>
                <img alt='' src="https://cdn-cjhkj.nitrocdn.com/krXSsXVqwzhduXLVuGLToUwHLNnSxUxO/assets/images/optimized/rev-669eecd/spotme.com/wp-content/themes/spotme/assets/images/about-us-v2-sec1-visual.png"  style={{maxWidth: 300,maxHeight: 300}}/>
                </div>
            </div>
            </Paper>
        </Grid>
        </div>
    );
}   
export default About1;