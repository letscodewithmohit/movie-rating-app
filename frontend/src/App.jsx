import {AuthProvider} from '././context/authContext/AuthProvider'
import {ModalProvider} from '././context/modalContext/ModalProvider'
import AuthModal from './pages/auth/AuthModal';

import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
<AuthProvider>
<ModalProvider>
 <AppRoutes />
 <AuthModal/>
</ModalProvider>
</AuthProvider>
     
  );
};

export default App;
