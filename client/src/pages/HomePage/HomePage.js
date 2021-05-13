import React from 'react';
import NavbarWithUser from '../../components/NavbarWithUser/NavbarWithUser';
import MiniFooter from '../../components/MiniFooter/MiniFooter';
import Home from '../../containers/Home/Home';
import PageContainer from '../../components/PageContainer/PageContainer';

const HomePage = (props) => {
    
    return(
        <div>
            <NavbarWithUser userName={props.location.state.username} />
            <PageContainer>
                <Home user={props.location.state.user}/>
            </PageContainer>
            <MiniFooter />
        </div>
    );
}


export default HomePage;