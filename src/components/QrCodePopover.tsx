import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { QrCode } from "lucide-react";

export function QrCodePopover() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
            <QrCode className="w-8 h-8" />
          </div>
          <span className="text-sm">QrCode</span>
        </button>
      </Dialog.Trigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Scan QR Code</DialogTitle>
        </DialogHeader>
        <div className="p-4 bg-white rounded-lg">
          <img
            src="/lovable-uploads/61af6174-3f5d-45b1-9daf-d3f04ec3b8f8.png"
            alt="QR Code"
            className="w-full h-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}