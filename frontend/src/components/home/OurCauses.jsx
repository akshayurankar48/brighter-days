import School from "../../assets/build_school.png";
import Aid from "../../assets/medical_aid.png";
import Water from "../../assets/safe_water.png";
import Rights from "../../assets/human_rights.png";
import Chart from "../../assets/chart.svg";
import Half from "../../assets/chart_half.svg";
import Rectangle from "../../assets/rectangle.svg";

function OurCauses() {
  return (
    <div className="w-full mx-2 h-[1331px] mt-[3900px] flex flex-row items-center justify-end">
      <div className="w-[2254px] h-[1331px]  flex flex-row items-center justify-end">
        <div className="w-[1920px] flex flex-col items-center justify-start gap-[50px]">
          <div className="w-[1200px] flex flex-row items-center justify-start gap-[381px]">
            <div className="w-[619px] flex flex-col items-start justify-start gap-[2px]">
              <div className="relative leading-[108.3%]">Our Causes</div>
              <div className="relative text-xl leading-[120%] font-extrabold font-shippori-mincho text-darkslategray-300">
                <p className="m-0">You can help lots of people by</p>
                <p className="m-0">donating little.</p>
              </div>
            </div>
            <div className="rounded-15xl bg-salmon flex flex-row py-[22px] px-[35px] items-center justify-center text-lg text-white font-work-sans">
              <div className="relative uppercase font-medium">More Causes</div>
            </div>
          </div>
          <div className="w-[1920px] h-[695px] flex flex-row py-0 pr-0 pl-[360px] box-border items-center justify-start gap-[35px] text-2xl text-darkslategray-300 font-shippori-mincho">
            <div className="w-[437px] flex flex-col items-start justify-start">
              <img
                className="relative w-[437px] h-[387px] object-cover"
                alt=""
                src={School}
              />
              <div className="bg-white w-[437px] flex flex-col py-[34px] px-[30px] box-border items-start justify-start">
                <div className="w-[377px] flex flex-col items-start justify-start gap-[36px]">
                  <div className="relative leading-[120%] font-extrabold">
                    <p className="m-0">Big charity: build school for</p>
                    <p className="m-0">poor children</p>
                  </div>
                  <div className="w-[377px] flex flex-col items-start justify-start gap-[19px] text-xl">
                    <img
                      className="relative w-[376px] h-1.5"
                      alt=""
                      src={Chart}
                    />
                    <div className="w-[377px] flex flex-row items-center justify-start gap-[138px]">
                      <div className="relative leading-[120%] font-extrabold">
                        Raised - 5M
                      </div>
                      <div className="relative leading-[120%] font-extrabold text-salmon">
                        Goal - $10M
                      </div>
                    </div>
                  </div>
                  <div className="rounded-15xl bg-darkslategray-300 flex flex-row py-[22px] px-9 items-center justify-center text-lg text-white font-work-sans">
                    <div className="relative uppercase font-medium">Donate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[437px] flex flex-col items-start justify-start">
              <img
                className="relative w-[437px] h-[387px] object-cover"
                alt=""
                src={Aid}
              />
              <div className="bg-white w-[437px] flex flex-col py-[34px] px-[30px] box-border items-start justify-start">
                <div className="w-[377px] flex flex-col items-start justify-start gap-[36px]">
                  <div className="relative leading-[120%] font-extrabold">
                    <p className="m-0">Healthcare and medical aid</p>
                  </div>
                  <div className="w-[377px] flex flex-col items-start justify-start gap-[19px] text-xl">
                    <img
                      className="relative w-[376px] h-1.5"
                      alt=""
                      src={Half}
                    />
                    <div className="w-[377px] flex flex-row items-center justify-start gap-[138px]">
                      <div className="relative leading-[120%] font-extrabold">
                        Raised - 3M
                      </div>
                      <div className="relative leading-[120%] font-extrabold text-salmon">
                        Goal - $10M
                      </div>
                    </div>
                  </div>
                  <div className="rounded-15xl bg-darkslategray-300 flex flex-row py-[22px] px-9 items-center justify-center text-lg text-white font-work-sans">
                    <div className="relative uppercase font-medium">Donate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[437px] flex flex-col items-start justify-start">
              <img
                className="relative w-[437px] h-[387px] object-cover"
                alt=""
                src={Water}
              />
              <div className="bg-white w-[437px] flex flex-col py-[34px] px-[30px] box-border items-start justify-start">
                <div className="w-[377px] flex flex-col items-start justify-start gap-[36px]">
                  <div className="relative leading-[120%] font-extrabold">
                    <p className="m-0">Providing access to safe</p>
                    <p className="m-0">water,sanitation, and hygiene</p>
                  </div>
                  <div className="w-[377px] flex flex-col items-start justify-start gap-[19px] text-xl">
                    <img
                      className="relative w-[376px] h-1.5"
                      alt=""
                      src={Chart}
                    />
                    <div className="w-[377px] flex flex-row items-center justify-start gap-[138px]">
                      <div className="relative leading-[120%] font-extrabold">
                        Raised - 5M
                      </div>
                      <div className="relative leading-[120%] font-extrabold text-salmon">
                        Goal - $10M
                      </div>
                    </div>
                  </div>
                  <div className="rounded-15xl bg-darkslategray-300 flex flex-row py-[22px] px-9 items-center justify-center text-lg text-white font-work-sans">
                    <div className="relative uppercase font-medium">Donate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[437px] flex flex-col items-start justify-start">
              <img
                className="relative w-[437px] h-[387px] object-cover"
                alt=""
                src={Rights}
              />
              <div className="bg-white w-[437px] flex flex-col py-[34px] px-[30px] box-border items-start justify-start">
                <div className="w-[377px] flex flex-col items-start justify-start gap-[36px]">
                  <div className="relative leading-[120%] font-extrabold">
                    <p className="m-0">Human rights and sleep</p>
                  </div>
                  <div className="w-[377px] flex flex-col items-start justify-start gap-[19px] text-xl">
                    <img
                      className="relative w-[376px] h-1.5"
                      alt=""
                      src={Chart}
                    />
                    <div className="w-[377px] flex flex-row items-center justify-start gap-[138px]">
                      <div className="relative leading-[120%] font-extrabold">
                        Raised - 5M
                      </div>
                      <div className="relative leading-[120%] font-extrabold text-salmon">
                        Goal - $10M
                      </div>
                    </div>
                  </div>
                  <div className="rounded-15xl bg-darkslategray-300 flex flex-row py-[22px] px-9 items-center justify-center text-lg text-white font-work-sans">
                    <div className="relative uppercase font-medium">Donate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative w-[446px] h-[73px]"
            alt=""
            src="/button.svg"
          />
        </div>
        <img
          className="relative w-[1920px] h-[1331px] ml-[-1586px]"
          alt=""
          src=""
        />
      </div>
    </div>
  );
}

export default OurCauses;
