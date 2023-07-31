import { NextPage } from 'next'
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

const LandingPage: NextPage = () => {
    return (
        <div className="h-full ">
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
        </div>
    )
}

export default LandingPage