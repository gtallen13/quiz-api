import Page from '../UX/Page/Page';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'; 
const splashStyle = {
  backgroundColor:'#000',
  color:'#fff',
  display:"flex",
  alignItems:'center',
  justifyContent:'center',
  flex:1,
  flexDirection:'column',
  minHeight:'100vh'
}
const Splash = ()=>{
  const {email} = useSelector((state)=>state.security)
  const routeChanger = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      if (email){
        routeChanger('/contribuciones')
      }
      else{
        routeChanger('/Login')
      }
    },2000)
  },[])
  return(
    <Page>
      <section style={splashStyle}>
       <h2>Medexp V1.0</h2>
       <h3>Loading ...</h3>
      </section>
    </Page>
  )
}

export default Splash;
