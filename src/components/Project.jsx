/* eslint-disable react/prop-types */
import '../styles/project.scss';
import arrow from '../images/arrow.svg';

export const Project = ({
  title,
  info,
  image,
  link
}) => {
  return (
    <article className='project'>
      <header className='project__header'>
        <div className='project__info'>
          <h2 className='project__title'>
            {title}
          </h2>

          <p className='project__about'>
            {info}
          </p>
        </div>

        <a href={link} className='project__link' target='_blank' rel="noreferrer">
          <img
            src={arrow}
            alt='Link'
            className='project__icon'
          />
        </a>
      </header>

      <img
        src={image}
        alt='Project Screen'
        className='project__image'
      />
    </article>
  );
}