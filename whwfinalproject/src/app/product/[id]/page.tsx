// import { BuyProduct } from "@/app/actions";
import { ProductDescription } from "@/app/components/ProductDescription";
import { BuyButton } from "@/app/components/SubmitButton";
import prisma from "@/app/lib/db";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { JSONContent } from "@tiptap/react";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { InterestButton } from "@/app/components/InterestButton";

async function getData(id: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: id,
    },
    select: {
      category: true,
      description: true,
      smallDescription: true,
      name: true,
      images: true,
      price: true,
      monetization: true,
      productAgeValue: true,
      productAgeUnit: true,
      revenueValue: true,
      revenueUnit: true,
      viewCount: true,
      createdAt: true,
      id: true,
      User: {
        select: {
          profileImage: true,
          firstName: true,
          id: true,
          email: true,
        },
      },
    },
  });
  return data;
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProductPage({ params } : any ) {

  const { id } =  params;
  const data = await getData(id);

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(" product data is ", data);
    const bgColor = `https://avatar.vercel.sh/${encodeURIComponent(data?.id || "")}`
  return (
    <section className="mx-auto px-4  lg:mt-10 max-w-7xl lg:px-8 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
      <Carousel className=" lg:row-end-1 lg:col-span-4">
        <CarouselContent>
          {data?.images.map((item, index) => (
            <CarouselItem key={index}>
              {/* <div className="">
                <Image
                  src={item as string}
                  alt="yoo"
                  fill
                  className="object-cover w-full h-full rounded-lg"
                />
              </div> */}
               <div className="relative aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden  "
                             style={{
                              backgroundImage: `url(${bgColor})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                             >
                             <div className="w-full h-full flex items-center justify-center">
                             <Image
                                alt="Product image"
                                src={item}
                                width={400}
                                height={600}
                                className=" static h-full w-full  max-h-[80%] max-w-[80%] rounded-lg"
                              />
                              </div>
                             
                            </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16 cursor-pointer" />
        <CarouselNext className="mr-16 cursor-pointer" />
      </Carousel>

      <div className="max-w-2xl mx-auto mt-5 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {data?.name}
        </h1>

        <p className="mt-2 text-muted-foreground">{data?.smallDescription}</p>
        {/* <form action={BuyProduct}> */}
        <form>
          <input type="hidden" name="id" value={data?.id} />
          <BuyButton price={data?.price as number} />
          <InterestButton 
  sellerEmail={data?.User?.email || ""} 
  productName={data?.name || ""} 
/>

        </form>

        <div className="border-t border-gray-200 mt-10 pt-10">
          <div className="grid grid-cols-2 w-full gap-y-3">
            <h3 className="text-sm font-medium text-muted-foreground col-span-1">
              Released:
            </h3>
            <h3 className="text-sm font-medium col-span-1">
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "long",
              }).format(data?.createdAt)}
            </h3>

            <h3 className="text-sm font-medium text-muted-foreground col-span-1">
              Category:
            </h3>

            <h3 className="text-sm font-medium col-span-1">{data?.category}</h3>
            <h3 className="text-sm font-medium text-muted-foreground col-span-1">
              Monetization:
            </h3>

            <h3 className="text-sm font-medium col-span-1">{data?.monetization}</h3>
            <h3 className="text-sm font-medium text-muted-foreground col-span-1">
              Product Age :
            </h3>

            <h3 className="text-sm font-medium col-span-1">{data?.productAgeValue} {data?.productAgeUnit}</h3>
            <h3 className="text-sm font-medium text-muted-foreground col-span-1">
              Revenue :
            </h3>

            <h3 className="text-sm font-medium col-span-1">{data?.revenueValue} {data?.revenueUnit}</h3>
            { data?.User?.email === user?.email && <> <h3 className="text-sm font-medium text-muted-foreground col-span-1">
              Views :
            </h3>

            <h3 className="text-sm font-medium col-span-1">{data?.viewCount}</h3></>}

            <h3 className="text-sm font-medium text-muted-foreground col-span-1">
              Seller&apos;s Email:
            </h3>

            <h3 className="text-sm font-medium col-span-1">{data?.User?.email}</h3>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10"></div>

        

       
      
    
      </div>

      <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
        <ProductDescription content={data?.description as JSONContent} />
      </div>
    </section>
  );
}
