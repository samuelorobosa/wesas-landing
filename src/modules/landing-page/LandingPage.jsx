import Header from '@/src/components/ui/header';
import Footer from '@/src/components/ui/footer';
import icon from '@/src/assets/Icon.png';
import secondIcon from '@/src/assets/Icon2nd_folder.png';
import thirdIcon from '@/src/assets/Icon3rd_folder.png';
import jumbotronIllustration from '@/src/assets/2148385638.jpg';
import About from '@/src/assets/About.jpg';
import Mission from '@/src/assets/Mission.jpg';
import Committment from '@/src/assets/Committment.jpg';
import GetStarted from '@/src/assets/GetStarted.jpg';
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
import {
  BoxIcon,
  CreditCardIcon,
  GlobeIcon,
  PackageIcon,
  PlaneIcon,
  SearchIcon,
  ShieldIcon,
  ShoppingCartIcon,
  StarIcon,
  TruckIcon,
  UserIcon,
  WalletIcon,
} from 'lucide-react';

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
            <p className="font-normal text-justify text-lg">
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
            <h2 className="font-bold sm:text-5xl text-3xl mb-4 epilogue-font">
              Core Services
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pb-5 px-10 sm:px-20">
            <div className="flex flex-col justify-center items-center sm:w-[30%] text-center">
              <img src={icon} alt="icon" width={80} height={80} />
              <h2 className="font-bold text-xl py-3">
                Procurement and Shopping Service
              </h2>
              <p className="">
                <b>WeShopAndShip</b> provides a streamlined procurement service,
                allowing you to shop UK stores and consolidate purchases into
                one shipment. Save on shipping costs and enjoy affordable,
                efficient international delivery.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:w-[30%]">
              <img src={secondIcon} alt="icon" width={80} height={80} />
              <h2 className="font-bold text-xl py-3">Pay Supplier Service</h2>
              <p className="">
                <b>WeShopAndShip</b> simplifies procurement with our Pay
                Supplier Service. We handle supplier payments, forward goods to
                our UK warehouse, and manage efficient delivery to your address.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:w-[30%]">
              <img src={thirdIcon} alt="icon" width={80} height={80} />
              <h2 className="font-bold text-xl py-3">
                Express Courier Service
              </h2>
              <p className="">
                <b>WeShopAndShip</b> offers reliable Express Courier Service,
                swiftly shipping documents and parcels to over 220 countries.
                Enjoy fast, secure, and efficient international delivery with
                our global reach.
              </p>
            </div>
          </div>
        </section>

        {/*<div className="py-12 px-10 sm:px-0 text-center">*/}
        {/*  <h2 className="font-bold text-5xl mb-4 epilogue-font">*/}
        {/*    Focus on what Matters.*/}
        {/*  </h2>*/}
        {/*  <p className="text-xl font-medium">*/}
        {/*    Optimize your international shopping with WeShopAndShip—simple,*/}
        {/*    efficient, and tailored to your needs. Contact Us now to find out*/}
        {/*    more.*/}
        {/*  </p>*/}
        {/*</div>*/}

        <section
          className={`font-body px-10 sm:px-20 py-14 gap-x-16 flex flex-col sm:flex-row-reverse items-center justify-between`}
        >
          <div className="sm:w-[50%] text-start mb-16 sm:mb-0">
            <h2 className="font-bold sm:text-5xl text-3xl mb-4 epilogue-font">
              About Us
            </h2>
            <p className="font-normal text-lg">
              WeShopAndShip is your trusted partner in international shopping
              and logistics solutions. With years of industry experience and a
              commitment to excellence, we specialize in streamlining the
              procurement/shopping process for individuals and businesses of all
              sizes. Our expertise ensures that you receive the highest quality
              goods and services efficiently and cost-effectively.
            </p>
          </div>
          <div className="w-full sm:w-[50%] flex justify-center">
            <img src={About} alt="Illustration" />
          </div>
        </section>
        <section
          className={`font-body px-10 sm:px-20 py-14 gap-16 flex flex-col sm:flex-row-reverse items-center justify-between`}
        >
          <div className="w-full sm:w-[50%] flex justify-center">
            <img src={Mission} alt="Illustration" />
          </div>
          <div className="sm:w-[50%] text-start mb-8 sm:mb-0">
            <h2 className="font-bold sm:text-5xl text-3xl mb-4 epilogue-font">
              Our Mission
            </h2>
            <p className="font-normal text-justify text-lg">
              At WeShopAndShip, our mission is to transform the online shopping
              experience by providing personalized, convenient, and
              cost-efficient Procurement/shopping services that enables our
              clients shop from different genuine online shops across the United
              Kingdom, and have them consolidated and shipped to clients as one
              shipment. We aim to save our clients time, effort and money while
              delivering exceptional value and satisfaction with every purchase.
            </p>
          </div>
        </section>
        <section
          className={`font-body px-10 sm:px-20 py-14 gap-x-16 flex flex-col sm:flex-row-reverse items-center justify-between`}
        >
          <div className="sm:w-[50%] text-start mb-8 sm:mb-0">
            <h2 className="font-bold sm:text-5xl text-3xl mb-4 epilogue-font">
              Our Commitment to Sustainability
            </h2>
            <p className="font-normal text-justify text-lg">
              We are committed to sustainable practices that benefit both our
              clients and the environment. Our procurement and logistics
              strategies prioritize eco-friendly products and suppliers, and our
              logistics solutions are designed to minimize carbon footprints.
            </p>
          </div>
          <div className="w-full sm:w-[50%] flex justify-center">
            <img src={Committment} alt="Illustration" />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-3xl">
                  Our Services
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a range of services to help you shop and ship from
                  the UK.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:bg-muted">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue">
                  <PackageIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Shop from UK Stores</h3>
                  <p className="text-muted-foreground">
                    Access a wide range of products from UK-based retailers.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:bg-muted">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue">
                  <TruckIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    Consolidated Shipping
                  </h3>
                  <p className="text-muted-foreground">
                    Combine multiple purchases into a single shipment for cost
                    savings.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:bg-muted">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue">
                  <PlaneIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    Express Courier Service
                  </h3>
                  <p className="text-muted-foreground">
                    Get your items delivered quickly with our express courier
                    options.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:bg-muted">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue">
                  <BoxIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Package Forwarding</h3>
                  <p className="text-muted-foreground">
                    Forward your packages to your final destination with ease.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:bg-muted">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue">
                  <ShieldIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Customs Assistance</h3>
                  <p className="text-muted-foreground">
                    We handle all customs clearance and paperwork on your
                    behalf.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-16">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="font-bold tracking-tighter sm:text-5xl text-3xl">
                Why Choose WeShopAndShip?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the benefits of our consolidated shipping service.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue rounded-md p-3 flex items-center justify-center">
                  <TruckIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Convenience</h3>
                  <p className="text-muted-foreground">
                    Shop from multiple UK stores without the hassle of managing
                    multiple international shipments.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue rounded-md p-3 flex items-center justify-center">
                  <WalletIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Cost Efficiency</h3>
                  <p className="text-muted-foreground">
                    Our consolidated shipping service helps you save money,
                    making international shopping more affordable.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue rounded-md p-3 flex items-center justify-center">
                  <PackageIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Expertise</h3>
                  <p className="text-muted-foreground">
                    With our experience in logistics and personal shopping, you
                    can trust us to handle your purchases with care and
                    precision.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue rounded-md p-3 flex items-center justify-center">
                  <GlobeIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Global Reach</h3>
                  <p className="text-muted-foreground">
                    With a robust network and courier partnerships worldwide, we
                    have the capability to deliver parcels to over 220
                    countries. Our clients can shop UK products from anywhere in
                    the world with the confidence of getting their products
                    delivered to their doorstep on time, every time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue rounded-md p-3 flex items-center justify-center">
                  <StarIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Customer Satisfaction
                  </h3>
                  <p className="text-muted-foreground">
                    We provide exceptional service and support, ensuring a
                    seamless and satisfactory international shopping experience
                    that exceeds expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<div className="py-12 px-10 sm:px-0  text-center">*/}
        {/*  <h2 className="font-bold sm:text-5xl text-3xl mb-4 epilogue-font">*/}
        {/*    Focus on what matters*/}
        {/*  </h2>*/}
        {/*  <p className="text-xl font-medium">*/}
        {/*    Optimize your international shopping with WeShopAndShip—simple,*/}
        {/*    efficient, and tailored to your needs. Contact Us now to find out*/}
        {/*    more.*/}
        {/*  </p>*/}
        {/*</div>*/}

        <section className="bg-muted py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl sm:text-5xl text-3xl">
                5 Simple Steps to Use WeShopAndShip
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Discover how easy it is to shop and ship with our seamless
                platform.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue text-primary-foreground">
                  <SearchIcon className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Find Products</h3>
                  <p className="mt-2 text-muted-foreground">
                    Browse our vast selection of products from top brands.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue text-primary-foreground">
                  <ShoppingCartIcon className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Add to Cart</h3>
                  <p className="mt-2 text-muted-foreground">
                    Easily add the items you want to your shopping cart.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue text-primary-foreground">
                  <CreditCardIcon className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Secure Checkout</h3>
                  <p className="mt-2 text-muted-foreground">
                    Complete your purchase with our safe and reliable checkout.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue text-primary-foreground">
                  <TruckIcon className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Worldwide Shipping</h3>
                  <p className="mt-2 text-muted-foreground">
                    We deliver your items to your doorstep, anywhere in the
                    world.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue text-primary-foreground">
                  <UserIcon className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Dedicated Support</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our team is here to assist you every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className=" bg-[#F1F5F9]">
          <Carousel
            className="py-20 w-full sm:w-1/2 px-10 mx-auto"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: 'start',
              loop: true,
              slidesInView: 1,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-3xl font-semibold mb-4">
                    Client Review for WeShopAndShip
                  </h3>
                  <p className="text-justify text-xl">
                    <span
                      className="text-[#EAB308] text-3xl
"
                    >
                      “
                    </span>{' '}
                    I’m thrilled with my experience using WeShopAndShip! As a
                    client from Nigeria, shopping from the UK can be quite
                    challenging, but their service made everything so easy. From
                    setting up my account to receiving my packages, every step
                    was seamless and the web app made me feel in control. The
                    process was straightforward and saved me a lot on shipping
                    costs by consolidating my orders into one shipment. The
                    communication was excellent, and my items arrived quickly
                    and securely. I highly recommend WeShopAndShip for anyone
                    looking to save time and money on international shopping.
                    Their dedication to customer satisfaction is truly
                    impressive!.{' '}
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
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-3xl font-semibold mb-4">
                    Client Review for WeShopAndShip
                  </h3>
                  <p className="text-justify text-xl">
                    <span
                      className="text-[#EAB308] text-3xl
"
                    >
                      “
                    </span>{' '}
                    I recently used WeShopAndShip to shop from UK stores, and
                    I’m thrilled with the experience! As a resident of Nigeria,
                    I was initially worried about the complexities of
                    international shopping, but WeShopAndShip made it incredibly
                    easy. From creating my account to receiving my products,
                    every step was smooth and hassle-free. The platform’s
                    ability to consolidate my purchases into one shipment saved
                    me a lot on shipping costs. The delivery was fast and
                    reliable, and I was kept informed throughout the process.
                    The customer service team was outstanding, always available
                    to answer my queries and provide assistance. I highly
                    recommend WeShopAndShip to anyone looking for a seamless and
                    cost-effective way to shop from UK stores. It’s a
                    game-changer for international shoppers like me!{' '}
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
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-3xl font-semibold mb-4">
                    Client Review for WeShopAndShip
                  </h3>
                  <p className="text-justify text-xl">
                    <span
                      className="text-[#EAB308] text-3xl
"
                    >
                      “
                    </span>{' '}
                    I’m extremely impressed with WeShopAndShip&apos;s Pay
                    Supplier Service! As a small business owner in Ghana, I
                    needed a reliable way to manage payments to my suppliers in
                    the UK and have my goods sent to my international address.
                    WeShopAndShip delivered exactly what I needed. The process
                    was straightforward—They handled the payments to my
                    suppliers efficiently, ensuring my products were forwarded
                    to their UK warehouse without any issues. Once my items
                    arrived, they managed the shipping seamlessly, and I
                    received everything promptly. The service was transparent
                    and hassle-free, which saved me a lot of time and stress.
                    Their team provided excellent support throughout, making
                    sure all my queries were answered quickly. If you&apos;re
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
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mt-20 mb-16 px-10 sm:px-0 ">
          <h2 className="font-bold sm:text-5xl text-3xl mb-4 epilogue-font text-center">
            Questions You May Ask About WeShopAndShip Services
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mb-32 sm:px-20 px-10 text-left"
        >
          <AccordionItem value="item-1" className="py-2">
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
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
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
              How do I sign up for WeShopAndShip?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              Simply visit our website, click on the &apos;Get Started&apos;
              button, and fill in the required details. Once your account is
              created, you can start using our services immediately.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-2">
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
              What payment method do you accept?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              We accept a variety of payment methods for adding funds to your
              wallet, including direct bank transfers for Nigeria and UK clients
              and debit/ credit cards for clients from other countries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="py-2">
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
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
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
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
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
              Can I track my orders?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              Yes, you can track your orders through your WeShopAndShip
              dashboard. You will also receive notifications as soon as your
              orders are delivered to our warehouse.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7" className="py-2">
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
              How do I request shipping for my consolidated orders?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              Once all your orders are marked as ‘Received’ in your dashboard,
              you can click the ‘Request Shipping’ button. We will then package
              and ship all your items to your specified address
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8" className="py-2">
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
              What countries does WeShopAndShip deliver to?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              WeShopAndShip delivers to over 220 countries worldwide, ensuring
              global reach and reliable performance for all your shipping needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9" className="py-2">
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
              How can I save on shipping costs?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              By consolidating multiple purchases into a single shipment,
              WeShopAndShip helps you save on international shipping costs. This
              makes your shopping experience more affordable and efficient.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10" className="py-2">
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
              How fast is the delivery?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              Delivery times vary depending on the destination. Our Express
              Courier Service ensures fast and secure delivery, making
              international shipping easy and efficient.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11" className="py-2">
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
              How do I contact customer support?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              You can contact our customer support team via email, phone, or
              live chat on our website. We are always ready to assist you with
              any questions or concerns you may have.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12" className="py-2">
            <AccordionTrigger className="text-blue-600 text-lg sm:text-2xl text-left">
              Is my personal information safe with WeShopAndShip?
            </AccordionTrigger>
            <AccordionContent className="text-base text-left">
              Yes, we prioritize your privacy and security. We use advanced
              encryption and security measures to ensure your personal
              information is protected.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <section className="font-body px-10 sm:px-20 py-20 flex flex-col gap-16 sm:flex-row items-center justify-between bg-[#F1F5F9]">
          <div className="sm:w-[50%] text-start mb-16 sm:mb-0">
            <h1 className="font-[800] sm:text-5xl text-3xl mb-4 epilogue-font">
              Start Now and Get the Best Services
            </h1>
            <p className="font-normal w-full text-lg">
              Partner with WeShopAndShip for top-notch procurement, shopping,
              and logistics solutions. Enjoy our seamless, cost-efficient
              service while you focus on what matters. Experience dedicated
              support and optimized international shopping today.
            </p>

            <div className="mt-7 flex gap-3 items-center">
              <Button
                className="bg-blue hover:text-blue-600 hover:bg-white w-[150px] sm:w-[225px] py-7 sm:px-8 px-6"
                asChild
              >
                <a href="/login" className="text-xl">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full sm:w-[50%] flex justify-center">
            <img src={GetStarted} alt="Illustration" />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
