import {AuthProvider} from '././context/AuthProvider'
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
<AuthProvider>
 <AppRoutes />
</AuthProvider>
     
  );
};

export default App;
