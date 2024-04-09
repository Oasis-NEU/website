import strings from "@/app/strings";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MentorBlock() {
  return (
    <>
      <div className="md:grid flex flex-col gap-8 mt-8 md:mb-0 mb-16">
        <h2></h2>
        {/* {strings.MentorBlock.points.map(({ title, tagline }, i) => (
          <div
            className="flex flex-row items-start justify-start gap-4 h-fit"
            key={i}
          > */}

        <div>
          <h2 className="text-4xl mb-1">{"What's mentoring?"}</h2>
          <p>
            <b className="no-underline">
              Introduce students to computer science by teaching participants
              how to learn the skills they need to bring their projects to life!
            </b>{" "}
            Every Sunday from 12-2pm, mentors work with two teams of four
            students each to guide them through their making first web and
            mobile apps. {"It's"} a low-commitment way to help students turn
            their ideas into a reality!
          </p>
          {/* <p className="mt-2">
            Additionally, if {"you'd"} like to help contribute to our Resources
            page, in collaboration with Khoury, there are{" "}
            <b className="no-underline">options to be paid</b> hourly as a TA.
            More information about this will be provided during your interview
            if {"you're"} interested in this element.
          </p> */}
        </div>
        <div>
          <h2 className="text-4xl mb-1 mt-8">Eligibility</h2>
          <p>
            Any Northeastern student who has started at least one computer
            science co-op or been a Khoury teaching assistant. You must be available at least 7 of 8 Hack Sessions
            of the semester, and for Demo Day.{" "}
            {/* <b className="no-underline">
              Both graduate and undergraduate students are welcome!
            </b> */}
          </p>
        </div>
      </div>
      {/* ))}
      </div> */}
    </>
  );
}
