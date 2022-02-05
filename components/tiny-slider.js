import Script from "next/script";

function TinySlider() {
  return (
    <>
      <div className="rounded flex flex-col md:flex-row items-center text-center p-2 bg-blue-100">
        <button className="bg-blue-500 text-white items-center rounded text-tiny p-1 px-4 mr-3">Trending:</button>
        <div className="flex justify-between w-full">
          <div className="tiny-slider w-full">
            <div className="tiny-slider-inner text-center md:text-left opacity-80 w-full">
              <a href="#">The most common business debate isnt as black and white as you might think</a>
              <a href="#">How the 10 worst business fails of all time could have been prevented </a>
              <a href="#">The most common business debate isnt as black and white as you might think </a>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"
        onLoad={() => {
          var tnsSlider = tns({
            container: ".tiny-slider-inner",
            mode: "carousel",
            axis: "horizontal",
            gutter: "0",
            edgePadding: 0,
            speed: 500,
            autoWidth: false,
            controls: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 9000,
            autoplayHoverPause: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            controlsPosition: top,
            navPosition: top,
            autoplayPosition: top,
            controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            loop: true,
            rewind: false,
            autoHeight: false,
            fixedWidth: false,
            touch: true,
            mouseDrag: true,
            arrowKeys: true,
            items: 1,
          });
        }}
      ></Script>
    </>
  );
}

export default TinySlider;
