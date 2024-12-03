import { FaGithub } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";

function Contact() {
  return (
    <>
      <section>
        <h2 className="font-bold text-[2rem] text-center">
          ¡Trabajemos juntos!
        </h2>
        <p className="text-center text-[1.5rem] my-5">
          Pongamonos en contacto y llevemos a cabo lo que tengas en mente.
        </p>
        <div className="flex justify-center">
          <a href="https://github.com/cristians-12">
            <figure className="cursor-pointer">
              <FaGithub color="red" size={50} />
            </figure>
          </a>
        </div>
        <div className="text-center my-5 hover:scale-105 flex justify-center items-center">
          <button className="border border-red-600 px-3 py-2 rounded-xl flex items-center gap-2">
            Enviame un mensaje!
            <LuMessageSquare color="red" size={20} />
          </button>
        </div>
      </section>
    </>
  );
}

export default Contact;
