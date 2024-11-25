function About() {
  return (
    <>
      <section>
        <h3 className="text-xl font-bold my-4 text-red-600">Introduccion</h3>
        <p className="text-2xl text-gray-400">
          Me llamo <span className="text-red-600 font-bold">Cristian</span>, soy
          <span className="font-semibold"> ingeniero electrónico</span>,
          apasionado por la
          <span className="font-semibold"> tecnología</span> y especializado en
          el desarrollo de
          <span className="font-semibold"> aplicaciones móviles</span> y
          <span className="font-semibold"> web</span>. Cuento con
          <span className="font-semibold"> 2 años de experiencia</span> en el
          área.
        </p>
        <p className="text-2xl text-gray-400">
          Tengo proyectos con <span className="font-semibold">MySQL</span> ,{" "}
          <span className="font-semibold">PostgreSQL</span>,
          <span className="font-semibold">MongoDB</span> y{" "}
          <span className="font-semibold">Firebase</span>.
        </p>
      </section>
    </>
  );
}

export default About;
