import { Container, Description, Name, Username } from './style'


export const  UserDetails = props => (
    <Container >
        <Name>{props.name}</Name>
        <Username>{props.login}</Username>
        <Description>{props.bio}</Description>
    </Container>

)