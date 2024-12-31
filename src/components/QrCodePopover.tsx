import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { QrCode } from "lucide-react";

export function QrCodePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
            <QrCode className="w-8 h-8" />
          </div>
          <span className="text-sm">QrCode</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="p-4">
          <img
            src="/lovable-uploads/61af6174-3f5d-45b1-9daf-d3f04ec3b8f8.png"
            alt="QR Code"
            className="w-full h-auto"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}