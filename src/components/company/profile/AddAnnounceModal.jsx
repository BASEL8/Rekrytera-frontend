import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { Button } from '@material-ui/core';
import { companyCreateAnnounce } from '../../../actions/companyAuth'
import { getCookie } from '../../../actions/auth'
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: 350,
    minHeight: 650,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'stretch',
    flexDirection: 'column',
    background: 'white',
    zIndex: 99999999
  },
  formControl: {
    margin: theme.spacing(3),
    width: '100%'
  },
  radioTable: {
    margin: '15px 0'
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    '&>*': {
      flexBasis: '25%',
      [theme.breakpoints.down('sm')]: {
        flexBasis: 30,
      }
    }
  }
}));

const AddAnnounceModal = ({ handleClose, handleOpen, open }) => {
  const classes = useStyles();
  const [error, setError] = useState('')
  const [userData, setUserData] = useState({
    city: '',
    workingRemotely: '',
    kindOfEmployment: '',
    priorityBenefits: [],
    profession: {
      name: '',
      years: 0,
      subProfessions: [{ name: '' }]
    },
  })
  const { workingRemotely, priorityBenefits, profession, city, kindOfEmployment } = userData;
  const handleChange = (event) => {
    if (event.target.name === 'profession') {
      setUserData({
        ...userData,
        profession: {
          years: 0, subProfessions: [],
          name: event.target.value
        }
      })
    }
    if (event.target.name === 'subProfession') {
      if (profession && profession.subProfessions.map((ob, index) => ob.name).indexOf(event.target.value) === -1) {
        setUserData({
          ...userData,
          profession: {
            ...profession, subProfessions: [...profession.subProfessions, { name: event.target.value }]
          }
        })
      } else {
        setUserData({
          ...userData,
          profession: {
            ...profession,
            subProfessions: profession.subProfessions.filter((ob) => ob.name !== event.target.value)
          }
        })
      }
    }
    if (event.target.name === 'reasonToNewJob') {
      setUserData({ ...userData, reasonToNewJob: event.target.value })
    }
    if (event.target.name === 'workingRemotely') {
      setUserData({ ...userData, workingRemotely: event.target.value })
    }
    if (event.target.name === 'kindOfEmployment') {
      setUserData({ ...userData, kindOfEmployment: event.target.value })
    }
    if (event.target.name === 'city') {
      setUserData({ ...userData, city: event.target.value.toLowerCase() })
    }
    if (event.target.name === 'priorityBenefits') {
      if (priorityBenefits.indexOf(event.target.value) === -1 && priorityBenefits.length <= 8) {
        setUserData({ ...userData, priorityBenefits: [...priorityBenefits, event.target.value] })
      }
      else {
        setUserData({ ...userData, priorityBenefits: priorityBenefits.filter(b => b !== event.target.value) })
      }
    }
  }
  const professions = [
    {
      name: 'technology & development',
      years: 0,
      subProfessions: []
    },
    {
      name: 'design',
      years: 0,
      subProfessions: []
    },
    {
      name: 'processer & analys',
      years: 0,
      subProfessions: []
    }
  ]
  const subProfessions = [

    {
      name: 'system  Architect',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'system Admin',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'games',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'test',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'qa',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'iT Security',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'iOS',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'hybrid',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'electronics',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'hardware',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'full-stack',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'front-end',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'embedded',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'devOps',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'database',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'data science',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'cloud',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'bi',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'backend',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'apps',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'android',
      years: 0,
      profession: 'technology & development'
    },
    {
      name: 'animation',
      years: 0,
      profession: 'design'
    },
    {
      name: 'graphic design',
      years: 0,
      profession: 'design'
    },
    {
      name: 'ui',
      years: 0,
      profession: 'design'
    },
    {
      name: 'ux',
      years: 0,
      profession: 'design'
    },
    {
      name: 'visual design',
      years: 0,
      profession: 'design'
    },
    {
      name: 'business developer',
      years: 0,
      profession: 'processer & analys'
    },
    {
      name: 'business architect',
      years: 0,
      profession: 'processer & analys'
    },
    {
      name: 'business Analyst',
      years: 0,
      profession: 'processer & analys'
    },
    {
      name: 'system administration',
      years: 0,
      profession: 'processer & analys'
    },
    {
      name: 'management consultant',
      years: 0,
      profession: 'processer & analys'
    },
    {
      name: 'solution architect',
      years: 0,
      profession: 'processer & analys'
    },
    {
      name: 'requirements analyst',
      years: 0,
      profession: 'processer & analys'
    },
    {
      name: 'infrastructure',
      years: 0,
      profession: 'processer & analys'
    },
    {
      name: 'growth',
      years: 0,
      profession: 'processer & analys'
    },
    {
      name: 'data analyst',
      years: 0,
      profession: 'processer & analys'
    },
    {
      name: 'application',
      years: 0,
      profession: 'processer & analys'
    },
  ];
  const benefits = [
    "Allergy - adapted office"
    , "Workplace not located in office landscape"
    , "Allocated time for further education"
    , "Balance between leisure and work"
    , "Car"
    , "bonus Model"
    , "Central office"
    , "Partnership"
    , "Own responsibility"
    , "Not interested in probation"
    , "Extra parental allowance"
    , "Fixed salary"
    , "Flexible working hours"
    , "trust Working"
    , "Freedom at work"
    , "wellness Contributions"
    , "health Insurance"
    , "Pets are allowed"
    , "career Opportunities"
    , "Koddagar"
    , "Collective agreements"
    , "Competitive salary"
    , "More than 25 days of vacation"
    , "Ability to work from home"
    , "Possibility to choose own equipment"
    , "Opportunity to work abroad"
    , "New technique"
    , "Want customer contact"
    , "Variable salary"
    , "Health insurance"
    , "Stable working situation"
    , "dental Insurance"
    , "Access to shower"
    , "Access to gym"
    , "Occupational"
    , "Extended support for parental leave"
    , "development Opportunities"
    , "Just want to work in -house"
  ]
  const handleSendDate = () => {
    companyCreateAnnounce(getCookie('token'), userData).then(res => {
      if (res.error) {
        return setError(res.error)
      }
      setUserData({
        city: '',
        workingRemotely: '',
        kindOfEmployment: '',
        priorityBenefits: [],
        profession: {
          name: '',
          years: 0,
          subProfessions: [{ name: '' }]
        },
      })
      setError('')
      handleClose()
    })
  }
  return (
    <div>
      <Modal
        aria-labelledby="add announce model"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h4>{error}</h4>
            <h2>Create Announce</h2>
            <>
              <FormControl className={classes.formControl}>
                <InputLabel>
                  Profession</InputLabel>
                <Select
                  value={profession.name}
                  onChange={handleChange}
                  name='profession'
                >
                  {professions && professions.map(({ name }, index) => <MenuItem key={index} value={name}>{name}</MenuItem>)}
                </Select>
              </FormControl>
              {profession.name &&
                <Autocomplete
                  multiple
                  autoSelect={true}
                  options={subProfessions.filter((index) => index.profession === profession.name)}
                  getOptionLabel={({ name }) => name}
                  value={profession.subProfessions}
                  name="subProfession"
                  ChipProps={{ clickable: false, deleteIcon: <span></span> }}
                  renderOption={({ name }) => (
                    <>
                      <Checkbox
                        name="subProfession"
                        color="primary"
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        onChange={handleChange}
                        value={name}
                        checked={profession && profession.subProfessions.map((ob, index) => ob.name).indexOf(name) !== -1}
                      />
                      {name}
                    </>
                  )}
                  style={{ width: 500 }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Sub professions"
                      fullWidth
                    />
                  )}
                />
              }
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend"> Kind of employment</FormLabel>
                <RadioGroup
                  name="kindOfEmployment"
                  value={kindOfEmployment}
                  className={classes.radioGroup}
                  onChange={handleChange}>
                  <FormControlLabel value="employment" control={<Radio color="primary" />} label="Employment" />
                  <FormControlLabel value="freelance" control={<Radio color="primary" />} label="Freelance" />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" className={classes.radioTable}> Interested in working remotely</FormLabel>
                <RadioGroup aria-label="workingRemotely" name="workingRemotely" value={workingRemotely} onChange={handleChange} className={classes.radioGroup}>
                  <FormControlLabel value={'yes'} control={<Radio color="primary" />} label={'Yes'} />
                  <FormControlLabel value={'no'} control={<Radio color="primary" />} label={'No'} />
                  <FormControlLabel value={'only remotely'} control={<Radio color="primary" />} label={'Only remotely'} />
                </RadioGroup>
              </FormControl>
              <TextField
                label="City"
                name="city"
                value={city}
                onChange={handleChange}
                variant="outlined"
                type="text"
                className={classes.formControl}
              />
              <Autocomplete
                multiple

                options={benefits}
                value={priorityBenefits}
                ChipProps={{ clickable: false, deleteIcon: <span></span> }}
                getOptionLabel={option => option}
                renderOption={(option) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      name="priorityBenefits"
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      value={option}
                      onChange={handleChange}
                      disabled={priorityBenefits.length === 8 && priorityBenefits.indexOf(option) === -1}
                      checked={priorityBenefits.indexOf(option) !== -1}
                    />
                    {option}
                  </React.Fragment>
                )}
                style={{ width: 500 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Benefits"
                    fullWidth
                  />
                )}
              />
            </>
            <div className={classes.formControl} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button style={{ marginRight: 10 }} variant="outlined" color="secondary" onClick={handleClose}>Cancel</Button>
              <Button variant="outlined" color="primary" disabled={Object.values(userData).map(value => typeof value === 'object' ? Array.isArray(value) ? !!value.length : !!value.subProfessions.length : !!value).indexOf(false) !== -1}
                onClick={handleSendDate}
              >Send</Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div >
  )
}
export default AddAnnounceModal;