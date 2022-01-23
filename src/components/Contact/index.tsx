import { DecoratedTitle } from '../DecoratedTitle';
import { Container, Content, ContactContent, ContactForm } from './styles';

export function Contact() {
  return (
    <Container>
      <DecoratedTitle label='Contato' />
      <Content>
        <ContactContent>
          <div className="contact-items">
            <div>
              <h3>TELEFONES</h3>
              <span>+55(11) 3088-0757</span>
            </div>
            <div>
              <h3>E-MAIL</h3>
              <span>renee@reneetrajar.com.br</span>
            </div>
          </div>
          <div className='contact-button'>
            <h3>ATENDIMENTO PERSONALIZADO</h3>
            <button className='contact-link'>
              <span>Clique aqui!</span>
            </button>
          </div> 
        </ContactContent>
        <ContactForm>
        <div>
          <label>Nome</label>
          <input type="text" placeholder='Nome'/>
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" placeholder='E-mail'/>
        </div>
        <div>
          <label>Mensagem</label>
          <textarea placeholder='Mensagem'/>
        </div>

        <button type='submit'>Enviar Mensagem</button>
        </ContactForm>
      </Content>
    </Container>
  );
};