import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const footerLinks = [
    {
      title: "Company",
      elements: [
        {
          title: "About",
          href: "/about-us",
        },
        {
          title: "Contact us ",
          href: "/contact-us",
        },

        {
          title: "FAQ",
          href: "/faq",
        },
        {
          title: "Blog",
          href: "/blog",
        },
      ],
    },

    {
      title: "Contact us",
      elements: [
        {
          title: "contact@company.com",
          icon: <Mail className="mr-2 w-4 h-4 shrink-0" />,
        },
        {
          title: "(414)687-5892",
          icon: <Phone className="mr-2 w-4 h-4 shrink-0" />,
        },

        {
          title: "794 Mcallister St San Francisco, 94102",
          icon: <MapPin className="mr-2 w-4 h-4 shrink-0" />,
        },
      ],
    },
  ];

  const socialIcons = [
    "/Facebook.png",
    "/Twitter.png",
    "/Instagram.png",
    "/LinkedIn.png",
    "/YouTube.png",
  ];
  return (
    <div className="bg-main p-6 py-20">
      <section className="   text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-20 container">
        <article className="flex flex-col gap-4">
          <div className="relative w-[150px] aspect-video">
            <Image
              fill
              src={"/main-logo.png"}
              alt="logo"
              className="object-contain"
            />
          </div>
          <h3 className="text-xs font-light md:text-base">
          Elevate Your Drive with UAE&apos;s Finest Luxury Cars.{" "}
          </h3>
          <div className="flex items-center gap-8 mt-4 flex-wrap">
            {socialIcons.map((icon) => (
              <div className="w-4  aspect-square relative shrink-0" key={icon}>
                <Image src={icon} fill alt={icon} className="object-contain " />
              </div>
            ))}
          </div>
        </article>

        {footerLinks.map((link) => (
          <article key={link.title} className=" ">
            <h3 className="font-semibold capitalize">{link.title}</h3>
            <div className="mt-3 md:mt-8 flex flex-col gap-4 md:gap-8">
              {link.elements.map((el) => {
                if ("icon" in el)
                  return (
                    <div key={el.title} className="flex items-center">
                      {el.icon}
                      <p className="text-xs first-letter:capitalize font-light md:text-base">
                        {el.title}
                      </p>
                    </div>
                  );

                return (
                  <Link
                    key={el.title}
                    className="text-xs font-extralight   md:text-base hover:underline w-fit"
                    href={el.href}
                  >
                    {el.title}
                  </Link>
                );
              })}
            </div>
          </article>
        ))}
      </section>

      {/*copy rights  - terms & privacy */}
      <section className="pt-8 border-t border-white w-full mt-12 flex items-center justify-between text-white flex-col md:flex-row gap-3 container">
        <p className="lg:text-lg sm:text-sm font-light text-xs">
          Copyright © 2023 PRIRENTO.
        </p>

        <p className="lg:text-lg sm:text-sm font-light text-xs text-cetner">
          All Rights Reserved |{" "}
          <Link className="underline" href={"/terms-and-conditions"}>
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <Link className="underline" href={"/privacy-policy"}>
            Privacy Policy
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Footer;
