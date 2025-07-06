import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUsers, faMedal } from '@fortawesome/free-solid-svg-icons';

const Apropos = () => {
    return (
        <>        
        <section className="flex flex-col lg:flex-row mt-6 lg:mt-10 min-h-screen px-4 sm:px-6 md:px-8 lg:px-15">
            <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-20 mb-8 lg:mb-0">
                <img 
                    src="https://hei.school/wp-content/uploads/2024/11/A-propos-left-1.webp" 
                    alt="about_us_image" 
                    className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain" 
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-8 h-fit">
                <div className="mb-6 text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">A propos de nous</h1>
                </div>
                
                <div className="my-5 sm:my-6">
                    <div className='flex p-2 items-center justify-center lg:justify-start'>
                        <FontAwesomeIcon icon={faGraduationCap} className='text-yellow-400 text-3xl sm:text-4xl lg:text-5xl'/>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 my-5 p-2 ml-2">+3ans</h2>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left px-2 lg:px-0">
                        Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l'informatique. Nous sommes un groupe d'experts, de professionnels et des passionnés de l'informatique de Madagascar et du monde entier.
                    </p>
                </div>
                
                <div className="my-5 sm:my-6">
                    <div className='flex p-2 items-center justify-center lg:justify-start'>
                        <FontAwesomeIcon icon={faUsers} className='text-yellow-400 text-3xl sm:text-4xl lg:text-5xl' />
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 my-5 p-2 ml-2">+250 étudiants</h2>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left px-2 lg:px-0">
                        Plus de 250 étudiants et plus d'une dizaine d'entreprises ont déjà fait confiance à notre formation habilitée par l'État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la "grande famille HEI".
                    </p>
                </div>
                
                <div className="my-5 sm:my-6">
                    <div className='flex p-2 items-center justify-center lg:justify-start'>
                        <FontAwesomeIcon icon={faMedal} className='text-yellow-400 text-3xl sm:text-4xl lg:text-5xl' />
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 my-5 p-2 ml-2">Notre mission</h2>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left px-2 lg:px-0">
                        Notre mission est d'amener des jeunes malgaches sur des domaines porteurs comme l'intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
                    </p>
                </div>
            </div>
        </section>
        </>
    );
}
export default Apropos;