import Blackholeanimation from "@/nextcomponents/blackholeanimation"
import SkillSection from "@/nextcomponents/skillssection";

export default function Home() {
  
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Blackholeanimation />
        <SkillSection/>
        
      </div>
    </main>
  );
}