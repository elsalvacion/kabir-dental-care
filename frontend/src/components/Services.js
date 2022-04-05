import React from "react";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      header: "Root Canals",
      subHeader: `A root canal is a dental procedure involving the removal of the soft center of the tooth, the pulp. The pulp is made up of nerves, connective tissue, and blood vessels that help the tooth grow. In the majority of cases, a general dentist or endodontist will perform a root canal while you're under local anesthesia.`,
      icon: `../assets/icons/root-canal.png`,
    },
    {
      header: "Scaling",
      subHeader: `Scaling is a common dental procedure for patients with gum disease. This is a type of dental cleaning that reaches below the gumline to remove plaque buildup. The process of scaling and root planing the teeth is often referred to as a deep cleaning.`,
      icon: `../assets/icons/scaling.png`,
    },
    {
      header: "Extraction",
      subHeader: `Extractions are performed for a wide variety of reasons, but most commonly to remove teeth which have become unrestorable through tooth decay, periodontal disease, or dental trauma, especially when they are associated with toothache.`,
      icon: `../assets/icons/tooth-extraction.png`,
    },
    {
      header: "Crowning",
      subHeader: `Dental crowns are tooth-shaped “caps” that can be placed over your tooth. Think of it like a snug hat for your tooth. The crown restores the tooth's shape, size, strength and appearance. The dental crown is cemented into place on your tooth and it covers the visible portion of the tooth`,
      icon: `../assets/icons/cap.png`,
    },
    {
      header: "Filling",
      subHeader: `To treat a cavity your dentist will remove the decayed portion of the tooth and then "fill" the area on the tooth where the decayed material was removed. Fillings are also used to repair cracked or broken teeth and teeth that have been worn down from misuse (such as from nail-biting or tooth grinding).`,
      icon: `../assets/icons/dental-filling.png`,
    },
    {
      header: "Pulpectomy",
      subHeader: `Pulpotomy is a minimally invasive procedure performed in children on a primary tooth with extensive caries but without evidence of root pathology. The minimally invasive endodontic techniques of vital pulp therapy (VPT) are based on improved understanding of the capacity of pulp (nerve) tissues to heal and regenerate plus the availability of advanced endodontic materials.`,
      icon: `../assets/icons/dental-hygiene.png`,
    },
  ];
  return (
    <div className="p-5 my-5">
      <h1 className="text-4xl text-center mb-7" id="services">
        Our Services
      </h1>
      <div className="flex items-stretch flex-wrap justify-center">
        {services.map((service) => (
          <Service key={service.header} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
