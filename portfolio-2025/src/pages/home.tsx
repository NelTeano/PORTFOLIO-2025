// import LightRays from '../components/ReactBits/LightRays';
import BlurText from "../components/ReactBits/BlurText";
import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {

    const handleAnimationComplete = () => {
      console.log('Animation completed!');
    };

    return (
        <div className='w-full h-[600px] relative  text-white' >
            <BlurText
                text="Jonel Teano"
                delay={1000}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-9xl mb-8"
            />
            <ModeToggle/>
        </div>
    )
}
