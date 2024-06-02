import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const HomeBanner = () => {
  const { toast } = useToast();
  const today = new Date();
  console.log(today)
  console.log(typeof(today))
  return (
    <div className="min-h-screen flex flex-col text-white justify-center items-center bg-cover bg-fixed bg-center bg-no-repeat bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.pexels.com/photos/7844012/pexels-photo-7844012.jpeg')]">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center">
        Welcome to  Quo<span className="text-red-500">k</span>
          <span className="text-yellow-500">k</span>a
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl mb-8  text-center">
        Book parcels easily and manage deliveries with efficiency.
      </p>
      <div className="flex flex-col text-black md:flex-row w-full max-w-sm items-center gap-2 p-2">
        <Input type="text" placeholder="Want to book?" />
        <Button

          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
          type="submit"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default HomeBanner;
