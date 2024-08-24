
const FeatureCard = ({ title, description, imageSrc }) => (
  <div className="bg-white shadow-lg rounded-medium p-6 h-full">
    <div className="flex flex-col h-full">
      <h5 className="mb-2">{title}</h5>
      <p className="mb-4">{description}</p>
      <img src={imageSrc} className="mt-auto w-full h-48 object-cover rounded-medium" alt={title} />
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="bg-secondary-color rounded-b-large pb-24" id="section_2">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white mb-12 pt-24">What we offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Calorie intake"
            description="Easily keep track of calories consumed."
            imageSrc="/images/calorie.png"
          />
          <FeatureCard
            title="Fitness"
            description="Also keep track of how much you exercised."
            imageSrc="/images/fitness.png"
          />
          <FeatureCard
            title="Medical history"
            description="We also have the options for keeping records of your medical history."
            imageSrc="/images/med-history.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;