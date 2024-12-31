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

export function InquiryDialog() {
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
        <button className="flex flex-col items-center gap-2 group">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-all duration-300 transform group-hover:scale-105 shadow-lg">
            <img
              src="/lovable-uploads/92ff8eeb-a43d-4071-9c38-5ca2ff88df52.png"
              alt="Inquiry"
              className="w-8 h-8"
            />
          </div>
          <span className="text-sm font-medium group-hover:text-primary transition-colors">Inquiry</span>
        </button>
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
              className="bg-secondary/5 border-secondary/20 focus:border-primary h-12"
            />
          </div>
          <div>
            <Input
              placeholder="Mobile Number *"
              {...register("mobile", { required: true })}
              className="bg-secondary/5 border-secondary/20 focus:border-primary h-12"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className="bg-secondary/5 border-secondary/20 focus:border-primary h-12"
            />
          </div>
          <div>
            <Input 
              placeholder="Subject" 
              {...register("subject")}
              className="bg-secondary/5 border-secondary/20 focus:border-primary h-12"
            />
          </div>
          <div>
            <Textarea 
              placeholder="Your Message" 
              {...register("message")}
              className="bg-secondary/5 border-secondary/20 focus:border-primary min-h-[120px] resize-none"
            />
          </div>
          <Button type="submit" className="w-full h-12 text-base font-medium hover:scale-[1.02] transition-transform">
            Submit Inquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}