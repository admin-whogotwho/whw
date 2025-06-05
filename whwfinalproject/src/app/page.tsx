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
// CORRECTED IMPORT PATH for ProductSearchBar based on your provided location
import { ProductSearchBar } from './components/ProductSearchBar';

// Define the Product interface here or import from a shared types file
interface Product {
  id: string;
  images: string[];
  smallDescription: string;
  name: string;
  price: number;
  category: string;
}

export default function Home() {
  // --- IMPORTANT: REPLACE THIS DUMMY DATA WITH YOUR ACTUAL PRODUCTS ---
  // You will typically fetch this data from an API or database.
  // Example:
  // const [products, setProducts] = useState<Product[]>([]);
  // useEffect(() => {
  //   fetch('/api/products') // Your API endpoint
  //     .then(res => res.json())
  //     .then(data => setProducts(data));
  // }, []);

  const products: Product[] = [
    { id: '1', name: 'Premium SaaS App', smallDescription: 'A robust SaaS platform for project management.', price: 15000, category: 'saas', images: ['https://placehold.co/400x300/E0F2F7/000000?text=SaaS+App'] },
    { id: '2', name: 'High-Engagement Instagram', smallDescription: 'Instagram account with 50K followers in niche.', price: 2500, category: 'instagram', images: ['https://placehold.co/400x300/FCE4EC/000000?text=Instagram+Account'] },
    { id: '3', name: 'Monetized YouTube Channel', smallDescription: 'YouTube channel with 100K subs, cooking niche.', price: 8000, category: 'youtube', images: ['https://placehold.co/400x300/FFF3E0/000000?text=YouTube+Channel'] },
    { id: '4', name: 'Established E-commerce Website', smallDescription: 'Dropshipping store with consistent sales.', price: 12000, category: 'websites', images: ['https://placehold.co/400x300/E8F5E9/000000?text=E-commerce+Site'] },
    { id: '5', name: 'Niche Blog Website', smallDescription: 'Blog focused on sustainable living, good traffic.', price: 3000, category: 'websites', images: ['https://placehold.co/400x300/F3E5F5/000000?text=Niche+Blog'] },
    { id: '6', name: 'Gaming Mobile App', smallDescription: 'Puzzle game with active user base.', price: 7000, category: 'mobileapps', images: ['https://placehold.co/400x300/E1F5FE/000000?text=Mobile+App'] },
    { id: '7', 'name': 'Active Reddit Community', smallDescription: 'Reddit subreddit with 20K active members.', price: 1800, category: 'reddit', images: ['https://placehold.co/400x300/FFEBEE/000000?text=Reddit+Community'] },
    { id: '8', name: 'Premium Domain Name', smallDescription: 'Short, memorable domain for tech startup.', price: 5000, category: 'domains', images: ['https://placehold.co/400x300/E0F7FA/000000?text=Domain+Name'] },
  ];
  // --- END OF DUMMY DATA ---

  return (
    <section className="w-full relative">

      {/* NEW: Search Bar above all other content */}
      {/* This div makes the search bar full width, white background, and gives it padding/shadow */}
      <div className="w-full bg-white py-6 px-4 md:px-8 shadow-md relative z-30">
        {/* This inner div centers the search bar and limits its max width */}
        <div className="max-w-4xl mx-auto">
          <ProductSearchBar products={products} />
        </div>
      </div>

      {/* Modified Language Snippets */}
      {/* Positioned fixed so they don't scroll, z-50 to ensure they are on top */}
      {/* Adjusted top values, added shadow, border, and attractive font styling */}
      <p className="fixed right-8 top-[100px] z-50 px-4 py-2 bg-white text-gray-800 text-sm font-semibold shadow-lg rounded-lg border border-gray-200" style={{ fontFamily: 'Georgia, serif', color: '#4A5568' }}>
        &quot;Achetez et Vendez des Actifs Numériques&quot; (Français)
      </p>
      <p className="fixed right-8 top-[160px] z-50 px-4 py-2 bg-white text-gray-800 text-sm font-semibold shadow-lg rounded-lg border border-gray-200" style={{ fontFamily: 'Georgia, serif', color: '#4A5568' }}>
        &quot;Comprar y Vender Activos Digitales&quot; (Español)
      </p>
      <p className="fixed left-8 top-[100px] z-50 px-4 py-2 bg-white text-gray-800 text-sm font-semibold shadow-lg rounded-lg border border-gray-200" style={{ fontFamily: 'Georgia, serif', color: '#4A5568' }}>
        &quot;डिजिटल मालमत्ता खरेदी आणि विक्री करा&quot; (मराठी)
      </p>
      <p className="fixed left-8 top-[160px] z-50 px-4 py-2 bg-white text-gray-800 text-sm font-semibold shadow-lg rounded-lg border border-gray-200" style={{ fontFamily: 'Georgia, serif', color: '#4A5568' }}>
        &quot;ડિજિટલ સંપત્તિઓ ખરીદો અને વેચો&quot; (ગુજરાતી)
      </p>

      {/* Hero Section - Adjusted top margin (mt-20) to push it down below the new search bar */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#e2e8f0] py-20 md:py-32 flex justify-center items-center min-h-[600px] mt-20">
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

          {/* ProductSearchBar was previously here, now moved to the very top */}
        </div>

        {/* Design elements */}
        <div className="absolute top-[-100px] left-[-100px] h-[300px] w-[300px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] bg-muted/30 rounded-full blur-2xl" />
      </div>

      {/* Product Rows (Can be kept or removed depending on your design choice) */}
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
