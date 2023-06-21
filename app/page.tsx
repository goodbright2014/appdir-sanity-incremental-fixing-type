import { Carousel } from 'components/carousel';
import { CtaBanner } from 'components/cta-banner';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { getTranslations } from './translations.server';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

export default async function HomePage() {
  const translations = await getTranslations([
    'MockCTADescription',
    'MockCTAHeadline',
    'MockCTALink',
    'Add to wishlist',
    'Remove from wishlist'
  ]);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ThreeItemGrid />

      {/* @ts-expect-error Server Component */}
      <Carousel />

      <CtaBanner
        headline={translations.MockCTAHeadline}
        description={translations.MockCTADescription}
        ctaText={translations.MockCTALink}
        ctaTo="/"
        variant="secondary"
      />

      <div className="min-h-screen items-center justify-center bg-sea1 bg-cover bg-fixed bg-center bg-no-repeat">
        <h1 className="text-6xl font-black">Parallax</h1>
      </div>

      <h2 className="min-h-screen text-4xl font-bold">Sample Section</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam eveniet molestias
        veniam, inventore sint voluptates nam provident impedit laborum ipsa vel quos amet
        laboriosam dolorum suscipit! Nihil eos repellendus blanditiis repellat laboriosam veniam
        quod maxime ab! Ea eveniet doloremque, excepturi totam, et molestias dicta accusamus
        quibusdam quas sunt inventore!
      </p>

      <div className="min-h-screen bg-sea2 bg-cover bg-fixed bg-center bg-no-repeat"></div>

      <div className="min-h-screen bg-sea3 bg-cover bg-fixed bg-no-repeat"></div>

      {/* @ts-expect-error Server Component */}
      <Footer />
    </>
  );
}
