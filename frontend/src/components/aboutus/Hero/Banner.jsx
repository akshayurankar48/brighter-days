import BannerImage from "../../../assets/About.png";

function Banner() {
  return (
    <div>
      <img className="w-full h-[502px] object-cover" alt="" src={BannerImage} />
    </div>
  );
}

export default Banner;
