import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import { useRef } from 'react';

import { IoIosArrowUp } from "react-icons/io";

import { TopHeader, FooterSection, MyForm, PrivateRoute, NotFound, AboutUs} from './components';
import { Home, IeltsPage } from './pages';

//Style
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'

function App() {

  const toTop = useRef(null);

  window.addEventListener("scroll", () => {
    if(window.pageYOffset > 500){
      toTop.current.classList.add('active')
    }else{
      toTop.current.classList.remove('active')
    }
  })

  return (

    
    
      <BrowserRouter>

        <Element id="header"><TopHeader /></Element>


        <Routes>
        <Route path='*' element={<NotFound />} />

              <Route path="/" element={<Home/>} />
              <Route path="/ielts" element={<IeltsPage/>} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/signup' element={<MyForm name='signup' />} />
              <Route path='/login' element={<MyForm name='login' />} />
              <Route path='forgot-password' element={<MyForm name='forgot-password' />} />

              <Route element={<PrivateRoute />}>
                <Route path='/dashboard' element={<MyForm name='dashboard' />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path='/update-profile' element={<MyForm name='update-profile' />} />
              </Route>


        </Routes>

        <a id="scroll-top" href='#' ref={toTop}><IoIosArrowUp /></a>
        
        <Element id="footer"><FooterSection /></Element>
        {/* <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> */}

      </BrowserRouter>
  );
}

export default App;
