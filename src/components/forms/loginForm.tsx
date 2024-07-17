"use client";

import React, { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "@/types/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { login } from "@/actions/login";

type Props = {
  user: any;
  onUpdate?: any;
};

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof LoginSchema>) => {
    login(values)
      .then((res) => {
        if (res?.error) toast.error(res?.error);
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    for (let error in form.formState.errors as any) {
      toast.error((form.formState.errors as any)[error].message);
    }
  }, [form.formState.errors]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    id="email"
                    placeholder=""
                    className="peer disabled:opacity-70 focus:shadow-[0px_0px_10px] focus:shadow-black duration-300 pl-2
                disabled:cursor-not-allowed transition caret-gray-200 outline-none w-full pt-[1.2rem] rounded-md pb-[0.3rem] text-gray-200 border-gray-900 sm:text-sm border-b-[1px] border-t-[1px] bg-gray-900 bg-opacity-50"
                  />
                  <FormLabel
                    htmlFor="email"
                    className={`
                text-gray-400
                absolute 
                text-md
                duration-150 
                transform 
                top-4 
                z-10 
                origin-[0] 
                left-2
                -translate-y-5
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:-translate-y-2
                peer-focus:scale-75
                peer-focus:-translate-y-5
                [&:not(peer-placeholder-shown)]:-translate-y-5
                [&:not(peer-placeholder-shown)]:scale-75
                `}
                  >
                    E-mail
                  </FormLabel>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder=""
                    className="peer disabled:opacity-70 focus:shadow-[0px_0px_10px] focus:shadow-black duration-300 pl-2
                disabled:cursor-not-allowed transition caret-gray-200 outline-none w-full pt-[1.2rem] rounded-md pb-[0.3rem] text-gray-200 border-gray-900 sm:text-sm border-b-[1px] border-t-[1px] bg-gray-900 bg-opacity-50"
                  />
                  <FormLabel
                    htmlFor="password"
                    className={`
                text-gray-400
                absolute 
                text-md
                duration-150 
                transform 
                top-4 
                z-10 
                origin-[0] 
                left-2
                -translate-y-5
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:-translate-y-2
                peer-focus:scale-75
                peer-focus:-translate-y-5
                [&:not(peer-placeholder-shown)]:-translate-y-5
                [&:not(peer-placeholder-shown)]:scale-75
                `}
                  >
                    Password
                  </FormLabel>
                </div>
              </FormControl>
            </FormItem>
          )}
        />{" "}
        <Button
          type="submit"
          variant={"outline"}
          className="self-start hover:bg-[#303030] hover:text-white w-full"
        >
          LOGIN
        </Button>
      </form>
    </Form>
  );
}
