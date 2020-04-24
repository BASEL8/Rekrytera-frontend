import React, { Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import DoneIcon from '@material-ui/icons/Done';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import Typing from 'react-typing-animation';
import { Complex,Direct,Smart,Time,Experience ,CompanySvg} from '../../img';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 100
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    minHeight: '35vh',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    background: theme.palette.primary.main,
    color: theme.palette.text.light
  },
  headerImage: {
    flexGrow: 1,
    flexShrink: 0,
    backgroundSize: 'cover',
    paddingLeft: 20,
    borderRadius: '10%',
    clipPath: 'polygon(30% 0%, 100% 0, 100% 30%, 100% 70%, 100% 100%, 67% 100%, 0 34%, 0 0)'

  },
  headerTitle: {
    fontSize: 40,
    fontFamily: 'Montserrat, sans-serif',
    lineHeight: 2,
    verticalAlign: 'baseline',
    letterSpacing: 'normal',
    wordSpacing: 0
  },
  headerText: {
    width: 400,
    paddingTop: 30,
    fontSize: 15,
    fontFamily: 'Montserrat, sans-serif'
  },
   mainText: {
    marginTop:50,
    marginBottom:50,
    padding: 30,
    textAlign: 'center',
    color: '#333333',
    fontSize: 24,
  },
  section: {
  },
   buttonHolder: {
    background: theme.palette.primary.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    '& button': {
      background: theme.palette.primary.button
    }
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    '& > *': {
      flex: 1,
      padding: 20,
      margin: theme.spacing(3),
    },
   
  },
  paperHolder: {
  position:'relative',
 '& svg': {
   position: 'absolute',
   top: '-10%',
   bottom: 0,
   width: 100,
      right:0
    },
  '& .svgSpecial': {
      '& svg': {
        top:'-30%'
      }
    },
  },
  paperTitle: {
    fontWeight: 800,
    color: theme.palette.primary.main,
    fontSize: 28,
    marginBottom: 15
  },
  TapPaper: {
    minHeight: 300,
    maxWidth: 400,
    padding: 40,
    "& > * ": {
      padding: 20,
      textAlign: 'center'
    }
  },
  howItWork: {
    marginTop: 100,
    marginBottom: 20,
    '& > h1': {
      textAlign: 'center'
    },
  },
  HowItWorkImages: {
    flex: 1,
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    '& > div': {
      flex: 1,
      flexBasis:600,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
    },
    '& > div svg': {
      maxWidth: '90%',
      marginTop: 50
    },
    '& > div h5': {
      fontSize: 20,
      marginTop: 20
    }
  },
  conditions: {
    '& > h1': {
      textAlign: 'center',
      marginTop: 100,
      marginBottom: 20,
    },
    '& > p': {
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 20,
      padding: '10px 100px'
    },
    '& > div div div h3': {
      margin: '10px 0'
    }
  },
  prices: {
    marginTop: 50,
    textAlign: 'center',
    '& > p': {
      marginBottom: 30,
      fontSize: 15
    },
    '& > h3': {
      fontSize: 30,
      marginBottom: 30
    },
    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',
      flexWrap: 'wrap',
      '& > div': {
        flex: 1,
        flexBasis: 300,
        padding: 30,
        textAlign: 'center',
        '& h5': {
          fontSize: 16,
          margin: '15px 0',
          textAlign: 'center'
        },
        '& p': {
          '& span': {
            color: theme.palette.primary.main
          }
        }
      }
    },

  }
}))
const fakeData = [
  { name: 'Quedro', by: 'Foad Farkhondeh', text: '"Best service for recruiting developers today. Have tested most major" known "players before where most of the communication was with sales-hungry recruiters, rather than DEVELOPERS. Demando has turned the cake and made it much easier to find relevant staff."' },
  {
    name: 'Quedro', by: 'basel', text: '"Best service for recruiting developers today. Have tested most major" known "players before where most of the communication was with sales-hungry recruiters, rather than DEVELOPERS. Demando has turned the cake and made it much easier to find relevant staff."'
  }, {
    name: 'Quedro', by: 'Kahla', text: '"Best service for recruiting developers today. Have tested most major" known "players before where most of the communication was with sales-hungry recruiters, rather than DEVELOPERS. Demando has turned the cake and made it much easier to find relevant staff."'
  }, { name: 'Quedro', by: 'Leo', text: '"Best service for recruiting developers today. Have tested most major" known "players before where most of the communication was with sales-hungry recruiters, rather than DEVELOPERS. Demando has turned the cake and made it much easier to find relevant staff."' },
  { name: 'Quedro', by: 'Kenzie', text: '"Best service for recruiting developers today. Have tested most major" known "players before where most of the communication was with sales-hungry recruiters, rather than DEVELOPERS. Demando has turned the cake and made it much easier to find relevant staff."' }
]
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
const WhatPeopleSaying = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className={classes.main}>
      {fakeData.map(({ name, by, text }, index) => <TabPanel key={index} value={value} index={index}>
        <Paper className={classes.TapPaper}>
          <h5>{name}</h5>
          <p>{text}</p>
          <p>{by}</p>
        </Paper>
      </TabPanel>)}
      <div >
        {fakeData.map((data, index) => <Button key={index} onClick={() => setValue(index)} size="small">
          <FiberManualRecordIcon color="primary" fontSize="small" />
        </Button>
        )}
      </div>
    </div>
  );
}
const Company = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div style={{ padding: 50, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <CompanySvg/>
          <h2 className={classes.headerTitle}>
            Recruit tech talent in record time!
      </h2>
          <div style={{display:'flex'}}>
            <p>we matches you free of charge with 1000's of quality assured talents </p>
            <div style={{minWidth:150,display:'flex',justifyContent:'center',alignItems:'center',color:'gold'}}>
           <Typing speed={50} loop>
              {["Developers", "Testers", "Designers", "Project Managers","System Architects" ].map((text,index) => { 
                return <Fragment key={index}>
                <h3>{text}</h3> 
                 <Typing.Backspace delay={1200} count={text.length + 1} />
                 </Fragment>
              })}
            <Typing.Reset />
              </Typing>
              </div>
           
          </div>
           <p> who are open to new opportunities.</p>
          <p>You only pay for successful recruitment.</p>
        </div>
      </div>
      <div className={classes.buttonHolder}>
       <Button variant="contained" color="primary" >
            <Link className={classes.link} to={"/company/register"}>Register</Link>
        </Button>
        </div>
      <div>
        <div className={classes.mainText}>
          <p >
            Get access to a curated and active pool with tech talent who are all open to new challenges.
            </p>
          <p>
             Sign up and meet tech talent for free.
          </p>
        </div>
        <div className={classes.paper}>
          <Paper elevation={3} className={classes.paperHolder}>
            <h4 className={classes.paperTitle}>+10 000</h4>
            <p>tech talents that are open to new opportunities.</p>
            <Smart/>
          </Paper>
          <Paper elevation={3} className={classes.paperHolder}>
            <h4 className={classes.paperTitle}>91%</h4>
            <p>of all requests answered by the talents within 2 weeks.</p>
             <Time/>
          </Paper>
          <Paper elevation={3} className={classes.paperHolder}>
            <h4 className={classes.paperTitle}>4 år</h4>
            <p>is the average experience of the talents.</p>
            <div className='svgSpecial'>
            <Experience />
            </div>
          </Paper>
        </div>
      </div>
      <WhatPeopleSaying />
      <div className={classes.howItWork}>
        <h1>This is how it works</h1>
        <div className={classes.HowItWorkImages}>
          <div>
            <h5>Traditional recruitment</h5>
            <Complex/>
          </div>
          <div>
            <h5>Recruitment through us</h5>
            <Direct/>
          </div>
        </div>
      </div>
      <div className={classes.conditions}>
        <h1>Best conditions for attracting and recruiting tech talent</h1>
        <p>we matches you free of charge with 1000's of quality assured talents, including developers, testers, designers, project managers and system architects who are open to new opportunities. You only pay for successful recruitment.</p>
        <div>
          <div className={classes.paper}>
            <Paper elevation={3}>
              <QuestionAnswerIcon color="primary" fontSize="large" />
              <h3>Meet candidates fast</h3>
              <p>Send the contact request today, get a reply tomorrow and interview the day after.</p>
            </Paper>
            <Paper elevation={3}>
              <ThumbsUpDownIcon color="primary" fontSize="large" />
              <h3>Talents that are open to new opportunities</h3>
              <p>Reach active talents who are all open to new challenges and are ready to meet today.</p>
            </Paper>
            <Paper elevation={3}>
              <DoneIcon color="primary" fontSize="large" />
              <h3>Pay only when recruiting</h3>
              <p>Contact and meet talents free of charge and pay only when recruiting.</p>
            </Paper>
            <Paper elevation={3} >
              <WbIncandescentIcon color="primary" fontSize="large" />
              <h3>Quality-assured talents</h3>
              <p>All registered talents are manually reviewed and approved by us.</p>
            </Paper>
          </div>
        </div>
      </div>
      <div className={classes.prices}>
        <p>RECRUITING TECH TALENTS MUST BE EASY</p>
        <h3>Prices</h3>
        <div>
          <div>
            <h5>Recruitment</h5>
            <p><span>30,000 SEK per successful recruitment</span>,
            no other costs,
            <span>Pay only</span> for successful recruitment Sometimes this is not true, and then a <span>90-day</span>  security guarantee applies</p>
          </div>
          <div>
            <h5>Freelance</h5>
            <p><span>2.5% of invoiced amount</span>, no other costs Direct contact with the freelancer,
            <span> No intermediaries</span></p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" size="large">
          <Link className={classes.link} to={"/company/register"}>
            Get started
          </Link>
        </Button>
      </div>
    </div>
  )
}
export default Company;