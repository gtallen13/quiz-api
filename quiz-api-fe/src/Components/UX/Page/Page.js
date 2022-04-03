
import './Page.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Page = ({header: headerComponent, footer: footerComponent, children})=>{
  const hasHeader = headerComponent && true;
  const hasFooter = footerComponent && true;
  let pageClassNames = ['page_container'];
  if (!hasHeader) pageClassNames.push('no_header');
  if (!hasFooter) pageClassNames.push('no_footer');

  const {email} = useSelector((state)=> state.security)
  const dispatch = useDispatch();
  const rutas = useNavigate();


  const clickLogout = ()=> {
    dispatch({type:"USER_LOGOUT"});
    rutas ("/login")

  }
  return (
    <section className={pageClassNames.join(' ')}>
      {
      hasHeader &&
      <header className="page_header">
        {headerComponent} 
        { email && 
        <div>
          <span>{email}</span>
          <button onClick={clickLogout}>Logout</button>
        </div>
        }
      </header>
      }
      <main>
        {children}
      </main>
      {
        hasFooter &&
        <footer className="page_footer">
          {footerComponent}
        </footer>
      }
    </section>
  );
  
}

export default Page;
