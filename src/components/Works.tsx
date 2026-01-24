import { works } from "@/constants/works";
import Card from "./cards/Card";

function Works() {
  return (
    <section className="my-[50px] w-[98vw] lg:px-[5%]">
      <h3 className="text-3xl font-bold text-red-600 my-10">
        Algunos de mis proyectos:
      </h3>
      <article className="flex gap-10 flex-col justify-center lg:flex-wrap lg:flex-row">
        {works.map((work) => (
          <Card
            title={work.title}
            description={work.description}
            image={work.image}
            link={work.link}
            technologies={work.tech}
          />
        ))}
      </article>
    </section>
  );
}

export default Works;
