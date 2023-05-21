import '../styles/contacts.scss';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import telegram from '../images/telegram.svg';

export const Contacts = () => {
  return (
    <div className='contacts'>
      <a href='mailto:anastasiia.kzntsva@gmail.com' className='contacts__button-link'>
        Contact me
      </a>

      <a href='https://www.linkedin.com/in/anastasiia-kuznetsova-fullstack/' className='contacts__social' target='_blank' rel="noreferrer">
        <img src={linkedin} alt='LinkedIn' />
      </a>
      <a href='https://github.com/kuznetsova-anastasiia' className='contacts__social' target='_blank' rel="noreferrer">
        <img src={github} alt='GitHub' />
      </a>
      <a href='https://t.me/kzntsva_ana' className='contacts__social' target='_blank' rel="noreferrer">
        <img src={telegram} alt='Telegram' />
      </a>
    </div>
  );
}