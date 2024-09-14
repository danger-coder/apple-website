import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides?.map((list) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl bg-black overflow-hidden">
                <video id="video" playsInline={true} preload="auto" muted>
                  <source src={list.video} type="video/mp4"></source>
                </video>
                
                
                <div className="absolute top-12 left-[5%] z-10">
                  {list.textLists.map((text)=>(
                    <p key={text.id} className="text-white text-xs font-medium">
                      {text}
                    </p>
                  ))}

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
