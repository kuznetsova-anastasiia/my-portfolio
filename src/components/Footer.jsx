import '../styles/footer.scss';
import { Contacts } from "./Contacts";
import up from '../images/up.svg';

export const Footer = () => {
  return (
    <footer id='contacts' className='footer'>
      <div>
        <h2 className='footer__title'>
          Want to work together?
        </h2>

        <p className='footer__message'>
          Feel free to contact me!
        </p>

        <Contacts />
      </div>

      <button className='footer__up-button' onClick={() => window.scrollTo(0, 0)}>
        <img src={up} alt='Go Up' />
      </button>
    </footer>
  );
}