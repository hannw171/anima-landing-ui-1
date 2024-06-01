import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStar, FaRegStar } from "react-icons/fa";

export const Testimonials = () => {
  return (
    <section className="w-full max-w-screen-xl py-[120px]">
      <div className="flex flex-col items-center justify-center space-y-14">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl text-slate-900 font-bold leading-tight">
            Real Stories from Satisfied Customers
          </h2>
          <p className="text-base text-slate-900 font-mulish">
            See how our landing page ui kit is making an impact.
          </p>
        </div>
        <div className="w-full grid grid-cols-12 gap-8">
          <Card className="col-span-4 flex flex-col items-center rounded-2xl shadow-2xl shadow-slate-300">
            <CardHeader className="items-center gap-y-4">
              <Avatar>
                <AvatarImage src="https://ui-avatars.com/api/?name=Sarah+K." />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0 items-center">
                <p className="font-semibold text-xl">Sarah K.</p>
                <p className="font-mulish text-[#374151] text-sm">
                  UX Designer @Brello
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center text-center gap-6">
              <p className="text-base font-mulish text-[#2D2D2D]">
                "I was looking for a way to streamline my design process and the
                Anima’s Landing Page UI Kit was a lifesaver! The intuitive
                design and ease of customisation have saved me hours of time and
                effort. Highly recommend!"
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between gap-1 text-[#F8D57E] text-2xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </CardFooter>
          </Card>
          <Card className="col-span-4 flex flex-col items-center rounded-2xl shadow-2xl shadow-slate-300">
            <CardHeader className="items-center gap-y-4">
              <Avatar>
                <AvatarImage src="https://ui-avatars.com/api/?name=Michael+L." />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0 items-center">
                <p className="font-semibold text-xl">Michael L.</p>
                <p className="font-mulish text-[#374151] text-sm">
                  Creative Director @Yo
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center text-center gap-6">
              <p className="text-base font-mulish text-[#2D2D2D]">
                “The Landing Page UI Kit has been a game changer for my agency.
                The pre-designed components and templates have helped us deliver
                projects faster and with more consistency. Great job!"
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between gap-1 text-[#F8D57E] text-2xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </CardFooter>
          </Card>
          <Card className="col-span-4 flex flex-col items-center rounded-2xl shadow-2xl shadow-slate-300">
            <CardHeader className="items-center gap-y-4">
              <Avatar>
                <AvatarImage src="https://ui-avatars.com/api/?name=Lauren+M." />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0 items-center">
                <p className="font-semibold text-xl">Lauren M.</p>
                <p className="font-mulish text-[#374151] text-sm">
                  UI Designer @Boo
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center text-center gap-6">
              <p className="text-base font-mulish text-[#2D2D2D]">
                "Anima’s Landing Page UI Kit has become a staple in my design
                toolkit. Whether I'm working on a new project or need to make
                updates to an existing one, this kit has everything I need to
                get the job done quickly and efficiently."
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between gap-1 text-[#F8D57E] text-2xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
