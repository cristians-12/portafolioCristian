import { works } from "@/constants/works";
import Card from "./cards/Card";

function Works() {
  return (
    <section className="px-[20rem] my-[100px]">
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
