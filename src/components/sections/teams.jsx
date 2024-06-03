import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FaTwitter, FaDribbble, FaInstagram } from "react-icons/fa";

export const Teams = () => {
  return (
    <section className="w-full max-w-screen-xl py-[120px]">
      <div className="flex flex-col items-center justify-center space-y-14">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl text-slate-900 font-bold leading-tight">
            Meet our team
          </h2>
          <p className="text-base text-slate-900 font-mulish">
            Get to know the faces behind the scenes and learn about the values
            that drive us.
          </p>
        </div>
        <div className="w-full grid grid-cols-12 gap-8">
          <Card className="col-span-4 flex flex-col items-start rounded-2xl gap-5 shadow-2xl shadow-slate-300 overflow-hidden">
            <CardHeader className="p-0 w-full">
              <img src="https://placehold.co/600x400" />
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center gap-1 border-b-2 border-slate-300">
              <p className="font-semibold text-lg text-[#111827]">Sarah K.</p>
              <p className="text-base font-mulish text-[#2D2D2D]">
                UX Designer
              </p>
            </CardContent>
            <CardFooter className="w-full flex justify-center gap-4">
              <Button className="bg-[#E5F4F2] rounded-full" variant="ghost" size="icon"><FaTwitter className="w-5 h-5 "/></Button>
              <Button className="bg-[#E5F4F2] rounded-full" variant="ghost" size="icon"><FaDribbble className="w-5 h-5 "/></Button>
              <Button className="bg-[#E5F4F2] rounded-full" variant="ghost" size="icon"><FaInstagram className="w-5 h-5 "/></Button>
            </CardFooter>
          </Card>
          <Card className="col-span-4 flex flex-col items-start rounded-2xl gap-5 shadow-2xl shadow-slate-300 overflow-hidden">
            <CardHeader className="p-0 w-full">
              <img src="https://placehold.co/600x400" />
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center gap-1 border-b-2 border-slate-300">
              <p className="font-semibold text-lg text-[#111827]">Michael L.</p>
              <p className="text-base font-mulish text-[#2D2D2D]">
              Lead Designer
              </p>
            </CardContent>
            <CardFooter className="w-full flex justify-center gap-4">
              <Button className="bg-[#E5F4F2] rounded-full" variant="ghost" size="icon"><FaTwitter className="w-5 h-5 "/></Button>
              <Button className="bg-[#E5F4F2] rounded-full" variant="ghost" size="icon"><FaDribbble className="w-5 h-5 "/></Button>
              <Button className="bg-[#E5F4F2] rounded-full" variant="ghost" size="icon"><FaInstagram className="w-5 h-5 "/></Button>
            </CardFooter>
          </Card>
          <Card className="col-span-4 flex flex-col items-start rounded-2xl gap-5 shadow-2xl shadow-slate-300 overflow-hidden">
            <CardHeader className="p-0 w-full">
              <img src="https://placehold.co/600x400" />
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center gap-1 border-b-2 border-slate-300">
              <p className="font-semibold text-lg text-[#111827]">Lauren M.</p>
              <p className="text-base font-mulish text-[#2D2D2D]">
              Product Designer
              </p>
            </CardContent>
            <CardFooter className="w-full flex justify-center gap-4">
              <Button className="bg-[#E5F4F2] rounded-full" variant="ghost" size="icon"><FaTwitter className="w-5 h-5 "/></Button>
              <Button className="bg-[#E5F4F2] rounded-full" variant="ghost" size="icon"><FaDribbble className="w-5 h-5 "/></Button>
              <Button className="bg-[#E5F4F2] rounded-full" variant="ghost" size="icon"><FaInstagram className="w-5 h-5 "/></Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
