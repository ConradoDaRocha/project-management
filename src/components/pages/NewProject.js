import { useHistory } from 'react-router-dom'
import ProjectForm from '../projects/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const history = useHistory()

    function createPost(project) {
        // initialize management nd services
        project.management = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': "aplication/json",
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // redirect
                history.push('/projects', {message: 'Projeto criado com sucesso!' })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para adicionar serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}
export default NewProject