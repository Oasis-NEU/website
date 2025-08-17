import strings from "@/app/strings";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Eboard() {
  const members = [
    {
      name: "Ciaran Flanagan",
      role: "Co-Director",
      src: "/images/Eboard/Ciaran.1.jpeg",
    },
    {
      name: "Rachel Chertok",
      role: "Co-Director",
      src: "/images/Eboard/Rachel.1.jpeg",
    },
    {
      name: "Laith Taher",
      role: "Mentor Lead",
      src: "/images/Eboard/Laith.1.png",
    },
    {
      name: "Aryan Gupta",
      role: "Project Series Co-Director",
      src: "/images/Eboard/Aryan.jpg",
    },
    {
      name: "Paarth Trehan",
      role: "Project Series Co-Director",
      src: "/images/Eboard/Paarth.jpeg",
    },
    {
      name: "Audrey Ng",
      role: "Resources Director",
      src: "/images/Eboard/Audrey.jpg",
    },
    {
      name: "Ripandeep Kaur",
      role: "Marketing Co-Director",
      src: "/images/Eboard/Ripan.png",
    },
    {
      name: "Jolin Yang",
      role: "Marketing Co-Director",
      src: "/images/Eboard/Jolin.jpg",
    },
    {
      name: "Abby Elbaum",
      role: "Operations Director",
      src: "/images/Eboard/Abby.jpg",
    },
    {
      name: "Shlok Nanani",
      role: "Outreach Director",
      src: "/images/Eboard/Shlok.jpg",
    },
    {
      name: "Jahnavi Bulusu",
      role: "Brand Designer",
      src: "/images/Eboard/Jahnavi.jpg",
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
