"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const testimonialsData = [
  {
    img: "/testimonials/img-1.png",
    personName: "Renato Aragão",
    message:
      "Eu sou o didi, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure eveniet nesciunt praesentium ipsa obcaecati nemo nobis doloremque perspiciatis? Voluptas dolore, quo ut quis autem possimus laboriosam, ab sequi nesciunt, illum distinctio exercitationem laborum iure excepturi in nulla sit natus! Doloribus magnam voluptate optio, id officia iste excepturi.",
    location: "Fortaleza",
  },
  {
    img: "/testimonials/img-2.png",
    personName: "Padre Fabio de Melo",
    message:
      "Pe. Fabio, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure eveniet nesciunt praesentium ipsa obcaecati nemo nobis doloremque perspiciatis? Voluptas dolore, quo ut quis autem possimus laboriosam, ab sequi nesciunt, illum distinctio exercitationem laborum iure excepturi in nulla sit natus! Doloribus magnam voluptate optio, id officia iste excepturi.",
    location: "Santa Catarina",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="bg-soft_green xl:h-[880px] "
    >
      <div className="container mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonialsData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                  <Image
                    src={slide.img}
                    width={470}
                    height={470}
                    alt=""
                    quality={100}
                    className="hidden xl:flex rounded-full"
                  />
                  <div className="flex-1 bg-white/20 text-white p-12">
                    <p className="text-lg leading-9 mb-8">{slide.message}</p>
                    <p className="text-xl font-bold">{slide.personName}</p>
                    <p>{slide.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonials;
