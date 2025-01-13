import Blackholeanimation from "@/nextcomponents/blackholeanimation"
import SkillSection from "@/nextcomponents/skillssection";
import CyberSec from "@/nextcomponents/cybersec";
import Projects from "@/nextcomponents/Projects";

export default function Home() {
  
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-15">
        <Blackholeanimation />
        <SkillSection/>
        <CyberSec/>
        {/* <Projects/> */}
      </div>
    </main>
  );
}