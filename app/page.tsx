"use client";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PhoneGrid from "@/components/phone-grid";
import FreeOfferSection from "@/components/free-offer-section";
import Footer from "@/components/footer";
import UserInfoModal from "@/components/user-info-modal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <UserInfoModal />
      <Header />
      <HeroSection />
      <PhoneGrid />
      <FreeOfferSection />
      <Footer />
    </main>
  );
}
