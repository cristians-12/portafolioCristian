import TechCard from "./cards/TechCard";
import { technologies } from "@/constants/technologies";

function Technologies() {
  return (
    <div className="technologies-container">
      <p className="my-5 text-xl font-semibold">
        Poseo experiencia en tecnologías como:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {technologies.map((tech, index) => (
          <TechCard key={index} icon={tech.icon} title={tech.name} />
        ))}
      </div>
    </div>
  );
}

export default Technologies;
