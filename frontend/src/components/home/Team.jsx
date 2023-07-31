import Placeholder from "../../assets/placeholder.png";
import Instagram from "../../assets/insta.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Pintrest from "../../assets/pintrest.svg";
import Volunteer from "../../assets/volunteer.png";
import Background from "../../assets/background.svg";

const Team = () => {
  return (
    <div className="absolute mt-[700px] left-[0px] w-[1920px] h-[871px] flex flex-col items-center justify-end text-center">
      <img className="relative w-[1920px] h-[871px]" alt="" src={Background} />
      <div className="w-[1200px] flex flex-col items-center justify-start gap-[40px] mt-[-730px]">
        <div className="w-[418px] flex flex-col items-center justify-start gap-[3px]">
          <div className="relative leading-[108.3%] text-2xl ">Team</div>
          <div className="relative text-3xl leading-[120%] font-extrabold font-shippori-mincho text-darkslategray-300">
            <p className="m-0">Meet Our Heroes</p>
          </div>
        </div>
        <div className="w-[1200px] flex flex-row items-start justify-center gap-[23px] text-left text-xl text-darkslategray-300 font-shippori-mincho">
          <div className="w-[283px] flex flex-col items-center justify-start gap-[16px]">
            <img
              className="relative w-[283px] h-[382px] object-cover"
              alt=""
              src={Placeholder}
            />
            <div className="w-36 flex flex-col items-center justify-start gap-[20px]">
              <div className="relative leading-[120%] font-extrabold">
                John Doe
              </div>
              <div className="w-[123.86px] flex flex-row items-center justify-center gap-[17px]">
                <img
                  className="relative w-[17.83px] h-[17.17px]"
                  alt=""
                  src={Instagram}
                />
                <img
                  className="relative w-[17.83px] h-[17.06px]"
                  alt=""
                  src={Facebook}
                />
                <img
                  className="relative w-[19.1px] h-[15.28px]"
                  alt=""
                  src={Twitter}
                />
                <img
                  className="relative w-[18.11px] h-[18.11px]"
                  alt=""
                  src={Pintrest}
                />
              </div>
            </div>
          </div>
          <div className="w-[283px] flex flex-col items-center justify-start gap-[16px]">
            <img
              className="relative w-[283px] h-[382px] object-cover"
              alt=""
              src={Placeholder}
            />
            <div className="w-36 flex flex-col items-center justify-start gap-[20px]">
              <div className="relative leading-[120%] font-extrabold">
                Jane Doe
              </div>
              <div className="w-[123.86px] flex flex-row items-center justify-center gap-[17px]">
                <img
                  className="relative w-[17.83px] h-[17.17px]"
                  alt=""
                  src={Instagram}
                />
                <img
                  className="relative w-[17.83px] h-[17.06px]"
                  alt=""
                  src={Facebook}
                />
                <img
                  className="relative w-[19.1px] h-[15.28px]"
                  alt=""
                  src={Twitter}
                />
                <img
                  className="relative w-[18.11px] h-[18.11px]"
                  alt=""
                  src={Pintrest}
                />
              </div>
            </div>
          </div>
          <div className="w-[283px] flex flex-col items-center justify-start gap-[16px]">
            <img
              className="relative w-[283px] h-[382px] object-cover"
              alt=""
              src={Placeholder}
            />
            <div className="w-36 flex flex-col items-center justify-start gap-[20px]">
              <div className="relative leading-[120%] font-extrabold">
                Jane Doe
              </div>
              <div className="w-[123.86px] flex flex-row items-center justify-center gap-[17px]">
                <img
                  className="relative w-[17.83px] h-[17.17px]"
                  alt=""
                  src={Instagram}
                />
                <img
                  className="relative w-[17.83px] h-[17.06px]"
                  alt=""
                  src={Facebook}
                />
                <img
                  className="relative w-[19.1px] h-[15.28px]"
                  alt=""
                  src={Twitter}
                />
                <img
                  className="relative w-[18.11px] h-[18.11px]"
                  alt=""
                  src={Pintrest}
                />
              </div>
            </div>
          </div>
          <div className="bg-mediumturquoise w-[282px] flex flex-row py-16 px-[21px] box-border items-start justify-center text-center text-2xl">
            <div className="w-60 flex flex-col items-center justify-start gap-[15px]">
              <div className="w-[82px] h-[82px] flex flex-col items-center justify-end">
                <div className="relative rounded-[50%] bg-darkslategray-300 w-[82px] h-[82px]" />
                <img
                  className="relative w-[46px] bg-red-400 h-[46px] object-cover mt-[-64px]"
                  alt=""
                  src={Volunteer}
                />
              </div>
              <div className="w-60 flex flex-col items-center justify-start gap-[17px]">
                <div className="relative leading-[120%] font-extrabold">
                  <p className="m-0">Become</p>
                  <p className="m-0"> a Volunteer</p>
                </div>
                <div className="relative text-xl leading-[130%] font-work-sans text-dimgray inline-block w-60">{`Lorem Ipsum is simply dummy text of the printin typesetting `}</div>
              </div>
              <div className="rounded-15xl bg-darkslategray-300 w-[201px] h-[65px] flex flex-col items-center justify-center text-left text-lg text-white font-work-sans">
                <div className="relative uppercase text-black font-medium">
                  Join Us Today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
