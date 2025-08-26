import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Mail, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ContactFormData } from "@/lib/types";
import { ContactMessage } from "@shared/schema";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  message: z.string().min(1, "Message is required").min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { data: messages = [] } = useQuery<ContactMessage[]>({
    queryKey: ['/api/contact'],
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
      form.reset();
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 5000);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-100 to-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-800 mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            {/* <div className="animate-slide-up"> */}
              {/* <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-8">
                Send us a Message
              </h2> */}

              {/* <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-poppins font-medium text-gray-700">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            {...field}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-poppins font-medium text-gray-700">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            {...field}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all duration-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-poppins font-medium text-gray-700">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={6}
                            placeholder="Tell us how we can help you..."
                            {...field}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all duration-300 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-primary-300 text-white py-3 rounded-lg hover:bg-primary-400 transform hover:scale-105 transition-all duration-300 font-poppins font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form> */}

              {/* Success Message */}
              {/* {showSuccessMessage && (
                <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg animate-fade-in">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                </div>
              )} */}
            {/* </div> */}

            {/* Contact Information */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Mail className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">zcreation989@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Phone className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9136786290</p>
                    <p className="text-gray-600">+91 9892692952</p>
                  </div>
                </div>



                {/*<div className="flex items-start">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>*/}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/zcreation2025/?next=%2F&hl=en"
                    target="_blank"
                    className="w-10 h-10 bg-rose-400 text-white rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  {/* <a
                    href="#"
                    className="w-10 h-10 bg-primary-300 text-white rounded-full flex items-center justify-center hover:bg-primary-400 transition-colors duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Messages Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-8 text-center">
            Recent Messages
          </h2>
          <div className="space-y-6">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <p>No messages yet. Be the first to get in touch!</p>
              </div>
            ) : (
              messages.map((message) => (
                <Card key={message.id} className="bg-white shadow-md animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-poppins font-semibold text-gray-800">{message.name}</h3>
                        <p className="text-sm text-gray-500">{message.email}</p>
                      </div>
                      <span className="text-xs text-gray-400">
                        {new Date(message.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{message.message}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
