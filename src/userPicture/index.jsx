 import { Container, ProfilePicture } from './styled'
 
 
 export const UserPicture = props => (
      
    <Container>
        <ProfilePicture src={props.url} alt={props.alternativeText}></ProfilePicture>
    </Container>


)