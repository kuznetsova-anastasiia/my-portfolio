import myPhoto from '../images/my-photo.png';
import '../styles/about.scss';
import { Contacts } from './Contacts';

export const About = () => {
  return (
    <section className='about'>
      <article className='about__info'>
        <h1 className='about__title'>
          Hi there! I&apos;m Anastasiia, a Full-stack Developer with 1 year of experience
        </h1>

        <p className='about__summary'>
          I have a strong passion for developing highly responsive and interactive web applications, using cutting-edge tools and frameworks.
        </p>

        <Contacts />
      </article>

      <img
        src={myPhoto}
        alt='Anastasiia Kuznetsova'
        className='about__image'
      />
    </section>
  );
}