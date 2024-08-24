
const Footer = () => {
  return (
    <footer className="bg-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold mb-4 inline-block">
              <span className="font-title">Baymax</span>
            </a>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h6 className="text-primary-color mb-4">Resources</h6>
            <ul>
              <li><a href="#" className="text-p-color hover:text-primary-color">Home</a></li>
              <li><a href="#" className="text-p-color hover:text-primary-color">How it works</a></li>
              <li><a href="#" className="text-p-color hover:text-primary-color">FAQs</a></li>
              <li><a href="#" className="text-p-color hover:text-primary-color">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <h6 className="text-primary-color mb-4">Information</h6>
            <p className="text-p-color">
              <a href="tel:305-240-9671" className="hover:text-primary-color">305-240-9671</a>
            </p>
            <p className="text-p-color">
              <a href="mailto:info@company.com" className="hover:text-primary-color">info@company.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-0 h-0 border-solid border-transparent border-b-secondary-color border-r-[200px] border-b-[200px]"></div>
    </footer>
  );
};

export default Footer;