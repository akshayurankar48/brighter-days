import Help from "../../assets/medical-help.png";
import Massage from "../../assets/oil-massage.png";
import Care from "../../assets/day-care.png";
import Food from "../../assets/food-bar.png";
import Geo from "../../assets/geography.png";
import Contract from "../../assets/contract.png";

const Wedo = () => {
  return (
    <div className="absolute  mt-20 left-[386px] w-[1148px] flex flex-col items-center justify-start gap-[60px]">
      <div className="w-[543px] flex flex-col items-center justify-center">
        <div className="relative leading-[120.3%]">
          <p className="m-0">We do it for People in Need</p>
        </div>
        <div className="relative text-21xl leading-[120%] font-extrabold font-shippori-mincho text-darkslategray-300 inline-block w-[543px] ml-[440px] mt-[-60px]">
          What we do
        </div>
      </div>
      <div className="w-[1148px] flex flex-col items-center justify-start gap-[80px] text-center text-2xl text-darkslategray-300 font-shippori-mincho">
        <div className="w-[1148px] flex flex-row items-start justify-center gap-[52px]">
          <div className="w-[348px] flex flex-col items-center justify-start gap-[16px] text-left">
            <div className="w-[183px] flex flex-col items-center justify-start gap-[15px]">
              <img
                className="relative w-[70px] h-[70px] object-cover"
                alt=""
                src={Help}
              />
              <div className="relative leading-[120%] font-extrabold inline-block w-[183px]">
                Medicine Help
              </div>
            </div>
            <div className="relative text-xl leading-[130%] font-work-sans text-dimgray text-center inline-block w-[348px] h-[83px] shrink-0">{`Lorem Ipsum is simply dummy text of the printin typesetting `}</div>
          </div>
          <div className="w-[348px] flex flex-col items-center justify-start gap-[16px]">
            <div className="w-[183px] flex flex-col items-center justify-start gap-[15px]">
              <img
                className="relative w-[70px] h-[70px] object-cover"
                alt=""
                src={Massage}
              />
              <div className="relative leading-[120%] font-extrabold">
                Water Delivery
              </div>
            </div>
            <div className="relative text-xl leading-[130%] font-work-sans text-dimgray inline-block w-[348px] h-[83px] shrink-0">{`Lorem Ipsum is simply dummy text of the printin typesetting `}</div>
          </div>
          <div className="w-[348px] flex flex-col items-center justify-start gap-[16px]">
            <div className="w-[183px] flex flex-col items-center justify-start gap-[15px]">
              <img
                className="relative w-[70px] h-[70px] object-cover"
                alt=""
                src={Care}
              />
              <div className="relative leading-[120%] font-extrabold">
                We Care About
              </div>
            </div>
            <div className="relative text-xl leading-[130%] font-work-sans text-dimgray inline-block w-[348px] h-[83px] shrink-0">{`Lorem Ipsum is simply dummy text of the printin typesetting `}</div>
          </div>
        </div>
        <div className="w-[1148px] flex flex-row items-start justify-center gap-[52px]">
          <div className="w-[348px] flex flex-col items-center justify-start gap-[16px]">
            <div className="w-[183px] flex flex-col items-center justify-start gap-[15px]">
              <img
                className="relative w-[70px] h-[70px] object-cover"
                alt=""
                src={Food}
              />
              <div className="relative leading-[120%] font-extrabold inline-block w-[183px]">
                Food Delivery
              </div>
            </div>
            <div className="relative text-xl leading-[130%] font-work-sans text-dimgray inline-block w-[348px] h-[83px] shrink-0">{`Lorem Ipsum is simply dummy text of the printin typesetting `}</div>
          </div>
          <div className="w-[348px] flex flex-col items-center justify-start gap-[16px]">
            <div className="w-[183px] flex flex-col items-center justify-start gap-[15px]">
              <img
                className="relative w-[70px] h-[70px] object-cover"
                alt=""
                src={Geo}
              />
              <div className="relative leading-[120%] font-extrabold inline-block w-[231px]">
                Spread The World
              </div>
            </div>
            <div className="relative text-xl leading-[130%] font-work-sans text-dimgray inline-block w-[348px] h-[83px] shrink-0">{`Lorem Ipsum is simply dummy text of the printin typesetting `}</div>
          </div>
          <div className="w-[348px] flex flex-col items-center justify-start gap-[16px]">
            <div className="w-[183px] flex flex-col items-center justify-start gap-[15px]">
              <img
                className="relative w-[70px] h-[70px] object-cover"
                alt=""
                src={Contract}
              />
              <div className="relative leading-[120%] font-extrabold">
                Learn Education
              </div>
            </div>
            <div className="relative text-xl leading-[130%] font-work-sans text-dimgray inline-block w-[348px] h-[83px] shrink-0">{`Lorem Ipsum is simply dummy text of the printin typesetting `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
