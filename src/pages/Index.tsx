import { Phone, Mail, Save } from "lucide-react";
import { QrCodePopover } from "@/components/QrCodePopover";
import { InquiryDialog } from "@/components/InquiryDialog";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full py-16 px-4 text-center bg-gradient-to-b from-secondary/80 to-secondary/50 shadow-lg">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative inline-block">
            <img
              src="/lovable-uploads/61af6174-3f5d-45b1-9daf-d3f04ec3b8f8.png"
              alt="Logo"
              className="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-primary shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">PRATIK B. PANERI</h1>
          <p className="text-muted-foreground text-lg mb-2">Owner</p>
          <p className="text-xl md:text-2xl font-serif">A Law Firm & Criminal Advocate</p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
          <a
            href="tel:+1234567890"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-all duration-300 transform group-hover:scale-105 shadow-lg">
              <Phone className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium group-hover:text-primary transition-colors">Call</span>
          </a>

          <a
            href="https://wa.me/1234567890"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-all duration-300 transform group-hover:scale-105 shadow-lg">
              <img
                src="/lovable-uploads/92ff8eeb-a43d-4071-9c38-5ca2ff88df52.png"
                alt="WhatsApp"
                className="w-8 h-8"
              />
            </div>
            <span className="text-sm font-medium group-hover:text-primary transition-colors">WhatsApp</span>
          </a>

          <a
            href="mailto:contact@example.com"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-all duration-300 transform group-hover:scale-105 shadow-lg">
              <Mail className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium group-hover:text-primary transition-colors">Email</span>
          </a>

          <QrCodePopover />

          <a
            href="/contact.vcf"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-all duration-300 transform group-hover:scale-105 shadow-lg">
              <Save className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium group-hover:text-primary transition-colors">Save Contact</span>
          </a>

          <InquiryDialog />
        </div>
      </main>
    </div>
  );
};

export default Index;