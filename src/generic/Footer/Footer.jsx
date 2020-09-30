import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';

const StyledFooter = styled.section`
width:100%;

background-color: ${({theme}) => theme.colors.black};
color:  ${({theme}) => theme.colors.darkenWhite};
& > div{
height:100%;
display:flex;
justify-content: center;
align-items: flex-end;
padding:20px;
span{
    margin-left:15px;
    font-size:0.9rem;
    color:grey;
}
}
`

const Footer = () => {
    return ( <StyledFooter>

        <Container>
        © Driver-Tips <span > | by Szymon Stępień</span>
        
        </Container>
    </StyledFooter> );
}
 
export default Footer;