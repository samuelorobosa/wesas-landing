import logo from '@/src/assets/logo.jpeg';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="text-gray-600 sm:px-20">
      <h2 className="font-bold sm:text-5xl text-3xl mb-4 epilogue-font mt-10 px-10 sm:px-0">
        Featured Stores
      </h2>
      <p className="text-xl font-medium"></p>
      <div className="flex flex-col lg:flex-row lg:justify-between px-10 sm:px-0 gap-10 sm:gap-20 font-body py-16 border-b-2 mb-2">
        <div className="flex flex-col gap-5 items-start">
          <a
            className="hover:underline underline-offset-1"
            href="https://www.temu.com/"
            target="_blank"
          >
            Temu
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.tesco.com/"
            target="_blank"
          >
            Tesco
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.amazon.co.uk/"
            target="_blank"
          >
            Amazon
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.jdsports.co.uk/"
            target="_blank"
          >
            JD Sports
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.shoezone.com/"
            target="_blank"
          >
            Shoe Zone
          </a>
        </div>
        <div className="flex flex-col text-gray-600 gap-5 items-start">
          <a
            className="hover:underline underline-offset-1"
            href="https://www.very.co.uk/"
            target="_blank"
          >
            Very
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.mandmdirect.com/"
            target="_blank"
          >
            MandM
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.4gadgets.co.uk/"
            target="_blank"
          >
            4Gadgets
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.sportsdirect.com/"
            target="_blank"
          >
            Sports Direct
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.shein.co.uk/"
            target="_blank"
          >
            Shein
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://runwayboutique.co.uk/"
            target="_blank"
          >
            Runway Boutique
          </a>
        </div>
        <div className="flex flex-col text-gray-600 gap-5 items-start">
          <a
            className="hover:underline underline-offset-1"
            href="https://www.backmarket.co.uk/en-gb"
            target="_blank"
          >
            Back Market
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.marksandspencer.com/"
            target="_blank"
          >
            Marks and Spencer
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.ebay.co.uk/"
            target="_blank"
          >
            Ebay
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.boohooplc.com/"
            target="_blank"
          >
            Boohoo
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.argos.co.uk/"
            target="_blank"
          >
            Argos
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.next.co.uk/"
            target="_blank"
          >
            Next
          </a>
        </div>
        <div className="flex flex-col text-gray-600 gap-5 items-start">
          <a
            className="hover:underline underline-offset-1"
            href="https://www.currys.co.uk/"
            target="_blank"
          >
            Currys
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.asda.com/"
            target="_blank"
          >
            Asda
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.asos.com/"
            target="_blank"
          >
            ASOS
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www.johnlewis.com/"
            target="_blank"
          >
            John Lewis
          </a>
          <a
            className="hover:underline underline-offset-1"
            href="https://www2.hm.com/en_gb/index.html"
            target="_blank"
          >
            H&M
          </a>
          <a
            className="hover:underline underline-offset-1"
            target="_blank"
            href="https://www.farfetch.com/"
          >
            Farfetch
          </a>
        </div>
        <div className="flex flex-col text-gray-600 gap-5 items-start">
          <a
            className="hover:underline underline-offset-1"
            target="_blank"
            href="https://www.farfetch.com/"
          >
            House of Fraser
          </a>
          <a
            className="hover:underline underline-offset-1"
            target="_blank"
            href="https://www.prettylittlething.com/"
          >
            Pretty Little Thing
          </a>
          <a
            className="hover:underline underline-offset-1"
            target="_blank"
            href="https://www.newlook.com/row"
          >
            New Look
          </a>
          <a
            className="hover:underline underline-offset-1"
            target="_blank"
            href="https://www.boden.co.uk/en-gb"
          >
            Boden
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between">
        <a href="#">
          <img className="logo" src={logo} alt="WeShopAndShip logo" />
        </a>

        <p>{`WeShopAndShip @ ${year} All rights reserved`}</p>

        <div className="flex items-center gap-5 my-10 sm:my-0">
          <a href="https://web.facebook.com/weshopandship1">
            <FaFacebook size={22} />
          </a>
          <a href="https://www.instagram.com/weshopandship/">
            <FaInstagram size={22} />
          </a>

          <a target="_blank" href="https://wa.me/+447778190602">
            <FaWhatsapp size={22} />
          </a>
          <span>info@weshopandship.co.uk</span>
        </div>
      </div>
    </footer>
  );
}
