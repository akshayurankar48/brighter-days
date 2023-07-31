import Banner from "../../assets/message_banner.png";

function Message() {
  return (
    <div className="absolute mt-[1735px] left-[0px] w-full h-[604px] flex flex-col items-center justify-between text-lg font-work-sans">
      <img
        className="relative w-[1920px] h-[604px] object-cover z-[0]"
        alt=""
        src={Banner}
      />
      <div className="my-0 mx-[!important] absolute top-[84px] left-[538px] w-[771px] h-[436.47px] flex flex-col items-center justify-start gap-[40px] z-[1]">
        <div className="w-[771px] flex flex-col items-center justify-start gap-[17px] text-16xl font-sue-ellen-francisco">
          <div className=" flex flex-col items-center justify-start">
            <div className="relative leading-[100.3%]">
              Let’s make a difference together!
            </div>
          </div>
          <div className="relative text-xl leading-[130%] font-work-sans text-center inline-block w-[771px] h-[51px] shrink-0">
            We’re just a message away, write to us today.
          </div>
        </div>
        <div className="flex flex-col py-0 px-[26px] box-border items-start justify-center text-dimgray">
          <input
            placeholder="Enter Your Email Address"
            className="relative leading-[130%] bg-white w-[414px] focus:outline-none px-1 rounded-full h-[65px]"
            type="email"
          />
        </div>
        <div className="flex flex-col py-[16.5400390625px]  items-start justify-start text-dimgray">
          <input
            placeholder=" Enter Your Message"
            className="relative leading-[130%] inline-block px-4 bg-white box-border focus:outline-none rounded-3xl w-[413.5px] h-[137px] shrink-0"
          />
        </div>
        <div className="rounded-15xl bg-darkslategray-300 flex flex-row py-[22px] px-9 items-center justify-center">
          <div className="relative uppercase font-medium">Send</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
