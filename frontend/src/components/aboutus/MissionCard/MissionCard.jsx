import slateBox from "../../../assets/icon.svg";
import mission from "../../../assets/mission.png";

function MissionCard() {
  return (
    <>
      <div className="absolute top-[1200px] left-[-1px] w-[1920px] h-[2176px] flex flex-col items-center justify-start">
        <div className="w-[1200px] h-[1671px] flex flex-col items-center justify-start gap-[171px]">
          <div className="w-[1200px] flex flex-row items-center justify-start gap-[40px]">
            <div className="w-[1199px] h-[998px] flex flex-row items-start justify-start gap-[48px] text-xl text-dimgray font-work-sans">
              <div className="w-[566px] flex flex-col items-start justify-start gap-[35px]">
                <div className="w-[566px] flex flex-col items-start justify-start gap-[15px] text-16xl text-darkslategray-300 font-shippori-mincho">
                  <div className="relative leading-[120%] font-extrabold">
                    Our Goal
                  </div>
                  <div className="relative text-xl leading-[130%] font-work-sans text-dimgray whitespace-pre-wrap inline-block w-[566px] h-[81px] shrink-0">
                    <p className="m-0">{`Lorem Ipsum is simply dummy text of the typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled type specimen book. `}</p>
                    <p className="m-0">&nbsp;</p>
                  </div>
                </div>
                <div className="w-[515.09px] flex flex-col items-start justify-start gap-[15px]">
                  <div className="w-[507.09px] flex flex-row items-start justify-start gap-[20px]">
                    <div className="rounded-26xl bg-whitesmoke-200 h-14 flex flex-col py-[15px] px-4 box-border items-start justify-center">
                      <div className="h-[26px] flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-[27.04px] h-[27.04px]"
                          alt=""
                          src={slateBox}
                        />
                        <div className="relative leading-[130%]">
                          Make Donation
                        </div>
                      </div>
                    </div>
                    <div className="rounded-26xl bg-whitesmoke-200 h-14 flex flex-col py-[15px] px-4 box-border items-start justify-center">
                      <div className="h-[26px] flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-[27.04px] h-[27.04px]"
                          alt=""
                          src={slateBox}
                        />
                        <div className="relative leading-[130%]">
                          Donation Reched 10M
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[20px]">
                    <div className="rounded-26xl bg-whitesmoke-200 h-14 flex flex-col py-[15px] px-4 box-border items-start justify-center">
                      <div className="h-[26px] flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-[27.04px] h-[27.04px]"
                          alt=""
                          src={slateBox}
                        />
                        <div className="relative leading-[130%]">
                          Education For All
                        </div>
                      </div>
                    </div>
                    <div className="rounded-26xl bg-whitesmoke-200 h-14 flex flex-col py-[15px] px-4 box-border items-start justify-center">
                      <div className="h-[26px] flex flex-row items-center justify-start gap-[8px]">
                        <img
                          className="relative w-[27.04px] h-[27.04px]"
                          alt=""
                          src={slateBox}
                        />
                        <div className="relative leading-[130%]">
                          Become A Volunteer
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-26xl bg-whitesmoke-200 h-14 flex flex-col py-[15px] px-4 box-border items-start justify-center">
                    <div className="h-[26px] flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="relative w-[27.04px] h-[27.04px]"
                        alt=""
                        src={slateBox}
                      />
                      <div className="relative leading-[130%]">
                        Food For Poor People dayle
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative leading-[130%] whitespace-pre-wrap inline-block w-[566px] h-[81px] shrink-0">
                  <p className="m-0">{`Lorem Ipsum is simply dummy text of the typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled type specimen book. `}</p>
                  <p className="m-0">&nbsp;</p>
                </div>
              </div>
              <div className="w-[585px] flex flex-col items-start justify-start gap-[33px] text-21xl text-darkslategray-300 font-shippori-mincho">
                <div className="w-[566px] flex flex-col items-start justify-start gap-[9px]">
                  <div className="relative leading-[120%] font-extrabold">
                    Our Mission
                  </div>
                  <div className="relative text-xl leading-[130%] font-work-sans text-dimgray whitespace-pre-wrap inline-block w-[566px] h-[81px] shrink-0">
                    <p className="m-0">{`Lorem Ipsum is simply dummy text of the typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled type specimen book. `}</p>
                    <p className="m-0">&nbsp;</p>
                  </div>
                </div>
                <div className="w-[585px] h-[503px] flex flex-col items-center justify-start text-[73px]">
                  <img
                    className="relative w-[585px] h-[413px] object-cover"
                    alt=""
                    src={mission}
                  />
                  <div className="w-[585px] flex flex-col py-0 px-[35px] box-border items-start justify-center mt-[-102px]">
                    <div className="bg-mediumturquoise w-[388px] flex flex-col py-[39px] px-[52px] box-border items-center justify-start">
                      <div className="w-[284px] flex flex-col items-center justify-start">
                        <div className="relative leading-[120%] font-extrabold">
                          20000+
                        </div>
                        <div className="relative text-xl leading-[130%] font-medium font-work-sans">
                          Thousand People Helped
                        </div>
                      </div>
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

export default MissionCard;
