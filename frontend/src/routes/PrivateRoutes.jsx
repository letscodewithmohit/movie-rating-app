import  { useContext, useEffect } from 'react'
import {AuthContext} from '../context/authContext/AuthContext'
import {ModalContext} from '../context/modalContext/ModalContext'

const PrivateRoutes = ({children}) => {

    const {isAuthenticated} = useContext(AuthContext);
    const {setAuthModalOpen } = useContext(ModalContext);

    
  useEffect(()=>{
  if(!isAuthenticated ){
     setAuthModalOpen(true)
  }else{
    setAuthModalOpen(false)
  }
  },[isAuthenticated,setAuthModalOpen])

   if (!isAuthenticated) {
    // show a small message while modal is open (avoids a blank page)
    return (
      <div className="p-6 text-center">
        <p className="mb-2">You need to log in to view this page.</p>
        <p className="text-sm">Login dialog has been opened.</p>
      </div>
    );
  }

  return children;
}

export default PrivateRoutes