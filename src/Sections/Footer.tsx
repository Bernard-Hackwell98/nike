import { footerLogo } from "../nike_landing_assets/assets/images";
// @ts-ignore
import { copyrightSign } from "../nike_landing_assets/assets/icons";

// Define types
interface Link {
  name: string;
  href?: string; // Optional if some links don't have a URL
}

interface Section {
  title: string;
  links: Link[];
}

interface Props {
  footerLinks: Section[];
  socialMedia: { src: string; alt: string }[];
}

const Footer: React.FC<Props> = ({ footerLinks, socialMedia }) => {
  return (
    
      <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} width={150} height={46} alt="Footer Logo" />
            </a>

            <p className="mt-6 text-base leading-7 font-monserrat text-white sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              your perfect size in-store. Get rewards.
            </p>

            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between lg:gap-10 gap-20 flex-wrap mt-10">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((link) => (
                      <li key={link.name} className="mt-3 text-white font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                        <a href={link.href || "#"}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="Copyright" width={20} height={20} className="rounded-full m-0"/>
            <p>Copyright. All rights reserved</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>


      </footer>
  );
};

export default Footer;
