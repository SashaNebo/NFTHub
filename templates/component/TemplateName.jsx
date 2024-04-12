import cn from './TemplateName.module.scss'
import { Container } from '../Container'

const TemplateName = () => {
  
  return (
    <div className={cn['templateName']}>
      <Container>
        <h1>TemplateName</h1>
      </Container>
    </div>
  )
}

export { TemplateName }