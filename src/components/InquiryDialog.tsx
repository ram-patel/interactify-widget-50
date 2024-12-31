import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
};

interface InquiryDialogProps {
  children?: React.ReactNode;
}

export function InquiryDialog({ children }: InquiryDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Inquiry Submitted",
      description: "We will get back to you soon.",
    });
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300">
              <MessageSquare className="w-10 h-10 text-[#1A1F2C]" />
            </div>
            <span className="text-lg font-medium text-[#1A1F2C]">Inquiry</span>
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-bold text-center">Send an Inquiry</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Input
              placeholder="Full Name *"
              {...register("name", { required: true })}
              className="h-12 border-2 rounded-xl focus:border-[#1A1F2C] transition-colors"
            />
          </div>
          <div>
            <Input
              placeholder="Mobile Number *"
              {...register("mobile", { required: true })}
              className="h-12 border-2 rounded-xl focus:border-[#1A1F2C] transition-colors"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className="h-12 border-2 rounded-xl focus:border-[#1A1F2C] transition-colors"
            />
          </div>
          <div>
            <Input 
              placeholder="Subject" 
              {...register("subject")}
              className="h-12 border-2 rounded-xl focus:border-[#1A1F2C] transition-colors"
            />
          </div>
          <div>
            <Textarea 
              placeholder="Your Message" 
              {...register("message")}
              className="min-h-[120px] resize-none border-2 rounded-xl focus:border-[#1A1F2C] transition-colors"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full h-12 text-base font-medium bg-[#1A1F2C] hover:bg-[#1A1F2C]/90 rounded-xl"
          >
            Submit Inquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}