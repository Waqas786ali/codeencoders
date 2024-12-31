import { Typography } from '../../../components/shared/typography';
import { InfiniteMovingCards } from './Marquee';


const MeetTeam = () => {
  return (
    <section className='w-full mx-auto relative mb-32'>
      <div className='meet_team_radial'></div>
      <div className="w-full mx-auto border-shine-gradient !px-0 relative">
        <div className='bg-black py-10 sm:py-20 w-full text-white relative'>
          <div className='text-center overflow-hidden'>
            <Typography as="h2" size="h2" className='font-euro-semibold text_apear2'>Meet the Team</Typography>
          </div>

          <div className='pt-16 md:pt-24 space-y-10'>
              <InfiniteMovingCards
                  items={[
                    {
                      imageUrl: "/assets/images/team/meet-team/saif.png",
                      name: "Waqas Ali",
                      title: "Senior UI/UX Designer",
                    },
                    {
                      imageUrl: "/assets/images/team/meet-team/saif.png",
                      name: "Ahmed Khan Choudhry Choudhry",
                      title: "Backend Developer",
                    },
                    {
                      imageUrl: "/assets/images/team/meet-team/saif.png",
                      name: "Sara Ahmed",
                      title: "Frontend Developer",
                    },
                    {
                      imageUrl: "/assets/images/team/meet-team/saif.png",
                      name: "John Doe",
                      title: "Project Manager",
                    },
                    {
                      imageUrl: "/assets/images/team/meet-team/saif.png",
                      name: "Alex Smith",
                      title: "DevOps Engineer",
                    },
                  ]}
                />
              <InfiniteMovingCards
                  direction='right'
                  items={[
                    {
                      imageUrl: "/assets/images/team/meet-team/saif.png",
                      name: "Waqas Ali",
                      title: "Senior UI/UX Designer",
                    },
                    {
                      imageUrl: "/assets/images/team/meet-team/saif.png",
                      name: "Ahmed Khan",
                      title: "Backend Developer",
                    },
                    {
                      imageUrl: "/assets/images/team/meet-team/saif.png",
                      name: "Sara Ahmed",
                      title: "Frontend Developer",
                    },
                    {
                      imageUrl: "/assets/images/team/meet-team/saif.png",
                      name: "John Doe",
                      title: "Project Manager",
                    },
                    {
                      imageUrl: "/assets/images/team/meet-team/saif.png",
                      name: "Alex Smith",
                      title: "DevOps Engineer",
                    },
                  ]}
                />
          </div>

          

        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
