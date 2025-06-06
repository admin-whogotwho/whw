"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {  z } from "zod";
import prisma from "./lib/db";
import { type CategoryTypes } from "@prisma/client";
// import { stripe } from "./lib/stripe";
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
export type State = {
  status: "error" | "success" | undefined;
  errors?: {
    [key: string]: string[];
  };
  message?: string | null;
};

const productSchema = z.object({
  name: z
    .string()
    .min(3, { message: "The name has to be a min charackter length of 5" }),
  category: z.string().min(1, { message: "Category is required" }),
  price: z.number().min(1, { message: "The Price has to be bigger then 1" }),
  smallDescription: z
    .string()
    .min(10, { message: "Please summerize your product more" }),
  description: z.string().min(10, { message: "Description is required" }),
  images: z.array(z.string(), { message: "Images are required" }),
  productFile: z
    .string()
    .or(z.literal(""))
    .optional(),
    monetization: z.enum(["advertisement", "sponsorship", "platform", "none"]),
    productAgeValue: z.coerce.number().min(0, {
      message: "Age must be a positive number",
    }),
    
  productAgeUnit: z.enum(["months", "years"]),
  revenueValue: z.coerce.number().min(0, {
    message: "Revenue must be a positive number",
  }),
  
  revenueUnit: z.enum(["monthly", "yearly"]),
});

const userSettingsSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "Minimum length of 3 required" })
    .or(z.literal(""))
    .optional(),

  lastName: z
    .string()
    .min(3, { message: "Minimum length of 3 required" })
    .or(z.literal(""))
    .optional(),
});

export async function SellProduct(prevState: State, formData: FormData) {

  console.log(" form data in sell product lalala", formData);
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Something went wrong");
  }

  
  const validateFields = productSchema.safeParse({
    name: formData.get("name"),
    category: formData.get("category"),
    price: Number(formData.get("price")),
    smallDescription: formData.get("smallDescription"),
    description: formData.get("description"),
    images: JSON.parse(formData.get("images") as string),
    productFile: formData.get("productFile") ,
    monetization: formData.get("monetization"),
    productAgeValue: Number(formData.get("productAgeValue")), 
  productAgeUnit: formData.get("productAgeUnit"), 
    revenueValue: formData.get("revenueValue"),
    revenueUnit: formData.get("revenueUnit"),
  });

  if (!validateFields.success) {
    const state: State = {
      status: "error",
      errors: validateFields.error.flatten().fieldErrors,
      message: "Oops, I think there is a mistake with your inputs.",
    };

    return state;
  }

  const data = await prisma.product.create({
    data: {
      name: validateFields.data.name,
      category: validateFields.data.category as CategoryTypes,
      smallDescription: validateFields.data.smallDescription,
      price: validateFields.data.price,
      images: validateFields.data.images,
      productFile: validateFields.data.productFile || "",
      userId: user.id,
      description: JSON.parse(validateFields.data.description),
      monetization: validateFields.data.monetization,
      productAgeValue: Number(validateFields.data.productAgeValue),
      productAgeUnit: validateFields.data.productAgeUnit,
      revenueValue: Number(validateFields.data.revenueValue),
    revenueUnit: validateFields.data.revenueUnit,
    },
  });

  return redirect(`/product/${data.id}`);
}

export async function UpdateUserSettings(prevState: State, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("something went wrong");
  }

  const validateFields = userSettingsSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  });

  if (!validateFields.success) {
    const state: State = {
      status: "error",
      errors: validateFields.error.flatten().fieldErrors,
      message: "Oops, I think there is a mistake with your inputs.",
    };

    return state;
  }

    await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      firstName: validateFields.data.firstName,
      lastName: validateFields.data.lastName,
    },
  });

  const state: State = {
    status: "success",
    message: "Your Settings have been updated",
  };

  return state;
}

export async function incrementProductView(productId: string) {
  try {
    await prisma.product.update({
      where: { id: productId },
      data: { viewCount: { increment: 1 } },
    });
  } catch (error) {
    console.error("Failed to increment view count:", error);
  }
}

export async function isUserAuthenticated() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return !!user; 
}



export async function sendInterestEmail({
  sellerEmail,
  productName,
}: {
  sellerEmail: string;
  productName: string;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.email) throw new Error("You must be logged in.");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS, 
    },
  });

  const buyerEmail = user.email;
  const mailOptions = {
    from: `"Marketplace" <${process.env.GMAIL_USER}>`,
    to: [sellerEmail, buyerEmail],
    subject: `Interest in Product: ${productName}`,
    html: `
      <p>Hi,</p>
      <p><strong>${buyerEmail}</strong> is interested in your product <strong>${productName}</strong>.</p>
      <p>You can now connect and take it forward!</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
// export async function BuyProduct(formData: FormData) {
//   const id = formData.get("id") as string;
//   const data = await prisma.product.findUnique({
//     where: {
//       id: id,
//     },
//     select: {
//       name: true,
//       smallDescription: true,
//       price: true,
//       images: true,
//       productFile: true,
//       User: {
//         select: {
//           connectedAccountId: true,
//         },
//       },
//     },
//   });

//   const session = await stripe.checkout.sessions.create({
//     mode: "payment",
//     line_items: [
//       {
//         price_data: {
//           currency: "usd",
//           unit_amount: Math.round((data?.price as number) * 100),
//           product_data: {
//             name: data?.name as string,
//             description: data?.smallDescription,
//             images: data?.images,
//           },
//         },
//         quantity: 1,
//       },
//     ],
//     metadata: {
//       link: data?.productFile as string,
//     },

//     payment_intent_data: {
//       application_fee_amount: Math.round((data?.price as number) * 100) * 0.1,
//       transfer_data: {
//         destination: data?.User?.connectedAccountId as string,
//       },
//     },
//     success_url:
//       process.env.NODE_ENV === "development"
//         ? "http://localhost:3000/payment/success"
//        `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success`
//     cancel_url:
//       process.env.NODE_ENV === "development"
//         ? "http://localhost:3000/payment/cancel"
//         `${process.env.NEXT_PUBLIC_SITE_URL}/payment/cancel`
//   });

//   return redirect(session.url as string);
// }

// export async function CreateStripeAccoutnLink() {
//   const { getUser } = getKindeServerSession();

//   const user = await getUser();

//   if (!user) {
//     throw new Error();
//   }

//   const data = await prisma.user.findUnique({
//     where: {
//       id: user.id,
//     },
//     select: {
//       connectedAccountId: true,
//     },
//   });

//   const accountLink = await stripe.accountLinks.create({
//     account: data?.connectedAccountId as string,
//     refresh_url:
//       process.env.NODE_ENV === "development"
//         ? `http://localhost:3000/billing`
//         : `https://marshal-ui-yt.vercel.app/billing`,
//     return_url:
//       process.env.NODE_ENV === "development"
//         ? `http://localhost:3000/return/${data?.connectedAccountId}`
//         : `https://marshal-ui-yt.vercel.app/return/${data?.connectedAccountId}`,
//     type: "account_onboarding",
//   });

//   return redirect(accountLink.url);
// }

// export async function GetStripeDashboardLink() {
//   const { getUser } = getKindeServerSession();

//   const user = await getUser();

//   if (!user) {
//     throw new Error();
//   }

//   const data = await prisma.user.findUnique({
//     where: {
//       id: user.id,
//     },
//     select: {
//       connectedAccountId: true,
//     },
//   });

//   const loginLink = await stripe.accounts.createLoginLink(
//     data?.connectedAccountId as string
//   );

//   return redirect(loginLink.url);
// }
