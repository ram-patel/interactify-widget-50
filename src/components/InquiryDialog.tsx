import { useState } from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
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
        <button className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
            <img
              src="/lovable-uploads/92ff8eeb-a43d-4071-9c38-5ca2ff88df52.png"
              alt="Inquiry"
              className="w-8 h-8"
            />
          </div>
          <span className="text-sm">Inquiry</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Inquiry Form</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input
              placeholder="Name *"
              {...register("name", { required: true })}
              className="bg-secondary/10"
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Mobile number *"
              {...register("mobile", { required: true })}
              className="bg-secondary/10"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email address"
              {...register("email")}
              className="bg-secondary/10"
            />
          </div>
          <div className="space-y-2">
            <Input 
              placeholder="Subject" 
              {...register("subject")}
              className="bg-secondary/10"
            />
          </div>
          <div className="space-y-2">
            <Textarea 
              placeholder="Message" 
              {...register("message")}
              className="bg-secondary/10 min-h-[100px]"
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}