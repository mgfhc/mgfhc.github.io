# Internal Content / Evidence Notes

This file is for drafting and verification. It is not intended to be published as a public webpage.

## Project framing

Supported by:
- `maple-grove-public-showcase-handoff(1).md`
- `GOOGLE DRIVE DOC - 20260805_D07_Final_Package_Structure_and_Checklist_v2.2.docx.pdf`
- `Research & Clinical Workflow Team Final Deliverable Package.docx.pdf`

Safe public claim:
The project was an educational/simulated OpenEMR implementation for a fictitious Ontario primary-care setting, involving multiple workstreams and synthetic/mock patient information.

## Timeline / convergence narrative

Primary source:
- `GOOGLE DRIVE DOC - Revised Execution Structure based on MVP _ Critical Path.pdf`

Supported milestones:
- July 13–15 recovery closeout
- July 22 technical rehearsal
- July 25 integrated testing / MVP scope freeze
- July 31 final rehearsal
- August 1 Go-Live / final MVP demo
- August 8 wrap-up

Important context:
Local/sandbox environments and the official shared environment differed in OpenEMR version, contributing to mid-July integration work.

## Clinical workflow / Golden Journey

Sources:
- `Research & Clinical Workflow Team Final Deliverable Package.docx.pdf`
- `Finalized Golden Patient-One Paragraph Scenario .docx.pdf`

The research package documents completed clinic context, stakeholder/workflow mapping, BPMN, OpenEMR baseline mapping, workflow validation, Golden Journey preparation and three final Go-Live scenarios.

## Infrastructure

Sources:
- `OpenEMR AWS Infrastructure.pdf`
- `Enabling_Trusted_HTTPS_for_OpenEMR_AWS_Official_Validated_Guide.pdf`
- `Infrastructure-Deployment Notes.pdf`
- `OpenEMR_Portal_and_Clinical_Reminders_Quick_Guide.pdf`

Safe high-level claims:
- Shared browser-accessible OpenEMR environment on AWS EC2
- Containerized OpenEMR / Docker / MariaDB stack
- Trusted HTTPS was implemented and technically validated on the official OpenEMR 7.0.2 environment
- Portal access and clinical reminder workflows were demonstrated
- AWS-level AMI backup automation was documented

Do not publish raw IPs, credentials, SSH details, infrastructure IDs or private configuration.

## Security

Sources:
- `07 Maple Grove OpenEMR Security Recommendation Summary.pdf`
- `06 Production Readiness Gap.pdf`

Safe public claims:
- Representative RBAC/ACL and allowed/restricted actions were reviewed/tested for the student project scope
- Security/privacy and production-readiness gaps were documented
- The work did not constitute production security certification or PHIPA certification

Note on source chronology:
Some Security documents described HTTPS/certificate work as pending at the time they were written. The later/dedicated HTTPS implementation evidence documents successful validation. Do not preserve the stale "pending" state in current public copy.

## UI/UX

Source:
- `UX_UI Final Package.pdf`

Safe public claims:
- Representative personas were created
- Core workflows were audited
- Feasible branding/interface/admin customizations were implemented
- Limitations were documented
- Future-state prototypes illustrated proposed improvements

Current public visual:
- Patient-registration customization showing clearer labels/fields and a Canadian province/territory list
- This is presented as an implemented UI/UX example, not as a full OpenEMR redesign

Public editorial convention in this site: `UI/UX` rather than the internal package title `UX/UI`.

## Interoperability

Sources:
- `HL7 Lab Interoperability - Closed-Loop Workflow Findings.docx.pdf`
- `1- E2E Lab Order & Result Workflow.docx.pdf`
- `Future State Recommendation.docx.pdf`

Safe public claims:
- FHIR R4 read/API work, OAuth2, LOINC-coded observations and C-CDA export were demonstrated/explored
- HL7 v2 ORM/ORU closed-loop behavior was demonstrated using a mock lab stand-in and synthetic data
- No real commercial lab / OLIS connection was implemented
- Ontario connectivity, write-back and certification remained future-state

Current public visuals:
- Postman `DiagnosticReport` request/response showing a successful FHIR read
- Mock laboratory order/result evidence

Publication caution:
The Postman image must not expose a usable bearer token, client secret or other credential.

## Analytics

Source currently uploaded:
- `D5_ Analytics Limitations Report.docx.pdf`

Safe public claim:
The Analytics team identified relevant clinical/operational KPIs, evaluated what OpenEMR could support, and documented metrics that would require manual processes, additional data or external tooling.

The final package checklist indicates additional Analytics artifacts existed, but they are not needed for the current one-card summary.

## Integrated testing / Go-Live

Primary source:
- `Summary_Go_Live.pdf`

Safe public claims:
- Three connected patient journeys were completed across administrative, clinical, lab and portal functions
- Testing surfaced non-blocking RBAC, portal-access, navigation and usability limitations
- Workarounds and lessons learned were documented

Editorial choice:
Do not lead with a public "Pass / Pass with limitation" scoreboard. The site focuses on integration findings rather than implying the team engineered OpenEMR's underlying standard functionality.

## Lessons learned

Sources:
- `Summary_Go_Live.pdf`
- `GOOGLE DRIVE DOC - Revised Execution Structure based on MVP _ Critical Path.pdf`

Grounded themes used in the current site:
- common technical baseline
- narrowing scope around an MVP
- workflow-level testing
- role guidance / at-the-elbow support
- documenting limitations and workarounds

## Technical extensions

Repos available in the conversation:
- `maple-grove-synthea-openemr(1).zip`
- `maple-grove-openemr-education-module.zip`

They are intentionally not made a major section in the current site. If featured later, attribution must clearly distinguish individual/smaller-team technical extensions from project-wide cohort work.


## Project identity / program context

The current site clarifies that **HiT4EMR** is the COMP 4090 course project and **Maple Grove Family Health Centre** is the fictional clinic identity created by the student cohort. Public copy uses **Health Informatics (T402)** for the 2026 cohort and emphasizes the Toronto/Ontario context supplied by the project team.

## Public contact / support

The internal START HERE document identifies James Huynh as a Project Manager, Muyideen Muhammed as instructor, and Leo Chow Bello / Shefali Mehta as project support. The current site uses James's school email as the temporary public contact and lists the instructor/support names without their email addresses. Final public contact details remain a publication decision.


## Current public-site editorial choices

- Keep copy concise and readable for a general audience.
- Use `UI/UX` in public-facing copy.
- Present the clinical journey as grouped stages rather than eight equal standalone cards.
- Show real project evidence where it adds value, but avoid turning the site into an evidence archive.
- Do not use a public pass/fail scoreboard for Go-Live scenarios.
- State OpenEMR `7.0.2` briefly as the shared AWS project environment.
- Use the project disclaimer to distinguish the educational simulation from a production clinical deployment.
