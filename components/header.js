function Header() {
  return (
    <header className="container">
      <div className="h-12 justify-between items-center border-b-2 border-blue-100 hidden lg:flex">
        <ul className="nav flex gap-5 flex-shrink-0 text-sm text-gray-500">
          <li>
            <a className="nav-link ps-0" href="about-us.html">
              About
            </a>
          </li>
          <li>
            <a href="#">Forum</a>
          </li>
          <li>
            <a href="https://themes.getbootstrap.com/store/webestica/">Buy now!</a>
          </li>
          <li>
            <a href="#">Login / Join</a>
          </li>
        </ul>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/emrekesler/" className="px-0 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 50 50" style={{ fill: "#303030" }}>
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/EmreKesler" className="px-0 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 50 50" style={{ fill: "#303030" }}>
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/emrekesler/" className="px-0 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 50 50" style={{ fill: "#303030" }}>
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="h-24 flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://emrekesler.com.tr">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397.03 269.12" width="60">
              <title>logo</title>
              <rect width="224.08" height="34.05" rx="1.83" style={{ fill: "#2163e8" }} />
              <rect y="235.07" width="224.08" height="34.05" rx="1.83" style={{ fill: "#2163e8" }} />
              <path
                d="M396.57,267.71,246.06,117.06l116.3-116c.29-.3.46-.67.51-.67h-47.1l-123.56,123H44c-1,0-2.38.64-2.38,1.65v30A2.9,2.9,0,0,0,44,157.51H204.84a2.52,2.52,0,0,0,1.66-.79l15.73-15.58L349.4,268.45h47.5C396.82,267.35,396.71,267.85,396.57,267.71Z"
                transform="translate(0.13 -0.43)"
                style={{ fill: "#2163e8" }}
              />
            </svg>
          </a>
          <span> Emre Kesler </span>
        </div>
        <ul className="nav hidden lg:flex gap-8 flex-shrink-0 text-base font-medium text-gray-500">
          <li>
            <a className="nav-link ps-0" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Post</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <button className="bg-red-600 text-white hidden lg:flex h-8 items-center px-3 rounded text-tiny">Subscribe!</button>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" style={{ fill: "#000000" }}>
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </span>
          <img src="https://img.icons8.com/ios/24/000000/align-right.png" />
        </div>
      </div>
    </header>
  );
}

export default Header;
