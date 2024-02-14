import Blackholeanimation from "@/nextcomponents/blackholeanimation"
import SkillSection from "@/nextcomponents/skillssection";
import CyberSec from "@/nextcomponents/cybersec";
export default function Home() {
  
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Blackholeanimation />
        <SkillSection/>
        <CyberSec/>
      </div>
    </main>
  );
}