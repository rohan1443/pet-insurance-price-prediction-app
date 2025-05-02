// import { MoveRight, Brain } from "lucide-react";
// import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById("quote-form");
    if (quoteForm) {
      quoteForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              AI-Powered Protection for Your Pets
            </h1>
            <p className="mt-6 max-w-xl text-xl text-primary-50">
              Get personalized insurance rates powered by advanced machine learning algorithms that analyze your pet's unique health metrics. For both dogs and cats, our AI delivers insurance that truly understands your pet's needs.
            </p>
            <div className="mt-8">
              
            </div>
          </div>
          <div className="hidden md:flex gap-4">
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1538161520201-9978a0e75b3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Happy dog"
                className="rounded-lg shadow-xl h-full object-cover"
              />
            </div>
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Happy cat"
                className="rounded-lg shadow-xl h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
