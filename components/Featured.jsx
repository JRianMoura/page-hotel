import Image from "next/image";

const Featured = () => {
  return (
    <section className="bg-soft_green-secondary xl:h-[240px] max-w-[1 305px] ml-auto xl:-top-[120px] relative rounded-tl-[30px] rounded-bl-[30px] px-[80px] py-[60px]">
      <div className="flex flex-col xl:flex-row items-center h-full gap-x-[30px] text-center xl:text-left">
        <Image
          className="xl:mr-[50px]"
          src={"/featured/icon.svg"}
          width={73}
          height={84}
          alt=""
        />
        <h2 className="h2 flex-1 text-soft_green leading-relaxed">
          Reserve um quarto incrível em menos de 1 minuto.
        </h2>
        <p className="flex-1 text-soft_green leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          dolorem quod nesciunt suscipit aspernatur officia repudiandae deleniti
          quae corporis veniam.
        </p>
      </div>
    </section>
  );
};

export default Featured;
