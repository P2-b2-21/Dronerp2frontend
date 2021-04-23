//Disse json-filer skal hentes i stedet for det her shit, men jeg har givet op:/
let oso_json = {
    "OSO#1": {
        "category": "Technical issue with the UAS",
        "description": "Ensure the operator is competent and/or proven",
        "low": {
            "integrity":
                "The applicant is knowledgeable of the UAS being used and as a minimum has the following relevant operational procedures: checklists, maintenance, training, responsibilities, and associated duties.",
            "assurance":
                "The elements delineated in the level of integrity are addressed in the ConOps."
        },
        "medium": {
            "integrity":
                "Same as low. Low: The applicant is knowledgeable of the UAS being used and as a minimum has the following relevant operational procedures: checklists, maintenance, training, responsibilities, and associated duties. In addition, the applicant has an organization appropriate1 for the intended operation. Also the applicant has a method to identify, assess, and mitigate risks associated with flight operations. These should be consistent with the nature and extent of the operations specified.",
            "assurance":
                "Prior to the first operation, a competent third party performs an audit of the organization"
        },
        "high": {
            "integrity": "Same as medium/low: The applicant is knowledgeable of the UAS being used and as a minimum has the following relevant operational procedures: checklists, maintenance, training, responsibilities, and associated duties. In addition, the applicant has an organization appropriate1 for the intended operation. Also the applicant has a method to identify, assess, and mitigate risks associated with flight operations. These should be consistent with the nature and extent of the operations specified.    ",
            "assurance": "The applicant holds an Organizational Operating Certificate or has a recognized flight test organization. In addition, a competent third party recurrently verifies the operator competences"
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#2": {
        "category": "Technical issue with the UAS",
        "description": "UAS manufactured by competent and/or proven entity",
        "low": {
            "integrity":
                "As a minimum, manufacturing procedures cover: \n • specification of materials \n • suitability and durability of materials used \n • processes necessary to allow for repeatability in manufacturing and conformity within acceptable tolerances.",
            "assurance":
                "The declared manufacturing procedures are developed to a standard considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority."
        },
        "medium": {
            "integrity":
                "Same as low. Low: As a minimum, manufacturing procedures cover: \n • specification of materials \n • suitability and durability of materials used \n • processes necessary to allow for repeatability in manufacturing and conformity within acceptable tolerances. \n In addition, manufacturing procedures also cover: \n • configuration control \n • verification of incoming products, parts, materials, and equipment \n • identification and traceability \n • in-process and final inspections & testing \n • control and calibration of tools \n • handling and storage \n • non-conforming item control",
            "assurance":
                "In addition, evidence is available that the UAS has been manufactured in conformance to its design"
        },
        "high": {
            "integrity": "Same as Medium. In addition, the manufacturing procedures cover at least: \n • manufacturing processes \n • personnel competence and qualification \n • supplier control",
            "assurance": "Same as Medium. In addition: \n • manufacturing procedures \n • conformity of the UAS to its design and specification \n are recurrently verified through process or product audit by a competent third party(ies)"
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#3": {
        "category": "Technical issue with the UAS",
        "description": "UAS maintained by competent and/or proven entity (e.g. industry standards)",
        "low": {
            "integrity":
                "• The UAS maintenance instructions are defined and when applicable cover the UAS designer instructions and requirements \n • The maintenance staff is competent and has received an authorisation to carry out UAS maintenance \n • The maintenance staff use the UAS maintenance instructions while performing maintenance",
            "assurance":
                "• The maintenance instructions are documented. \n • The maintenance conducted on the UAS is recorded in a maintenance log system1/2 . \n • A list of maintenance staff authorised to carry out maintenance is established and kept up to date. \n • A record of all relevant qualifications, experience and/or trainings completed by the maintenance staff is established and kept up to date"
        },
        "medium": {
            "integrity":
                "Same as Low. In addition: \n • Scheduled maintenance of each UAS is organised and in accordance with a Maintenance Programme. \n • Upon completion, the maintenance log system is used to record all maintenance conducted on the UAS including releases. A maintenance release can only be accomplished by a staff member who has received a maintenance release authorisation for that particular UAS model/family.",
            "assurance":
                "Same as Low. In addition: \n • The Maintenance Programme is developed in accordance with standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority \n • A list of maintenance staff with maintenance release authorisation is established and kept up to date \n • Initial training syllabus and training standard including theoretical/practical elements, duration, etc. is defined and commensurate with the authorisation held by the maintenance staff. \n • For staff holding a maintenance release authorisation, the initial training is specific to that particular UAS model/family. \n • All maintenance staff have undergone initial training"
        },
        "high": {
            "integrity": "Same as Medium. In addition, the maintenance staff works in accordance with a maintenance procedure manual that provides information and procedures relevant to the maintenance facility, records, maintenance instructions, release, tools, material, components, defect deferral",
            "assurance": "Same as Medium. In addition, the maintenance programme and the maintenance procedures manual are validated by a competent third party. \n • A programme for recurrent training of staff holding a maintenance release authorisation is established; and \n • This programme is validated by a competent third party."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#4": {
        "category": "Technical issue with the UAS",
        "description": "UAS developed to authority recognized design standards",
        "low": {
            "integrity":
                "The UAS is designed to standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority. The standards and/or the means of compliance should be applicable to a Low Level of Integrity and the intended operation",
            "assurance":
                "Training is self-declared (with evidence available)."
        },
        "medium": {
            "integrity":
                "The UAS is designed to standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority. The standards and/or the means of compliance should be applicable to a Medium Level of Integrity and the intended operation",
            "assurance":
                "• Training syllabus is available. \n • The operator provides competency-based, theoretical and practical training"
        },
        "high": {
            "integrity": "The UAS is designed to standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority. The standards and/or the means of compliance should be applicable to a High Level of Integrity and the intended operation",
            "assurance": "A competent third party: \n • Validates the training syllabus. \n • Verifies the remote crew competencies."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#5": {
        "category": "Technical issue with the UAS",
        "description": "UAS is designed considering system safety and reliability",
        "low": {
            "integrity":
                "The equipment, systems, and installations are designed to minimize hazards1 in the event of a probable malfunction or failure of the UAS.",
            "assurance":
                "A Functional Hazard Assessment and a design and installation appraisal that shows hazards are minimized are available."
        },
        "medium": {
            "integrity":
                "Same as Low. In addition, the strategy for detection, alerting and management of any malfunction, failure or combination thereof, which would lead to a hazard is available.",
            "assurance":
                "Same as Low. In addition: \n • Safety analyses are conducted in line with standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority. \n • A strategy for detection of single failures of concern includes preflight checks."
        },
        "high": {
            "integrity": "Same as Medium. In addition: \n • Major Failure Conditions are not more frequent than Remote ; \n •Hazardous Failure Conditions are not more frequent than Extremely Remote; \n •Catastrophic Failure Conditions are not more frequent than Extremely Improbable; \n • Software (SW) and Airborne Electronic Hardware (AEH) whose development error(s) may cause or contribute to hazardous or catastrophic failure conditions are developed to an industry standard or a methodology considered adequate by the competent authority and/or in accordance with means of compliance acceptable to that authority.",
            "assurance": "Same as Medium. In addition, safety analyses and development assurance activities are validated by a competent third party."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#6": {
        "category": "Technical issue with the UAS",
        "description": "C3 link characteristics (e.g. performance, spectrum use) are appropriate for the operation",
        "low": {
            "integrity":
                "• The applicant determines that performance, RF spectrum usage and environmental conditions for C3 links are adequate to safely conduct the intended operation. \n • The UAS remote pilot has the means to continuously monitor the C3 performance and ensures the performance continues to meet the operational requirements.",
            "assurance":
                "Training is self-declared (with evidence available)."
        },
        "medium": {
            "integrity":
                "Same as Low",
            "assurance":
                "Demonstration of the C3 link performance is in accordance with standards considered adequate by the competent authority and/or in accordance with means of compliance acceptable to that authority."
        },
        "high": {
            "integrity": "Same as Low. In addition, the use of licensed frequency bands for C2 Link is required.",
            "assurance": "Same as Medium. In addition, evidence is validated by a competent third party."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#7": {
        "category": "Technical issue with the UAS",
        "description": "Inspection of the UAS (product inspection) to ensure consistency to the ConOps",
        "low": {
            "integrity":
                "",
            "assurance":
                "Product inspection is documented and accounts for the manufacturer’s recommendations if available. \n The remote crew’s is trained to perform the product inspection, and that training is self-declared (with evidence available)."
        },
        "medium": {
            "integrity":
                "",
            "assurance":
                "Same as Low. In addition, the product inspection is documented using checklists. \n • A training syllabus including a product inspection procedure is available. \n • The operator provides competency-based, theoretical and practical training."
        },
        "high": {
            "integrity": "",
            "assurance": "Same as Medium. In addition, the product inspection is validated by a competent third party. \n A competent third party: \n • Validates the training syllabus. \n • Verifies the remote crew competencies."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#8": {
        "category": "Technical issue with the UAS",
        "description": " Operational procedures are defined, validated and adhered to (to address technical issues with the UAS)",
        "low": {
            "integrity":
                "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Operational procedures are complex and may potentially jeopardize the crew ability to respond by raising the remote crew’s workload and/or the interactions with other entities (e.g. ATM…). At a minimum, operational procedures provide: \n • a clear distribution and assignment of tasks \n • an internal checklist to ensure staff are adequately performing assigned tasks.",
            "assurance":
                "• Operational procedures do not require validation against either a standard or a means of compliance considered adequate by the competent authority. \n • The adequacy of the operational procedures is declared, except for Emergency Procedures, which are tested."
        },
        "medium": {
            "integrity":
                "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Contingency/emergency procedures require manual control by the remote pilot when the UAS is usually automatically controlled. Operational procedures take human error into consideration.",
            "assurance":
                "• Operational procedures are validated against standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority. \n • Adequacy of the Contingency and Emergency procedures is proven through: \n o Dedicated flight tests, or \n o Simulation provided the simulation is proven valid for the intended purpose with positive results."
        },
        "high": {
            "integrity": "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Operational procedures are simple. Same as Medium. In addition, the Remote Crew receives Crew Resource Management (CRM) training.",
            "assurance": "Same as Medium. In addition: \n • Flight tests performed to validate the procedures and checklists cover the complete flight envelope or are proven to be conservative. \n • The procedures, checklists, flight tests and simulations are validated by a competent third party."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#9": {
        "category": "Technical issue with the UAS",
        "description": "Remote crew trained and current and able to control the abnormal situations",
        "low": {
            "integrity":
                "The competency-based, theoretical and practical training ensures knowledge of: \n a) UAS regulation \n b) UAS airspace operating principles \n c) Airmanship and aviation safety \n d) Human performance limitations \n e) Meteorology \n f) Navigation/Charts \n g) UA knowledge \n h) Operating procedures and is adequate for the operation",
            "assurance":
                "Training is self-declared (with evidence available)."
        },
        "medium": {
            "integrity":
                "The competency-based, theoretical and practical training ensures knowledge of: \n a) UAS regulation \n b) UAS airspace operating principles \n c) Airmanship and aviation safety \n d) Human performance limitations \n e) Meteorology \n f) Navigation/Charts \n g) UA knowledge \n h) Operating procedures and is adequate for the operation",
            "assurance":
                "• Training syllabus is available. \n • The operator provides competency-based, theoretical and practical training."
        },
        "high": {
            "integrity": "The competency-based, theoretical and practical training ensures knowledge of: \n a) UAS regulation \n b) UAS airspace operating principles \n c) Airmanship and aviation safety \n d) Human performance limitations \n e) Meteorology \n f) Navigation/Charts \n g) UA knowledge \n h) Operating procedures and is adequate for the operation",
            "assurance": "A competent third party: \n • Validates the training syllabus. \n • Verifies the remote crew competencies."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#10": {
        "category": "Technical issue with the UAS",
        "description": "Safe recovery from technical issue",
        "low": {
            "integrity":
                "When operating over populous areas or gatherings of people, it can be reasonably expected that a fatality will not occur from any probable failure of the UAS or any external system supporting the operation.",
            "assurance":
                "A design and installation appraisal is available. In particular, this appraisal shows that: \n • the design and installation features (independence, separation and redundancy) satisfy the low integrity criterion; \n • particular risks relevant to the ConOps (e.g. hail, ice, snow, electro-magnetic interference…) do not violate the independence claims, if any."
        },
        "medium": {
            "integrity":
                "When operating over populous areas or gatherings of people: \n • It can be reasonably expected that a fatality will not occur from any single failure of the UAS or any external system supporting the operation. \n Software (SW) and Airborne Electronic Hardware (AEH) whose development error(s) could directly lead to a failure affecting the operation in such a way that it can be reasonably expected that a fatality will occur are developed to a standard considered adequate by the competent authority and/or in accordance with means of compliance acceptable to that authority",
            "assurance":
                "Same as Low. In addition, the level of integrity claimed is substantiated by analysis and/or test data with supporting evidence."
        },
        "high": {
            "integrity": "Same as Medium",
            "assurance": "Same as Medium. In addition, a competent third party validates the level of integrity claimed."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#11": {
        "category": "Deterioration of external systems supporting UAS operation",
        "description": "Procedures are in-place to handle the deterioration of external systems supporting UAS operation",
        "low": {
            "integrity":
                "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Operational procedures are complex and may potentially jeopardize the crew ability to respond by raising the remote crew’s workload and/or the interactions with other entities (e.g. ATM…). At a minimum, operational procedures provide: \n • a clear distribution and assignment of tasks \n • an internal checklist to ensure staff are adequately performing assigned tasks.",
            "assurance":
                "• Operational procedures do not require validation against either a standard or a means of compliance considered adequate by the competent authority. \n • The adequacy of the operational procedures is declared, except for Emergency Procedures, which are tested."
        },
        "medium": {
            "integrity":
                "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Contingency/emergency procedures require manual control by the remote pilot when the UAS is usually automatically controlled. Operational procedures take human error into consideration.",
            "assurance":
                "• Operational procedures are validated against standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority. \n • Adequacy of the Contingency and Emergency procedures is proven through: \n o Dedicated flight tests, or \n o Simulation provided the simulation is proven valid for the intended purpose with positive results."
        },
        "high": {
            "integrity": "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Operational procedures are simple. Same as Medium. In addition, the Remote Crew receives Crew Resource Management (CRM) training.",
            "assurance": "Same as Medium. In addition: \n • Flight tests performed to validate the procedures and checklists cover the complete flight envelope or are proven to be conservative. \n • The procedures, checklists, flight tests and simulations are validated by a competent third party."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#12": {
        "category": "Deterioration of external systems supporting UAS operation",
        "description": "The UAS is designed to manage the deterioration of external systems supporting UAS operation",
        "low": {
            "integrity":
                "When operating over populous areas or gatherings of people, it can be reasonably expected that a fatality will not occur from any probable failure of the UAS or any external system supporting the operation.",
            "assurance":
                "A design and installation appraisal is available. In particular, this appraisal shows that: \n • the design and installation features (independence, separation and redundancy) satisfy the low integrity criterion; \n • particular risks relevant to the ConOps (e.g. hail, ice, snow, electro-magnetic interference…) do not violate the independence claims, if any."
        },
        "medium": {
            "integrity":
                "When operating over populous areas or gatherings of people: \n • It can be reasonably expected that a fatality will not occur from any single failure of the UAS or any external system supporting the operation. \n Software (SW) and Airborne Electronic Hardware (AEH) whose development error(s) could directly lead to a failure affecting the operation in such a way that it can be reasonably expected that a fatality will occur are developed to a standard considered adequate by the competent authority and/or in accordance with means of compliance acceptable to that authority",
            "assurance":
                "Same as Low. In addition, the level of integrity claimed is substantiated by analysis and/or test data with supporting evidence."
        },
        "high": {
            "integrity": "Same as Medium",
            "assurance": "Same as Medium. In addition, a competent third party validates the level of integrity claimed."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#13": {
        "category": "Deterioration of external systems supporting UAS operation",
        "description": "External services supporting UAS operations are adequate to the operation",
        "low": {
            "integrity":
                "The applicant ensures that the level of performance for any externally provided service necessary for the safety of the flight is adequate for the intended operation. If the externally provided service requires communication between the operator and service provider, the applicant ensures there is effective communication to support the service provisions. Roles and responsibilities between the applicant and the external service provider are defined.",
            "assurance":
                "The applicant declares that the requested level of performance for any externally provided service necessary for the safety of the flight is achieved (without evidence being necessarily available)."
        },
        "medium": {
            "integrity":
                "The applicant ensures that the level of performance for any externally provided service necessary for the safety of the flight is adequate for the intended operation. If the externally provided service requires communication between the operator and service provider, the applicant ensures there is effective communication to support the service provisions. Roles and responsibilities between the applicant and the external service provider are defined.",
            "assurance":
                "The applicant has supporting evidence that the required level of performance for any externally provided service required for safety of the flight can be achieved for the full duration of the mission. \n This may take the form of a Service-Level Agreement (SLA) or any official commitment that prevails between a service provider and the applicant on relevant aspects of the service (including quality, availability, responsibilities). \n The applicant has a means to monitor externally provided services which affect flight critical systems and take appropriate actions if real-time performance could lead to the loss of control of the operation."
        },
        "high": {
            "integrity": "The applicant ensures that the level of performance for any externally provided service necessary for the safety of the flight is adequate for the intended operation. If the externally provided service requires communication between the operator and service provider, the applicant ensures there is effective communication to support the service provisions. Roles and responsibilities between the applicant and the external service provider are defined.",
            "assurance": "Same as Medium. In addition: \n • The evidence of the externally provided service performance is achieved through demonstrations. \n • A competent third party validates the claimed level of integrity."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#14": {
        "category": "Human Error",
        "description": "Operational procedures are defined, validated and adhered to",
        "low": {
            "integrity":
                "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Operational procedures are complex and may potentially jeopardize the crew ability to respond by raising the remote crew’s workload and/or the interactions with other entities (e.g. ATM…). At a minimum, operational procedures provide: \n • a clear distribution and assignment of tasks \n • an internal checklist to ensure staff are adequately performing assigned tasks.",
            "assurance":
                "• Operational procedures do not require validation against either a standard or a means of compliance considered adequate by the competent authority. \n • The adequacy of the operational procedures is declared, except for Emergency Procedures, which are tested."
        },
        "medium": {
            "integrity":
                "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Contingency/emergency procedures require manual control by the remote pilot when the UAS is usually automatically controlled. Operational procedures take human error into consideration.",
            "assurance":
                "• Operational procedures are validated against standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority. \n • Adequacy of the Contingency and Emergency procedures is proven through: \n o Dedicated flight tests, or \n o Simulation provided the simulation is proven valid for the intended purpose with positive results."
        },
        "high": {
            "integrity": "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Operational procedures are simple. Same as Medium. In addition, the Remote Crew receives Crew Resource Management (CRM) training.",
            "assurance": "Same as Medium. In addition: \n • Flight tests performed to validate the procedures and checklists cover the complete flight envelope or are proven to be conservative. \n • The procedures, checklists, flight tests and simulations are validated by a competent third party."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#15": {
        "category": "Human Error",
        "description": "Remote crew trained and current and able to control the abnormal situation",
        "low": {
            "integrity":
                "The competency-based, theoretical and practical training ensures knowledge of: \n a) UAS regulation \n b) UAS airspace operating principles \n c) Airmanship and aviation safety \n d) Human performance limitations \n e) Meteorology \n f) Navigation/Charts \n g) UA knowledge \n h) Operating procedures and is adequate for the operation",
            "assurance":
                "Training is self-declared (with evidence available)."
        },
        "medium": {
            "integrity":
                "The competency-based, theoretical and practical training ensures knowledge of: \n a) UAS regulation \n b) UAS airspace operating principles \n c) Airmanship and aviation safety \n d) Human performance limitations \n e) Meteorology \n f) Navigation/Charts \n g) UA knowledge \n h) Operating procedures and is adequate for the operation",
            "assurance":
                "• Training syllabus is available. \n • The operator provides competency-based, theoretical and practical training."
        },
        "high": {
            "integrity": "The competency-based, theoretical and practical training ensures knowledge of: \n a) UAS regulation \n b) UAS airspace operating principles \n c) Airmanship and aviation safety \n d) Human performance limitations \n e) Meteorology \n f) Navigation/Charts \n g) UA knowledge \n h) Operating procedures and is adequate for the operation",
            "assurance": "A competent third party: \n • Validates the training syllabus. \n • Verifies the remote crew competencies."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#16": {
        "category": "Human Error",
        "description": "Multi crew coordination",
        "low": {
            "integrity":
                "Procedure(s) to ensure coordination between the crew members and robust and effective communication channels is (are) available and at a minimum cover: \n • assignment of tasks to the crew, \n • establishment of step-by-step communications \n Remote Crew training covers multi crew coordination",
            "assurance":
                "• Procedures do not require validation against either a standard or a means of compliance considered adequate by the competent authority. \n • The adequacy of the procedures and checklists is declared. \n Training is self-declared (with evidence available) \n Training is self-declared (with evidence available)."
        },
        "medium": {
            "integrity":
                "Procedure(s) to ensure coordination between the crew members and robust and effective communication channels is (are) available and at a minimum cover: \n • assignment of tasks to the crew, \n • establishment of step-by-step communications \n In addition, the Remote Crew receives Crew Resource Management (CRM) training \n Communication devices comply with standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority",
            "assurance":
                "• Procedures are validated against standards considered adequate by the competent authority and/or in accordance with means of compliance acceptable to that authority. • Adequacy of the procedures is proven through: \n o Dedicated flight tests, or \n o Simulation, provided the simulation is proven valid for the intended purpose with positive results. \n • Training syllabus is available. \n • The operator provides competency-based, theoretical and practical training. \n • Training syllabus is available. \n • The operator provides competency-based, theoretical and practical training."
        },
        "high": {
            "integrity": "Procedure(s) to ensure coordination between the crew members and robust and effective communication channels is (are) available and at a minimum cover: \n • assignment of tasks to the crew, \n • establishment of step-by-step communications \n Communication devices are redundant5 and comply with standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority. \n A competent third party: \n • Validates the training syllabus. \n • Verifies the remote crew competencies.",
            "assurance": "Same as Medium. In addition: \n • Flight tests performed to validate the procedures cover the complete flight envelope or are proven to be conservative. \n • The procedures, flight tests and simulations are validated by a competent third party. \n A competent third party: \n • Validates the training syllabus. \n • Verifies the remote crew competencies."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#17": {
        "category": "Human Error",
        "description": "Remote crew is fit to operate",
        "low": {
            "integrity":
                "The applicant has a policy defining how the remote crew can declare themselves fit to operate before conducting any operation.",
            "assurance":
                "• The policy to define how the remote crew declares themselves fit to operate (before an operation) is documented. \n • The remote crew declaration of fit to operate (before an operation) is based on policy defined by the applicant."
        },
        "medium": {
            "integrity":
                "Same as Low. In addition: \n • Duty, flight duty and resting times for the remote crew are defined by the applicant and adequate for the operation. \n •The operator defines requirements appropriate for the remote crew to operate the UAS.",
            "assurance":
                "Same as Low. In addition: \n •Remote crew duty, flight duty and the resting times policy is documented. \n • Remote crew duty cycles are logged and cover at minimum: o when the remote crew member’s duty day commences, o when the remote crew members are free from duties, o resting times within the duty cycle. \n • There is evidence that the remote crew is fit to operate the UAS."
        },
        "high": {
            "integrity": "Same as Medium. In addition: \n • The remote crew is medically fit, \n • A Fatigue Risk Management. System (FRMS) is in place to manage any escalation in duty/flight duty times.",
            "assurance": "Same as Medium. In addition: \n • Medical standards considered adequate by the competent authority and/or means of compliance acceptable to that authority are established and a competent third party verifies the remote crew is medically fit. \n • A competent third party validates the duty/flight duty times. \n • If a FRMS is used, it is validated and monitored by a competent third party."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#18": {
        "category": "Human Error",
        "description": "Automatic protection of the flight envelope from Human Error",
        "low": {
            "integrity":
                "The UAS flight control system incorporates automatic protection of the flight envelope to prevent the remote pilot from making any single input under normal operating conditions that would cause the UA to exceed its flight envelope or prevent it from recovering in a timely fashion.",
            "assurance":
                "The automatic protection of the flight envelope has been developed in-house or out of the box (e.g. using Component Off The Shelf elements), without following specific standards."
        },
        "medium": {
            "integrity":
                "The UAS flight control system incorporates automatic protection of the flight envelope to ensure the UA remains within the flight envelope or ensures a timely recovery to the designed operational flight envelope following remote pilot error(s).",
            "assurance":
                "The automatic protection of the flight envelope has been developed to standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority."
        },
        "high": {
            "integrity": "The UAS flight control system incorporates automatic protection of the flight envelope to ensure the UA remains within the flight envelope or ensures a timely recovery to the designed operational flight envelope following remote pilot error(s).",
            "assurance": "Same as Medium. In addition, evidence is validated by a competent third party."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#19": {
        "category": "Human Error",
        "description": "Safe recovery from Human Error",
        "low": {
            "integrity":
                "Procedures and checklists that mitigate the risk of potential human errors from any person involved with the mission are defined and used. Procedures provide at a minimum: \n • a clear distribution and assignment of tasks, \n • an internal checklist to ensure staff are adequately performing assigned tasks. \n • The Remote Crew is trained to procedures and checklists. \n • The Remote Crew receives Crew Resource Management (CRM) training. \n Systems detecting and/or recovering from human errors are developed to industry best practices.",
            "assurance":
                "• Procedures and checklists do not require validation against either a standard or a means of compliance considered adequate by the competent authority. \n • The adequacy of the procedures and checklists is declared. \n Training is self-declared (with evidence available)."
        },
        "medium": {
            "integrity":
                "Procedures and checklists that mitigate the risk of potential human errors from any person involved with the mission are defined and used. Procedures provide at a minimum: \n • a clear distribution and assignment of tasks, \n • an internal checklist to ensure staff are adequately performing assigned tasks. \n • The Remote Crew is trained to procedures and checklists. \n • The Remote Crew receives Crew Resource Management (CRM) training. \n Systems detecting and/or recovering from human errors are developed to standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority.",
            "assurance":
                "• Procedures and checklists are validated against standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority . \n • Adequacy of the procedures and checklists is proven through: \n o Dedicated flight tests, or \n o Simulation provided the simulation is proven valid for the intended purpose with positive results. \n • Training syllabus is available. \n • The operator provides competency-based, theoretical and practical training."
        },
        "high": {
            "integrity": "Procedures and checklists that mitigate the risk of potential human errors from any person involved with the mission are defined and used. Procedures provide at a minimum: \n • a clear distribution and assignment of tasks, \n • an internal checklist to ensure staff are adequately performing assigned tasks. \n • The Remote Crew is trained to procedures and checklists. \n • The Remote Crew receives Crew Resource Management (CRM) training. \n Same as medium.",
            "assurance": "Same as Medium. In addition: \n • Flight tests performed to validate the procedures and checklists cover the complete flight envelope or are proven to be conservative. \n • The procedures, checklists, flight tests and simulations are validated by a competent third party. \n A competent third party: \n • Validates the training syllabus. \n • Verifies the remote crew competencies."
        },
        "optional": {
            "integrity":
                "",
            "assurance":
                ""
        }
    },
    "OSO#20": {
        "category": "Human Error",
        "description": "A Human Factors evaluation has been performed and the HMI found appropriate for the mission",
        "low": {
            "integrity":
                "The UAS information and control interfaces are clearly and succinctly presented and do not confuse, cause unreasonable fatigue, or contribute to remote crew error that could adversely affect the safety of the operation.",
            "assurance":
                "The applicant conducts a human factors evaluation of the UAS to determine if the HMI is appropriate for the mission. The HMI evaluation is based on inspection or Analyses."
        },
        "medium": {
            "integrity":
                "The UAS information and control interfaces are clearly and succinctly presented and do not confuse, cause unreasonable fatigue, or contribute to remote crew error that could adversely affect the safety of the operation.",
            "assurance":
                "Same as Low but the HMI evaluation is based on demonstrations or simulations."
        },
        "high": {
            "integrity": "The UAS information and control interfaces are clearly and succinctly presented and do not confuse, cause unreasonable fatigue, or contribute to remote crew error that could adversely affect the safety of the operation.",
            "assurance": "Same as Medium. In addition, a competent third party witnesses the HMI evaluation."
        },
        "optional": {
            "integrity":
                "",
            "assurance":
                ""
        }
    },
    "OSO#21": {
        "category": "Adverse operating conditions",
        "description": "Operational procedures are defined, validated and adhered to",
        "low": {
            "integrity":
                "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Operational procedures are complex and may potentially jeopardize the crew ability to respond by raising the remote crew’s workload and/or the interactions with other entities (e.g. ATM…). At a minimum, operational procedures provide: \n • a clear distribution and assignment of tasks \n • an internal checklist to ensure staff are adequately performing assigned tasks.",
            "assurance":
                "• Operational procedures do not require validation against either a standard or a means of compliance considered adequate by the competent authority. \n • The adequacy of the operational procedures is declared, except for Emergency Procedures, which are tested."
        },
        "medium": {
            "integrity":
                "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Contingency/emergency procedures require manual control by the remote pilot when the UAS is usually automatically controlled. Operational procedures take human error into consideration.",
            "assurance":
                "• Operational procedures are validated against standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority. \n • Adequacy of the Contingency and Emergency procedures is proven through: \n o Dedicated flight tests, or \n o Simulation provided the simulation is proven valid for the intended purpose with positive results."
        },
        "high": {
            "integrity": "• Operational procedures appropriate for the proposed operation are defined and as a minimum cover the following elements: \n o Flight planning, \n o Pre and post-flight inspections, \n o Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation), \n o Procedures to cope with unintended adverse operating conditions (e.g. when ice is encountered during an operation not approved for icing conditions) \n o Normal procedures, \n o Contingency procedures (to cope with abnormal situations), \n o Emergency procedures (to cope with emergency situations), and \n o Occurrence reporting procedures. \n • Normal, Contingency and Emergency procedures are compiled in an Operation Manual. \n • The limitations of the external systems supporting UAS operation are defined in an Operation Manual. Operational procedures are simple. Same as Medium. In addition, the Remote Crew receives Crew Resource Management (CRM) training.",
            "assurance": "Same as Medium. In addition: \n • Flight tests performed to validate the procedures and checklists cover the complete flight envelope or are proven to be conservative. \n • The procedures, checklists, flight tests and simulations are validated by a competent third party."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#22": {
        "category": "Adverse operating conditions",
        "description": "The remote crew is trained to identify critical environmental conditions and to avoid them",
        "low": {
            "integrity":
                "The competency-based, theoretical and practical training ensures knowledge of: \n a) UAS regulation \n b) UAS airspace operating principles \n c) Airmanship and aviation safety \n d) Human performance limitations \n e) Meteorology \n f) Navigation/Charts \n g) UA knowledge \n h) Operating procedures and is adequate for the operation",
            "assurance":
                "Training is self-declared (with evidence available)."
        },
        "medium": {
            "integrity":
                "The competency-based, theoretical and practical training ensures knowledge of: \n a) UAS regulation \n b) UAS airspace operating principles \n c) Airmanship and aviation safety \n d) Human performance limitations \n e) Meteorology \n f) Navigation/Charts \n g) UA knowledge \n h) Operating procedures and is adequate for the operation",
            "assurance":
                "• Training syllabus is available. \n • The operator provides competency-based, theoretical and practical training."
        },
        "high": {
            "integrity": "The competency-based, theoretical and practical training ensures knowledge of: \n a) UAS regulation \n b) UAS airspace operating principles \n c) Airmanship and aviation safety \n d) Human performance limitations \n e) Meteorology \n f) Navigation/Charts \n g) UA knowledge \n h) Operating procedures and is adequate for the operation",
            "assurance": "A competent third party: \n • Validates the training syllabus. \n • Verifies the remote crew competencies."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#23": {
        "category": "Adverse operating conditions",
        "description": "Environmental conditions for safe operations defined, measurable and adhered to",
        "low": {
            "integrity":
                "Environmental conditions for safe operations are defined and reflected in the flight manual or equivalent document. \n Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation) are available and include assessment of meteorological conditions (METAR, TAFOR, etc.) with a simple recording system. \n Training covers assessment of meteorological conditions.",
            "assurance":
                "Training is self-declared (with evidence available). \n • Procedures do not require validation against either a standard or a means of compliance considered adequate by the competent authority."
        },
        "medium": {
            "integrity":
                "Environmental conditions for safe operations are defined and reflected in the flight manual or equivalent document. \n Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation) are available and include assessment of meteorological conditions (METAR, TAFOR, etc.) with a simple recording system. \n Training covers assessment of meteorological conditions.",
            "assurance":
                "• Training syllabus is available. \n • The operator provides competency-based, theoretical and practical training. \n • Procedures are validated against standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority. \n • The adequacy of the procedures is proved through: o Dedicated flight tests, or o Simulation provided the simulation is proven valid for the intended purpose with positive results"
        },
        "high": {
            "integrity": "Environmental conditions for safe operations are defined and reflected in the flight manual or equivalent document. \n Procedures to evaluate environmental conditions before and during the mission (i.e. real-time evaluation) are available and include assessment of meteorological conditions (METAR, TAFOR, etc.) with a simple recording system. \n Training covers assessment of meteorological conditions.",
            "assurance": "A competent third party: \n • Validates the training syllabus. \n • Verifies the remote crew competencies. \n Same as Medium. In addition: \n • Flight tests performed to validate the procedures cover the complete flight envelope or are proven to be conservative. \n • The procedures, flight tests and simulations are validated by a competent third party."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    },
    "OSO#24": {
        "category": "Adverse operating conditions",
        "description": "UAS designed and qualified for adverse environmental conditions",
        "low": {
            "integrity":
                "N/A",
            "assurance":
                "N/A"
        },
        "medium": {
            "integrity":
                "The UAS is designed to limit the effect of environmental conditions.",
            "assurance":
                "• Training syllabus is available. \n • The operator provides competency-based, theoretical and practical training."
        },
        "high": {
            "integrity": "The UAS is designed using environmental standards considered adequate by the competent authority and/or in accordance with a means of compliance acceptable to that authority.",
            "assurance": "A competent third party: \n • Validates the training syllabus. \n • Verifies the remote crew competencies."
        },
        "optional": {
            "integrity": "",
            "assurance": ""
        }
    }
}
let sail_json = {
    "OSO#1": {
        "category": "Technical issue with the UAS",
        "description": "Ensure the operator is competent and/or proven",
        "level": {
            "1": "Optional",
            "2": "Low",
            "3": "Medium",
            "4": "High",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#2": {
        "category": "Technical issue with the UAS",
        "description": "UAS manufactured by competent and/or proven entity",
        "level": {
            "1": "Optional",
            "2": "Optional",
            "3": "Low",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#3": {
        "category": "Technical issue with the UAS",
        "description": "UAS maintained by competent and/or proven entity",
        "level": {
            "1": "Low",
            "2": "Low",
            "3": "Medium",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#4": {
        "category": "Technical issue with the UAS",
        "description": "UAS developed to authority recognized design standards",
        "level": {
            "1": "Optional",
            "2": "Optional",
            "3": "Optional",
            "4": "Low",
            "5": "Medium",
            "6": "High"
        }
    },
    "OSO#5": {
        "category": "Technical issue with the UAS",
        "description": "UAS is designed considering system safety and reliability",
        "level": {
            "1": "Optional",
            "2": "Optional",
            "3": "Low",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#6": {
        "category": "Technical issue with the UAS",
        "description": "C3 link performance is appropriate for the operation",
        "level": {
            "1": "Optional",
            "2": "Low",
            "3": "Low",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#7": {
        "category": "Technical issue with the UAS",
        "description": "Inspection of the UAS (product inspection) to ensure consistency to the ConOps",
        "level": {
            "1": "Low",
            "2": "Low",
            "3": "Medium",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#8": {
        "category": "Technical issue with the UAS",
        "description": "Operational procedures are defined, validated and adhered to",
        "level": {
            "1": "Low",
            "2": "Medium",
            "3": "High",
            "4": "High",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#9": {
        "category": "Technical issue with the UAS",
        "description": "Remote crew trained and current and able to control the abnormal situation",
        "level": {
            "1": "Low",
            "2": "Low",
            "3": "Medium",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#10": {
        "category": "Technical issue with the UAS",
        "description": "Safe recovery from technical issue",
        "level": {
            "1": "Low",
            "2": "Low",
            "3": "Medium",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#11": {
        "category": "Deterioration of external systems supporting UAS operation",
        "description": "Procedures are in-place to handle the deterioration of external systems supporting UAS operation",
        "level": {
            "1": "Low",
            "2": "Medium",
            "3": "High",
            "4": "High",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#12": {
        "category": "Deterioration of external systems supporting UAS operation",
        "description": "The UAS is designed to manage the deterioration of external systems supporting UAS operation",
        "level": {
            "1": "Low",
            "2": "Low",
            "3": "Medium",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#13": {
        "category": "Deterioration of external systems supporting UAS operation",
        "description": "External services supporting UAS operations are adequate to the operation",
        "level": {
            "1": "Low",
            "2": "Low",
            "3": "Medium",
            "4": "High",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#14": {
        "category": "Human Error",
        "description": "Operational procedures are defined, validated and adhered to",
        "level": {
            "1": "Low",
            "2": "Medium",
            "3": "High",
            "4": "High",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#15": {
        "category": "Human Error",
        "description": "Remote crew trained and current and able to control the abnormal situation",
        "level": {
            "1": "Low",
            "2": "Low",
            "3": "Medium",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#16": {
        "category": "Human Error",
        "description": "Multi crew coordination",
        "level": {
            "1": "Low",
            "2": "Low",
            "3": "Medium",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#17": {
        "category": "Human Error",
        "description": "Remote crew is fit to operate",
        "level": {
            "1": "Low",
            "2": "Low",
            "3": "Medium",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#18": {
        "category": "Human Error",
        "description": "Automatic protection of the flight envelope from Human Error",
        "level": {
            "1": "Optional",
            "2": "Optional",
            "3": "Low",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#19": {
        "category": "Human Error",
        "description": "Safe recovery from Human Error",
        "level": {
            "1": "Optional",
            "2": "Optional",
            "3": "Low",
            "4": "Medium",
            "5": "Medium",
            "6": "High"
        }
    },
    "OSO#20": {
        "category": "Human Error",
        "description": "A Human Factors evaluation has been performed and the HMI found appropriate for the mission",
        "level": {
            "1": "Optional",
            "2": "Low",
            "3": "Low",
            "4": "Medium",
            "5": "Medium",
            "6": "High"
        }
    },
    "OSO#21": {
        "category": "Adverse operating conditions",
        "description": "Operational procedures are defined, validated and adhered to",
        "level": {
            "1": "Low",
            "2": "Medium",
            "3": "High",
            "4": "High",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#22": {
        "category": "Adverse operating conditions",
        "description": "The remote crew is trained to identify critical environmental conditions and to avoid them",
        "level": {
            "1": "Low",
            "2": "Low",
            "3": "Medium",
            "4": "Medium",
            "5": "Medium",
            "6": "High"
        }
    },
    "OSO#23": {
        "category": "Adverse operating conditions",
        "description": "Environmental conditions for safe operations defined, measurable and adhered to",
        "level": {
            "1": "Low",
            "2": "Low",
            "3": "Medium",
            "4": "Medium",
            "5": "High",
            "6": "High"
        }
    },
    "OSO#24": {
        "category": "Adverse operating conditions",
        "description": "UAS designed and qualified for adverse environmental conditions",
        "level": {
            "1": "Optional",
            "2": "Optional",
            "3": "Medium",
            "4": "High",
            "5": "High",
            "6": "High"
        }
    }
};

let SAIL = 2;
let txt, level, osoName, integrity, assurance, compliance;
let SailLevels = 6;
let objNumber = 1;

txt += "<table border='1'>"
txt += "<tr><th>OSO #</th><th>Name</th><th>Robustness</th><th>Integrity</th><th>Assurance</th><th>Compliance</th></tr>"

for (obj in sail_json) {

    for (let i = 1; i < SailLevels; i++) {
        if (SAIL === i) {
            level = sail_json["OSO#" + objNumber].level[i];
            osoName = sail_json["OSO#" + objNumber].description;
            integrity = oso_json["OSO#" + objNumber][level.toLowerCase()]["integrity"];
            assurance = oso_json["OSO#" + objNumber][level.toLowerCase()]["assurance"];
            objNumber++;
        }
    }
    txt += "<tr><td>" + obj + "</td><td>" + osoName + "</td><td>" + level + "</td><td>" + integrity + "</td><td>" + assurance + "</td><td><input type=textfield></input></td></tr>";
}

txt += "</table>"
document.getElementById("sailDiv").innerHTML = txt;

//Convert to pdf
function GeneratePDF() {

    let specialEventHandlers = {
        "#editor": function (element, renderer) {
            return true;
        }
    };

    let doc = new jsPDF({
        orientation: "landscape",
    });

    doc.fromHTML($("#sailDiv").html(), 15, 15, {
        "width": 170,
        "elementHandlers": specialEventHandlers
    });
    doc.save("sailPDF_test");
}