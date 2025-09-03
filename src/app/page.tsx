"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterBase from '@/components/footer/FooterBase';
import { Star, PiggyBank } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutSplitBottom 
        logoSrc="/images/logo.svg" 
        logoWidth={150} 
        logoHeight={50} 
        navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
        defaultSelectorValue="hero"
        onSelectorChange={console.log}
        className="z-10"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero 
          title="Welcome to NovaFlow" 
          subtitle="Streamline your workflow with cutting-edge technology" 
          primaryButtonText="Get Started" 
          secondaryButtonText="Learn More" 
          onPrimaryButtonClick={() => console.log('Primary Button Clicked')} 
          onSecondaryButtonClick={() => console.log('Secondary Button Clicked')} 
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout 
          description="NovaFlow is designed to enhance productivity and collaboration in the modern workspace, providing tools that adapt to the needs of your team." 
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics 
          title="Tokenomics Highlights" 
          description="Understanding the value of NovaFlow tokens within our ecosystem and how they can leverage your experience." 
          kpiItems={[
            { value: "100M", description: "Total Supply", icon: Star },
            { value: "40M", description: "Market Volume", icon: PiggyBank },
            { value: "25M", description: "Liquidity", icon: PiggyBank },
          ]} 
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase 
          logoSrc="/images/logo.svg" 
          logoWidth={100} 
          logoHeight={50} 
          columns={[
            { title: "About Us", items: [{ label: "Company Info", onClick: () => {} }] },
            { title: "Support", items: [{ label: "Help Center", onClick: () => {} }] },
            { title: "Community", items: [{ label: "Forum", onClick: () => {} }, { label: "Blog", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 NovaFlow. All rights reserved."
          onPrivacyClick={() => console.log('Privacy Policy Clicked')} 
          className="bg-transparent"
        />
      </div>
    </SiteThemeProvider>
  );
}