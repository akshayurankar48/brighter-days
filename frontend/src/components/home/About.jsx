import Check from "../../assets/blue_check.svg";

function About() {
  return (
    <div className="absolute mt-[2500px] left-[360px] w-[1199px] flex flex-row items-center justify-start gap-[47px]">
      <div className="w-[603px] flex flex-col items-start justify-start gap-[13px]">
        <div className="w-[312px] flex flex-col items-start justify-start gap-[4px]">
          <div className="relative leading-[108.3%]">About Us</div>
          <div className="relative text-21xl leading-[120%] font-extrabold font-shippori-mincho text-darkslategray-300">
            <p className="m-0">Help People,</p>
            <p className="m-0">Our Main Goals</p>
          </div>
        </div>
        <div className="w-[603px] flex flex-col items-start justify-start gap-[32px] text-xl text-dimgray font-work-sans">
          <div className="relative leading-[130%] whitespace-pre-wrap inline-block w-[603px]">
            <p className="m-0">{`Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
              essentially.
            </p>
          </div>
          <div className="rounded-15xl text-black bg-salmon flex flex-row py-[22px] px-10 items-center justify-center text-lg">
            <div className="relative uppercase font-medium">More About</div>
          </div>
        </div>
      </div>
      <div className="w-[515.09px] flex flex-col items-start justify-start gap-[15px]">
        <div className="w-[507.09px] flex flex-row items-start justify-start gap-[30px]">
          <div className="rounded-26xl bg-whitesmoke-200 h-14 flex flex-col py-[1px] px-4 box-border items-start justify-center">
            <div className="h-[26px] flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-[27.04px] h-[27.04px]"
                alt=""
                src={Check}
              />
              <div className="relative leading-[130%]">Food Donation</div>
            </div>
          </div>
          <div className="rounded-26xl bg-whitesmoke-200 h-14 flex flex-col py-[15px] px-4 box-border items-start justify-center">
            <div className="h-[26px] flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-[27.04px] h-[27.04px]"
                alt=""
                src={Check}
              />
              <div className="relative leading-[130%]">Education/Books</div>
            </div>
          </div>
          <div className="rounded-26xl bg-whitesmoke-200 h-14 flex flex-col py-[15px] px-4 box-border items-start justify-center">
            <div className="h-[26px] flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-[27.04px] h-[27.04px]"
                alt=""
                src={Check}
              />
              <div className="relative leading-[130%]">Money Donation</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px]">
          <div className="rounded-26xl bg-whitesmoke-200 h-14 flex flex-col py-[15px] px-4 box-border items-start justify-center">
            <div className="h-[26px] flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-[27.04px] h-[27.04px]"
                alt=""
                src={Check}
              />
              <div className="relative leading-[130%]">Clothing</div>
            </div>
          </div>
          <div className="rounded-26xl bg-whitesmoke-200 h-14 flex flex-col py-[15px] px-4 box-border items-start justify-center">
            <div className="h-[26px] flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-[27.04px] h-[27.04px]"
                alt=""
                src={Check}
              />
              <div className="relative leading-[130%]">Become A Volunteer</div>
            </div>
          </div>
        </div>
        <div className="rounded-26xl bg-whitesmoke-200 h-14 flex flex-col py-[15px] px-4 box-border items-start justify-center">
          <div className="h-[26px] flex flex-row items-center justify-start gap-[8px]">
            <img
              className="relative w-[27.04px] h-[27.04px]"
              alt=""
              src={Check}
            />
            <div className="relative leading-[130%]">Sports Equipment</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
