// app/websites/page.tsx (or page.js)

// --- START SEO METADATA FOR WEBSITES PAGE ---
export const metadata = {
  title: 'Buy & Sell Websites - Acquire and List Online Businesses for Sale', // Specific for Websites/Online Businesses
  description: 'Looking to buy a website or sell your online business? WhoGotWho is your premier marketplace to acquire profitable websites and list your digital businesses for sale securely.', // Detailed description for Websites
  keywords: [ // Specific keywords for this page
    'buy website',
    'sell website',
    'website for sale',
    'acquire website',
    'online business for sale',
    'website acquisition',
    'selling online business',
    'ecommerce website for sale',
    'blog for sale',
    'affiliate website for sale',
  ],
  openGraph: {
    title: 'Buy & Sell Websites & Online Businesses | WhoGotWho',
    description: 'Acquire profitable websites or find buyers for your online business on India&apos;s leading digital marketplace.',
    url: 'https://www.whogotwho.com/websites', // The specific URL for this page
    type: 'website',
  },
};
// --- END SEO METADATA ---


export default function WebsitesPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      {/* --- START OPTIMIZED H1 HEADING FOR THIS PAGE --- */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Buy & Sell Websites & Online Businesses on WhoGotWho
      </h1>
      {/* --- END OPTIMIZED H1 HEADING --- */}

      {/* --- START BODY CONTENT WITH KEYWORD INTEGRATION --- */}
      <p className="text-lg text-gray-700 mb-4">
        Whether you&apos;re an entrepreneur seeking your next venture or a business owner looking to exit, WhoGotWho offers a streamlined platform to **buy websites** and **sell websites** across various niches and monetization models. Discover a wide range of **online businesses for sale**.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        Acquire Your Next Online Business
      </h2>
      <p className="text-gray-600 mb-4">
        Explore profitable **websites for sale**, including e-commerce stores, content blogs, affiliate sites, and lead generation platforms. Our detailed listings and expert guidance make it easy to **acquire a website** that fits your investment strategy and passion.
      </p>

      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        Sell Your Website or Online Business
      </h2>
      <p className="text-gray-600 mb-4">
        Ready to **sell your website**? List your digital asset on WhoGotWho. We connect you with a global network of qualified buyers actively seeking **online businesses for sale**. Our secure process ensures a fair valuation and a smooth transaction for your **website acquisition**.
      </p>

      <h3 className="text-2xl font-semibold mb-3 text-gray-800">
        Why Choose WhoGotWho for Website Transactions?
      </h3>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>**Diverse Listings:** From **ecommerce websites for sale** to **blogs for sale**, find a wide variety.</li>
        <li>**Expert Vetting:** Listings are carefully reviewed for authenticity and potential.</li>
        <li>**Secure Escrow:** Protects both buyer and seller during the transfer of assets and funds.</li>
        <li>**Global Reach:** Connect with buyers and sellers worldwide in the **website marketplace**.</li>
      </ul>

      <p className="text-gray-600">
        Start your journey to **buy an online business** or **sell an online business** today with WhoGotWho.
      </p>
      {/* --- END BODY CONTENT --- */}

    </main>
  );
}
