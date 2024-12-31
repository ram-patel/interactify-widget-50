import { Phone, Mail, Save } from "lucide-react";
import { QrCodePopover } from "@/components/QrCodePopover";
import { InquiryDialog } from "@/components/InquiryDialog";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full py-12 px-4 text-center bg-secondary/50">
        <div className="max-w-screen-xl mx-auto">
          <img
            src="/lovable-uploads/61af6174-3f5d-45b1-9daf-d3f04ec3b8f8.png"
            alt="Logo"
            className="w-24 h-24 mx-auto mb-4 rounded-full"
          />
          <h1 className="text-4xl font-bold mb-2">PRATIK B. PANERI</h1>
          <p className="text-muted-foreground">Owner</p>
          <p className="text-xl mt-2">A Law Firm & Criminal Advocate</p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
          <a
            href="tel:+1234567890"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
              <Phone className="w-8 h-8" />
            </div>
            <span className="text-sm">Call</span>
          </a>

          <a
            href="https://wa.me/1234567890"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
              <img
                src="/lovable-uploads/92ff8eeb-a43d-4071-9c38-5ca2ff88df52.png"
                alt="WhatsApp"
                className="w-8 h-8"
              />
            </div>
            <span className="text-sm">WhatsApp</span>
          </a>

          <a
            href="mailto:contact@example.com"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <span className="text-sm">Email</span>
          </a>

          <QrCodePopover />

          <a
            href="/contact.vcf"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
              <Save className="w-8 h-8" />
            </div>
            <span className="text-sm">Save Contact</span>
          </a>

          <InquiryDialog />
        </div>
      </main>
    </div>
  );
};

export default Index;