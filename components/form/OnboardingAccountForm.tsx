"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userValidation } from "@/lib/validations/user";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
interface props {
  user: {
    userId: string;
    firstName: string;
    lastName: string;
    profilePic: string;
  };
}

const OnboardingAccountForm = ({ user }: props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof userValidation>>({
    resolver: zodResolver(userValidation),
    defaultValues: {
      platformPic: user?.profilePic,
      firstName: user?.firstName,
      lastName: user?.lastName,
      platformName: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof userValidation>) => {
    setLoading(true);
    const userData = {
      userId: user?.userId,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      platformPic: values.platformPic,
      platformName: values.platformName,
    };
    if (!userData) return null;

    const response = await createUser(userData);
    setLoading(false);
    router.replace("/");
  };
  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {};

  return (
    <div className="flex">
      <div>
        <Form {...form}>
          <form
            className="grid grid-cols-2 grid-rows-3 gap-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="platformPic"
              render={({ field }) => (
                <FormItem className="flex items-center gap-4">
                  <FormLabel className="account-form_image-label">
                    {field.value ? (
                      <Image
                        src={field.value}
                        alt="profile_icon"
                        width={96}
                        height={96}
                        priority
                        className="rounded-full object-contain"
                      />
                    ) : (
                      <Image
                        src="/assets/profile.svg"
                        alt="profile_icon"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    )}
                  </FormLabel>
                  <FormControl className="flex-1 text-base-semibold text-gray-200">
                    <Input
                      type="file"
                      accept="image/*"
                      placeholder="Add profile photo"
                      className="account-form_image-input"
                      onChange={(e) => handleImage(e, field.onChange)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="platformName"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-2">
                  <FormLabel className="text-base-semibold font-bold">
                    Platform Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="account-form_input no-focus"
                      placeholder="Enter name of your platform"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-2">
                  <FormLabel className="text-base-semibold ">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="account-form_input no-focus"
                      placeholder="Enter name of your platform"
                      {...field}
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
                <FormItem className="flex w-full flex-col gap-2">
                  <FormLabel className="text-base-semibold ">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="account-form_input no-focus"
                      placeholder="Enter email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-2">
                  <FormLabel className="text-base-semibold ">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="account-form_input no-focus"
                      placeholder="Enter name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center items-center">
              <Button className="w-full" type="submit">
                {loading ? "Creating..." : "Update & Create platform"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default OnboardingAccountForm;
