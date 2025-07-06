import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Equipe = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Dre Tahina Ralitera",
      title: "Docteure-Ingénieure, CNRS France | Prix L'Oréal-UNESCO pour les Femmes en Science (2017)",
      image: "src/Tahina-OK-e1716502943928-300x300.png"
    },
    {
      id: 2,
      name: "Dr Lou Maurica",
      title: "Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI",
      image: "src/97-portraits-97_edited-e1716502895676-300x300.jpg"
    },
    {
      id: 3,
      name: "Mirado RAFENOMAHENINTSOA",
      title: "Data and Business Intelligence Specialist 5+",
      image: "src/Mirado-300x300.webp"
    },
    {
      id: 4,
      name: "Julien Rajerison",
      title: "Lead Developpeur | Fondateur de l'association Techzara Madagascar.",
      image: "src/jul.webp"
    },
    {
      id: 5,
      name: "Rayan Andriamahery",
      title: "Développeur back end | Confondateur et directeur des operations de HEI",
      image: "src/ryan.webp"
    },
    {
      id: 6,
      name: "Jean Aimé Maxa",
      title: "Responsable technique cybersécurité chez CES France Continenal (Toulouse-France)",
      image: "src/jean.jpg"
    },
    {
      id: 7,
      name: "Parison Ravalomanda",
      title: "Ingénieur en informatique | Ingénieur logiciel chez Google (Londres - UK) ",
      image: "src/Parison-e1716502987165-300x300.png"
    },
    {
      id: 8,
      name: "Yannick Raharijaona ",
      title: "Responsable technique ML chez Rocket Science (Ottawa - Canada)",
      image: "src/5746AC1E761A42D1B7D89496C9A6BE9B_edited-e1716502720974-300x300.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleMembers = () => {
    const start = currentSlide * 3;
    return teamMembers.slice(start, start + 3);
  };

  return (
    <section className="bg-blue-400 py-16 px-4 relative overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          L'équipe pédagogique
        </h2>
        <p className="text-white text-lg md:text-xl max-w-5xl mx-auto leading-relaxed">
          Notre équipe pédagogique se compose d'experts nationaux et internationaux de l'informatique, de la cybersécurité, de l'intelligence artificielle,
          dont un ingénieur chez Google. Ils sont passionnés par l'informatique et sont engagés vers l'excellence. Nous sommes conscients que cette
          équipe est la pierre angulaire de l'employabilité de nos étudiants, elle a été soigneusement sélectionnée.
        </p>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        <div className="flex justify-center items-center space-x-6 px-16">
          {getVisibleMembers().map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 max-w-sm w-full"
            >
              {/* Photo */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

             
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                {member.name}
              </h3>

           
              <p className="text-gray-600 text-center leading-relaxed">
                {member.title}
              </p>
            </div>
          ))}
        </div>

     
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>

      
      <div className="md:hidden">
        <style jsx>{`
          @media (max-width: 768px) {
            .carousel-container {
              flex-direction: column;
              space-x: 0;
              space-y: 1.5rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Equipe;
