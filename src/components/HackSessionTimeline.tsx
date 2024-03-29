import strings from "@/app/strings";

export default function HackSessionTimeline() {
  return (
    <div className="flex flex-col items-center pt-12 md:text-left text-center">
      <h1 className="">{strings.HackSessionTimeline.title}</h1>

      <div className="max-w-3xl flex items-center justify-center pb-10 md:mt-0 mt-8">
        <div className="grid grid-cols-9 grid-rows-2">
          <div className="row-start-1 row-end-3 row-span-1 flex items-center justify-center col-start-1 col-end-10">
            <div className="md:w-full mx-4 md:h-1 w-1 h-full bg-oa-yellow"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 row-start-1 row-end-3 row-span-1 col-start-1 col-end-10">
            {strings.HackSessionTimeline.days.map(({ num, hook, date }, i) => (
              <div
                key={i}
                className="flex flex-row md:flex-col items-center justify-center md:w-28 group relative group h-10 md:h-auto"
              >
                <div
                  className={
                    "md:h-20 text-center sm:whitespace-nowrap absolute md:top-0 right-0 md:right-auto mr-12 md:mr-0 flex flex-row md:flex-col sm:text-sm text-xs items-center gap-2 md:mt-4" +
                    (i % 2 !== 0 ? " hidden " : "")
                  }
                >
                  <span className="group-hover:scale-110 duration-200 transition-all">
                    {hook}<br/><span className="italic font-light">{date}</span>
                  </span>
                  <div className="md:w-[2px] h-[2px] rounded-full md:h-8 w-8 bg-oa-yellow"></div>
                </div>
                <div
                  className={
                    "rounded-full p-2 w-10 h-10 bg-oa-extra-light flex items-center justify-center border-0 border-oa-green shadow-md text-oa-yellow my-24 group-hover:scale-110 duration-200 transition-all"
                  }
                >
                  {num}
                </div>
                <div
                  className={
                    "md:h-20 text-center sm:whitespace-nowrap absolute md:bottom-0 md:left-auto left-0 ml-12 md:ml-0 flex flex-row md:flex-col text-xs sm:text-sm items-center gap-2 md:mt-4" +
                    (i % 2 === 0 ? " hidden " : "")
                  }
                >
                  <div className="group-hover:scale-110 duration-200 transition-all h-[2px] md:w-[2px] rounded-full md:h-8 w-8 bg-oa-yellow"></div>
                  <span className="group-hover:scale-110 duration-200 transition-all">
                  {hook}<br/><span className="italic font-light">{date}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
