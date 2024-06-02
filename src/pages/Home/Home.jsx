import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
  const { toast } = useToast();
  return (
    <div>
      <HomeBanner />
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
};

export default Home;
