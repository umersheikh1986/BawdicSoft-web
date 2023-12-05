import React, { FC, ReactNode, MouseEvent } from 'react';
interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="h-[500px] md:h-[600px] bg-center bg-cover bg-no-repeat bg-[url('https://bawdicsoft.com/wp-content/uploads/2022/08/happy-young-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-office.webp')] bg-gray-400 bg-blend-multiply">
    <div className="px-4 mx-auto pt-48 md:pt-24  text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl -ml-30">Join Our Team​</h1>
     
      
    </div>
</section>

  );
};

export default HeroSection;