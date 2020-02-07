import React from 'react';
import styles from '../ProjectsComponents/Project.module.scss';
import HeaderPic from '../../../Design Elements/Project1-Acai/selected.jpg';
import AcaiLogo from '../../../Design Elements/Project1-Acai/logo-elacai-for-project-01.png';
import Button from '../Buttons/ButtonOutgoing/ButtonOutgoing';
import AcaiLogoRulers from '../../../Design Elements/Project1-Acai/elacai-rulers.jpg';
import PrintMockup from '../../../Design Elements/Project1-Acai/logo-print-mockup.jpg';
import Font from '../../../Design Elements/Project1-Acai/Font.jpeg';
import Print from '../../../Design Elements/Project1-Acai/branding-elacai-mockup.jpg';
import Color from '../../../Design Elements/Project1-Acai/Acai-Color-Palette.jpg';
import Cards from '../../../Design Elements/Project1-Acai/bc-mockup-foracai.jpg';
import Website from '../../../Design Elements/Project1-Acai/Acai-abonewsite-new-sm.jpg';
import Mobile from '../../../Design Elements/Project1-Acai/iPhone-mockup-sm.png';
import Facebook from '../../../Design Elements/Project1-Acai/Facebook-page-elacaieuorpe.png';
import Insta from '../../../Design Elements/Project1-Acai/Instagram-Elacaieurope-mockup.png';
import Random from '../ProjectsComponents/BrowseProjects';
import Next from '../ProjectsComponents/NextProject';
import ProjectTop from '../ProjectsComponents/ProjectTop';

const Project1 = () => (
  <div>
    <ProjectTop heading="El Açai Europe" subHeading="Sharing the Spirit of Acai" pic={HeaderPic} altText="" />
    <div className={styles.container} style={{ marginBottom: '3rem', marginTop: '1rem' }}>
      <div className={styles.floatright}>
        <h2 className={styles.heading}>El Açai Europe</h2>
        <p className={styles.text}>
          A company located in Austria responsible for distributing Premium Organic Frozen Açai all around Europe.
        </p>
        <div className={styles.floatright}>
          <Button name="Link to site" link="https://elacai.de" />
        </div>
      </div>
    </div>
    <div className={styles.container} style={{ backgroundColor: 'rgb(37,7,42)' }}>
      <section className={styles.content}>
        <div className={styles.left} style={{ padding: '10% 2%' }}>
          <h2 className={styles.heading} style={{ color: 'white' }}>
            Building the Identity
          </h2>
          <h3 style={{ color: 'white' }}>The goal: Unique with a high visual impact</h3>
          <p style={{ color: 'white', fontWeight: 200 }}>
            Since the Acai berry is relatively new in Europe the logo should have a high visual impact to attract the
            curiosity of the market, it should represent a new flavour, a new experience and the at the same time retain
            its brazilian roots with the european public in mind.
          </p>
        </div>
        <div className={styles.right}>
          <img className={styles.acailogo} src={AcaiLogo} alt="El Acai Europe Logo Brand Identity" />
        </div>
      </section>
    </div>
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.left}>
          <svg
            style={{ padding: '15%' }}
            enableBackground="new 0 0 374.143 371.22"
            height="371.22"
            viewBox="0 0 374.143 371.22"
            width="18rem"
          >
            <path
              d="m299.221 210.578c.264-2.51.401-5.609.498-8.168 13.928-7.613 28.569-15.289 42.505-22.883 2.004-1.094 3.112-2.23 2.844-4.441-.725-5.936-1.588-11.009-2.272-17.612-14.304 10.164-29.305 19.9-43.497 29.986-.35-3.594-1.014-7.509-1.693-10.999 12.785-10.543 26.4-21.242 39.198-31.771 1.93-1.586 2.977-2.673 2.086-5.007-2.486-6.531-5.136-12.099-7.739-19.353-12.532 13.311-25.861 25.804-38.306 39.023-1.43-3.871-2.756-7.47-4.581-11.128 10.887-13.023 23.186-26.309 34.088-39.323 1.759-2.102 1.048-3.952-.607-6.214-4.654-6.377-7.94-11.838-13.59-18.353-9.989 15.818-20.88 31.073-30.81 46.797-3.337-4.455-6.558-8.116-10.502-12.032 8.162-15.605 17.886-32.332 26.062-47.932 1.037-1.979-.419-3.35-2.187-4.83-9.19-7.684-18.979-14.442-30.002-20.174-5.565 17.955-12.421 36.707-17.981 54.649-4.603-2.672-9.604-4.924-14.587-6.94 3.778-18.44 9.047-37.809 12.833-56.287-12.696-4.529-25.109-6.3-39.345-8.369 0 0-7.881-.902-11.591-.887-.994.006-1.994.029-2.977.066-.979-.037-1.98-.061-2.974-.066-3.711-.016-11.591.887-11.591.887-14.236 2.069-26.651 3.84-39.347 8.369 3.786 18.479 7.57 36.933 11.35 55.373-4.986 2.016-9.793 4.373-14.396 7.045-5.561-17.942-11.121-35.885-16.687-53.84-11.023 5.731-20.812 12.49-30.001 20.174-1.77 1.479-1.851 2.509-.813 4.488 8.177 15.6 16.342 31.202 24.506 46.807-3.945 3.916-7.604 8.117-10.941 12.572-9.931-15.725-19.881-31.485-29.87-47.303-4.812 6.878-9.258 13.406-13.911 19.784-1.651 2.262-1.337 3.688.421 5.789 10.899 13.014 21.791 26.033 32.677 39.057-1.826 3.658-3.464 7.43-4.892 11.301-12.445-13.219-24.922-26.473-37.454-39.783-2.602 7.254-4.883 13.867-7.368 20.398-.891 2.334-.371 3.654 1.562 5.24 12.798 10.529 25.591 21.066 38.379 31.609-.679 3.49-1.201 7.043-1.552 10.637-14.191-10.086-28.422-20.205-42.724-30.369-.686 6.604-1.231 12.557-1.954 18.492-.27 2.211.428 3.375 2.431 4.469 13.936 7.594 27.863 15.203 41.791 22.816.095 2.559.269 5.098.53 7.607-14.99-7.234-30.021-14.494-45.119-21.781.406 5.334.826 10.104 1.11 14.883.118 1.984.944 2.932 2.882 3.621 14.363 5.131 28.719 10.279 43.074 15.436.605 2.809 1.315 5.576 2.126 8.299-15.312-4.82-30.657-9.654-46.065-14.512.875 3.57 1.695 6.535 2.308 9.539.382 1.875 1.357 2.605 3.214 3.027 14.429 3.273 28.842 6.615 43.256 9.951.609 1.602 1.254 3.178 1.934 4.742-15.293-3.35-30.62-6.707-46.014-10.086.605 1.857 1.016 3.221 1.5 4.564 3.05 8.426 3.07 8.303 11.926 9.352 12.191 1.445 24.381 2.926 36.568 4.414.83 1.551 1.694 3.084 2.595 4.592-15.103-1.625-30.27-3.252-45.55-4.896 1.659 3.244 2.934 5.953 4.439 8.521.34.58 1.471.959 2.249.979 14.089.428 28.178.831 42.268 1.23.825 1.48 1.683 2.939 2.574 4.376-14.098.546-28.25 1.09-42.512 1.64v-.101h-1.222-.611v.101h.674c28.262 45.073 78.379 75.049 135.504 75.049 57.117 0 106.423-29.986 134.688-75.049h-.241-1.531c-14.078-.543-29.748-.453-43.667-.992.899-1.448 2.835-3.59 3.667-5.083 13.9-.394 29.303-.749 43.205-1.171.777-.02 3.09-.588 3.429-1.168 1.505-2.568 2.475-5.038 4.136-8.282-15.223 1.637-32.351 3.304-47.39 4.922.243-.507.483-.982.719-1.494.577-1.006.683-1.107 1.229-2.131 12.189-1.488 25.942-4.43 38.177-5.456 11.077-.93 9.704-.895 12.754-9.32.485-1.344.905-3.002 1.513-4.859-15.396 3.379-32.661 7.385-47.951 10.734.679-1.564 1.313-2.943 1.922-4.545 14.415-3.336 29.936-7.26 44.365-10.533 1.856-.422 3.535-1.152 3.916-3.027.422-2.062 1.101-5.142 2.236-9.771-15.409 4.857-32.121 10.174-47.429 14.994.81-2.723 1.418-5.429 2.024-8.237 14.355-5.156 29.546-10.617 43.907-15.748 1.938-.689 3.324-1.8 3.444-3.784.283-4.779.563-9.541.972-14.875-15.099 7.287-31.231 15.329-46.221 22.564z"
              fill="#311535"
              opacity=".9"
            />
            <g fill="none" stroke="#ed1c24" strokeMiterlimit="10">
              <ellipse cx="186.492" cy="198.085" rx="113.309" ry="112.027" strokeWidth="1.0002" />
              <path d="m240.983 37.587-53.7 228.464" strokeWidth="1.492" />
              <path d="m260.717 46.165-73.434 219.886" strokeWidth="1.492" />
              <path d="m187.283 266.051 128.882-237.572" strokeWidth="1.492" />
              <path d="m187.283 266.051 158.161-237.572" strokeWidth="1.492" />
              <path d="m187.283 266.051 158.135-183.849" strokeWidth="1.492" />
              <path d="m187.283 266.051 158.161-160.09" strokeWidth="1.492" />
              <path d="m187.283 266.051 158.161-127.558" strokeWidth="1.492" />
              <path d="m187.554 266.444 155.242-108.971" strokeWidth="1.492" />
              <path d="m187.283 266.051 158.161-88.908" strokeWidth="1.492" />
              <path d="m187.283 266.051 158.161-77.292" strokeWidth="1.492" />
              <path d="m344.279 204.531-156.725 61.913" strokeWidth="1.492" />
              <path d="m187.104 265.57 155.421-49.905" strokeWidth="1.492" />
              <path d="m339.739 227.467-152.456 38.584" strokeWidth="1.492" />
              <path d="m187.104 266.674 146.425-21.215" strokeWidth=".9918" />
              <path d="m187.072 266.674 139.532-6.707" strokeWidth=".9918" />
              <path d="m187.071 266.599 134.966 1.242" strokeWidth=".9918" />
              <path d="m187.071 266.599 150.966-33.434" strokeWidth=".9918" />
              <ellipse cx="187.071" cy="185.61" rx="158.347" ry="157.153" strokeWidth=".9918" />
              <path d="m187.283 266.051 143.752-14.906" strokeWidth=".9918" />
              <path
                d="m107.991 342.741h-79.29v-157.131h-28.102v185.011h111.23c-2.534-7.704-3.924-15.927-3.924-24.479 0-1.141.037-2.272.086-3.401z"
                strokeWidth="1.1985"
              />
              <path d="m28.701 28.479h158.371v-27.88h-186.473v185.011h28.102z" strokeWidth="1.1985" />
              <path
                d="m345.444 342.741h-81.025c.048 1.129.086 2.261.086 3.401 0 8.552-1.39 16.774-3.924 24.479h112.963v-185.011h-28.1z"
                strokeWidth="1.1985"
              />
              <path d="m187.072.599v27.88h158.372v157.131h28.099v-185.011z" strokeWidth="1.1985" />
              <path d="m28.701 28.479h158.372v157.131h-158.372z" strokeWidth="1.0179" />
              <path d="m187.072 28.479h158.372v157.131h-158.372z" strokeWidth="1.0179" />
              <path
                d="m187.072 267.863c41.705.455 75.576 33.501 77.346 74.878h81.025v-157.131h-158.371z"
                strokeWidth="1.0179"
              />
              <path
                d="m186.205 267.841c.291 0 .578.019.868.021v-82.252h-158.372v157.131h79.29c1.782-41.665 36.11-74.9 78.214-74.9z"
                strokeWidth="1.0179"
              />
              <path
                d="m187.072 342.741h-79.082c-.048 1.129-.086 2.261-.086 3.401 0 8.552 1.39 16.774 3.924 24.479h75.243v-27.88z"
                strokeWidth="1.1985"
              />
              <path
                d="m264.418 342.741h-77.346v27.88h73.508c2.534-7.704 3.924-15.927 3.924-24.479 0-1.141-.037-2.272-.086-3.401z"
                strokeWidth="1.1985"
              />
              <path
                d="m186.205 267.841c-42.104 0-76.431 33.234-78.214 74.899h79.082v-74.878c-.291-.002-.577-.021-.868-.021z"
                strokeWidth="1.0179"
              />
              <path d="m187.072 267.863v74.878h77.346c-1.77-41.377-35.641-74.423-77.346-74.878z" strokeWidth="1.0179" />
            </g>
          </svg>
        </div>
        <div className={styles.right}>
          <p className={styles.paragraph}>
            To represent its premium superfood and grade ‘A’ special feature, I decided to create a halo around the logo
            which would reflect its uniqueness, guaranteeing us in a graphic way its high nutritional value and quality.
          </p>
        </div>
      </section>
    </div>
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.left}>
          <p className={styles.paragraph}>
            The main graphic was inspired by the indigenous people of the Amazon, of which the companies feel extremely
            responsible, as well as being used to represent the true spirit of El Açai: encouraging a healthy and
            sustainable lifestyle.
          </p>
        </div>
        <div className={styles.right}>
          {' '}
          <img className={styles.acailogorules} src={AcaiLogoRulers} alt="El Acai Europe Logo Brand Identity" />
        </div>
      </section>
    </div>
    <img src={PrintMockup} alt="El Acai Print Mockup" />
    <div className={styles.container}>
      <section className={styles.content} style={{ marginTop: '5rem' }}>
        <div className={styles.left}>
          <img src={Font} alt="El Acai Europe Fonts" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.heading}>Fonts</h2>
          <h3>Is all about the fun!</h3>
          <p style={{ fontWeight: 200 }} className="measure-narrow">
            Bold, simple and original. The selected font was used mainly to enhance the nature of the product and its
            playful tone increases reliability of the brand.
          </p>
        </div>
      </section>
    </div>
    <div className={styles.container}>
      <p className="tc" style={{ fontWeight: 200, marginTop: '1rem' }}>
        All the type faces are easy to combine and ready to be used for any printed and online material.
      </p>
    </div>
    <div className={styles.container}>
      <img style={{ marginTop: '2rem' }} src={Print} alt="El Acai Europe Print Promotion Flyer Business Card" />
    </div>
    <div className={styles.container} style={{ marginTop: '2rem' }}>
      <section className={styles.content}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Colour Palette</h2>
          <h3 style={{ marginBottom: '.3rem' }}>Welcoming a new color</h3>
          <h3>#welovepurple</h3>
        </div>
        <div className={styles.right}>
          <p className="measure-narrow" style={{ fontWeight: 200 }}>
            Complementing the strong purple characteristic of the Acai I created a bright color palette using green
            which reflects the origin of this small berry and yellow as a representative of clean energy and healthy
            living.
          </p>
        </div>
      </section>
    </div>
    <div className={styles.container} style={{ marginTop: '2rem', textAlign: 'center' }}>
      <img src={Color} alt="El Acai Europe Color Palette Sofia Moraes" />
      <p style={{ fontWeight: 200, marginTop: '2rem' }} className="tc">
        They also represent the core values of the company:
      </p>
      <h3 className="tc">
        <b>Sustainability | Quality | Happiness</b>
      </h3>
    </div>
    <img style={{ marginTop: '3rem' }} src={Cards} alt="El Acai Europe Business Cards" />
    <div className={styles.container} style={{ marginTop: '2rem' }}>
      <section className={styles.content}>
        <div className={styles.sticky}>
          <div className={styles.left}>
            <h2 className={styles.heading}>E-commerce for Desktop</h2>
            <h3 style={{ marginBottom: '.5rem' }}>Healthy had never been that delicious</h3>
            <p style={{ fontWeight: 200, marginTop: '2rem' }} className="measure-narrow">
              An easy way to get this delicious superfood to your doorstep! A user who signs up for a subscription gets
              incentives to help the world by using sustainable packaging and donating part of their sale to an
              organisation dedicated to protect the planet.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.overflow}>
            <img src={Website} alt="El Acai Europe Web Design Mobile Site" width="836px" />
          </div>
        </div>
      </section>
    </div>
    <div className={styles.container} style={{ marginTop: '5rem', backgroundColor: 'rgb(138,198,75)' }}>
      <section className={styles.content}>
        <div className={styles.left} style={{ textAlign: 'center' }}>
          <img src={Mobile} alt="El Acai Mobile Design Mockup Sofia Moraes" />
        </div>
        <div className={styles.right} style={{ textAlign: 'center' }}>
          <div className={styles.Mobilecenter}>
            <h2 className={styles.heading} style={{ color: 'white' }}>
              Mobile Design
            </h2>
            <h3 style={{ color: 'white' }}>A preview of the app :)</h3>
          </div>
        </div>
      </section>
    </div>
    <div className={styles.container}>
      <div className="tc">
        <div className={styles.containersm}>
          <p style={{ fontWeight: 200, marginTop: '5rem', marginBottom: '5rem' }} className="tc">
            What I really enjoyed about this project was that I could use my imagination freely to create media content
            for the brand. And of course, eat all the Acai I wanted in the meantime :D{' '}
          </p>
        </div>
      </div>
      <div className={styles.boxes}>
        <ul className={[styles.layout, styles.layoutleft].join(' ')}>
          <li className={styles.listitem}>
            <img className={styles.shadow} src={Facebook} />
          </li>
        </ul>
        <ul className={styles.layout}>
          <li className={styles.listitem}>
            <img className={styles.shadow} src={Insta} />
          </li>
        </ul>
      </div>
    </div>
    <Next link="/labalm" />
    <Random />
  </div>
);

export default Project1;

/*
<div className={styles.purplebg}>
      <div className={styles.container}>
        <div className="cf">
          <div class="fl w-100 w-50-ns" style={{ paddingTop: '20%' }}>
            <h2 style={{ color: 'white', marginBottom: '0.5rem' }}>
              <b>Building the Identity</b>
            </h2>
            <h3 style={{ color: 'white', fontWeight: 200 }}>The goal: Unique, high visual impact</h3>
            <p style={{ color: 'white', fontWeight: 200 }}>
              Since the Acai berry is relatively new in Europe the logo should have a high visual impact to attract the
              curiosity of the market, it should represent a new flavour, a new experience and the at the same time
              retain its brazilian roots with the european public in mind.
            </p>
          </div>
          <div className="fl w-100 w-50-ns">
            <img className={styles.acailogo} src={AcaiLogo} alt="El Acai Europe Logo Brand Identity" />
          </div>
        </div>
      </div>
    </div>
*/
