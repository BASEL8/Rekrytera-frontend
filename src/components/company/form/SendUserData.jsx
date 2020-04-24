import React, { useEffect } from 'react';
import { updateCompanyProfile } from '../../../actions/companyAuth'
import { getCookie } from '../../../actions/auth'
import CircularProgress from '@material-ui/core/CircularProgress';
const SendUserData = ({ setError, setActiveStep, userData }) => {
  useEffect(() => {
    let token = getCookie('token')
    console.log(userData)
    updateCompanyProfile(token, userData).then(res => {
      console.log(res)
      if (res.error) {
        setActiveStep(2)
        return setError(res.error)
      }
      setActiveStep(2)
      setError('')
    })
  }, [setActiveStep, setError, userData])
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress /> :
    </div>
  )
}
export default SendUserData;