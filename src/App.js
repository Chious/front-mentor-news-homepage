import './App.css';
import { useEffect } from 'react';


import "./assets/images/logo.svg"
import ResponsiveAppBar from './component/navbar';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Image from 'mui-image';

import MainPicture from "./assets/images/image-web-3-desktop.jpg"
import subnews from "./sub-news.json"
import Ranknews from "./rank-news"

import MediaQuery from "react-responsive";

function App() {
  useEffect(() => { document.body.style.backgroundColor = "hsl(36, 100%, 99%)" }, [])

  return (

    <>
      <div className='page' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ResponsiveAppBar />

        <div className='main-news' style={{ maxWidth: 1200 }}>
          <Grid container >
            <Grid item xl={8} xs={12}>
              <div>
                <Grid container>
                  <Grid item xl={12} xs={12}>
                    <MediaQuery query="(max-width: 375px)">
                      <Image src={MainPicture} height="375px" width="375px" duration={0} />
                    </MediaQuery>
                    <MediaQuery query="(min-width: 375px)">
                      <img src={MainPicture} style={{ maxWidth: "800px" }} alt=""></img>
                    </MediaQuery>
                  </Grid>
                  <Grid item xl={6} xs={12}><p style={{ fontSize: 40, fontWeight: 800, maxWidth: 375 }}>The Bright Future of Web 3.0?</p></Grid>
                  <Grid item xl={6}>

                    <Grid container direction="column" alignItems="flex-start" justifyContent="center">
                      <Grid item xl={10} xs={12}><div style={{ maxWidth: 375 }}>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?</div></Grid>
                      <Grid item xl={2} justifyContent="center"><Button sx={{ background: "black", ":hover": { background: "hsl(5, 85%, 63%)" } }} style={{ width: 150, height: 40, fontSize: 18, fontFamily: "Outfit, sans-serif", color: "white", border: "none" }}>Read more</Button></Grid>
                    </Grid>

                  </Grid>

                </Grid>
              </div>
            </Grid >

            <Grid item xl={4} style={{
              background: "hsl(240, 100%, 5%)", paddingLeft: 20,
              backgroundImage: "linear-gradient(to bottom, hsl(240, 100%, 5%) 0%, hsl(240, 100%, 5%) 100%), linear-gradient(to bottom, hsl(36, 100%, 99%) 0%, hsl(36, 100%, 99%) 100%)",
              backgroundClip: "content-box, padding-box"
            }}>
              <div className='sub-news'>
                <p style={{ paddingLeft: 20, paddingRight: 20, color: "hsl(35, 77%, 62%)", fontSize: 30, fontWeight: 700 }}>News</p>
                <div style={{ display: "flex", flexDirection: "column" }}>{subnews.map((item, index) =>
                  <div style={{ borderBottom: "1px solid hsl(233, 8%, 79%)" }}>
                    <Button variant='text' style={{ paddingLeft: 20, paddingRight: 20, fontSize: 20 }}
                      sx={{ color: "white", ":hover": { color: "orange" } }}>{item.title}</Button>
                    <p style={{ paddingLeft: 20, paddingRight: 20, color: "hsl(233, 8%, 79%)" }}>{item.description}</p>
                  </div>
                )}</div>

              </div>
            </Grid>


          </Grid >
        </div >
        <div className='rank-news' style={{ maxWidth: 1200 }}>
          <Grid container>
            <div style={{ display: "flex" }}>{Ranknews.map((item, index) =>
              <Grid item xl={4} xs={12}>
                <div style={{ marginTop: 30 }}>
                  <Grid container>
                    <Grid xl={4}><img src={item.icon} alt="" style={{ maxHeight: 160, display: "flex", alignItems: "center", justifyContent: "center" }}></img></Grid>
                    <Grid xl={8}><p style={{ fontSize: "40px", fontWeight: 700, margin: 0, color: "hsl(236, 13%, 42%)" }}>{item.id}</p>
                      <Button style={{ fontSize: "20px", margin: 0, paddingLeft: 0 }} sx={{ color: "black", ":hover": { color: "orange" } }}>{item.title}</Button>
                      <p style={{ color: "hsl(236, 13%, 42%)", margin: 0 }}>{item.description}</p></Grid>
                  </Grid>

                </div>
              </Grid>)}
            </div>
          </Grid>


        </div>
      </div >






      <div classname="attribution">
        Challenge by <a href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl/hub" >Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/Chious">Your Name Here</a>.
      </div>


    </>
  );
}

export default App;
