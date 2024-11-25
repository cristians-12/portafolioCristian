import { works } from "@/constants/works";
import Card from "./cards/Card";

function Works() {
  return (
    <section className="px-[20rem] my-[50px]">
      <h3 className="text-3xl font-medium text-white my-3">Proyectos:</h3>
      <article className="flex gap-10">
        {works.map((work) => (
          <Card
            title={work.title}
            description={work.description}
            image={work.image}
          />
        ))}
      </article>
    </section>
  );
}

export default Works;
