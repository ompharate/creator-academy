"use client"
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoCopy } from "react-icons/io5";
export default function UserPlatform({slug}:{slug:string}) {
  return (
    <div className="max-w-7xl mx-auto mt-5 rounded-md bg-[#FFF5E1]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{slug}</CardTitle>
          <CardDescription>Deploy your course in one click</CardDescription>
        </CardHeader>
        <CardContent>
        
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Live</Label>
                <div className="flex justify-between items-center gap-2">
                  <Input
                    id="name"
                    placeholder={`http://localhost:3000/${slug}`}
                    value={`http://localhost:3000/${slug}`}
                    disabled={true}
                  />
                  <Button onClick={(e)=>navigator.clipboard.writeText(`http://localhost:3000/${slug}`)} className="mt-2" variant="outline">
                    <IoCopy />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-gray-400">
                  Setup you course to ready your site
                </Label>
              </div>
            </div>
       
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button className="bg-[#0C1844]">UnDeploy</Button>
          <Button className="bg-[#C80036] hover:bg-[#FF6969 ]">Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
