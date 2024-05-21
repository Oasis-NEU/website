import strings from "@/app/strings";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Eboard() {
  const members = [
    {
      name: "Laith Taher",
      role: "Co-Director",
      src: "/images/Eboard/Laith.jpg",
    },
    {
      name: "Caitlin Flynn",
      role: "Co-Director",
      src: "/images/Eboard/Caitlin.jpeg",
    },
    {
      name: "Maggie Collette",
      role: "Mentor Lead",
      src: "/images/Eboard/maggie.jpeg",
    },
    {
      name: "Ciaran Flanagan",
      role: "Project Series Director",
      src: "/images/Eboard/Ciaran.jpg",
    },
    {
      name: "Eric Kim",
      role: "Explorer Series Director",
      src: "/images/Eboard/Eric.jpeg",
    },
    {
      name: "Quella Wang",
      role: "Resources Director",
      src: "/images/Eboard/Quella.jpg",
    },
    {
      name: "Cee Latkar",
      role: "Marketing Co-Director",
      src: "/images/Eboard/cee.jpeg",
    },
    {
      name: "Harini Avula",
      role: "Marketing Co-Director",
      src: "/images/Eboard/harini.jpeg",
    },
    {
      name: "Abby Elbaum",
      role: "External Operations",
      src: "/images/Eboard/Abby.jpg",
    },
    {
      name: "Rachel Chertok",
      role: "Internal Operations",
      src: "/images/Eboard/Rachel.jpg",
    },
  ];

  return (
    <div className="w-full pt-20 pb-16 sm:pb-0">
      <h1 className="">{strings.Eboard.title}</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8">
        {members.map(({ name, role, src }, i) => (
          <div key={i} className="flex flex-col items-left">
            {src !== "" ? (
              <Image
                className="rounded-md shadow-md mb-2"
                src={src}
                alt={"Profile Image for " + name}
                width={200}
                height={200}
              />
            ) : (
              <div className="rounded-md shadow-md mb-2 w-[160px] h-[160px] bg-oa-green-pastel text-oa-green flex items-center justify-center">
                <FontAwesomeIcon className="h-[120px]" icon={faUser} />
              </div>
            )}

            <h3 className="text-center max-w-[200px]">{name}</h3>
            <p className="text-center max-w-[200px]">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
