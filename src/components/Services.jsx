import React, { useState } from "react";
import Modal from "./Modal";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const content = {
    feasibilities: {
      title: "Feasibilities",
      paragraph:
        "Stand-alone feasibility assessment is the most comprehensive and complex type of feasibility analysis. Performed before the study, it collects and analyse critical information for setting a strong basis for clinical trial success.",
      coords: { top: 41.2, left: 53.9 },
      text: [
        {
          title: "regulatory analysis",
          paragraph:
            "Regulatory analysis, we conduct, ensures compliance with legal standards. It guides study design, documentation, and submission processes to meet regulatory requirements efficiently during the analytic phase.",

          coords: { top: 41.2, left: -14.5 },
        },

        {
          title: "disease epidemiology",
          paragraph:
            "Stand-alone feasibility assessment is the most comprehensive and complex type of feasibility analysis. Performed before the study, it collects and analyse critical information for setting a strong basis for clinical trial success.",

          coords: { top: 4, left: -14.5 },
        },

        {
          title: "competitive market research",
          paragraph:
            "We will analyse market about patient recruitment strategies, optimal study designs, and operational trial efficiency. This way we enhance enrollment, shorten timelines, and gain an edge in the competitive clinical research landscape.",
          coords: { top: 4, left: 53.9 },
        },

        {
          title: "treatment standards & practices",
          paragraph:
            "Variations in standards and practices, across different regions, countries and sites may impact recruitment, enrollment and can critically affect overall study outcomes.",
          coords: { top: 41.2, left: 53.9 },
        },

        {
          title: "recruitment potential",
          paragraph:
            "MICRO will evaluate investigator candidate's suitability, experience, potential and motivation for your trial. We also gauge motivation of patients to take part and stay compliant throughout study. ",
          coords: { top: 41.2, left: -14.5 },
        },

        {
          title: "CT protocol review",
          paragraph:
            "Clinical trial protocol review ensures that study design, methodology, and safety measures adhere to regulatory standards. It verifies patient eligibility, risk minimization, and scientific validity protecting participants and data integrity.",
          coords: { top: 4, left: -14.5 },
        },

        {
          title: "logistical analysis",
          paragraph:
            "Logistical analysis, in CT, involves planning and managing the supply chain of products, equipment, and bio-materials to ensure timely, compliant delivery and proper handling. It addresses distribution challenges, regulatory compliance, and resource control.",
          coords: { top: 4, left: 53.9 },
        },

        {
          title: "SWOT",
          paragraph:
            " MICRO will perform SWOT analysis of your CT and assess the week and strong points, as well as suggest mitigation plan. We'll assist your planning by presenting the most successful strategy/ies for clinical trial conduct and completion.",
          coords: { top: 41.2, left: 53.9 },
        },
      ],
    },
    negotiation: {
      title: "Negotiation",
      paragraph:
        "MICRO will assist your negotiations of grants and contracts, as well as budget forecasting and payments.",
      coords: { top: 41.2, left: 53.9 },
      text: [
        {
          title: "grants & contracts",
          paragraph:
            "We'll assist you in managing funding and legal agreements supporting study execution. It includes budget preparation, contract negotiation, regulations compliance, timely approvals, and financial monitoring for smooth trial operations.",
          coords: { top: 41.2, left: -14.5 },
        },
        {
          title: "budget & payments forecasting",
          paragraph:
            "Budget and payments forecasting in clinical trials predicts costs and payment schedules to ensure financial control and timely resource allocation while managing risks and unexpected expenses.",
          coords: { top: 4, left: -14.5 },
        },
      ],
    },
    authorities: {
      title: "Authorities",
      paragraph:
        "MICRO will assist your communication with regulatory authorities and ethical committees, and also with submissions and approvals.",
      coords: { top: 41.2, left: 53.9 },
      text: [
        {
          title: "EC & RA communication",
          paragraph:
            "Communication with Ethics Committees and Regulatory Authorities involves timely safety updates, protocol amendments, and trial progress to ensure ethical conduct and regulatory adherence throughout the trial lifecycle.",
          coords: { top: 41.2, left: -14.5 },
        },
        {
          title: "submissions & approvals",
          paragraph:
            "Clinical trial submissions involve preparing and submitting detailed protocols, informed consent forms, and safety data to regulatory authorities and ethics committees.",
          coords: { top: 4, left: -14.5 },
        },
        {
          title: "SUSAR reporting",
          paragraph:
            "SUSAR reporting requires sponsors to promptly notify authorities of serious, unexpected adverse reactions in clinical trials to ensure participant safety and regulatory compliance.",
          coords: { top: 4, left: 53.9 },
        },
      ],
    },
    licensing: {
      title: "Import/Export Licenses",
      paragraph:
        "Licenses regulate the  transport of investigational materials across borders. Applications require study approvals, detailed product information, and regulatory compliances for lawful shipment and trial integrity.",
      coords: { top: 41.2, left: 53.9 },
      text: [
        {
          title: "investigational medical product",
          paragraph:
            "An investigational medical product (IMP) is a drug, biologic, device, or placebo used in clinical trials. It may be unapproved, used differently, or studied for new indications. IMPs require strict regulatory compliance and quality control.",
          coords: { top: 41.2, left: -14.5 },
        },
        {
          title: "biological samples",
          paragraph:
            "Biological samples in clinical trials include bio-materials collected for analysis. Regulations require informed consent, secure storage, privacy protection, and compliance with ethical standards.",
          coords: { top: 4, left: -14.5 },
        },
        {
          title: "study materials",
          paragraph:
            "Clinical trial study materials comprise protocols, consent forms, investigator brochures, logs, questionnaires, and emergency cards. They ensure regulatory compliance, patient safety, and data integrity during trials.",
          coords: { top: 4, left: 53.9 },
        },
      ],
    },
    monitoring: {
      title: "Monitoring (phases II-IV)",
      paragraph:
        " MICRO will performe visits at all trial phases. Monitoring include proper informed consent procedures, compliance with protocol, GCP/ICH Guidelines and other applicable regulatory requirements and assurance of good site performance.",
      coords: { top: 41.2, left: 53.9 },
      text: [
        {
          title: "pre-study visit",
          paragraph:
            "A pre-study visit assesses a site’s capability to conduct a trial, reviewing staff qualifications, facilities, equipment, patient access, and regulatory compliance before study initiation. It ensures readiness and feasibility.",
          coords: { top: 41.2, left: -14.5 },
        },
        {
          title: "initiation visit (SIV)",
          paragraph:
            "Site initiation visit (SIV) confirms readiness for trial start. It reviews protocols, regulatory approvals, staff training, study materials, monitoring plans, recruitment strategies, and communication with key site staff, in compliance with Good Clinical Practice (GCP).",
          coords: { top: 4, left: -14.5 },
        },
        {
          title: "interim visits",
          paragraph:
            "During the study, Interim visits ensure protocol compliance,  data accuracy verification, patient safety protection, and monitor regulatory adherence. They involve document review, source data verification, and addressing site queries maintaining study integrity.",
          coords: { top: 4, left: 53.9 },
        },
        {
          title: "closeout visit",
          paragraph:
            "The final monitoring visit at a clinical trial site ensures all study data and regulatory documents are complete, investigational products accounted for, and patient follow-up plans clarified. It confirms trial closure compliance and site readiness for archiving.",
          coords: { top: 41.2, left: 53.9 },
        },
      ],
    },
    selection: {
      title: "Site Selection",
      paragraph:
        "Understanding motivation and the performance potential of the sites is crucial to the success of trials. MICRO team will identify the local key opinion leaders (KOLs), site recruitment potential and other potential sites to assist your most suitable choice.",
      coords: { top: 41.2, left: 53.9 },
      text: [
        {
          title: "identifying trial site",
          paragraph:
            "Identifying a trial site involves evaluating patient access, staff expertise, facilities, past performance, and regulatory compliance to ensure successful clinical trial execution.",
          coords: { top: 41.2, left: -14.5 },
        },
        {
          title: "initial contacts",
          paragraph:
            "Initial contacts in clinical trials involve sending study synopses and investigator CV requests to potential sites, followed by Non-Disclosure Agreements before sharing protocols and surveys. This initiates site feasibility evaluation and interest confirmation.",
          coords: { top: 4, left: -14.5 },
        },
        {
          title: "evaluation visits",
          paragraph:
            "Evaluation visits verify site facilities, staff expertise, regulatory compliance, and study readiness. They include document review, interviews, and environment assessment to ensure protocol adherence and patient safety.",
          coords: { top: 4, left: 53.9 },
        },
        {
          title: "establishing relationships",
          paragraph:
            "Establishing relationships with trial sites requires respect, professionalism, transparency, and consistent communication. Building trust ensures collaboration, patient safety, and reliable data throughout the trial lifecycle.",
          coords: { top: 41.2, left: 53.9 },
        },
      ],
    },
    vigilance: {
      title: "Pharmacovigilance",
      paragraph:
        "Pharmacovigilance in clinical trials requires continuous safety monitoring, timely adverse event reporting, risk management, investigator training, and compliance with Good Clinical Practice (GCP) and regulatory guidelines to protect participants and ensure data integrity.",
      coords: { top: 41.2, left: 53.9 },

      text: [
        {
          title: "SUSARs & SAEs",
          paragraph:
            "Management of SUSARs are serious, unexpected adverse reactions suspected to be caused by a drug, requiring urgent reporting. SAEs are serious events like death or hospitalization, regardless of causality.",
          coords: { top: 41.2, left: -14.5 },
        },
        {
          title: "ICSRs & ADRs",
          paragraph:
            "Management of ICSRs (Individual Case Safety Reports) document detailed information about suspected adverse drug reactions in a single patient. ADRs (Adverse Drug Reactions) are harmful effects caused by a drug under normal use.",
          coords: { top: 4, left: -14.5 },
        },
        {
          title: "PSURs & RMPs",
          paragraph:
            "PSURs (Periodic Safety Update Reports) are documents evaluating a drug’s benefit-risk balance, safety data, and emerging risks. RMPs (Risk Management Plans) outline strategies to identify, assess, and minimize potential safety risk to patient and regulatory compliance.",
          coords: { top: 4, left: 53.9 },
        },
      ],
    },
  };

  const modalHandler = (service) => {
    setIsOpen(true);
    setModalContent(content[service]);
  };

  return (
    <section className="stack-section" id="section-services">
      <h1 id="title-services">services</h1>
      {isOpen && (
        <Modal content={modalContent} onClick={() => setIsOpen(false)} />
      )}
      <div id="services-container">
        <div id="services-background"></div>

        <div id="hex">
          <h3
            className="subtitle"
            id="subtitle1"
            onClick={() => modalHandler("feasibilities")}
          >
            Feasibilities
          </h3>
          <h3
            className="subtitle"
            id="subtitle2"
            onClick={() => modalHandler("negotiation")}
          >
            Negotiation
          </h3>
          <h3
            className="subtitle"
            id="subtitle3"
            onClick={() => modalHandler("authorities")}
          >
            Authorities
          </h3>
          <h3
            className="subtitle"
            id="subtitle4"
            onClick={() => modalHandler("selection")}
          >
            Site Selection
          </h3>
          <h3
            className="subtitle"
            id="subtitle5"
            onClick={() => modalHandler("licensing")}
          >
            Licences
          </h3>
          <h3
            className="subtitle"
            id="subtitle6"
            onClick={() => modalHandler("monitoring")}
          >
            Monitoring
          </h3>
          <h3
            className="subtitle"
            id="subtitle7"
            onClick={() => modalHandler("vigilance")}
          >
            Pharmacovigilance
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
