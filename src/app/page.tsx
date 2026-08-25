import { FixedHeader } from "@/components/sites/router-com-92408672/root-8a5edab2/FixedHeader";
import { OfferToast } from "@/components/sites/router-com-92408672/root-8a5edab2/OfferToast";
import { MobileBottomBar } from "@/components/sites/router-com-92408672/root-8a5edab2/MobileBottomBar";
import { HeroSection } from "@/components/sites/router-com-92408672/root-8a5edab2/HeroSection";
import { ImplementSection } from "@/components/sites/router-com-92408672/root-8a5edab2/ImplementSection";
import { SavingsSection } from "@/components/sites/router-com-92408672/root-8a5edab2/SavingsSection";
import { QuotesSection } from "@/components/sites/router-com-92408672/root-8a5edab2/QuotesSection";
import { BenchmarkSection } from "@/components/sites/router-com-92408672/root-8a5edab2/benchmark/BenchmarkSection";
import { ProofSection } from "@/components/sites/router-com-92408672/root-8a5edab2/ProofSection";
import { LabSection } from "@/components/sites/router-com-92408672/root-8a5edab2/LabSection";
import { FaqSection } from "@/components/sites/router-com-92408672/root-8a5edab2/FaqSection";
import { FinalCtaSection } from "@/components/sites/router-com-92408672/root-8a5edab2/FinalCtaSection";
import { SiteFooter } from "@/components/sites/router-com-92408672/root-8a5edab2/SiteFooter";
import { PerfOptimizer } from "@/components/sites/router-com-92408672/root-8a5edab2/PerfOptimizer";
import { routerJsonLd } from "@/components/sites/router-com-92408672/root-8a5edab2/jsonld";

export default function Home() {
  return (
    <>
      <main data-js="1" className="flex flex-col bg-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routerJsonLd) }}
        />
        <PerfOptimizer />
        <FixedHeader />
        <OfferToast />
        <HeroSection />
        <ImplementSection />
        <SavingsSection />
        <QuotesSection />
        <BenchmarkSection />
        <ProofSection />
        <LabSection />
        <FaqSection />
        <FinalCtaSection />
        <SiteFooter />
      </main>
      <MobileBottomBar />
    </>
  );
}
