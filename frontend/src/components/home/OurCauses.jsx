import School from '../../assets/build_school.png';
import Aid from '../../assets/medical_aid.png';
import Water from '../../assets/safe_water.png';
import Rights from '../../assets/human_rights.png';
import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';
import CauseCard from './CauseCard';

const cardDummyData = [
  {
    id: 1,
    image: School,
    cardTitle: 'Big charity: build school for poor children',
    raisedAmt: '5M',
    goalAmt: '10M',
    percentRaised: '50',
  },
  {
    id: 2,
    image: Aid,
    cardTitle: 'Big charity: build school for poor children',
    raisedAmt: '5M',
    goalAmt: '10M',
    percentRaised: '50',
  },
  {
    id: 3,
    image: Water,
    cardTitle: 'Big charity: build school for poor children',
    raisedAmt: '5M',
    goalAmt: '10M',
    percentRaised: '50',
  },
  {
    id: 4,
    image: Rights,
    cardTitle: 'Big charity: build school for poor children',
    raisedAmt: '5M',
    goalAmt: '10M',
    percentRaised: '50',
  },
];

function OurCauses() {
  return (
    <section className=''>
      <div className='flex items-center'>
        <SectionHeading
          heading='Our Causes'
          title='You can help lots of people by donating little.'
        />
        <Button text='MORE CAUSES' bgColor='primary' onClick={() => {}} />
      </div>

      <div className='flex mt-5'>
        {cardDummyData.slice(0, 5).map((card) => (
          <CauseCard {...card} key={card.id} />
        ))}
      </div>
    </section>
  );
}

export default OurCauses;
