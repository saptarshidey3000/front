
const TimelineItem = ({ title, description, icon }) => (
  <li className="mb-12 relative pl-36">
    <h4 className="text-white mb-3">{title}</h4>
    <p className="text-white">{description}</p>
    <div className="absolute left-0 top-0 w-24 h-24 bg-secondary-color rounded-full flex justify-center items-center">
      <i className={`bi ${icon} text-2xl text-white`}></i>
    </div>
  </li>
);

const HowItWorks = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-primary-color to-secondary-color" id="section_3">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white mb-12">How does it work?</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="relative">
            <div className="absolute left-12 top-0 w-2 h-full bg-white"></div>
            <TimelineItem
              title="Login and get your personalized dashboard"
              description="Explore our site and signup to Baymax where each user gets their personalized dashboard. That dashboard consists medical history report, calorie tracker, fitness tracker and many more."
              icon="bi-search"
            />
            <TimelineItem
              title="Keeping your data"
              description="Each section of the dashboard contains user's exercise and calorie intake data that user puts in as well as medical records. However if system finds that user might have a complication due to his/her daily course of routine then it will alert regarding checkup."
              icon="bi-bookmark"
            />
            <TimelineItem
              title="Consultation"
              description="Baymax is no certified doctor however it can suggest the best doctors around depending on your illness and Baymax's predictions. It also has the feature of personalized alerts regarding exercise reminder etc."
              icon="bi-book"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;