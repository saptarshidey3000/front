import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left p-4 bg-white rounded-large"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="p-4 bg-white mt-2 rounded-large">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 bg-section-bg-color" id="section_4">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <FAQItem
            question="Why Baymax?"
            answer="Baymax is the one and all solution of health management."
          />
          <FAQItem
            question="Where does the data go?"
            answer="For now the data of the user is getting stored in our database. But later it will be displayed in the page itself."
          />
          <FAQItem
            question="Does it need to be paid?"
            answer="No, it's completely free."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;