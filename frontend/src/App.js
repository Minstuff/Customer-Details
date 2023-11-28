import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Customer from './Components/Customer';
import CreateCustomer from './Components/CreateCustomer';
import UpdateCustomer from './Components/UpdateCustomer';
import SearchCustomer from './Components/SearchCust';

function App(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Customer />}></Route>
                <Route path='/createCust' element={<CreateCustomer />}></Route>
                <Route path='/updateCust/:id' element={<UpdateCustomer />}></Route>
                <Route path='/searchCust' element={<SearchCustomer />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;