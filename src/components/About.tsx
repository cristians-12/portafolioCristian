import profile from '../assets/images/1.png'

function About() {
  return (
    <section className='lg:flex justify-around items-center'>
      <section className='lg:w-[100%]'>
        <h3 className="text-xl font-bold my-4 text-red-600">Introduccion</h3>
        <p className="lg:text-2xl text-gray-400">
          Me llamo <span className="text-red-600 font-bold">Cristian</span>, soy
          <span className="font-semibold"> ingeniero electrónico</span> apasionado por la
          <span className="font-semibold"> tecnología</span> y especializado en
          el desarrollo de
          <span className="font-semibold"> aplicaciones móviles</span> y
          <span className="font-semibold"> web</span>. Cuento con
          <span className="font-semibold"> 4 años de experiencia</span> en el
          área de la tecnología y me enfoco en desarrollar código limpio, escalable y mantenible utilizando principios SOLID y
          aplicando siempre las mejores prácticas de programación para
          garantizar calidad.
        </p>
        <br />
        <p className="lg:text-2xl text-gray-400">
          Tengo proyectos y experiencia con{" "}
          <span className="font-semibold">MySQL</span>,{" "}
          <span className="font-semibold">PostgreSQL</span>,{" "}
          <span className="font-semibold">React Native</span>,{" "}
          <span className="font-semibold">Kotlin</span>,{" "}
          <span className="font-semibold">MongoDB</span> y{" "}
          <span className="font-semibold">Firebase</span>. También he trabajado
          con <span className="font-semibold">Node.js</span>,{" "}
          <span className="font-semibold">Express</span>,{" "}
          <span className="font-semibold">React</span>, y{" "}
          <span className="font-semibold">Next.js</span> desarrollando
          aplicaciones escalables y de alto rendimiento. Cuento tambien con experiencia en la implementación de{" "}
          <span className="font-semibold">APIs REST</span> y{" "}
          <span className="font-semibold">GraphQL</span> garantizando una
          comunicación eficiente entre cliente y servidor.
        </p>
      </section>
      {/* <figure className='lg:w-[30%]'>
        <img className='w-full object-cover' src={profile} alt="" />
      </figure> */}
    </section>
  );
}

export default About;
