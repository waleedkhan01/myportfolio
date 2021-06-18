// import React from "react";
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
// @material-ui/icons
import WebIcon from '@material-ui/icons/Web';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import StorageIcon from '@material-ui/icons/Storage';
import CodeIcon from '@material-ui/icons/Code';
// core components
import Header from "components/Header/Header.js";
import Badge from "components/Badge/Badge.js";
// import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/profile.jpg";
import clip from "assets/videos/Contrarian.mp4";
import clip_img from "assets/videos/contrarian_img.png";
import clip2 from "assets/videos/LegalScale.mp4";
import clip2_img from "assets/videos/legalscale_img.png";
import clip3 from "assets/videos/FactPack.mp4";
import clip3_img from "assets/videos/factpack_img.png";
import clip4 from "assets/videos/Nynj.mp4";
import clip4_img from "assets/videos/nynj_img.png";
import clip5 from "assets/videos/Productive.mp4";
import clip6 from "assets/videos/RideShare.mp4";
import clip7 from "assets/videos/Stogo.mp4";
import clip8 from "assets/videos/WeatherApp.mp4";
import clip9 from "assets/videos/FlashChat.mp4";
import clip10 from "assets/videos/ForWriters.mp4";
import analytics1 from "assets/img/analytics1.png"
import analytics1_Wide from "assets/img/analytics1-full.png"

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import myStyles from "assets/jss/myStyles.js";
import componentStyles from "assets/jss/material-kit-react/views/components.js";


const useStyles = makeStyles(styles);
const useMyStyles = makeStyles(myStyles);
const compStyles = makeStyles(componentStyles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const compClasses = compStyles();
  const myClasses = useMyStyles();
  

  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [anchorEl5, setAnchorEl5] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const handleClick5 = (event) => {
    setAnchorEl5(event.currentTarget);
  };

  const handleClose5 = () => {
    setAnchorEl5(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? 'simple-popover' : undefined;
  
  const open3 = Boolean(anchorEl3);
  const id3 = open3 ? 'simple-popover' : undefined;

  const open4 = Boolean(anchorEl4);
  const id4 = open4 ? 'simple-popover' : undefined;

  const open5 = Boolean(anchorEl5);
  const id5 = open5 ? 'simple-popover' : undefined;
  
  const dashboardRoutes = [];
  return (
    <div className={myClasses.page}>
      <Header
        color="transparent"
        brand="Waleed Khan"
        rightLinks={<HeaderLinks />}
        routes={dashboardRoutes}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      {/* <Parallax small filter image={require("assets/img/profile-bg.jpg")} /> */}
      <Parallax image={require("assets/img/profile-bg-dark.jpg")}>
        <div className={compClasses.container}>
          <GridContainer>
            <GridItem>
              <div className={compClasses.brand}>
                <h1 className={compClasses.title}>Hi, I'm Waleed!</h1>
                <h3 className={compClasses.subtitle}>
                  Computer Scientist, Full-Stack Developer, and Problem Solver.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={myClasses.spacer}/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                    
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Waleed Khan</h3>
                    <h6>M.S. in Computer Science</h6>
                    <Button href="https://linkedin.com/in/waleedakhan" justIcon link className={classes.margin5, myClasses.iconColor}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button href="https://github.com/waleedkhan01" justIcon link className={classes.margin5, myClasses.iconColor}>
                      <i className={"fab fa-github"} />
                    </Button>
                    {/* <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button> */}
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Nice to meet you, I'm Waleed! I received a Bachelor's Degree in Computer Science from Rutgers University in 2019 and a Master's Degree in Computer Science from NJIT in 2020.
                During my graduate study, I specialized in Computer Networking & Security and Databases & Datamining. Currently, I excel in Software Development and Data Analytics. 
                Check out some of my work below and connect with me on LinkedIn!
                {" "}
              </p>
            </div>
            {/* <div className={classes.profile}>
              <h3>Skills</h3>
            </div> */}
            <GridContainer className={classes.grid}>
              <GridItem xs={12} sm={12} md={6} className={classes.navWrapper}>
                {/* <Badge>default</Badge> */}
                <Badge color="danger">Java</Badge>
                <Badge color="danger">C</Badge>
                <Badge color="info">HTML/CSS</Badge>
                {/* <Badge color="warning">Javascript</Badge> */}
                <Badge color="info">Javascript</Badge>
                <Badge color="info">React</Badge>
                <Badge color="rose">React Native</Badge>
                <Badge color="rose">Swift</Badge>
                <Badge color="primary">R</Badge>
                <Badge color="primary">Python</Badge>
                <Badge color="success">SQL</Badge>
                <Badge color="success">NoSQL (Firebase)</Badge>
              </GridItem>
            </GridContainer>

            <GridContainer className={classes.grid}>
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  // color={"dark"}
                  tabs={[
                    {
                      tabButton: "Web Development",
                      tabIcon: WebIcon,
                      tabColor: "info",
                      tabContent: (
                        <NavPills
                        alignCenter
                        // color={"dark"}
                        tabs={[
                          {
                            tabButton: "Page 1",
                            tabIcon: WebIcon,
                            tabColor: "info",
                            tabContent: (
                              <div>
                              
                                <GridContainer justify="center" >
                                  <GridItem xs={12} sm={12} md={4}>
                                    <div>
                                        <a href = "https://factpack.io" className={myClasses.portfolioTitles}><p className={myClasses.portfolioTitles}>FactPack</p></a>
                                        <Button href="https://factpack.io" justIcon link className={myClasses.iconColor}>
                                          <i className={"fa fa-globe"}/>
                                        </Button>
                                        <ReactPlayer playsinline = {true} config={{ file: { attributes: {controlsList: 'nodownload'}}}} pip={true} volume={0}  width="100%" height="auto" url={clip3} controls = {true} loop={true} />
                                    </div>
                                    <div>
                                      <a href = "https://factpack.io" className={myClasses.portfolioTitles}><p className={myClasses.portfolioTitles}>FactPack</p></a>
                                      <div className={myClasses.portfolioItemSpace}>
                                      
                                        <img
                                          alt="..."
                                          src={clip3_img}
                                          className={navImageClasses}
                                          onClick={handleClick}
                                        />
                                        <Popover
                                          id={id}
                                          open={open}
                                          anchorEl={anchorEl}
                                          onClose={handleClose}
                                          anchorReference="anchorPosition"
                                          anchorPosition={{ top: 0, left: 0 }}
                                          // anchorOrigin={{
                                          //   vertical: 'top',
                                          //   horizontal: 'left',
                                          // }}
                                          // transformOrigin={{
                                          //   vertical: 'bottom',
                                          //   horizontal: 'left',
                                          // }}
                                        >
                                          <img
                                                alt="..."
                                                src={clip3_img}
                                                className={myStyles.portfolioModal}
                                                onClick={handleClose}
                                                width="100%"
                                                height="100%"
                                          />
                                        </Popover>
                                      </div>
                                    </div>
                                  </GridItem>
        
                                  <GridItem xs={12} sm={12} md={4}>
                                    <div>
                                      <a href = "https://nynjweddingdecor.com" className={myClasses.portfolioTitles}><p className={myClasses.portfolioTitles}>NyNj Wedding Decor</p></a>
                                      <Button href = "https://nynjweddingdecor.com" justIcon link className={myClasses.iconColor}>
                                          <i className={"fa fa-globe"}/>
                                      </Button>
                                      <ReactPlayer playsinline = {true} config={{ file: { attributes: {controlsList: 'nodownload'}}}}  pip={true} volume={0}  width="100%" height="auto" url={clip4} controls = {true} loop={true}/>
                                    </div>
                                    {/* <div className={myClasses.spacer}/> */}
                                    
                                    <div>
                                      
                                      <a href = "https://nynjweddingdecor.com" className={myClasses.portfolioTitles}><p className={myClasses.portfolioTitles}>NyNj Wedding Decor</p></a>
                                      <div className={myClasses.portfolioItemSpace}> 
                                        <img
                                          alt="..."
                                          src={clip4_img}
                                          className={myClasses.portfolioImg}
                                          onClick={handleClick2}
                                        />
                                         <Popover
                                          id={id2}
                                          open={open2}
                                          anchorEl={anchorEl2}
                                          onClose={handleClose2}
                                          anchorReference="anchorPosition"
                                          anchorPosition={{ top: 0, left: 0 }}
                                          anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                          }}
                                          transformOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                          }}
                                        >
                                          <img
                                                alt="..."
                                                src={clip4_img}
                                                className={myStyles.portfolioModal}
                                                onClick={handleClose2}
                                                width="100%"
                                                height="100%"
                                          />
                                        </Popover>
                                      </div>
                                    
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              
                              </div>
                            )
                          },
                          {
                            tabButton: "Page 2",
                            tabIcon: WebIcon,
                            tabColor: "info",
                            tabContent: (
                              <div>
                              <GridContainer justify="center" >
                                <GridItem xs={12} sm={12} md={4}>
                                  <div>
                                    <a href = "https://legalscalellp.com" className={myClasses.portfolioTitles}><p className={myClasses.portfolioTitles}>Legal Scale</p></a>
                                      {/* <div> */}
                                    <Button href = "https://legalscalellp.com" justIcon link className={myClasses.iconColor}>
                                      <i className={"fa fa-globe"}/>
                                    </Button>
                                    <ReactPlayer playsinline = {true} config={{ file: { attributes: {controlsList: 'nodownload'}}}}  pip={true} volume={0}  width="100%" height="auto" url={clip2} controls = {true} loop={true}/>
                                      {/* </div> */}
                                  </div>
                                 
                                  <div>
                                    <a href = "https://legalscalellp.com" className={myClasses.portfolioTitles}><p className={myClasses.portfolioTitles}>Legal Scale</p></a>
                                    <div className={myClasses.portfolioItemBlackSpace}>
                                      <img
                                        alt="..."
                                        src={clip2_img}
                                        className={myClasses.portfolioImg}
                                        onClick={handleClick3}
                                      />
                                      <Popover
                                          id={id3}
                                          open={open3}
                                          anchorEl={anchorEl3}
                                          onClose={handleClose3}
                                          anchorReference="anchorPosition"
                                          anchorPosition={{ top: 0, left: 0 }}
                                          anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                          }}
                                          transformOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                          }}
                                        >
                                          <img
                                                alt="..."
                                                src={clip2_img}
                                                className={myStyles.portfolioModal}
                                                onClick={handleClose3}
                                                width="100%"
                                                height="100%"
                                          />
                                        </Popover>
                                    </div>
                                  </div>
                                  
                                </GridItem>
      
                                <GridItem xs={12} sm={12} md={4}>
                                  <a href = "http://contrarianpartners.io" className={myClasses.portfolioTitles}><p className={myClasses.portfolioTitles}>Contrarian Partners</p></a>
                                  <Button href = "http://contrarianpartners.io" justIcon link className={myClasses.iconColor}>
                                      <i className={"fa fa-globe"}/>
                                  </Button>
                                  <ReactPlayer playsinline = {true} config={{ file: { attributes: {controlsList: 'nodownload'}}}}  pip={true} volume={0}  width="100%" height="auto" url={clip} controls = {true} loop={true} />
                                   
                                  {/* <div className={myClasses.spacer}/> */}
                                  <div>
                                    <a href = "http://contrarianpartners.io" className={myClasses.portfolioTitles}><p className={myClasses.portfolioTitles}>Contrarian Partners</p></a>
                                    <div className={myClasses.portfolioItemBlackSpace}>
                                      <img
                                        alt="..."
                                        src={clip_img}
                                        className={myClasses.portfolioImg}
                                        onClick={handleClick4}
                                      />
                                      <Popover
                                          id={id4}
                                          open={open4}
                                          anchorEl={anchorEl4}
                                          onClose={handleClose4}
                                          anchorReference="anchorPosition"
                                          anchorPosition={{ top: 0, left: 0 }}
                                          anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                          }}
                                          transformOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                          }}
                                        >
                                          <img
                                                alt="..."
                                                src={clip_img}
                                                className={myStyles.portfolioModal}
                                                onClick={handleClose4}
                                                width="100%"
                                                height="100%"
                                          />
                                        </Popover>
                                    </div>
                                  </div>
                                </GridItem>
                              </GridContainer>
                              </div>
                            )
                          },
                          
                        ]}
                      />
                      )
                    },
                    
                    {
                      tabButton: "Mobile Development",
                      tabIcon: SmartphoneIcon,
                      tabColor: "rose",
                      tabContent: (
                        <NavPills
                  alignCenter
                  // color={"dark"}
                  tabs={[
                    {
                      tabButton: " Page 1 (React Native)",
                      tabIcon: SmartphoneIcon,
                      tabColor: "rose",
                      tabContent: (
                        <div>
                       
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>

                              <p className={myClasses.portfolioTitles}>Productive NYC</p>
                              <Button disabled justIcon link className={myClasses.iconColor}>
                                  {/* <i className={"fab fa-app-store"} /> */}
                              </Button>
                              <ReactPlayer playsinline = {true} config={{ file: { attributes: {controlsList: 'nodownload'}}}}  pip={true} volume={0}  width="100%" height="auto" url={clip5} controls = {true} loop={true}/>
                              <div className={myClasses.spacer}/>
                              <p className={myClasses.portfolioTitles}>StoGo</p>
                              <Button disabled justIcon link className={myClasses.iconColor}>
                                  {/* <i className={"fab fa-app-store"} /> */}
                              </Button>
                              <ReactPlayer playsinline = {true} config={{ file: { attributes: {controlsList: 'nodownload'}}}}  pip={true} volume={0}  width="100%" height="auto" url={clip7} controls = {true} loop={true}/>
                            
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>

                              <a href="https://apps.apple.com/us/app/for-writers/id1546794394" className={myClasses.portfolioTitles}><p className={myClasses.portfolioTitles}>For Writers</p></a>
                              <Button href="https://apps.apple.com/us/app/for-writers/id1546794394" justIcon link className={myClasses.iconColor}>
                                  <i className={"fab fa-app-store"} />
                              </Button>
                              <ReactPlayer playsinline = {true} config={{ file: { attributes: {controlsList: 'nodownload'}}}}  pip={true} volume={0}  width="100%" height="auto" url={clip10} controls = {true} loop={true}/>
                              <div className={myClasses.spacer}/>
                              <a href="https://www.github.com/waleedkhan01/njitrideshare" className={myClasses.portfolioTitles}><p className={myClasses.portfolioTitles}>NJIT Rideshare</p></a>
                              <Button href="https://www.github.com/waleedkhan01/njitrideshare" justIcon link className={myClasses.iconColor}>
                                  <i className={"fab fa-github"} />
                              </Button>
                              <ReactPlayer playsinline = {true} config={{ file: { attributes: {controlsList: 'nodownload'}}}}  pip={true} volume={0}  width="100%" height="auto" url={clip6} controls = {true} loop={true}/>
                            
                            </GridItem>
                            
                          </GridContainer>
                        </div>
                      )
                    },
                    {
                      tabButton: "Page 2 (Swift / iOS)",
                      tabIcon: SmartphoneIcon,
                      tabColor: "rose",
                      tabContent: (
                        <div>
                       
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                           <a href = "https://github.com/waleedkhan01/WeatherApp" className={myClasses.portfolioTitles}><p className={myClasses.portfolioTitles}>Weather App</p></a>
                             <ReactPlayer playsinline = {true} config={{ file: { attributes: {controlsList: 'nodownload'}}}}  pip={true} volume={0}  width="100%" height="auto" url={clip8} controls = {true} loop={true}/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p className={myClasses.portfolioTitles}>Flash Chat</p>
                             <ReactPlayer playsinline = {true} config={{ file: { attributes: {controlsList: 'nodownload'}}}}  pip={true} volume={0}  width="100%" height="auto" url={clip9} controls = {true} loop={true}/>
                          </GridItem>
                        </GridContainer>
                        </div>
                      )
                    },
                  
                  ]}
                />
                      )
                    },
                    {
                      tabButton: "Analytics Development",
                      tabIcon: TrendingUpIcon,
                      tabColor: "primary",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                          <div>
                              <a href = "https://github.com/waleedkhan01/R-StockAnalytics" className={myClasses.portfolioTitlesAnalytics}>
                              <p className={myClasses.portfolioTitles}>Stock Correlations & Dividends in R</p>
                              <Button href="https://github.com/waleedkhan01/R-StockAnalytics" justIcon link className={myClasses.iconColor}>
                                <i className={"fab fa-github"} />
                              </Button>
                            </a>
                            <div>
                            
                              <img
                                alt="..."
                                src={analytics1}
                                className={navImageClasses}
                                onClick={handleClick5}
                              />
                              <Popover
                                id={id5}
                                open={open5}
                                anchorEl={anchorEl5}
                                onClose={handleClose5}
                                anchorReference="anchorPosition"
                                anchorPosition={{ top: 0, left: 0 }}
                              >
                                <img
                                      alt="..."
                                      src={analytics1_Wide}
                                      className={myStyles.portfolioModal}
                                      onClick={handleClose5}
                                      width="100%"
                                      height="100%"
                                />
                              </Popover>
                            </div>
                          </div>
                          
                          </GridItem>
                          {/* <GridItem xs={12} sm={12} md={4}>
                            <div>
                                <a href = "https://github.com/waleedkhan01/R-StockAnalytics" className={myClasses.portfolioTitlesAnalytics}>
                                <p className={myClasses.portfolioTitles}>Stock Correlations & Dividends in R</p>
                                <Button href="https://github.com/waleedkhan01/R-StockAnalytics" justIcon link className={myClasses.iconColor}>
                                  <i className={"fab fa-github"} />
                                </Button>
                              </a>
                              <div>
                              
                                <img
                                  alt="..."
                                  src={analytics1}
                                  className={navImageClasses}
                                  onClick={handleClick5}
                                />
                                <Popover
                                  id={id5}
                                  open={open5}
                                  anchorEl={anchorEl5}
                                  onClose={handleClose5}
                                  anchorReference="anchorPosition"
                                  anchorPosition={{ top: 0, left: 0 }}
                                >
                                  <img
                                        alt="..."
                                        src={analytics1_Wide}
                                        className={myStyles.portfolioModal}
                                        onClick={handleClose5}
                                        width="100%"
                                        height="100%"
                                  />
                                </Popover>
                              </div>
                            </div>
                          </GridItem> */}
                        </GridContainer>
                      )
                    },
                    // {
                    //   tabButton: "Database Development",
                    //   tabIcon: StorageIcon,
                    //   tabColor: "success",
                    //   tabContent: (
                    //     <GridContainer justify="center">
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         
                    //       </GridItem>
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         
                    //       </GridItem>
                    //     </GridContainer>
                    //   )
                    // }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <div>
      </div>
    </div>
  );
}
