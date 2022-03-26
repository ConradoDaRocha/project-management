import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome de projeto:"
                name="name"
                placeholder="Insira o nome do projeto"
                />
            <Input
                type="number"
                text="Orçamento do projeto:"
                name="budget"
                placeholder="Insira o orçamento total"
                />
            <Select
                name="categoty_id"
                text="Selecione a categoria"
            
            />
           <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm