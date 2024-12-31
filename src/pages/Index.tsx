import { Phone, Mail, Scale, QrCode, UserPlus, MessageSquare } from "lucide-react";
import { QrCodePopover } from "@/components/QrCodePopover";
import { InquiryDialog } from "@/components/InquiryDialog";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full py-20 px-4 text-center bg-[#1A1F2C] relative">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-wide">
            PRATIK B. PANERI
          </h1>
          <p className="text-gray-300 text-xl mb-3">Owner</p>
          <p className="text-3xl text-white font-serif">
            A Law Firm & Criminal Advocate
          </p>
        </div>
      </header>

      {/* Logo Section */}
      <div className="relative -mt-16 mb-12">
        <div className="w-32 h-32 rounded-full bg-[#1A1F2C] flex items-center justify-center border-4 border-white shadow-2xl">
          <Scale className="w-16 h-16 text-[#F97316]" />
        </div>
      </div>

      {/* Actions Grid */}
      <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
          {/* Call Button */}
          <a
            href="tel:+1234567890"
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300">
              <Phone className="w-10 h-10 text-[#1A1F2C]" />
            </div>
            <span className="text-lg font-medium text-[#1A1F2C]">Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/1234567890"
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300">
              <img
                src="/lovable-uploads/92ff8eeb-a43d-4071-9c38-5ca2ff88df52.png"
                alt="WhatsApp"
                className="w-10 h-10"
              />
            </div>
            <span className="text-lg font-medium text-[#1A1F2C]">WhatsApp</span>
          </a>

          {/* Email Button */}
          <a
            href="mailto:contact@example.com"
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300">
              <Mail className="w-10 h-10 text-[#1A1F2C]" />
            </div>
            <span className="text-lg font-medium text-[#1A1F2C]">Email</span>
          </a>

          {/* QR Code Button */}
          <QrCodePopover>
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300">
                <QrCode className="w-10 h-10 text-[#1A1F2C]" />
              </div>
              <span className="text-lg font-medium text-[#1A1F2C]">QR Code</span>
            </div>
          </QrCodePopover>

          {/* Save Contact Button */}
          <a
            href="#"
            className="flex flex-col items-center gap-4 group"
            onClick={(e) => {
              e.preventDefault();
              // Add save contact functionality here
            }}
          >
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300">
              <UserPlus className="w-10 h-10 text-[#1A1F2C]" />
            </div>
            <span className="text-lg font-medium text-[#1A1F2C]">Save Contact</span>
          </a>

          {/* Inquiry Button */}
          <InquiryDialog>
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300">
                <MessageSquare className="w-10 h-10 text-[#1A1F2C]" />
              </div>
              <span className="text-lg font-medium text-[#1A1F2C]">Inquiry</span>
            </div>
          </InquiryDialog>
        </div>
      </main>
    </div>
  );
};

export default Index;