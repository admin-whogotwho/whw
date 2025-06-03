// app/page.tsx (or app/page.js)

// --- START SEO METADATA ---
export const metadata = {
  title: 'WhoGotWho | Buy & Sell Digital Assets, Online Businesses, YouTube Channels, SaaS, & More',
  description: 'WhoGotWho is India&apos;s trusted digital marketplace to buy and sell online businesses, YouTube channels, Instagram accounts, SaaS products, Amazon FBA, domains, and mobile apps with professional assistance.',
  keywords: ['buy digital assets', 'sell digital assets', 'online marketplace India', 'buy YouTube channel', 'sell Instagram account', 'buy SaaS business', 'online business for sale', 'acquire online assets'],
  openGraph: {
    title: 'WhoGotWho: India&apos;s Digital Marketplace',
    description: 'Buy and Sell Online Businesses, YouTube Channels, Instagram Accounts, SaaS, and more securely with professional assistance.',
    url: 'https://www.whogotwho.com',
    type: 'website',
    // images: ['https://www.whogotwho.com/og-image.jpg'],
  },
};
// --- END SEO METADATA ---


import { ProductRow } from "./components/ProductRow";

export default function Home() {
  return (
    <section className="w-full relative">

      {/* Repositioned Language Snippets */}
      <p className="absolute right-8 top-[20%] z-50 px-4 py-2 bg-white text-gray-800 text-sm font-medium shadow-md rounded-md border border-gray-300 hidden lg:block">
        &quot;Achetez et Vendez des Actifs Numériques&quot; (Français)
      </p>
      <p className="absolute right-8 top-[40%] z-50 px-4 py-2 bg-white text-gray-800 text-sm font-medium shadow-md rounded-md border border-gray-300 hidden lg:block">
        &quot;Comprar y Vender Activos Digitales&quot; (Español)
      </p>
      <p className="absolute left-8 top-[20%] z-50 px-4 py-2 bg-white text-gray-800 text-sm font-medium shadow-md rounded-md border border-gray-300 hidden lg:block">
        &quot;डिजिटल मालमत्ता खरेदी आणि विक्री करा&quot; (मराठी)
      </p>
      <p className="absolute left-8 top-[40%] z-50 px-4 py-2 bg-white text-gray-800 text-sm font-medium shadow-md rounded-md border border-gray-300 hidden lg:block">
        &quot;ડિજિટલ સંપત્તિઓ ખરીદો અને વેચો&quot; (ગુજરાતી)
      </p>

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#e2e8f0] py-20 md:py-32 flex justify-center items-center min-h-[600px]">
        <div className="text-center max-w-4xl px-4 z-10">
          <div className="space-y-4 mb-6">
            <p className="text-lg sm:text-xl font-medium text-muted-foreground">
              &quot;India&apos;s Digital Marketplace - Have You Checked Your Net Worth 2.0 on{" "}
              <span className="text-primary font-semibold">Who Got Who?</span>&quot;
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              &quot;भारत का डिजिटल मार्केटप्लेस - क्या आपने{" "}
              <span className="text-primary font-semibold">Who Got Who</span> पर अपनी नेट वर्थ 2.0 चेक की?&quot;
            </p>
          </div>

          {/* --- START OPTIMIZED H1 HEADING --- */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Buy & Sell Digital Assets & Online Businesses <br />
            <span className="text-primary">with Professional Assistance</span>
          </h1>
          {/* --- END OPTIMIZED H1 HEADING --- */}

          {/* --- START OPTIMIZED INTRODUCTORY PARAGRAPH (NEW TAGLINE) --- */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your ultimate marketplace to **buy and sell profitable online businesses, YouTube channels, Instagram accounts, SaaS products, Amazon FBA stores, domains, and mobile apps**. WhoGotWho simplifies **digital asset acquisition** across India.
          </p>
          {/* --- END OPTIMIZED INTRODUCTORY PARAGRAPH --- */}
        </div>

        {/* Design elements */}
        <div className="absolute top-[-100px] left-[-100px] h-[300px] w-[300px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] bg-muted/30 rounded-full blur-2xl" />
      </div>

      {/* Product Rows */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-36 space-y-20">
        <ProductRow category="newest" />
        <ProductRow category="amazon" />
        <ProductRow category="instagram" />
        <ProductRow category="saas" />
        <ProductRow category="youtube" />
        <ProductRow category="mobileapps" />
        <ProductRow category="domains" />
        <ProductRow category="others" />
      </div>
    </section>
  );
}
