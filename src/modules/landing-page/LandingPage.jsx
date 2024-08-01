import Header from '@/src/components/ui/header';
import Footer from '@/src/components/ui/footer';
import icon from '@/src/assets/Icon.png';
import secondIcon from '@/src/assets/Icon2nd_folder.png';
import thirdIcon from '@/src/assets/Icon3rd_folder.png';
import picture from '@/src/assets/Picture.png';
import secondPhoneIllustration from '@/src/assets/2nd_phone.png';
import thirdPhoneIllustration from '@/src/assets/3rd_phone.png';
import fourthPhoneIllustration from '@/src/assets/4th_phone.png';
import jumbotronIllustration from '@/src/assets/2148385638.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/src/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';

export default function LandingPage() {
  return (
    <div className="max-w-full">
      <Header />

      <div className="font-body">
        <section className="font-body px-10 sm:px-20 py-14 flex flex-col sm:flex-row items-center justify-between gap-x-16">
          <div className="w-full text-base sm:w-[50%] text-start mb-16 sm:mb-0">
            <h1 className="font-[800] text-5xl mb-4 font-header epilogue-font">
              Shopping Across UK Stores Just Got Easier
            </h1>
            <p className="font-medium text-justify text-lg">
              At <b>WeShopAndShip,</b> we provide an innovative and
              cost-efficient platform that simplifies shopping from a wide range
              of UK online stores. Our service makes it easy for clients to
              browse and purchase products from various UK shops. Our mission is
              to ensure your international shopping experience is seamless,
              affordable, and enjoyable. Enjoy effortless access to UK products
              with our streamlined shopping solutions.
            </p>

            <div className="mt-5 flex gap-3 items-center">
              <Button className="bg-blue hover:bg-primary-tint-300">
                <a href="/login" className="">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full sm:w-[50%] flex justify-center">
            <img src={jumbotronIllustration} alt="Illustration" />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center bg-custom-gradient gap-4 mt-4 pt-10 pb-16 px-10 sm:px-20">
          <div className="py-4 px-10 sm:px-0 text-center">
            <h2 className="font-bold text-5xl mb-4 epilogue-font">
              Core Services
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-4 pt-10 pb-16 px-10 sm:px-20">
            <div className="flex flex-col justify-center items-center sm:w-[30%]">
              <img src={icon} alt="icon" width={80} height={80} />
              <h2 className="font-bold text-2xl py-3">
                Procurement and Shopping Service
              </h2>
              <p className="text-center">
                <b>WeShopAndShip</b> provides a streamlined procurement service,
                allowing you to shop UK stores and consolidate purchases into
                one shipment. Save on shipping costs and enjoy affordable,
                efficient international delivery.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:w-[30%]">
              <img src={secondIcon} alt="icon" width={80} height={80} />
              <h2 className="font-bold text-2xl py-3">Pay Supplier Service</h2>
              <p className="text-center">
                <b>WeShopAndShip</b> simplifies procurement with our Pay
                Supplier Service. We handle supplier payments, forward goods to
                our UK warehouse, and manage efficient delivery to your address.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:w-[30%]">
              <img src={thirdIcon} alt="icon" width={80} height={80} />
              <h2 className="font-bold text-2xl py-3">
                Express Courier Service
              </h2>
              <p className="text-center">
                <b>WeShopAndShip</b> offers reliable Express Courier Service,
                swiftly shipping documents and parcels to over 220 countries.
                Enjoy fast, secure, and efficient international delivery with
                our global reach.
              </p>
            </div>
          </div>
        </section>

        <div className="py-12 px-10 sm:px-0 text-center">
          <h2 className="font-bold text-5xl mb-4 epilogue-font">
            All the essential tools
          </h2>
          <p className="text-xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vulputate quam sit amet sapien elementum sagittis.
          </p>
        </div>

        <section
          className={`font-body px-10 sm:px-20 py-14 flex flex-col sm:flex-row-reverse items-center justify-between`}
        >
          <div className="sm:w-[50%] text-start mb-16 sm:mb-0">
            <p className="font-medium text-justify text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vulputate quam sit amet sapien elementum sagittis. Morbi vehicula
              ultrices lacus, et finibus odio pellentesque nec. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec dictum ac risus
              vel porttitor. Nullam sollicitudin arcu eget elit rhoncus, ut
              imperdiet ex commodo.
            </p>
          </div>
          <div className="w-full sm:w-[50%] flex justify-center">
            <img src={secondPhoneIllustration} alt="Illustration" />
          </div>
        </section>

        <div className="py-12 px-10 sm:px-0  text-center">
          <h2 className="font-bold text-5xl mb-4 epilogue-font">
            Focus on what matters
          </h2>
          <p className="text-xl font-medium">
            Optimize your international shopping with WeShopAndShip—simple,
            efficient, and tailored to your needs. Contact Us now to find out
            more.
          </p>
        </div>

        <section className="font-body px-10 sm:px-20 py-14 flex flex-col sm:flex-row-reverse items-center justify-between">
          <div className="sm:w-[50%] text-start text-lg mb-16 sm:mb-0">
            <div className="mb-10 border-l-4 border-blue-600 pl-10 py-2">
              <h3 className="font-bold mb-5">
                Bibendum gravida dolor egestas aliquam
              </h3>
              <p className="font-medium text-justify text-lg">
                Egestas tincidunt hendrerit nibh platea sit vivamus aenean
                rhoncus etiam. Tristique amet, sed ac ac dolor habitant. Mauris
                duis neque molestie venenatis nibh hendrerit pharetra. Tortor
                suscipit leo sit tellus ac scelerisque gravida sem.
              </p>
            </div>
            <h3 className="font-bold mb-10 border-l-4 pl-10 py-2">
              Egestas lorem eget
            </h3>
            <h3 className="font-bold border-l-4 pl-10 py-2">
              Tellus eget feugiat sit
            </h3>
          </div>
          <div className="w-full sm:w-[50%] flex justify-center">
            <img src={thirdPhoneIllustration} alt="Illustration" />
          </div>
        </section>

        <Button
          className="bg-blue-600 hover:text-blue-600 hover:bg-white w-[150px] sm:w-[225px] py-7 sm:px-8 px-6 mb-10"
          asChild
        >
          <a href="/login" className="text-xl">
            Get Started
          </a>
        </Button>

        <div className="">
          <Carousel
            className="bg-[#F1F5F9] py-20"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="flex justify-center items-center gap-20">
                  <img src={picture} alt="picture" />
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="uppercase text-lg font-semibold text-gray-600 mb-3">
                      Success Stories
                    </h3>
                    <p className="text-justify text-xl w-[528px]">
                      <span
                        className="text-[#EAB308] text-3xl
"
                      >
                        “
                      </span>{' '}
                      I’m thrilled with my experience using WeShopAndShip! As a
                      client from Nigeria, shopping from the UK can be quite
                      challenging, but their service made everything so easy.
                      From setting up my account to receiving my packages, every
                      step was seamless and the web app made me feel in control.
                      The process was straightforward and saved me a lot on
                      shipping costs by consolidating my orders into one
                      shipment. The communication was excellent, and my items
                      arrived quickly and securely. I highly recommend
                      WeShopAndShip for anyone looking to save time and money on
                      international shopping. Their dedication to customer
                      satisfaction is truly impressive!.{' '}
                      <span
                        className="text-[#EF4444] text-3xl
"
                      >
                        ”
                      </span>
                    </p>
                    <p className="text-lg mt-2">Chinwe A.</p>
                    <p className="font-bold text-lg">Lagos, Nigeria</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex justify-center items-center gap-20">
                  <img src={picture} alt="picture" />
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="uppercase text-lg font-semibold text-gray-600 mb-3">
                      Success Stories
                    </h3>
                    <p className="text-justify text-xl w-[528px]">
                      <span
                        className="text-[#EAB308] text-3xl
"
                      >
                        “
                      </span>{' '}
                      I recently used WeShopAndShip to shop from UK stores, and
                      I’m thrilled with the experience! As a resident of
                      Nigeria, I was initially worried about the complexities of
                      international shopping, but WeShopAndShip made it
                      incredibly easy. From creating my account to receiving my
                      products, every step was smooth and hassle-free. The
                      platform’s ability to consolidate my purchases into one
                      shipment saved me a lot on shipping costs. The delivery
                      was fast and reliable, and I was kept informed throughout
                      the process. The customer service team was outstanding,
                      always available to answer my queries and provide
                      assistance. I highly recommend WeShopAndShip to anyone
                      looking for a seamless and cost-effective way to shop from
                      UK stores. It’s a game-changer for international shoppers
                      like me!{' '}
                      <span
                        className="text-[#EF4444] text-3xl
"
                      >
                        ”
                      </span>
                    </p>
                    <p className="text-lg mt-2">Emeka O.</p>
                    <p className="font-bold text-lg">Aba, Nigeria</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex justify-center items-center gap-20">
                  <img src={picture} alt="picture" />
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="uppercase text-lg font-semibold text-gray-600 mb-3">
                      Success Stories
                    </h3>
                    <p className="text-justify text-xl w-[528px]">
                      <span
                        className="text-[#EAB308] text-3xl
"
                      >
                        “
                      </span>{' '}
                      I’m extremely impressed with WeShopAndShip's Pay Supplier
                      Service! As a small business owner in Ghana, I needed a
                      reliable way to manage payments to my suppliers in the UK
                      and have my goods sent to my international address.
                      WeShopAndShip delivered exactly what I needed. The process
                      was straightforward—They handled the payments to my
                      suppliers efficiently, ensuring my products were forwarded
                      to their UK warehouse without any issues. Once my items
                      arrived, they managed the shipping seamlessly, and I
                      received everything promptly. The service was transparent
                      and hassle-free, which saved me a lot of time and stress.
                      Their team provided excellent support throughout, making
                      sure all my queries were answered quickly. If you're
                      looking for a dependable solution to handle supplier
                      payments and logistics, WeShopAndShip is the way to go!{' '}
                      <span
                        className="text-[#EF4444] text-3xl
"
                      >
                        ”
                      </span>
                    </p>
                    <p className="text-lg mt-2">Sarah M.</p>
                    <p className="font-bold text-lg">Aba, Nigeria</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mt-20 mb-16 px-10 sm:px-0 ">
          <h2 className="font-bold text-5xl mb-4 epilogue-font">
            Questions You May Ask About WeShopAndShip Services
          </h2>
        </div>

        <Accordion type="single" collapsible className="mb-32 px-20">
          <AccordionItem value="item-1" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              What is WeShopAndShip?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              WeShopAndShip is an innovative platform that allows you to shop
              from various online stores in the UK, consolidating multiple
              purchases into one shipment to save on shipping costs. We also
              offer services like Pay Supplier and Express Courier for a
              seamless international shopping experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              How do I sign up for WeShopAndShip?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              Simply visit our website, click on the &apos;Get Started&apos;
              button, and fill in the required details. Once your account is
              created, you can start using our services immediately.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              What payment method do you accept?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              We accept a variety of payment methods for adding funds to your
              wallet, including direct bank transfers for Nigeria and UK clients
              and debit/ credit cards for clients from other countries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              How can I shop from multiple UK stores at once?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              You can shop from as many UK stores as you like. Simply Browse our
              range of featured shops and copy the product links for items you
              want to purchase. Complete the “Place Order” form with your order
              details and preferences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              How does the Pay Supplier Service work?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              Our Pay Supplier Service allows you to pay your personal suppliers
              in the UK. We handle the payment and ensure your goods are
              forwarded to our UK warehouse for efficient handling and onward
              delivery to your address.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              Can I track my orders?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              Yes, you can track your orders through your WeShopAndShip
              dashboard. You will also receive notifications as soon as your
              orders are delivered to our warehouse.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              How do I request shipping for my consolidated orders?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              Once all your orders are marked as ‘Received’ in your dashboard,
              you can click the ‘Request Shipping’ button. We will then package
              and ship all your items to your specified address
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              What countries does WeShopAndShip deliver to?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              WeShopAndShip delivers to over 220 countries worldwide, ensuring
              global reach and reliable performance for all your shipping needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              How can I save on shipping costs?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              By consolidating multiple purchases into a single shipment,
              WeShopAndShip helps you save on international shipping costs. This
              makes your shopping experience more affordable and efficient.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              How fast is the delivery?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              Delivery times vary depending on the destination. Our Express
              Courier Service ensures fast and secure delivery, making
              international shipping easy and efficient.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              How do I contact customer support?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              You can contact our customer support team via email, phone, or
              live chat on our website. We are always ready to assist you with
              any questions or concerns you may have.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12" className="py-2">
            <AccordionTrigger className="text-blue-600 text-xl sm:text-2xl epilogue-font">
              Is my personal information safe with WeShopAndShip?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              Yes, we prioritize your privacy and security. We use advanced
              encryption and security measures to ensure your personal
              information is protected.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <section className="font-body px-10 sm:px-20 py-20 flex flex-col sm:flex-row items-center justify-between bg-[#F1F5F9]">
          <div className="sm:w-[50%] text-start mb-16 sm:mb-0">
            <h1 className="font-[800] text-5xl mb-4 epilogue-font">
              How do I request shipping for my consolidated orders?
            </h1>
            <p className="font-medium text-justify text-lg">
              Once all your orders are marked as ‘Received’ in your dashboard,
              you can click the ‘Request Shipping’ button. We will then package
              and ship all your items to your specified address.
            </p>
            <div className="mt-7 flex gap-3 items-center">
              <Button
                className="bg-blue-600 hover:text-blue-600 hover:bg-white w-[150px] sm:w-[225px] py-7 sm:px-8 px-6"
                asChild
              >
                <a href="/login" className="text-xl">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full sm:w-[50%] flex justify-center">
            <img src={fourthPhoneIllustration} alt="Illustration" />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
