import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fa-briefcase',
      title: 'CONSULENZA',
      description: `Offro consulenza tecnologica per valutare esigenze IT, definire strategie efficaci, analizzare codice per migliorarne qualità e sicurezza, scegliere e implementare soluzioni pronte all’uso, e definire requisiti con documentazione tecnica dettagliata.`,
    },
    {
      icon: 'fa-magnifying-glass-chart',
      title: 'ANALISI',
      description: `Eseguo analisi approfondite dei sistemi IT esistenti per identificare aree di miglioramento, ottimizzare le prestazioni, migliorare la sicurezza e garantire la compatibilità con le esigenze aziendali.`,
    },
    {
      icon: 'fa-list-check',
      title: 'PROJECT MANAGEMENT',
      description: `Gestisco progetti tecnologici complessi, dalla pianificazione alla realizzazione, garantendo il rispetto di tempi, budget e obiettivi. Coordino team multidisciplinari e gestisco la comunicazione con i clienti, assicurando che ogni fase del progetto venga completata con successo.`,
    },
    {
      icon: 'fa-gears',
      title: 'DIGITAL TRANSFORMATION',
      description: `Supporto le aziende nella transizione digitale, implementando soluzioni innovative per ottimizzare i processi aziendali. Guida il cambiamento tecnologico, migliorando l'efficienza operativa e l'interazione con i clienti attraverso l'adozione di tecnologie avanzate.`,
    },
    {
      icon: 'fa-handshake',
      title: 'Relazioni con Clienti e Fornitori',
      description: `Gestisco e ottimizzo le relazioni con clienti e fornitori per garantire una collaborazione fluida e produttiva. Coordino le comunicazioni e le trattative, assicurando che le esigenze di tutte le parti siano soddisfatte e che gli obiettivi comuni siano raggiunti efficacemente.`,
    },
    {
      icon: 'fa-chalkboard-user',
      title: 'FORMAZIONE',
      description: `Offro formazione su tecnologie, strumenti e best practices per permettere ai team aziendali di gestire autonomamente soluzioni IT complesse. Organizzo corsi personalizzati su misura per le esigenze specifiche di ogni cliente, migliorando le competenze interne.`,
    },
  ];

  return (
    <div className="service_area" id="service">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-md-12">
            <div className="section_title">
              <h1><span className="title">Servizi</span></h1>
              <p>Cosa faccio?</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                <div className="single_service">
                  <div className="service_icon">
                    <i className={`fa ${service.icon}`}></i>
                  </div>
                  <div className="sercive_content">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
