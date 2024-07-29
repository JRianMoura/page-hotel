"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { Button } from "./ui/button";
import Image from "next/image";

const recommendationData = [
  {
    name: "Royal Tulip Brasília",
    image: "/recommendation/hotel-1.png",
    location: "Brasília, DF",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet a pariatur suscipit sequi autem accusamus, quos aperiam rerum velit quas.",
    price: 90,
    testimonial: {
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit.",
      personName: "Roberto Souza",
    },
  },
  {
    name: "Campanario Villaggio Jurerê",
    image: "/recommendation/hotel-2.png",
    location: "Florianopolis, SC",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet a pariatur suscipit sequi autem accusamus, quos aperiam rerum velit quas.",
    price: 150,
    testimonial: {
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit.",
      personName: "Gilmar Junior",
    },
  },
  {
    name: "Palácio Tangará São Paulo",
    image: "/recommendation/hotel-3.png",
    location: "São Paulo, SP",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet a pariatur suscipit sequi autem accusamus, quos aperiam rerum velit quas.",
    price: 100,
    testimonial: {
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit.",
      personName: "Paula Dias",
    },
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Recommendation = () => {
  return (
    <section className="pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
        >
          {recommendationData.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0">
                  <div className="max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                    <h2 className="h2 mb-4 ">{hotel.name}</h2>
                    <p className="text-soft_green text-sm mb-6">
                      {hotel.location}
                    </p>
                    <p className="mb-[60px]">{hotel.desc}</p>
                    <div className="flex items-center gap-x-[35px]">
                      <Button variant="accent" className="px-[44px]">
                        Agende agora
                      </Button>
                      <div className="text-black">
                        <span className="font-bold text-2xl">
                          R${hotel.price}
                        </span>
                        <span className="text-sm">/noite</span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 xl:order-2 flex flex-1 justify-center xl:justify-end relative h-[634px]">
                    <div>
                      <Image
                        src={hotel.image}
                        width={905}
                        height={528}
                        quality={100}
                        alt=""
                        className="xl:rounded-tl-[20px] xl:rounded-bl-[20px] sticky"
                      />
                      <div className="bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl px-10">
                        <p className="mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6">
                          {hotel.testimonial.message}
                        </p>
                        <p className="text-xl font-bold">
                          {hotel.testimonial.personName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
      <Image
        src={"recommendation/pattern.svg"}
        width={240}
        height={240}
        alt=""
        className="hidden xl:flex absolute left-[135px] -bottom-[120px]"
      />
    </section>
  );
};

export default Recommendation;
