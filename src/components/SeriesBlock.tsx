import strings from "@/app/strings";
import Link from "next/link";

export default function SeriesBlock() {
  return (
    <div className="w-full">
      <div className="w-full">
        <h1>{strings.AboutBlock.title}</h1>
        <p>{strings.AboutBlock.body}</p>
      </div>
      <div className="w-full my-16 flex items-center justify-center px-8">
        <div className="flex md:flex-row flex-col gap-8 w-full max-w-4xl md:items-stretch items-center justify-center">
          <div className="relative rounded-lg bg-oa-green-pastel w-full max-w-2xl p-8 py-8 flex flex-col gap-6 justify-between shadow-md hover:shadow-xl group">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-oa-extra-light to-oa-green bg-blend-multiply group-hover:animate-pulse opacity-0 group-hover:bg-opacity-25 z-10 rounded-lg transition-all duration-500"></div>
            <div className="z-20">
              <h1 className="text-center mb-2">{strings.Series.project}</h1>
              <p className="font-medium text-left text-oa-green">
                {strings.Series.projectBody}
                <br />
                <i className="italic font-normal">
                  {strings.Series.projectSecondary}
                </i>
              </p>
            </div>
            <Link
              href="/join"
              className="mx-auto ring-2 ring-oa-extra-light rounded-lg shadow-md hover:ring-4 hover:shadow-lg transition-all duration-150 z-20 text-oa-extra-light bg-oa-green p-2 px-4"
            >
              {strings.Series.projectButton}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
