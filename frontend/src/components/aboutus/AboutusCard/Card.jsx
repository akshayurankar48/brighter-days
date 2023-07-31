import CardImage from "../../../assets/cardImage1.png";
import slateBox from "../../../assets/slate.svg";

function Card() {
  return (
    <>
      {/* Card left */}
      <div className="absolute mt-10 left-[-1px] w-[1920px] h-[2176px] flex flex-col items-center justify-start">
        <div className="w-[1200px] h-[1671px] flex flex-col items-center justify-start gap-[171px]">
          <div className="w-[1200px] flex flex-row items-center justify-start gap-[40px]">
            <div className="relative w-[560px] h-[502px]">
              <div className="absolute top-[0px] left-[-57px] w-[617px] h-[616px] flex flex-col items-end justify-start">
                <img
                  className="relative w-[560px] h-[502px] object-cover"
                  alt=""
                  src={CardImage}
                />
                <div className="bg-darkslategray-300 w-[617px] h-[170px] flex flex-col py-[55px] px-[53px] box-border items-start justify-center mt-[-56px]">
                  <div className="flex flex-row items-center justify-start gap-[22px]">
                    <img
                      className="relative w-[64.97px] h-[48.5px]"
                      alt=""
                      src={slateBox}
                    />
                    <div className="relative leading-[120%] font-extrabold inline-block w-[690px] shrink-0">
                      <p className="m-0">{`No act of kindness, no matter how `}</p>
                      <p className="m-0">small, is ever wasted.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Right */}
            <div className="w-[600px] flex flex-col items-start justify-start text-16xl text-salmon font-sue-ellen-francisco">
              <div className="w-[603px] flex flex-col items-start justify-start gap-[20px]">
                <div className="w-[494px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[108.3%]">About Us</div>
                  <div className="relative text-21xl leading-[120%] font-extrabold font-shippori-mincho text-darkslategray-300">
                    <p className="m-0">Solutions to Help People</p>
                    <p className="m-0">in Need and Save</p>
                    <p className="m-0">the Planet</p>
                  </div>
                </div>
                <div className="w-[603px] flex flex-col items-start justify-start gap-[16px] text-xl text-dimgray font-work-sans">
                  <div className="relative leading-[130%] whitespace-pre-wrap inline-block w-[603px] h-[81px] shrink-0">
                    <p className="m-0">{`Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}</p>
                    <p className="m-0">&nbsp;</p>
                  </div>
                  <div className="bg-azure h-16 flex flex-row py-[19px] px-[21px] box-border items-center justify-start text-center text-cadetblue">
                    <div className="relative leading-[130%]">
                      Lorem Ipsum is simply dummy text of the printin type.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
