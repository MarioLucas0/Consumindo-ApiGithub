import { ListOfReposContainer, Repo, Section, Title } from './styles';


const ReposContainer = props => {
    return (
        <Section>
            <Title>Repositorios de {(props.name)?.split('')[0]}</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))};
            </ListOfReposContainer>
        </Section>
    )
}

export default ReposContainer;