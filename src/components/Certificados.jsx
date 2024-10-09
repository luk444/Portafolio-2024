import React, { useContext, useState } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JAVASCRIPT from '../assets/javascript.png';
import REACT from '../assets/react2.png';
import CODER from '../assets/logoCoder.png';
import TICMAS from '../assets/ticmas2.png';
import JAVASCRIPT_CERT from '../assets/Certificados/JavaScriptCertificado.png';
import REACT_CERT from '../assets/Certificados/ReactjsCertificado.png';
import CODER_CERT from '../assets/Certificados/DesarrolloWebCertificado.png';
import TICMAS_CERT from '../assets/Certificados/CertificadoTicmas.png';
import { ThemeContext } from './themeContext';
import Skill from './Skill';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';

export default function Certificados() {
  const { theme } = useContext(ThemeContext);
  const [t, i18n] = useTranslation('global');
  const [modalImage, setModalImage] = useState(null);

  const handleOpenModal = (cert) => {
    setModalImage(cert);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  const skills = [
    { title: 'Certificado JavaScript', src: JAVASCRIPT, cert: JAVASCRIPT_CERT, alt: 'JavaScript Icon' },
    { title: 'Certificado React', src: REACT, cert: REACT_CERT, alt: 'React Icon' },
    { title: 'Certificado Dev.web', src: CODER, cert: CODER_CERT, alt: 'CoderHouse Icon' },
    { title: 'Certificado FrontEnd', src: TICMAS, cert: TICMAS_CERT, alt: 'Ticmas Icon' },
  ];

  return (
    <>
      <div className="col-span-2 lg:col-span-3 pt-10">
        <p className="text-md lg:text-xl px-2 py-1 font-bold inline border-l-4 border-b-4 border-light_structure dark:border-structure text-light_title dark:text-title transition-all duration-700">
          {t('certificados.subtitle')}
        </p>
      </div>
      <div className="col-span-2 lg:col-span-3">
        <div className="certificates w-full font-semibold grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              onClick={() => handleOpenModal(skill.cert)}
              className="cursor-pointer flex justify-center items-center"
            >
              <Skill title={skill.title} src={skill.src} alt={skill.alt} classname={skill?.classname ?? ''}/>
            </div>
          ))}
        </div>
      </div>
      <Modal image={modalImage} onClose={handleCloseModal} />
    </>
  );
}
