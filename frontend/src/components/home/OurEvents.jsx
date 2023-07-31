import Events from "../../assets/events_hero.png";
import Location from "../../assets/location.svg";

function OurEvents() {
  return (
    <div className="absolute mt-[3000px] left-[359px] w-[1200.04px] flex flex-col items-start justify-start gap-[50px]">
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="w-[473px] flex flex-col items-start justify-start gap-[2px]">
          <div className="relative leading-[108.3%]">Our Events</div>
          <div className="self-stretch relative text-21xl leading-[120%] font-extrabold font-shippori-mincho text-darkslategray-300">
            <p className="m-0">Join Upcoming Events</p>
            <p className="m-0">{`Replays & Webinars`}</p>
          </div>
        </div>
        <div className="rounded-15xl bg-salmon flex flex-row py-[22px] px-9 items-center justify-center text-lg text-black font-work-sans">
          <div className="relative uppercase font-medium">More Events</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[30px] text-center text-2xl text-black font-shippori-mincho">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch flex flex-row items-start justify-between">
            <img
              className="relative w-[600px] h-[344px] object-cover"
              alt=""
              src={Events}
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[28px] text-left text-xl text-darkslategray-300 font-work-sans">
            <div className="self-stretch flex flex-row items-center justify-between text-dimgray">
              <div className="relative leading-[130%]">
                <span>{`Organized By : `}</span>
                <span className="font-medium text-darkslategray-300">
                  Jane Doe
                </span>
                <span>{` `}</span>
              </div>
              <div className="w-[324.04px] flex flex-row items-center justify-between text-lg text-darkslategray-300">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src={Location}
                />
                <div className="relative uppercase font-medium inline-block w-[291.04px] shrink-0">
                  {" "}
                  10:00 AM - 18:00 PM, Everyday
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-3xl font-shippori-mincho">
              <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-silver" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="relative leading-[120%] font-extrabold">
                  Education for Poor Children
                </div>
                <div className="self-stretch relative text-xl leading-[130%] font-work-sans text-dimgray">
                  There are many varieations of passages of injected Lorem Ipsum
                  available,but the majority have.
                </div>
              </div>
            </div>
            <div className="bg-blacksmoke-400 h-[59px] flex flex-col py-4 px-5 box-border items-start justify-center text-lg">
              <div className="h-[27px] flex flex-row items-center justify-start gap-[14px]">
                <img className="relative w-5 h-[29px]" alt="" src={Location} />
                <div className="relative uppercase font-medium">
                  Bangalore,India
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[25px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[25px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="bg-darkslategray-300 w-[116px] flex flex-col py-[21px] px-[19px] box-border items-center justify-start">
                <div className="relative leading-[120%] font-extrabold">
                  <p className="m-0">18</p>
                  <p className="m-0 text-xl">June</p>
                </div>
              </div>
              <div className="w-[434px] flex flex-col items-start justify-start gap-[24px] text-left text-lg text-dimgray font-work-sans">
                <div className="w-[328px] flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative leading-[130%]">
                    <span>{`Organized By : `}</span>
                    <span className="font-medium text-salmon">Jane Doe</span>
                    <span>{` `}</span>
                  </div>
                  <div className="self-stretch relative text-2xl leading-[120%] font-extrabold font-shippori-mincho text-darkslategray-300">
                    Healthy Food for Growing
                  </div>
                </div>
                <div className="self-stretch relative leading-[130%]">{`Lorem Ipsum is simply dummy text of the printin typesetting `}</div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-silver" />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[25px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="bg-darkslategray-300 w-[116px] flex flex-col py-[21px] px-[19px] box-border items-center justify-start">
                <div className="relative leading-[120%] font-extrabold">
                  <p className="m-0">21</p>
                  <p className="m-0 text-xl">August</p>
                </div>
              </div>
              <div className="w-[434px] flex flex-col items-start justify-start gap-[24px] text-left text-xl text-dimgray font-work-sans">
                <div className="w-[328px] flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative leading-[130%]">
                    <span>{`Organized By : `}</span>
                    <span className="font-medium text-salmon">Jane Doe</span>
                    <span>{` `}</span>
                  </div>
                  <div className="relative text-2xl leading-[120%] font-extrabold font-shippori-mincho text-darkslategray-300">
                    Cloth Comming
                  </div>
                </div>
                <div className="self-stretch relative leading-[130%]">{`Lorem Ipsum is simply dummy text of the printin typesetting `}</div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-silver" />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[25px]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="bg-darkslategray-300 w-[116px] flex flex-col py-[21px] px-[19px] box-border items-center justify-start">
                <div className="relative leading-[120%] font-extrabold">
                  <p className="m-0">14</p>
                  <p className="m-0 text-xl">July</p>
                </div>
              </div>
              <div className="w-[434px] flex flex-col items-start justify-start gap-[24px] text-left text-xl text-dimgray font-work-sans">
                <div className="w-[328px] flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative leading-[130%]">
                    <span>{`Organized By : `}</span>
                    <span className="font-medium text-salmon">Jane Doe</span>
                    <span>{` `}</span>
                  </div>
                  <div className="relative text-2xl leading-[120%] font-extrabold font-shippori-mincho text-darkslategray-300">
                    Teachers Presentation
                  </div>
                </div>
                <div className="relative leading-[130%] inline-block w-[434px]">{`Lorem Ipsum is simply dummy text of the printin typesetting `}</div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-silver" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurEvents;
