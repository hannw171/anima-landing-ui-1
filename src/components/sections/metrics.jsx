import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Metrics = () => {
  return (
    <section className="w-full max-w-screen-xl py-[120px]">
      <div className="flex flex-col items-center justify-center space-y-14">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl text-slate-950 font-bold leading-tight">
            Our Metrics Tell the Story
          </h2>
          <p className="text-base text-slate-900 font-mulish">
            Our metrics component gives you the inside scoop on your success and
            helps you stay on top of your game in style.
          </p>
        </div>
        <div className="w-full grid grid-cols-12 gap-8">
          <Card className="col-span-3 flex flex-col items-center rounded border-b-[#F2BFAF] border-b-4 py-12">
            <CardHeader className="p-0">
              <p className="text-4xl text-slate-900 font-bold leading-tight pb-2">
                10k+
              </p>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center text-center py-0">
              <p className="text-base font-mulish">Website launched</p>
            </CardContent>
          </Card>
          <Card className="col-span-3 flex flex-col items-center rounded border-b-[#F2BFAF] border-b-4 py-12">
            <CardHeader className="p-0">
              <p className="text-4xl text-slate-900 font-bold leading-tight pb-2">
                931k+
              </p>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center text-center py-0">
              <p className="text-base font-mulish">
                Projects created with Anima
              </p>
            </CardContent>
          </Card>
          <Card className="col-span-3 flex flex-col items-center rounded border-b-[#F2BFAF] border-b-4 py-12">
            <CardHeader className="p-0">
              <p className="text-4xl text-slate-900 font-bold leading-tight pb-2">
                240k+
              </p>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center text-center py-0">
              <p className="text-base font-mulish">New users joined Anima</p>
            </CardContent>
          </Card>
          <Card className="col-span-3 flex flex-col items-center rounded border-b-[#F2BFAF] border-b-4 py-12">
            <CardHeader className="p-0">
              <p className="text-4xl text-slate-900 font-bold leading-tight pb-2">
                12k+
              </p>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center text-center py-0">
              <p className="text-base font-mulish">Teams used Anima</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
