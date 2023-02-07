//routing
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

//local components
import InvoicesListPage from './Components/Invoices/InvoicesList/InvoicesListPage/InvoicesListPage';
import AccountsListPage from './Components/Accounts/AccountsList/AccountsListPage';
import Account from './Components/Accounts/AccountView/Account';
import TrackersListPage from './Components/Trackers/TrackersList/TrackersListPage';
// import Tools from './Tools/Services';
import Services from './Tools/Services';
import Navbar from './Components/Navigation/Navbar/Navbar';
import Sidenav from './Components/Navigation/Sidenav/Sidenav';

//useState
import { useState } from 'react';


const Router = () => {

    return ( 
    <div className="router">
        <BrowserRouter>
  
          <Sidenav />
          <Navbar />
  
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/invoices" element={<InvoicesListPage />} />
            <Route path="/accounts" element={ <AccountsListPage />} />
            <Route path="/trackers" element={<TrackersListPage />} />
            <Route path="/accounts/:accountid" element={
              <Account 
                // account={account} 
                // invoices={filterCompanyInvoices()}
                // trackers={filterCompanyTrackers()} 
                // onSaveEditedAddress={handleSaveEditedAddress}
                // onSaveEditedBank={handleSaveEditedBank}
                // onSaveEditedAdmin={handleSaveEditedAdmin}
              />
            } />
          </Routes>
  
        </BrowserRouter>
    </div>
     );
}
 
export default Router;