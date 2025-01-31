import Image from "next/image"

function Footer() {
  return (
    <footer className="py-8 px-4 lg:px-8 mt-10 bg-[#f8f5f1]">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-5">
      <div>
        <Image src='/logo2.png' alt='logo' width={100} height={80} />
          <p className="text-gray-700 mt-5">A thriving marketplace for both sellers and buyers. <br /> Our mission is to foster a community built on trust, satisfaction, and success!</p>
      </div>
      <div className="lg:justify-self-center">
        <h2 className="font-semibold text-2xl mb-5">Quick links</h2>
        <ul className="text-gray-700 space-y-3">
          <li>Featured</li>
          <li>Best Sellers</li>
          <li>Top stores</li>
          <li>Most loved</li>
          <li>Categories</li>
        </ul>
      </div>
      <div className="lg:justify-self-center">
        <h2 className="font-semibold text-2xl mb-5">Sell</h2>
        <ul className="text-gray-700 space-y-3">
          <li>Sell on Duka</li>
          <li>Policies</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      <div className="lg:justify-self-center">
        <h2 className="font-semibold text-2xl mb-5">Shop</h2>
        <ul className="text-gray-700 space-y-3">
          <li>About Us</li>
          <li>Blog</li>
          <li>Policies</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      </div>
      <div className="border-t pt-5 flex flex-col md:flex-row justify-between gap-5 md:items-center">
        <p>© 2025 Duka All rights reserved.</p>
        <p>Privacy Policy</p>
        <ul className="flex gap-2">
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon size-6" fill='#000' viewBox="0 0 512 512"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fillRule="evenodd"/></svg>
              </li>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon size-6" fill='#000' viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>
              </li>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon size-6" fill='#000' viewBox="0 0 512 512"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/></svg>
              </li>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon size-6" fill='#000' viewBox="0 0 512 512"><path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fillRule="evenodd"/></svg>
              </li>
          </ul>
      </div>
  </footer>
  )
}

export default Footer