import Script from "next/script";

export default function LumaRegister({ eventId }: { eventId: string }) {
  return (
    <>
      <Script
        id="luma-checkout"
        src="https://embed.lu.ma/checkout-button.js"
      ></Script>

      <a
        href={"https://lu.ma/event/" + eventId}
        className="ring-2 ring-oa-extra-light rounded-lg shadow-md hover:ring-4 hover:shadow-lg transition-all duration-150 z-20 text-oa-extra-light bg-oa-green p-2 px-4 md:mx-auto mr-auto"
        data-luma-action="checkout"
        data-luma-event-id={eventId}
      >
        Click here to RSVP!
      </a>
    </>
  );
}
