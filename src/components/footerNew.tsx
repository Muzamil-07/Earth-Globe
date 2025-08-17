import { footerData } from "@/data/footerNewData";

export default function FooterNew() {
  return (
    <footer className="bg-white text-gray-900">
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Logo + Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {footerData.logo?.icon && (
              <div className="">
                <img
                  src={'/OpenxAI-Black.png'}
                  alt="logo"
                  className="w-60"
                />
              </div>
            )}
            {/* <h1 className="text-xl font-semibold">{footerData.logo?.name}</h1> */}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {footerData.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-8 h-8 flex items-center justify-center"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="md:ml-9 grid grid-cols-1 sm:grid-cols-4 gap-x-8 gap-y-8">
          {/* Empty first column */}
          <div className="hidden sm:block"></div>
          
          {footerData.linkSections.map((section, index) => (
            <div key={`${section.title}-${index}`} className="text-center sm:text-left">
              <h3 className="font-semibold text-gray-900 md:text-[1.1rem] mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#535353]-600 hover:text-gray-900 font-normal transition-colors md:text-[1rem]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center sm:text-left">
          <p className="text-gray-500 text-sm">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
