import '../styles/projectList.scss';
import { Project } from "./Project";
import moviesApp from '../images/movies-app.png';
import niceStore from '../images/nice-store.png';
import todoApp from '../images/todo-app.png';
import figmaLand from '../images/figma-land.png';
import theMet from '../images/the-met.png';

export const ProjectList = () => {
  return (
    <section id='projects' className='project-list'>
      <Project
        title='Movies Entertainment App'
        info='The Movies Entertainment App is a full-stack movie and TV series entertainment application. The aim of this project was to practice full-stack development skills and to learn new interesting technologies. With this app, users can easily find a movie or TV series, watch a trailer, leave a comment, and add it to their bookmarks. They can also change the theme of the app.'
        image={moviesApp}
        link='https://github.com/ThreeTriumphCoders/movies-entertainment-app'
      />

      <Project
        title='Nice Store'
        info='Nice Store is platform that offers a wide range of gadgets for tech enthusiasts. Our goal is to provide an enjoyable shopping experience where users can explore and purchase their favorite gadgets with ease. This project focuses on both the frontend and backend aspects, creating a full-stack application that covers all necessary functionalities. Here you can see the Front-end side.'
        image={niceStore}
        link='https://github.com/SolBingers/nice_store'
      />

      <Project
        title='Todo App'
        info='The Todo List App is a dynamic web application built using React, SCSS, Material UI and TypeScript. It allows users to create new tasks, mark them as completed, delete them from the list and change their titles.
        The application uses API to store the tasks, so the user&apos;s data will persist even if they close and reopen the browser.
        The design of the application is minimalistic and user-friendly, with a simple layout and clear visual cues for completed and active tasks.'
        image={todoApp}
        link='https://github.com/kuznetsova-anastasiia/todo-app'
      />

      <Project
        title='Figma Land'
        info='The Landing Page Project is a static website built using React, SCSS, Chakra UI and JavaScript. It features a responsive and dynamic design, with a header section showcasing the agency&apos;s logo and a navigation menu, a hero section with a background image and a call-to-action button, and several content sections highlighting the agency&apos;s destinations and services.
        The website also includes a smooth scrolling effect, where clicking on a navigation link will scroll smoothly to the corresponding section on the page.
        The JavaScript code for the smooth scrolling effect and the navigation menu toggle button were written from scratch.'
        image={figmaLand}
        link='https://github.com/kuznetsova-anastasiia/landing-project'
      />

      <Project
        title='The Met'
        info='The MET Landing Page is a static website built using HTML, SCSS and JavaScript. It features a clean and modern design, with a header section showcasing the museum&apos;s logo and a navigation menu, a hero section with a full-screen background image and a call-to-action button, and several content sections highlighting the museum&apos;s collections and events.
        The website is fully responsive and optimized for different screen sizes, from desktop to mobile devices.'
        image={theMet}
        link='https://github.com/kuznetsova-anastasiia/met-landing'
      />
    </section>
  );
}