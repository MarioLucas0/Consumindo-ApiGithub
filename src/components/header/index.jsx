import React, { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { context } from '../../context';
import client from '../../services/client';
import {
    HeaderInput, HeaderInputContainer, HeaderSearchButton, HeaderSection,
    HeaderTitle
} from './styles';

const Header = () => {
    const ctx = useContext(context)
    
   const [searchValue, setSearchValue] = useState('')

   async function getUserData() {

    try {
        const response = await client.get(`/${searchValue}`)
        const repos = await client.get(`/${searchValue}/repos`)
        
        ctx.setRepos(repos.data)
         ctx.setUserData(response.data)
    } catch (error) {
        console.log(error) 
    }
   }

    return (
    <HeaderSection>
        <HeaderTitle>Github Profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
            
            <HeaderSearchButton onClick={getUserData}>
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
    )
};

export default Header;