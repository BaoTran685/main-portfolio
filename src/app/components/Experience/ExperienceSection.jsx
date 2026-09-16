import SubHeader from '../SubHeader'
import ExperienceCard from './ExperienceCard'
import CircleSection from '../CircleSeperator'

const experienceComponents = [
  {
    title: 'Data Engineer Co-op',
    at: "Brookfield Corporation",
    link: 'https://www.brookfield.com/',
    start: 'September 2024',
    end: 'April 2025 (8 months)'
  },
  {
    title: 'Data Analyst Co-op',
    at: "Greenhouse Juice",
    link: 'https://www.greenhouse.ca/',
    start: 'January 2024',
    end: 'August 2024 (8 months)'
  },
  {
    title: 'Crew Member',
    at: "Wendy's",
    link: 'https://locations.wendys.com/canada/pe/charlottetown/643-university-avenue',
    start: 'January 2022',
    end: 'May 2022 (5 months)'
  },
  {
    title: 'Volunteer',
    at: 'Colonel Gray High School Library',
    link: 'https://colonelgray.edu.pe.ca/',
    start: 'September 2020',
    end: 'January 2021 (5 months)'
  },
  
]
const Experience = () => {
  return (
    <section className='mt-10 xl:mt-12' id='Experience'>
      <div className='flex flex-col'>
        <div className='flex flex-col h-full items-center md:items-start text-center md:text-left w-full bg-[var(--box-grey-color)] rounded-xl shadow-lg mb-5 md:mb-6 px-8 md:px-10 lg:px-14 xl:px-18 py-8'>
          <SubHeader> Experience </SubHeader>
        </div>
        <ul className='grid gap-5 md:gap-6'>
          {experienceComponents.map((component, index) => (
            <li key={index}>
              <ExperienceCard
                title={component.title}
                at={component.at}
                link={component.link}
                start={component.start}
                end={component.end}
              />
            </li>
          ))}
        </ul>
      </div>
      <CircleSection />
    </section>
  )
}

export default Experience
