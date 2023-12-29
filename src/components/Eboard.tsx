import strings from "@/app/strings";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Eboard() {
  const members = [
    {
      name: "Frank Anderson",
      role: "Co-Director",
      src: "/images/Eboard/frank.jpeg",
    },
    {
      name: "Sama Zaki",
      role: "Co-Director",
      src: "/images/Eboard/sama.png",
    },
    {
      name: "Rei Masuya",
      role: "Brand Designer",
      src: "/images/Eboard/rei.jpg",
    },
    {
      name: "Allen Lin",
      role: "Head Mentor",
      src: "/images/Eboard/allen.png",
    },
    {
      name: "Laith Taher",
      role: "Project & Explorer Series Director",
      src: "/images/Eboard/Laith.jpg",
    },
    {
      name: "Caitlin Flynn",
      role: "Operations Director",
      src: "/images/Eboard/Caitlin.jpeg",
    },
    {
      name: "Isha Chadalavada",
      role: "Resources Director",
      src: "/images/Eboard/Isha.jpg",
    },
    {
      name: "Marguerite Collette",
      role: "Resources Director",
      src: "/images/Eboard/maggie.jpeg",
    },
    {
      name: "Jayson Sella",
      role: "Project Series Director",
      src: "/images/Eboard/jay.jpg",
    },
    {
      name: "Ashley Davis",
      role: "Explorer Series Director",
      src: "/images/Eboard/ashley.jpeg",
    },
    {
      name: "Cee Latkar",
      role: "Marketing Core Director",
      src: "/images/Eboard/cee.jpeg",
    },
    {
      name: "Harini Avula",
      role: "Marketing Spotlight Director",
      src: "/images/Eboard/harini.jpeg",
    },
  ];

  return (
    <div className="w-full pt-20 pb-16 sm:pb-0">
      <h1 className="">{strings.Eboard.title}</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8">
        {members.map(({ name, role, src }, i) => (
          <div key={i} className="flex flex-col items-center">
            {src !== "" ? (
              <Image
                className="rounded-md shadow-md mb-2"
                src={src}
                alt={"Profile Image for " + name}
                width={160}
                height={160}
              />
            ) : (
              <div className="rounded-md shadow-md mb-2 w-[160px] h-[160px] bg-oa-green-pastel text-oa-green flex items-center justify-center">
                <FontAwesomeIcon className="h-[120px]" icon={faUser} />
              </div>
            )}

            <h3>{name}</h3>
            <p className="text-center">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
