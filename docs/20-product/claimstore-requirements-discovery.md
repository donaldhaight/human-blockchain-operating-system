---
id: requirements-discovery
title: "ClaimStore Requirements Discovery Brief"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 5354
source_line_end: 6850
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# ClaimStore Requirements Discovery Brief v0.1  
## Phase 1 Applications for Entities and Market Infrastructure Requirements  
### System Engineering Draft

## 1. Purpose

This document translates the historical ClaimStore, ClaimExpress, MarketApp, RRCA, SelfInsurity, and Human Blockchain source materials into a modern requirements discovery brief.

The purpose is not to treat the original documents as literal modern software requirements. The purpose is to extract the durable system logic and organize it into a buildable Phase 1 framework.

The core question is:

**What minimum system must exist to prove ClaimStore as neutral market infrastructure for the insurance restoration market?**

The answer is:

ClaimStore Phase 1 must prove that multiple entity types can participate in a shared claim/reconstruction transaction through role-specific applications, verified evidence, user-directed approvals, basic field-service workflows, contractor operations, and platform-level administration.

---

## 2. Working Definition

ClaimStore is a market infrastructure system for the insurance restoration market.

It allows property owners, contractors, insurance companies, adjusters, independent sales reps, field service providers, suppliers, mortgage companies, platform administrators, and future stakeholders to participate around the same claim/project transaction.

The system is built around these principles:

1. Each party acts from its own account.
2. Each party has its own role and permissions.
3. Each party owns its own approvals, signatures, uploads, and decisions.
4. The platform helps users help themselves.
5. The platform connects users to independent service providers.
6. The platform records events, evidence, tasks, documents, and status changes.
7. The platform does not pretend conflicting parties have identical incentives.
8. The platform creates a trusted shared record without taking over every party’s business.
9. The platform can operate even when some participants do not fully log in or collaborate.
10. The system improves as more parties use it.

---

## 3. Phase 1 Product Thesis

Phase 1 should be contractor-first, property-owner-enabled, and platform-admin-controlled.

The contractor workflow creates immediate business value because contractors need leads, project control, job costing, documentation, final paperwork, sales rep management, and collection support.

The property owner workflow is required because the claim file, offer acceptance, evidence, Statement of Claim, and completion verification belong to the property owner.

The insurance company workflow should begin as a lightweight documentation and acknowledgement interface, not a full carrier claims management system.

The platform admin system is mandatory because entity types, roles, users, markets, company locations, jobs, field services, support, virtual items, and claim records must be controlled centrally.

The Human Blockchain / ClaimBuddy workflow should begin as a basic task and evidence layer, not a fully scaled national dispatch network.

The ClaimsBank layer should begin as transaction-record logic and escrow/settlement design, not as a regulated banking launch.

---

## 4. Phase 1 Success Condition

The first true success condition is:

```text
A user enters the ecosystem
↓
Creates an identity
↓
Selects or is assigned an entity role
↓
Completes onboarding / certification
↓
Participates in a ClaimStore claim/project workflow
↓
Creates or receives a task, document, request, approval, or evidence event
↓
The event is attributed, timestamped, stored, and visible in the correct dashboard
↓
The system can report status by market, company, role, claim, project, job, and task
```

In simpler business terms:

**A contractor can use the system to sell, document, build, and collect a claim-related project while the property owner retains control of their own approvals and claim file.**

---

## 5. Phase 1 Entity Types

The following entity types should be recognized in the Phase 1 architecture, even if not all receive full application functionality immediately.

### 5.1 Platform / Site Administration

Purpose:

Operate and manage the platform.

Primary responsibilities:

- Manage global settings.
- Manage entity types.
- Manage roles.
- Manage states and markets.
- Manage site admins.
- Manage entity admins.
- Manage company locations.
- Manage users.
- Manage content.
- Manage announcements.
- Manage support.
- Manage virtual items and revenue events.
- Manage claim/project request workflows.
- Manage field service requests.
- Manage directory and verification products.
- Monitor dashboards.

Phase 1 status:

Required.

---

### 5.2 Property Owner

Purpose:

Create and control property, policy, claim, expense, offer, documentation, and completion records.

Primary responsibilities:

- Create user profile.
- Create property file.
- Enter policy information.
- Upload photos and documents.
- Create or receive claim/project file.
- Review contractor offer.
- Accept, reject, or question offer.
- Track expenses.
- Submit claim documentation.
- Verify completion.
- Approve final paperwork.
- Request help.

Phase 1 status:

Required, but no complex admin panel.

---

### 5.3 Licensed Contractor

Purpose:

Manage leads, projects, jobs, job orders, claim requests, sales reps, documents, production, and receivables.

Primary responsibilities:

- Manage company profile.
- Manage markets.
- Manage company users.
- Manage sales reps.
- Manage pay plans.
- Manage leads.
- Convert leads to pending projects or projects.
- Create project IDs.
- Lock/unlock project accounting records.
- Create jobs and job orders.
- Create contractor offers.
- Submit claim requests.
- Upload photos/documents.
- Track estimated and actual costs.
- Generate final paperwork.
- Track payments.
- Manage commissions.
- Use reports.

Phase 1 status:

Required and primary.

---

### 5.4 Independent Sales Rep / Independent Sales & Production Management Contractor

Purpose:

Generate leads, manage sales activity, connect to contractor companies, track assigned projects, and monitor commissions.

Primary responsibilities:

- Create profile.
- Select markets.
- Mark availability.
- Accept or reject contractor invitations.
- Connect to one or more contractor companies.
- Receive pay plan assignment.
- Manage assigned leads and projects.
- Upload notes and evidence.
- View My Money / commission status.
- Disconnect subject to record export and protocol.

Phase 1 status:

Basic functionality required because this role is central to storm restoration.

---

### 5.5 Insurance Company / Claim Department

Purpose:

Receive, view, acknowledge, approve, reject, or hold claim requests and documentation.

Primary responsibilities:

- Receive claim documentation.
- View ClaimStore claim.
- View claim requests and notices.
- Approve, reject, or hold for review.
- Add comments or request additional information.
- Download / print documentation.
- Create users with claim access.
- Optionally invite policyholders or adjusters in future phases.

Phase 1 status:

Lightweight interface required.

---

### 5.6 Independent Adjuster / Adjusting Vendor

Purpose:

Support claim documentation, inspection, estimate review, and carrier-related claim handling.

Primary responsibilities:

- Create profile.
- Select markets.
- Receive assignments.
- Upload inspection notes, photos, and documents.
- Participate in claim request review.
- Communicate status.

Phase 1 status:

Recognized in architecture; limited Phase 1 implementation unless needed for first operating cell.

---

### 5.7 Field Service Provider

Purpose:

Perform inspection, measurement, documentation, estimate, dispute, punch-out, verification, and service tasks.

Primary responsibilities:

- Accept task.
- Confirm appointment.
- Visit property.
- Capture photos/video/documents/signatures.
- Upload evidence.
- Close task.
- Trigger task event for TER/SLA measurement.

Phase 1 status:

Required as a basic task model.

---

### 5.8 ClaimBuddy

Purpose:

Act as mobile human verifier / task runner when parties do not fully participate or when independent evidence is required.

ClaimBuddy can be a role, app surface, or service provider category.

Primary responsibilities:

- Accept task request.
- Perform trip.
- Capture required evidence.
- Confirm identity, time, and location.
- Update claim/project record.
- Close task.

Phase 1 status:

Basic model required; full dispatch network deferred.

---

### 5.9 Supplier / Manufacturer

Purpose:

Support material pricing, sponsored listings, product data, directory participation, and future ecommerce or order fulfillment.

Primary responsibilities:

- Maintain listing.
- Sponsor content.
- Provide product data.
- Support contractor material orders in future phases.

Phase 1 status:

Recognized; mostly deferred.

---

### 5.10 Mortgage Company

Purpose:

Support loss draft, inspection, completion, and release of funds.

Primary responsibilities:

- Receive final documentation.
- Review completion proof.
- Sign off on loss draft conditions.
- Release funds.

Phase 1 status:

Recognized; workflow can be handled by document package in Phase 1.

---

### 5.11 Founding Sponsor / Strategic Partner

Purpose:

Participate in a defined category, territory, season, or product position.

Primary responsibilities:

- Provide capital, product, services, data, or distribution.
- Comply with sponsor agreement.
- Meet SLA and reporting obligations.
- Participate in Quantum Dashboard modeling.

Phase 1 status:

Business architecture only; not necessarily application functionality.

---

## 6. Core User Role Hierarchy

Phase 1 should support role hierarchy by entity and company location.

### Platform Roles

```text
Portal Master
Site Admin
Site Manager
Support Admin
Content Editor
Application Support
```

### Entity Admin Roles

```text
Entity Admin
Company Admin
Company Location Admin
Market Admin
Management
Call Center
Sales Rep
Field Rep
Viewer
```

### Property Owner Roles

```text
Property Owner
Property Owner Representative
Authorized Reviewer
```

### Contractor Roles

```text
Owner / Principal
Company Admin
Branch Manager
Market Manager
Project Manager
Sales Rep
Independent Sales Rep
Production Manager
Bookkeeping / AR
Call Center
Subcontractor Viewer
```

### Insurance Roles

```text
Insurance Admin
Claim Manager
Adjuster
Call Center
Read-Only Reviewer
```

### Field Service Roles

```text
Field Service Admin
Inspector
Estimator
Measurement Provider
Documentation Specialist
Dispute Meeting Rep
ClaimBuddy
```

---

## 7. Permissions Principles

The system must be built around strict permission rules.

### 7.1 No User Clicks for Another User

No user can approve, accept, reject, waive, sign, certify, or verify on behalf of another user unless a separate delegated-authority workflow exists.

### 7.2 Delegated Authority Must Be Explicit

If delegated authority is ever supported, it must include:

- Written authorization.
- Scope of authority.
- Expiration.
- Role assignment.
- Audit trail.
- Visible disclosure.
- Revocation method.

### 7.3 Every Action Must Be Attributed

Every significant action must record:

- User ID.
- Entity ID.
- Role ID.
- Company location ID, if applicable.
- Timestamp.
- Related object.
- Action type.
- Agreement version, if relevant.
- IP/device metadata, if appropriate.
- Evidence attachments, if applicable.

### 7.4 Role-Based Visibility

Users should see only what their entity, role, company, market, and workflow status permit.

### 7.5 Property Owner Control

The property owner must control their own property file, claim submissions, offer acceptance, completion approval, and document sharing decisions.

### 7.6 Platform Boundary

The platform may provide self-help tools, workflow structure, content, connections, and records. It should not appear to provide legal advice, public adjusting, insurance agency services, contracting services, fiduciary services, or guarantees unless a separate licensed/authorized entity is clearly responsible.

---

## 8. Core Objects

The Phase 1 data model should begin with these objects.

### 8.1 Identity and Account Objects

```text
User
Profile
Entity
Entity Type
Entity Role
Company
Company Location / Branch
Market
State
County / Territory
Permission
Agreement Acceptance
Certification
Role Activation
```

### 8.2 Property and Policy Objects

```text
Property
Address
Structure
Room / View
Policy
Coverage Info
Mortgage Company Info
Pre-Claim File
Personal Property Inventory
```

### 8.3 Claim and Project Objects

```text
ClaimStore Claim
Insurance Claim Number
Lead
Pending Project
Project
Project ID
Project Status
Project Lock
Job
Job Order
Claim Request
Claim Notice
Supplemental Request
Final Request
Statement of Claim
Completion Verification
```

### 8.4 Cost and Item Objects

```text
Project Category
Job Category
Order Type
Material Item
Labor Item
Equipment Item
Other Charge Item
Turnkey Bid
Unit of Measure
Price List
Market Price List
Estimated Selling Price
Estimated Cost
Actual Cost
Variance
```

### 8.5 Evidence and Document Objects

```text
Photo
Video
Document
Signature
Note
Timestamped Event
Checklist
Template
Generated Form
Resource Document
Quick Explainer
```

### 8.6 Task and Field Service Objects

```text
Task Request
Field Service Request
Inspection
Measurement
Estimate
Documentation Trip
Site Consultation
Dispute Meeting
Service Order
Punch Order
Warranty Request
ClaimBuddy Task
Task Assignment
Task Completion Event
```

### 8.7 Financial Objects

```text
Invoice
Payment
Deposit
Receivable
Commission
Pay Plan
Referral Fee
Transaction Fee
Virtual Item
Subscription
Listing Fee
Verification Fee
Field Service Fee
Escrow Event
Holdback
Loss Draft Event
```

### 8.8 Communication Objects

```text
Announcement
Notification
Email Event
SMS Event
Support Ticket
Comment
Message
Forum Thread
Knowledge Base Article
```

### 8.9 Dashboard Objects

```text
Report
Filter
Market Slice
Season
TER Metric
SLA Metric
Risk Flag
Sponsor Position
Underwriting Scenario
```

---

## 9. ClaimStore Claim Creation Rule

The following rule should become canonical:

**The first claim request or claim notice received by the system generates a ClaimStore Claim. All future requests, notices, documents, tasks, and events related to that loss attach to the ClaimStore Claim.**

This creates a neutral platform claim number that is separate from:

- Insurance company claim number.
- Contractor project number.
- Property owner property file.
- Mortgage loss draft number.
- Field service work order number.

This is critical because the ClaimStore Claim becomes the shared transaction container.

---

## 10. Core Phase 1 Workflows

### 10.1 Property Owner Onboarding

```text
User enters through website
↓
Creates account
↓
Accepts TOS
↓
Creates profile
↓
Creates property file
↓
Adds policy and mortgage info
↓
Uploads documents/photos
↓
Creates pre-claim file or post-loss claim file
↓
Receives guidance / quick explainers
```

### 10.2 Contractor Onboarding

```text
Contractor signs up
↓
Accepts TOS and Member / Professional Agreement
↓
Creates company profile
↓
Selects state / market
↓
Creates company location
↓
Adds users
↓
Assigns roles
↓
Adds pay plans
↓
Selects project/job categories
↓
Completes verification/certification
↓
Activates directory / application access
```

### 10.3 Independent Sales Rep Connection

```text
ISR creates profile
↓
Selects market
↓
Marks available
↓
Contractor views available ISRs
↓
Contractor sends invitation and pay plan offer
↓
ISR accepts connection
↓
ISR gains access to assigned leads/projects
↓
ISR activity and commissions are tracked
```

### 10.4 Lead to Project

```text
Lead created from site, referral, contractor, property owner, or partner
↓
Lead receives status
↓
Notes/photos/documents added
↓
Contractor qualifies lead
↓
Lead converts to pending project or project
↓
Project ID assigned
↓
Project accounting can be locked
↓
Jobs are created
↓
Job orders are created
```

### 10.5 Contractor Offer / Claim Request

```text
Contractor creates estimate / offer
↓
Offer is made available to property owner
↓
Property owner reviews
↓
Property owner accepts, rejects, or requests changes
↓
Accepted offer becomes claim request package
↓
Insurance company receives package
↓
Insurance company approves, rejects, or holds for review
↓
Status updates claim/project record
```

### 10.6 Field Service Request

```text
User requests inspection / measurement / estimate / documentation / service order
↓
System creates task
↓
Eligible provider or ClaimBuddy accepts
↓
Appointment or trip occurs
↓
Evidence captured
↓
Task closed
↓
Record updates claim/project
↓
TER and SLA metrics update
```

### 10.7 Project Build Workflow

```text
Project approved / buildable
↓
Jobs and job orders assigned
↓
Materials ordered
↓
Labor ordered
↓
Subcontractors complete tasks
↓
Photos / documents uploaded
↓
Production status updated
↓
Punch items resolved
↓
Completion evidence captured
```

### 10.8 Final Paperwork / Collection

```text
Contractor generates final paperwork
↓
Property owner verifies completion
↓
Insurance / mortgage documentation package produced
↓
Recoverable depreciation / final payment requested
↓
Mortgage company signs off if needed
↓
Payments tracked
↓
Receivables closed
↓
Claim/project closed
```

### 10.9 Dispute / Troubleshooting

```text
Issue reported
↓
Support ticket or dispute task created
↓
Relevant parties notified
↓
Evidence gathered
↓
Dispute sheet or issue record created
↓
Correction, cost-plus repair, arbitration, or escalation path selected
↓
Resolution recorded
```

---

## 11. ClaimExpress Protocol Requirements

The ClaimExpress Protocol should include these event types.

### 11.1 Offer Events

```text
Offer Created
Offer Updated
Offer Shared
Offer Viewed
Offer Accepted
Offer Rejected
Offer Expired
Offer Withdrawn
```

### 11.2 Claim Request Events

```text
Preliminary Claim Request Created
Supplemental Claim Request Created
Final Claim Request Created
Claim Request Submitted
Claim Request Viewed
Claim Request Approved
Claim Request Rejected
Claim Request Held for Review
Additional Information Requested
```

### 11.3 Project Events

```text
Lead Created
Lead Converted
Pending Project Created
Project Created
Project Locked
Project Unlocked
Job Created
Job Order Created
Work Started
Work Completed
Punch Item Created
Punch Item Resolved
Project Closed
```

### 11.4 Evidence Events

```text
Photo Uploaded
Video Uploaded
Document Uploaded
Signature Captured
Checklist Completed
Trip Verified
Inspection Completed
Completion Verified
```

### 11.5 Financial Events

```text
Invoice Created
Payment Recorded
Deposit Recorded
Commission Accrued
Commission Paid
Referral Fee Accrued
Escrow Event Created
Holdback Created
Loss Draft Package Sent
Final Payment Requested
```

---

## 12. Human Blockchain Requirements

The Human Blockchain layer must convert real-world work into structured, verifiable events.

### 12.1 Minimum Verified Event Fields

Every verified event should include:

```text
Event ID
Event Type
User ID
Entity ID
Role ID
ClaimStore Claim ID
Project ID, if applicable
Job ID, if applicable
Task ID, if applicable
Timestamp
Location, if applicable
Evidence attachments
Checklist responses
Signature, if applicable
Conflict status
Status before
Status after
```

### 12.2 Evidence Standard

The evidence standard should vary by task type, but the default should include:

- Photo or video.
- Timestamp.
- User attribution.
- Related claim/project/task.
- Checklist.
- Signature when human acknowledgement is required.
- GPS/location when field verification matters.

### 12.3 Evidence Principle

**If it is not uploaded, it did not happen.**

Meaning:

The system cannot treat an event as verified unless supporting evidence exists.

### 12.4 Interested vs. Non-Interested Verifiers

The system should distinguish:

```text
Interested Verifier
A person/entity with economic interest in the transaction.

Non-Interested Verifier
A person/entity performing verification without direct economic interest in the claim/project outcome.
```

This distinction should affect trust weighting, audit flags, and possibly ClaimsBank release requirements.

---

## 13. SelfInsurity Requirements

SelfInsurity means guided self-help, not platform-controlled decision-making.

### 13.1 Required Principles

```text
User-directed action
Independent service provider relationships
No unauthorized representation
No legal advice from platform
No public adjusting from platform
No insurance agency relationship from platform
No contractor guarantee from platform
Clear user consent
Clear service-provider responsibility
Clear disclosure
```

### 13.2 System Requirements

The system must:

- Present TOS during account creation.
- Track agreement version accepted.
- Require separate professional agreements for service providers.
- Require separate role agreements where needed.
- Prevent one user from accepting another user’s terms.
- Attribute every approval and signature.
- Support print/download paths for non-participating parties.
- Make service-provider independence clear.
- Require acknowledgement before optional paid services.

---

## 14. SLA and TER Requirements

### 14.1 Service Level Agreement Model

Each entity role should eventually have an SLA.

Phase 1 should begin with contractor, ISR, field service, and ClaimBuddy roles.

Each SLA should define:

```text
Role
Task Types
Expected Response Time
Expected Completion Time
Required Evidence
Communication Standard
Quality Standard
Escalation Rule
Failure Rule
Remediation Rule
Blocking Rule
```

### 14.2 Task Efficiency Rating Model

TER should measure:

- Response time.
- Completion time.
- Evidence completeness.
- Communication compliance.
- Task acceptance reliability.
- Rework rate.
- Dispute rate.
- Completion verification.
- Customer or stakeholder feedback where appropriate.
- Average performance by role/market/task.

### 14.3 Three-Week Average Rule

The first TER enforcement rule:

```text
If a role/entity performs below the relevant average for 3 consecutive weeks,
the system flags the role/entity for review.
```

After flagging, actions may include:

1. Warning.
2. Coaching.
3. Restricted task access.
4. Required retraining.
5. Temporary suspension.
6. Blocking.
7. Reinstatement after remediation.

---

## 15. Quantum Dashboard Requirements

The Quantum Dashboard begins as an enhanced reporting and underwriting layer.

### 15.1 Operational Filters

Phase 1 dashboard should filter by:

- State.
- Market.
- Company.
- Entity type.
- Entity role.
- Claim status.
- Project status.
- Task status.
- Field service type.
- Date range.
- User.
- Contractor.
- ISR.
- ClaimBuddy.
- Insurance company.
- Revenue event.

### 15.2 Core Operational Views

```text
Claims
Claim Requests
Leads
Projects
Jobs
Job Orders
Field Services
Inspections
Estimates
Service Orders
Support Tickets
Payments
Commissions
TER Flags
```

### 15.3 Underwriting Views

Early underwriting views should model:

- Claim volume.
- Average claim value.
- Service attachment rate.
- Field service trips per claim.
- Contractor capacity.
- Referral revenue.
- Transaction revenue.
- Field service revenue.
- Sponsor opportunity.
- ClaimsBank escrow opportunity.
- TER risk adjustment.

### 15.4 Scenario Formula

Initial dashboard formula:

```text
Market Opportunity
=
Affected Properties
× Claim Conversion Rate
× Average Claim Value
× Service Attachment Rate
× Platform Capture Rate
```

Platform revenue:

```text
Platform Revenue
=
Referral Revenue
+ Transaction Revenue
+ Field Service Revenue
+ Documentation Revenue
+ Certification Revenue
+ Listing Revenue
+ Sponsor Revenue
+ ClaimsBank Revenue
```

Risk-adjusted opportunity:

```text
Risk-Adjusted Opportunity
=
Platform Revenue
× TER Confidence
× Capacity Confidence
× Regulatory Confidence
× Capital Availability
```

---

## 16. Revenue Requirements

Phase 1 should track revenue events, even if billing is initially manual.

### 16.1 Revenue Types

```text
Certification Fee
Verification Fee
Directory Listing Fee
Featured Listing Fee
Subscription Fee
Transaction Fee
Project Fee
Claim File Fee
Field Service Fee
Inspection Fee
Measurement Fee
Documentation Fee
Estimate Fee
Referral Fee
Win Fee
Sponsor Fee
Support Fee
Warranty / Punch List Fee
Dispute Resolution Fee
ClaimsBank / Escrow Fee
```

### 16.2 Virtual Items

The MarketApp “Virtual Items” concept should become the product/revenue catalog.

Each virtual item should include:

```text
Virtual Item ID
Name
Description
Entity Type
Role Eligibility
Price
Billing Method
Tax Category
Required Agreement
Required Certification
Revenue Recognition Category
Active / Inactive
```

---

## 17. Content and Portal Requirements

The public portal should support:

- Home.
- About.
- News.
- Articles.
- Buyer’s guides.
- Project category pages.
- Job category pages.
- Find a Pro.
- Verify Your Professional.
- Directory.
- Consumer marketing blocks.
- Contractor marketing blocks.
- Industry partner blocks.
- Sponsor blocks.
- Login.
- Signup.
- Support.
- Knowledge base.

The portal is not just marketing. It is the authority layer and funnel into the platform.

### 17.1 Affiliate Site Requirements

Full affiliate automation should be deferred.

However, Phase 1 architecture should preserve:

- Source domain tracking.
- Referring site tracking.
- Affiliate content block concept.
- White-label potential.
- Company-owned affiliate site strategy.

---

## 18. Support Requirements

Support is part of the infrastructure, not an afterthought.

Phase 1 should include:

- Help desk tickets.
- My tickets.
- New ticket.
- Support categories.
- Knowledge base.
- Quick explainers.
- Role-specific help.
- Application support notes.
- Admin ticket view.
- Support status.

Support events should attach to relevant users, entities, claims, projects, or tasks.

---

## 19. Notification Requirements

The system should notify users based on role, state, market, company, claim, project, and task.

Notification types:

- Email.
- SMS, later.
- In-app.
- Dashboard alert.
- Admin announcement.

Notification events:

```text
Account created
Agreement accepted
Role assigned
Certification required
Lead assigned
Offer available
Offer accepted
Claim request submitted
Claim request approved/rejected/held
Task assigned
Task overdue
Evidence required
Payment recorded
Final paperwork required
Support ticket updated
TER flag issued
```

---

## 20. Phase 1 Exclusions

The following should be explicitly excluded from Phase 1 build scope unless required for the first operating cell:

- Full insurance carrier claims management system.
- Full mortgage loss draft automation.
- Full regulated banking functionality.
- Token launch.
- Full supplier ecommerce.
- Full manufacturer product catalog.
- Full affiliate self-service platform.
- Full nationwide ClaimBuddy dispatch network.
- Full mobile app from day one.
- Full franchising system.
- Full public National Roofing League product.
- Full sponsor marketplace.
- Full DAO governance.
- Full AI autonomy over approvals or claim decisions.

These can be designed for, but not built first.

---

## 21. Phase 1 Build Priorities

Build in this order:

1. Identity and authentication.
2. Entity / role / permission model.
3. Platform admin shell.
4. State / market / company location setup.
5. Contractor onboarding.
6. Property owner onboarding.
7. Lead / project / job / job order objects.
8. ClaimStore Claim object.
9. Claim request workflow.
10. Evidence upload and timestamping.
11. Basic field service task model.
12. Basic insurance company view.
13. Support tickets and quick explainers.
14. Virtual item / revenue event catalog.
15. Basic TER tracking.
16. Basic dashboard filters.
17. Certification / Role Store integration.
18. ClaimsBank transaction-record design.
19. Affiliate/source tracking.
20. Developer and agent handoff package.

---

## 22. Developer Handoff Requirements

Before development begins, create:

```text
MASTER_CONTEXT.md
PRODUCT_REQUIREMENTS.md
USER_FLOWS.md
DATA_MODEL.md
ENTITY_ROLE_MATRIX.md
PERMISSIONS_MATRIX.md
CLAIMEXPRESS_PROTOCOL.md
HUMAN_BLOCKCHAIN_EVENTS.md
TER_SLA_MODEL.md
REVENUE_EVENTS.md
QUANTUM_DASHBOARD_MODEL.md
LEGAL_ARCHITECTURE_TO_BE_VETTED.md
ROADMAP.md
BACKLOG.md
AGENT_INSTRUCTIONS.md
DECISION_LOG.md
```

Each document should be plain enough that human developers, AI coding tools, and project managers can all use it.

---

## 23. Immediate Decisions Needed

The following decisions are needed before the PRD is finalized:

1. Is ClaimStore the public marketplace brand and ClaimsBank the financial layer, or is ClaimStore also the banking seat?
2. Is ClaimExpress preserved as the protocol name?
3. Is ClaimBuddy a role, app, service line, or all three?
4. Which market is the first operating cell?
5. Which contractor operation is the initial real-world test environment?
6. Which entity roles must be fully functional on Day 1?
7. Which role agreements must exist before launch?
8. Which tasks count toward TER in Phase 1?
9. Which revenue events are active in Phase 1?
10. What is the first ClaimStore claim workflow we must prove end-to-end?

---

## 24. Recommended Phase 1 Operating Cell

The recommended first operating cell is:

```text
Hail / Wind
+ Roofing
+ One Primary Contractor Operation
+ Property Owner Claim File
+ Contractor BMS
+ ClaimExpress Claim Request
+ Basic Field Service / ClaimBuddy Verification
+ Basic Insurance Documentation Interface
+ RRCA Certification / Protocol
+ TER Tracking
+ Quantum Dashboard v0.1
```

This is narrow enough to build and broad enough to prove the architecture.

---

## 25. Working Conclusion

ClaimStore Phase 1 should not attempt to build the entire future ecosystem.

It should prove the core transaction.

The core transaction is:

```text
Damage
↓
Lead / Claim / Project File
↓
Documentation
↓
Offer
↓
Property Owner Approval
↓
Claim Request
↓
Insurance Review
↓
Build
↓
Verification
↓
Final Paperwork
↓
Payment / Closeout
```

If this workflow works with role-based access, evidence capture, property owner consent, contractor operations, field-service tasks, and dashboard reporting, then the rest of the ecosystem becomes an expansion problem.

That is the correct Phase 1 standard.

Next, I recommend creating **Document 3: ClaimExpress Protocol Specification v0.1**. That will define the protocol itself in a more exact way: statuses, events, required evidence, user actions, permissions, and when a claim/project becomes locked, buildable, supplemental, final, verified, or closed.
