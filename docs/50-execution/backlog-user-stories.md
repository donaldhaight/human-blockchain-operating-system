---
id: backlog-user-stories
title: "Backlog and User Stories"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 31558
source_line_end: 33920
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# Backlog and User Stories v0.1  
## ClaimStore / ClaimExpress / ClaimBuddy / Kimosabe Season 1 Build Backlog  
### Epics, User Stories, Acceptance Criteria, MVP Milestones, and Agent Build Instructions

## 1. Purpose

This document converts the Phase 1 Product Requirements Document and Data Model Master Specification into a buildable Season 1 backlog.

The backlog is organized into epics, user stories, acceptance criteria, and milestone priorities.

The goal is to help human developers, AI coding agents, product managers, project managers, and Kimosabe workflow agents build the first controlled operating cell without losing the architecture.

Season 1 must prove one thing:

```text
ClaimStore can coordinate a real insurance restoration claim/project workflow from lead to offer to claim request to verification to closeout to dashboard.
```

---

## 2. Backlog Principles

The backlog must preserve these rules:

```text
No user clicks OK for another user.
Entity Role is not Designation.
Claim Caller is a designation, not a generic reviewer.
The first shared offer becomes the First Offer Baseline.
The first claim request creates a ClaimStore Claim.
No evidence means no verified event.
Certain clicks create timestamps.
Certain clicks create bookkeeping events.
Human Blockchain begins as verified event ledger.
ClaimsBank begins as release-condition and bookkeeping logic.
TER begins as internal performance and coaching logic.
Quantum Dashboard begins as underwriting and operating intelligence.
```

Any feature that violates these rules should be rejected, redesigned, or placed into legal/architecture review.

---

## 3. MVP Build Order

Recommended Season 1 build sequence:

```text
M1 - Identity, Entity, Role, Designation, Agreements
M2 - Platform Admin, Markets, Branch Settings
M3 - Contractor Company, Leads, Projects
M4 - Property Owner File and Offer Acceptance
M5 - Offer Builder, Jobs, Orders, Equipment, Other Charges
M6 - Event Ledger and Click Classification
M7 - ClaimStore Claim and Claim Request Workflow
M8 - Claim Caller and Claim Decision Record
M9 - Evidence, Documents, Signatures
M10 - ClaimBuddy / Task Workflow
M11 - Bookkeeping Events, Payments, Commissions, Referrals
M12 - Need/Done
M13 - TER, SLA, Proficiency
M14 - Quantum Dashboard v0.1
M15 - Virtual Items and Revenue Events
M16 - Support / Knowledge Base
M17 - Sponsor Position v0.1
M18 - Founding Operator Integration Adapter
M19 - One Prompt Event Demo Environment
```

The first demo should not wait for everything.

The minimum coherent demo requires:

```text
Identity
Roles
Designations
Property
Lead
Project
Offer
Offer Acceptance
ClaimStore Claim
Claim Request
Claim Caller / external determination
Evidence
Task
Completion Verification
Bookkeeping Event
TER / Proficiency sample
Quantum Dashboard sample
```

---

## 4. Epic List

```text
E01 Identity and Authentication
E02 User Profile
E03 Entity and Organization Management
E04 Entity Role and Permission Management
E05 Designation Management
E06 Agreement Acceptance and Delegated Authority
E07 Platform Admin and Configuration
E08 Geography, Markets, Branch Settings
E09 Contractor Company Setup
E10 Property Owner File
E11 Lead Management
E12 Project Management
E13 Offer Builder
E14 Jobs, Orders, Equipment, and Other Charges
E15 Event Ledger and Click Classification
E16 ClaimStore Claim Object
E17 Claim Request Workflow
E18 Claim Caller and Claim Decision Record
E19 Evidence, Documents, and Signatures
E20 ClaimBuddy / Field Task Workflow
E21 Human Blockchain Events
E22 Bookkeeping Events
E23 Payments, Commissions, and Referral Fees
E24 Need/Done
E25 TER and SLA
E26 Proficiency Metrics
E27 ClaimsBank Readiness Conditions
E28 Quantum Dashboard v0.1
E29 Virtual Items and Revenue Catalog
E30 Support and Knowledge Base
E31 Sponsor Position v0.1
E32 Founding Operator Integration
E33 Notifications
E34 Reporting and Exports
E35 Security, Audit, and Data Integrity
E36 One Prompt Event Demo
```

---

## 5. Epic Template

Each epic should be tracked using this structure:

```text
Epic ID
Epic Name
Purpose
Primary Users
Core Objects
Dependencies
User Stories
Acceptance Criteria
MVP Priority
Legal Review Required
Status
```

Recommended status values:

```text
Not Started
Ready for Discovery
Ready for Design
Ready for Build
In Build
In Review
Blocked
Deferred
Done
```

---

# E01 - Identity and Authentication

## Purpose

Allow users to create accounts, log in, and become attributable actors in the event ledger.

## Primary Users

```text
All users
Platform Admin
Property Owner
Contractor User
ClaimBuddy
Insurance User
Sponsor Viewer
```

## Core Objects

```text
User
User Profile
Agreement Acceptance
Event
```

## User Story E01-US01 - Create User Account

As a new user, I want to create an account so that I can access the ClaimStore ecosystem.

Acceptance criteria:

```text
User can create account with email and password or approved authentication method.
System creates User ID.
System records created date.
System sets account status.
System sends verification or welcome notification.
System creates User Created Event.
```

## User Story E01-US02 - Log In

As a registered user, I want to log in securely so that my actions can be attributed to me.

Acceptance criteria:

```text
User can log in.
System identifies User ID.
System records last login.
System creates login audit event where appropriate.
```

## User Story E01-US03 - Prevent Anonymous High-Consequence Actions

As the platform, I need to prevent unauthenticated users from taking high-consequence actions.

Acceptance criteria:

```text
Unauthenticated user cannot accept offer.
Unauthenticated user cannot authorize claim request.
Unauthenticated user cannot approve completion.
Unauthenticated user cannot make claim determination.
Unauthenticated user cannot upload verified evidence.
```

MVP priority:

```text
Critical
```

---

# E02 - User Profile

## Purpose

Allow users to maintain basic identity and contact information needed for workflow.

## User Story E02-US01 - Complete Profile

As a user, I want to complete my profile so that other authorized parties can identify and contact me.

Acceptance criteria:

```text
User can enter name, phone, address, preferred contact method.
System saves profile.
Profile completion status updates.
Profile Updated Event is recorded.
```

## User Story E02-US02 - View Own Role and Designation Status

As a user, I want to see my assigned roles and active designations so that I understand what I can do.

Acceptance criteria:

```text
User can view entity roles.
User can view active designations.
User can view pending designation assignments.
User can accept or decline assignable designations where required.
```

MVP priority:

```text
High
```

---

# E03 - Entity and Organization Management

## Purpose

Allow creation and management of organizations and participating entities.

## User Story E03-US01 - Create Entity

As a Platform Admin, I want to create an entity so that users can operate under a company, household, sponsor, or platform group.

Acceptance criteria:

```text
Platform Admin can create Entity.
Entity Type is required.
Legal Name or Display Name is required.
Primary contact can be assigned.
Entity Created Event is recorded.
```

## User Story E03-US02 - Create Contractor Entity

As a Contractor Owner, I want to create a contractor entity so that my company can manage leads, projects, offers, and users.

Acceptance criteria:

```text
Contractor entity can be created.
Contractor owner is linked.
Default Contractor Owner role is assigned.
Agreement acceptance may be required.
Contractor Entity Created Event is recorded.
```

## User Story E03-US03 - Create Property Owner Household Entity

As a Property Owner, I want the system to associate my property and claim file with my owner/household entity.

Acceptance criteria:

```text
Property Owner entity can be created.
Property Owner role assigned to user.
Property Owner Entity Created Event recorded.
```

MVP priority:

```text
Critical
```

---

# E04 - Entity Role and Permission Management

## Purpose

Define what users generally can do inside an entity.

## User Story E04-US01 - Assign Entity Role

As an authorized admin, I want to assign a role to a user so that the user can perform permitted actions.

Acceptance criteria:

```text
Admin can select user.
Admin can select entity.
Admin can select entity role.
System creates Entity Role Assignment.
Role Assigned Event is recorded.
```

## User Story E04-US02 - Enforce Role Permissions

As the system, I need to enforce permissions based on entity role.

Acceptance criteria:

```text
Property Owner can view own property file.
Contractor Sales Rep can view assigned leads/projects.
Contractor Admin can manage contractor company objects.
Insurance User can view assigned claim requests.
Sponsor Viewer cannot view identified claim files unless granted.
```

## User Story E04-US03 - Prevent Role Misuse

As the system, I need to prevent roles from acting outside their authority.

Acceptance criteria:

```text
Contractor cannot accept offer for Property Owner.
ClaimBuddy cannot make insurance determination.
Sponsor Viewer cannot edit project data.
Support User cannot approve completion.
```

MVP priority:

```text
Critical
```

---

# E05 - Designation Management

## Purpose

Allow specific claim/project/task/request responsibilities to be assigned and enforced.

## User Story E05-US01 - Assign Designation

As an authorized user, I want to assign a designation to a user for a specific object so that responsibility is clear.

Acceptance criteria:

```text
Designation Type is required.
Related Object Type is required.
Related Object ID is required.
Assigned User is required.
Authority Source is required for high-consequence designations.
Designation Assigned Event is recorded.
```

## User Story E05-US02 - Accept Designation

As a user assigned a task-based designation, I want to accept or decline it so that my responsibility is confirmed.

Acceptance criteria:

```text
User can view pending designation.
User can accept or decline.
System records Accepted or Declined timestamp.
Designation status updates.
Event is recorded.
```

## User Story E05-US03 - Enforce Claim Caller Requirement

As the system, I need to require Claim Caller designation or external determination status before recording insurance-side decision.

Acceptance criteria:

```text
User without Claim Caller designation cannot record platform claim determination.
System allows external determination record if decision came from outside platform.
Authority Source is captured or marked Unknown / Not Provided.
```

MVP priority:

```text
Critical
```

---

# E06 - Agreement Acceptance and Delegated Authority

## Purpose

Track legal agreements, user consent, electronic signatures, and delegated authority.

## User Story E06-US01 - Accept Terms of Service

As a user, I must accept the Terms of Service before using the platform.

Acceptance criteria:

```text
User is shown agreement version.
User accepts from own account.
Agreement Acceptance record created.
Event recorded with user, timestamp, version.
User cannot proceed to high-consequence actions without acceptance.
```

## User Story E06-US02 - Create Delegated Authority Record

As a Property Owner, I want to delegate specific authority to another user so that they can act within a defined scope.

Acceptance criteria:

```text
Delegator must be authenticated.
Delegate user is identified.
Scope is defined.
Allowed actions are defined.
Expiration is defined or explicitly open-ended.
Signature or acceptance is recorded.
Delegated Authority Created Event is recorded.
```

## User Story E06-US03 - Enforce Delegated Authority Scope

As the system, I need to prevent delegated users from acting outside granted authority.

Acceptance criteria:

```text
Delegate can only perform allowed actions.
Expired delegation blocks action.
Revoked delegation blocks action.
Action links to Delegated Authority Record.
```

MVP priority:

```text
Critical for consent actions
```

---

# E07 - Platform Admin and Configuration

## Purpose

Allow platform administrators to configure states, markets, roles, designations, virtual items, support categories, and workflow settings.

## User Story E07-US01 - Manage Core Lists

As a Platform Admin, I want to manage core configuration lists so that the platform can operate across markets.

Acceptance criteria:

```text
Admin can create/edit states.
Admin can create/edit markets.
Admin can create/edit job categories.
Admin can create/edit order types.
Admin can create/edit other charge types.
Admin can create/edit designation types.
Configuration change events are recorded.
```

## User Story E07-US02 - Admin Correction With Audit

As a Platform Admin, I want to correct data errors without overwriting history.

Acceptance criteria:

```text
Admin cannot silently overwrite high-consequence records.
Correction requires reason.
Correction Event is created.
Original value remains auditable.
```

MVP priority:

```text
High
```

---

# E08 - Geography, Markets, Branch Settings

## Purpose

Support market-specific workflows and dashboard assumptions.

## User Story E08-US01 - Create Market

As a Platform Admin, I want to create a market so that projects, claims, contractors, and dashboards can be grouped geographically.

Acceptance criteria:

```text
State is selected.
Market name is required.
Market status is set.
Market Created Event recorded.
```

## User Story E08-US02 - Configure Branch Settings

As a Contractor Admin, I want to configure branch settings so that market-specific compliance requirements appear in projects.

Acceptance criteria:

```text
Admin can enable Permit Required.
Admin can enable Notice of Commencement Required.
Admin can enable Inspection Required.
Admin can enable Engineering Required.
Admin can enable Mortgage Package Required.
Enabled settings create project compliance Need/Done items.
```

MVP priority:

```text
High
```

---

# E09 - Contractor Company Setup

## Purpose

Allow contractor operation to set up company, branches, users, roles, and basic operating settings.

## User Story E09-US01 - Create Contractor Branch

As a Contractor Admin, I want to create a branch location so that projects can be assigned to the correct market and office.

Acceptance criteria:

```text
Branch name, address, market, and status are required.
Branch settings can be configured.
Branch Created Event is recorded.
```

## User Story E09-US02 - Add Contractor User

As a Contractor Admin, I want to add users to my company so that they can manage leads and projects.

Acceptance criteria:

```text
Admin can invite user.
Role can be assigned.
User receives invitation.
Role Assignment Event recorded.
```

MVP priority:

```text
Critical
```

---

# E10 - Property Owner File

## Purpose

Allow property owners to create and control their own property and claim-related file.

## User Story E10-US01 - Create Property File

As a Property Owner, I want to create a property file so that I can manage claim/project information for my property.

Acceptance criteria:

```text
Property Owner enters address.
Property record is created.
Property Owner is linked.
Property Created Event is recorded.
```

## User Story E10-US02 - Upload Property Documents

As a Property Owner, I want to upload policy, mortgage, photo, and property documents.

Acceptance criteria:

```text
User can upload documents.
Document type is selected.
Evidence or Document record created.
Uploaded by user is recorded.
```

## User Story E10-US03 - View Claim/Project Status

As a Property Owner, I want to view claim/project status so that I understand where my matter stands.

Acceptance criteria:

```text
Property Owner can view authorized project.
Property Owner can view offer status.
Property Owner can view claim request status.
Property Owner can view tasks requiring their action.
```

MVP priority:

```text
Critical
```

---

# E11 - Lead Management

## Purpose

Capture potential claim/project opportunities and route them into contractor workflow.

## User Story E11-US01 - Create Lead

As a Contractor User, I want to create a lead so that I can track a potential project.

Acceptance criteria:

```text
Lead source is recorded.
Contact information is recorded.
Property address is recorded.
Assigned contractor entity is recorded.
Lead Created Event is recorded.
```

## User Story E11-US02 - Assign Lead

As a Contractor Admin, I want to assign a lead to a Sales Rep or ISR.

Acceptance criteria:

```text
Assigned user has valid contractor role.
Lead Assigned Event recorded.
Assigned user receives notification.
```

## User Story E11-US03 - Convert Lead to Project

As a Contractor User, I want to convert a qualified lead to a project.

Acceptance criteria:

```text
Project record is created.
Lead status changes to Converted.
Project links to Lead.
Event recorded.
Referral tracking begins if lead source qualifies.
```

MVP priority:

```text
Critical
```

---

# E12 - Project Management

## Purpose

Manage contractor production and accounting container.

## User Story E12-US01 - Create Project

As a Contractor User, I want to create a project so that I can manage offer, jobs, orders, costs, and closeout.

Acceptance criteria:

```text
Project ID created.
Property linked.
Contractor entity linked.
Market linked.
Project status set.
Project Created Event recorded.
```

## User Story E12-US02 - Assign Project Lead

As a Contractor Admin, I want to assign a Project Lead designation.

Acceptance criteria:

```text
Assigned user has contractor role.
Designation Assignment created.
Project Lead Assigned Event recorded.
```

## User Story E12-US03 - Lock Project Baseline

As an authorized contractor user, I want to lock project baseline so that estimated selling price and estimated costs are preserved.

Acceptance criteria:

```text
User has required role/designation.
System creates Project Locked Event.
System creates Bookkeeping Event.
Estimated values are snapshotted.
Future changes require revision/superseding event.
```

MVP priority:

```text
Critical
```

---

# E13 - Offer Builder

## Purpose

Allow contractor to create structured offers with jobs, orders, equipment, other charges, selling price, estimated cost, and terms.

## User Story E13-US01 - Create Draft Offer

As an Offer Owner, I want to create a draft offer.

Acceptance criteria:

```text
Offer record created.
Offer status Draft.
Offer Owner designation linked.
Jobs and other charges can be added.
Draft Offer Created Event recorded.
```

## User Story E13-US02 - Add Pricing Method

As an Offer Owner, I want to select pricing method so that offer can be lump sum, line item, job-based, hybrid, or estimate/opinion.

Acceptance criteria:

```text
Pricing method is required before sharing.
Pricing method saved.
Offer Updated Event recorded.
```

## User Story E13-US03 - Share First Offer

As an Offer Owner, I want to share an offer with the Property Owner.

Acceptance criteria:

```text
Offer status changes to First Shared if no prior shared offer exists.
First Offer Baseline Flag set.
Offer Version snapshot created.
Offer Shared Event recorded.
Property Owner notified.
```

## User Story E13-US04 - Property Owner Accepts Offer

As a Property Owner, I want to accept an offer from my own account.

Acceptance criteria:

```text
Property Owner is authenticated.
Offer version is displayed.
User confirms acceptance.
Offer Accepted Event recorded.
Consent Event recorded.
Contractor notified.
Contractor/Admin cannot perform this action for owner.
```

MVP priority:

```text
Critical
```

---

# E14 - Jobs, Orders, Equipment, and Other Charges

## Purpose

Structure the scope and cost model of the project.

## User Story E14-US01 - Add Job to Offer

As an Offer Owner, I want to add a job to an offer.

Acceptance criteria:

```text
Job category selected.
Description entered.
Estimated selling price entered or calculated.
Estimated cost categories can be entered.
Job Added Event recorded.
```

## User Story E14-US02 - Add Order to Job

As a Contractor User, I want to add material, labor, turnkey, equipment, punch, or service orders.

Acceptance criteria:

```text
Order type selected.
Order linked to Job.
Estimated cost entered.
Order Created Event recorded.
```

## User Story E14-US03 - Add Other Charge

As a Contractor User, I want to add other charges such as permits, trips, engineering, measurement reports, supplement processing, or collection letters.

Acceptance criteria:

```text
Other Charge Type selected.
Amount entered.
Required/evidence flags can be set.
Other Charge Added Event recorded.
If billable, Bookkeeping Event may be created based on configuration.
```

MVP priority:

```text
Critical
```

---

# E15 - Event Ledger and Click Classification

## Purpose

Create the append-only system memory.

## User Story E15-US01 - Record Event for Meaningful Action

As the system, I need every meaningful action to create an event.

Acceptance criteria:

```text
Event includes Actor User.
Event includes Actor Entity.
Event includes Actor Role.
Event includes Designation if applicable.
Event includes Related Object.
Event includes timestamp.
Event includes status before/after where applicable.
```

## User Story E15-US02 - Classify Clicks

As the system, I need to classify clicks by consequence.

Acceptance criteria:

```text
Navigation clicks may be low/audit optional.
Timestamped actions create workflow events.
Evidence actions create evidence events.
Consent actions create consent events.
Bookkeeping actions create bookkeeping events.
Protocol transitions create transition events.
```

## User Story E15-US03 - Prevent Event Deletion

As the system, I must preserve event history.

Acceptance criteria:

```text
Events cannot be deleted through normal UI.
Corrections create correction/reversal/superseding events.
Admin corrections require reason.
```

MVP priority:

```text
Critical
```

---

# E16 - ClaimStore Claim Object

## Purpose

Create the neutral claim transaction container.

## User Story E16-US01 - Create ClaimStore Claim From First Claim Request

As the system, I need the first claim request or notice to create a ClaimStore Claim.

Acceptance criteria:

```text
If Claim Request is submitted and no ClaimStore Claim exists, system creates ClaimStore Claim.
Claim Request links to ClaimStore Claim.
Created From Event ID recorded.
ClaimStore Claim Created Event recorded.
```

## User Story E16-US02 - Attach Future Requests to Same Claim

As the system, I need future related claim requests to attach to the existing ClaimStore Claim.

Acceptance criteria:

```text
System detects existing linked claim.
Supplemental and final requests attach to same ClaimStore Claim.
No duplicate claim created unless user/admin intentionally creates separate claim with reason.
```

MVP priority:

```text
Critical
```

---

# E17 - Claim Request Workflow

## Purpose

Allow preliminary, supplemental, and final claim request packages.

## User Story E17-US01 - Create Preliminary Claim Request

As an authorized user, I want to create a preliminary claim request.

Acceptance criteria:

```text
Claim Request Type = Preliminary.
Project and Property linked.
Package contents selected.
Draft status created.
```

## User Story E17-US02 - Submit Claim Request

As authorized user or Property Owner, depending workflow, I want to submit a claim request package.

Acceptance criteria:

```text
Required agreement/authorization is checked.
Package Snapshot created.
Claim Request status Submitted.
Protocol Transition Event recorded.
If first request, ClaimStore Claim created.
```

## User Story E17-US03 - Record Delivery

As the system or support user, I want to record claim request delivery.

Acceptance criteria:

```text
Delivery method recorded.
Delivery date recorded.
Evidence of delivery can be attached.
Status changes to Delivered.
Event recorded.
```

MVP priority:

```text
Critical
```

---

# E18 - Claim Caller and Claim Decision Record

## Purpose

Record insurance-side accountability and determinations.

## User Story E18-US01 - Assign Claim Caller

As an Insurance Admin or authorized Claim Manager, I want to assign Claim Caller designation.

Acceptance criteria:

```text
Claim Request selected.
User selected.
Authority Source recorded.
Claim Caller Designation created.
Claim Caller Assigned Event recorded.
```

## User Story E18-US02 - Record Claim Determination

As a Claim Caller, I want to record decision on claim request.

Acceptance criteria:

```text
User has Claim Caller designation.
Decision type selected.
Decision amount entered if applicable.
Reason/notes entered.
Evidence reviewed can be linked.
Claim Decision Record created.
Claim Determination Event recorded.
Claim Request status updates.
Dashboard metric updates.
```

## User Story E18-US03 - Record External Determination

As Platform Support or authorized user, I want to record an external carrier response when the insurer is not participating directly.

Acceptance criteria:

```text
External Determination flag set.
External document/evidence attached.
Claim Caller may be marked Not Identified.
Authority Source may be Unknown / Not Provided.
Event recorded.
```

MVP priority:

```text
Critical
```

---

# E19 - Evidence, Documents, and Signatures

## Purpose

Allow upload, organization, verification, and linking of evidence.

## User Story E19-US01 - Upload Evidence

As an authorized user, I want to upload evidence to a claim/project/task.

Acceptance criteria:

```text
Evidence Type selected.
Related object linked.
Uploaded by user recorded.
Timestamp recorded.
Evidence Uploaded Event recorded.
```

## User Story E19-US02 - Verify Evidence

As a designated verifier, I want to verify evidence.

Acceptance criteria:

```text
User has proper role/designation.
Evidence status changes to Verified or Rejected.
Verification Event recorded.
Trust weight may update.
```

## User Story E19-US03 - Capture Signature Record

As a user, I want to sign or record signature where required.

Acceptance criteria:

```text
Signer identity recorded.
Authority Source recorded if delegated.
Document version linked.
Signature timestamp recorded.
Signature Event recorded.
```

MVP priority:

```text
Critical
```

---

# E20 - ClaimBuddy / Field Task Workflow

## Purpose

Manage field tasks and verification activity.

## User Story E20-US01 - Create Field Task

As an authorized user, I want to create a field task.

Acceptance criteria:

```text
Task Type selected.
Related object linked.
Evidence/checklist/signature requirements set.
Task Created Event recorded.
```

## User Story E20-US02 - Assign ClaimBuddy

As an authorized user, I want to assign a ClaimBuddy to a task.

Acceptance criteria:

```text
Assigned user has ClaimBuddy role.
ClaimBuddy Verifier designation created if applicable.
Task Assigned Event recorded.
ClaimBuddy notified.
```

## User Story E20-US03 - Complete Task

As a ClaimBuddy, I want to complete a task with required evidence.

Acceptance criteria:

```text
Required checklist completed.
Required evidence uploaded.
Signature captured if required.
Task Submitted Event recorded.
Task can be verified if requirements satisfied.
```

MVP priority:

```text
High
```

---

# E21 - Human Blockchain Events

## Purpose

Create verified records of real-world human actions.

## User Story E21-US01 - Create Human Blockchain Event From Verified Task

As the system, I want to create a Human Blockchain Event when a task is verified.

Acceptance criteria:

```text
Task status Verified.
Required evidence exists.
Verifier identity recorded.
Interested/non-interested flag recorded.
Human Blockchain Event created.
Trust weight assigned.
TER/SLA impact recorded.
```

## User Story E21-US02 - Prevent Verified Event Without Evidence

As the system, I need to prevent Human Blockchain events without required evidence.

Acceptance criteria:

```text
If evidence missing, no verified Human Blockchain Event is created.
Task remains incomplete/submitted/returned.
User sees missing requirements.
```

MVP priority:

```text
High
```

---

# E22 - Bookkeeping Events

## Purpose

Record financial consequences triggered by workflow.

## User Story E22-US01 - Create Bookkeeping Event From Project Lock

As the system, I want project lock to create a bookkeeping baseline.

Acceptance criteria:

```text
Project Locked Event occurs.
Estimated selling price and cost are snapshotted.
Bookkeeping Event created.
```

## User Story E22-US02 - Create Bookkeeping Event From Other Charge

As the system, I want billable other charges to create bookkeeping events.

Acceptance criteria:

```text
Other Charge approved or marked billable.
Amount recorded.
Bookkeeping Event created.
Related object linked.
```

## User Story E22-US03 - Reverse Bookkeeping Event

As an authorized user, I want to reverse a bookkeeping event when needed.

Acceptance criteria:

```text
User has permission.
Reason required.
Reversal event created.
Original remains visible.
Status updates to Reversed.
```

MVP priority:

```text
High
```

---

# E23 - Payments, Commissions, and Referral Fees

## Purpose

Track payment, commission, referral, and receivable status.

## User Story E23-US01 - Record Payment

As a Contractor Bookkeeper, I want to record a payment.

Acceptance criteria:

```text
Project selected.
Amount entered.
Paid by/to recorded.
Evidence can be attached.
Payment Record created.
Bookkeeping Event created.
Receivable updated.
```

## User Story E23-US02 - Track Commission Pending

As the system, I want to create commission pending records when project conditions are met.

Acceptance criteria:

```text
Pay plan exists.
Basis amount identified.
Commission status Pending.
Event recorded.
```

## User Story E23-US03 - Track Referral Fee

As the system, I want to track referral fee candidates.

Acceptance criteria:

```text
Lead source qualifies.
Referral Fee Record created.
Status Tracked or Eligible.
Bookkeeping event linked when accrued.
```

MVP priority:

```text
Medium-High
```

---

# E24 - Need/Done

## Purpose

Support annual readiness and project compliance checklists.

## User Story E24-US01 - Annual Need/Done

As the system, I want properties to have annual readiness items that reset to Need each year.

Acceptance criteria:

```text
Annual Need/Done records can be created.
Status can be Need or Done.
Completion requires evidence if configured.
January 1 reset logic designed, even if manual in MVP.
```

## User Story E24-US02 - Project Compliance Need/Done

As a contractor branch, I want project compliance items generated based on branch settings.

Acceptance criteria:

```text
Permit required creates Permit Need/Done.
NOC required creates NOC Need/Done.
Inspection required creates Inspection Need/Done.
Completion changes status to Done with evidence.
```

MVP priority:

```text
Medium
```

---

# E25 - TER and SLA

## Purpose

Measure task performance against expected timing, evidence, and completion standards.

## User Story E25-US01 - Create SLA Record for Task

As the system, I want tasks to create SLA records.

Acceptance criteria:

```text
Task has due date.
Expected completion recorded.
Actual completion recorded.
Late flag calculated.
Evidence complete flag calculated.
```

## User Story E25-US02 - Calculate Basic TER

As the system, I want to calculate basic TER by user, role, designation, task type, and market.

Acceptance criteria:

```text
Timeliness score calculated.
Evidence score calculated.
Completion score calculated.
Overall TER generated.
Relevant average can be compared.
```

## User Story E25-US03 - Create Three-Week Flag

As the system, I want to flag below-average performance for three consecutive weeks.

Acceptance criteria:

```text
Relevant average exists.
User/designation below average for three consecutive weeks.
TER Review Flag created.
No automatic public punishment.
```

MVP priority:

```text
Medium
```

---

# E26 - Proficiency Metrics

## Purpose

Track accuracy between first estimates/offers/opinions and final outcomes.

## User Story E26-US01 - Compare First Offer to Final Closeout

As the system, I want to compare first offer baseline to final closeout.

Acceptance criteria:

```text
First Offer Baseline exists.
Final Closeout amount exists.
Variance amount calculated.
Variance percent calculated.
Proficiency Metric created.
```

## User Story E26-US02 - Track IA Opinion Accuracy

As the system, I want to compare first IA opinion to final claim/project outcome.

Acceptance criteria:

```text
IA opinion baseline exists.
Final determination or closeout exists.
Variance calculated.
Metric linked to IA/designation.
```

MVP priority:

```text
Medium
```

---

# E27 - ClaimsBank Readiness Conditions

## Purpose

Track release-condition readiness without regulated fund movement in Phase 1.

## User Story E27-US01 - Create ClaimsBank Condition

As the system, I want to create release-condition records for claim/project milestones.

Acceptance criteria:

```text
Condition Type selected.
Related project/claim linked.
Required evidence/designation set if applicable.
Status set to Required/Pending/Satisfied.
```

## User Story E27-US02 - Satisfy Completion Verification Condition

As the system, I want completion verification to satisfy a ClaimsBank-ready condition.

Acceptance criteria:

```text
Completion Verification Human Blockchain Event exists.
Condition updates to Satisfied.
Event recorded.
```

MVP priority:

```text
Medium
```

---

# E28 - Quantum Dashboard v0.1

## Purpose

Display operating, market, risk, and sponsor opportunity intelligence.

## User Story E28-US01 - Show Operating Dashboard

As an operator, I want to see claims, projects, offers, claim requests, tasks, evidence, payments, and TER flags.

Acceptance criteria:

```text
Dashboard shows counts by market.
Dashboard shows statuses.
Dashboard links to underlying objects.
```

## User Story E28-US02 - Show Market Opportunity Scenario

As a sponsor/operator, I want to enter assumptions and view market opportunity.

Acceptance criteria:

```text
Affected Properties input exists.
Claim Conversion Rate input exists.
Average Claim Value input exists.
Service Attachment Rate input exists.
Platform Capture Rate input exists.
Market Opportunity calculated.
```

## User Story E28-US03 - Show Claim Caller Accountability Metric

As an operator, I want to see Claim Caller identified/not identified rates.

Acceptance criteria:

```text
Dashboard counts claim requests with Claim Caller.
Dashboard counts external determinations.
Dashboard counts Claim Caller Not Identified.
```

MVP priority:

```text
High for demo, medium for full build
```

---

# E29 - Virtual Items and Revenue Catalog

## Purpose

Configure fees, products, services, and revenue events.

## User Story E29-US01 - Create Virtual Item

As a Platform Admin, I want to create a virtual item.

Acceptance criteria:

```text
Name, description, price, billing method, eligibility, and status are saved.
Virtual Item Created Event recorded.
```

## User Story E29-US02 - Create Revenue Event

As the system, I want qualifying actions to create revenue events.

Acceptance criteria:

```text
Virtual item is linked.
Amount recorded.
Related object linked.
Revenue Event created.
Bookkeeping Event linked where applicable.
```

MVP priority:

```text
Medium
```

---

# E30 - Support and Knowledge Base

## Purpose

Assist users without taking actions for them.

## User Story E30-US01 - Create Support Ticket

As a user, I want to create a support ticket.

Acceptance criteria:

```text
Ticket category selected.
Related object optional.
Support Owner can be assigned.
Ticket Created Event recorded.
```

## User Story E30-US02 - Support Cannot Consent

As the system, I need to prevent support users from accepting, approving, or signing for users.

Acceptance criteria:

```text
Support role cannot accept offer.
Support role cannot approve completion.
Support role cannot make claim determination.
Support role can explain workflow and route issue.
```

MVP priority:

```text
Medium
```

---

# E31 - Sponsor Position v0.1

## Purpose

Represent founding sponsor positions and basic sponsor dashboard access.

## User Story E31-US01 - Create Sponsor Position

As a Platform Admin, I want to create a sponsor position.

Acceptance criteria:

```text
Sponsor category selected.
Market/territory/season selected if applicable.
Rights and obligations recorded.
Legal review status recorded.
Sponsor Position Created Event recorded.
```

## User Story E31-US02 - Restrict Sponsor Data Access

As the system, I need sponsor access to be controlled.

Acceptance criteria:

```text
Sponsor Viewer can only see permitted data.
Identified claim/project files blocked unless grant exists.
Access attempts logged.
```

MVP priority:

```text
Low-Medium for product, high for sponsor demo
```

---

# E32 - Founding Operator Integration

## Purpose

Allow founding operator system events to map into neutral ClaimStore records without corrupting consent, evidence, or verification.

## User Story E32-US01 - Import Founding Operator Event

As the system, I want to import contractor-side events.

Acceptance criteria:

```text
Source System recorded.
Source Event ID recorded.
Mapped Event created.
Imported/Native flag set.
Neutral verification status set.
```

## User Story E32-US02 - Prevent Imported Consent

As the system, I need to prevent imported contractor events from becoming property owner consent automatically.

Acceptance criteria:

```text
Imported event marked contractor-reported.
Property Owner consent required separately.
No Offer Accepted Event created without user/delegated authority.
```

MVP priority:

```text
Medium if two-code-base path is used
```

---

# E33 - Notifications

## Purpose

Notify users of events requiring attention.

## User Story E33-US01 - Notify Property Owner of Offer

As the system, I want to notify the Property Owner when an offer is shared.

Acceptance criteria:

```text
Offer Shared Event triggers notification.
Notification links to offer.
Notification status tracked.
```

## User Story E33-US02 - Notify Claim Caller of Assignment

As the system, I want to notify Claim Caller when assigned.

Acceptance criteria:

```text
Claim Caller Assigned Event triggers notification.
Notification links to claim request.
```

## User Story E33-US03 - Notify Missing Evidence

As the system, I want to notify users when required evidence is missing.

Acceptance criteria:

```text
Task submitted without required evidence.
System identifies missing evidence.
Notification created.
```

MVP priority:

```text
Medium
```

---

# E34 - Reporting and Exports

## Purpose

Allow basic operational reports and future accounting/export readiness.

## User Story E34-US01 - Export Project Summary

As a Contractor Admin, I want to export project summary.

Acceptance criteria:

```text
Project data export includes offer, jobs, orders, other charges, payments, and status.
Export event recorded.
```

## User Story E34-US02 - Export Claim Request Package

As an authorized user, I want to export claim request package.

Acceptance criteria:

```text
Package Snapshot exported.
Included documents/evidence listed.
Export event recorded.
```

MVP priority:

```text
Medium
```

---

# E35 - Security, Audit, and Data Integrity

## Purpose

Protect user data, claim files, events, evidence, and sponsor boundaries.

## User Story E35-US01 - Audit High-Consequence Actions

As the system, I need to audit high-consequence actions.

Acceptance criteria:

```text
Actor user recorded.
Role recorded.
Designation recorded where applicable.
Authority source recorded where applicable.
Timestamp recorded.
Related object recorded.
```

## User Story E35-US02 - Restrict Object Access

As the system, I need users to access only authorized objects.

Acceptance criteria:

```text
Property Owner sees own files.
Contractor sees assigned/company projects.
Insurance user sees assigned claim requests.
Sponsor sees permitted dashboard only.
Support sees scoped support context.
```

MVP priority:

```text
Critical
```

---

# E36 - One Prompt Event Demo

## Purpose

Create a controlled demo showing end-to-end coherence.

## User Story E36-US01 - Demo Operating Cell

As the founder, I want to demonstrate one operating cell from lead to dashboard.

Acceptance criteria:

```text
Demo creates property owner.
Demo creates contractor.
Demo creates lead.
Demo converts to project.
Demo creates offer with jobs and other charges.
Demo property owner accepts.
Demo creates ClaimStore Claim.
Demo submits Claim Request.
Demo records Claim Caller or external determination.
Demo creates ClaimBuddy task.
Demo uploads evidence.
Demo verifies completion.
Demo records payment/bookkeeping event.
Demo shows TER/proficiency.
Demo shows Quantum Dashboard.
Demo shows sponsor position.
```

MVP priority:

```text
Critical for One Prompt Event
```

---

## 6. Cross-Epic Acceptance Tests

## Test A - No User Clicks OK for Another User

Scenario:

```text
Contractor tries to accept offer for property owner.
```

Expected:

```text
Action blocked.
No consent event created.
System requires Property Owner or delegated authority.
```

## Test B - Claim Caller Is Not Reviewer

Scenario:

```text
Read-Only Reviewer tries to approve claim request.
```

Expected:

```text
Action blocked.
System requires Claim Caller designation.
```

## Test C - First Shared Offer Baseline

Scenario:

```text
First offer is shared with property owner.
```

Expected:

```text
First Offer Baseline created.
Later revisions do not overwrite baseline.
```

## Test D - First Claim Request Creates ClaimStore Claim

Scenario:

```text
Preliminary Claim Request is submitted.
```

Expected:

```text
ClaimStore Claim created if none exists.
Request linked.
Future requests attach.
```

## Test E - No Verified Event Without Evidence

Scenario:

```text
ClaimBuddy marks task complete without required photos/checklist.
```

Expected:

```text
Task not verified.
No Human Blockchain Event created.
Missing evidence notification generated.
```

## Test F - Bookkeeping Trigger

Scenario:

```text
Project is locked.
```

Expected:

```text
Project Locked Event created.
Bookkeeping Event created.
Estimated values snapshotted.
```

## Test G - External Determination

Scenario:

```text
Carrier sends decision outside platform.
```

Expected:

```text
External Determination Record created.
Claim Caller may be Not Identified.
Authority source marked Unknown / Not Provided unless identified.
```

## Test H - Sponsor Access Restriction

Scenario:

```text
Sponsor Viewer attempts to open identified claim file.
```

Expected:

```text
Access denied unless explicit grant exists.
Audit event logged.
```

---

## 7. MVP Priority Levels

Use these priority levels:

```text
P0 - Required for coherent demo and system integrity
P1 - Required for Season 1 operating cell
P2 - Useful for Season 1 but can be manual
P3 - Defer until Season 2+
```

## P0 Items

```text
Identity
Entity
Role
Designation
Agreement acceptance
Property
Lead
Project
Offer
Offer acceptance
Jobs / Other Charges
Event ledger
ClaimStore Claim
Claim Request
Claim Caller / External Determination
Evidence upload
Task
Completion verification
Basic bookkeeping events
Access control
```

## P1 Items

```text
Orders / Equipment Orders
Payments
Commission/referral tracking
Need/Done
Human Blockchain Event records
TER/SLA basics
Proficiency variance
Quantum Dashboard v0.1
Support tickets
Notifications
```

## P2 Items

```text
Virtual items
Revenue catalog
Sponsor positions
Sponsor dashboard
Reporting/export
Founding operator integration
Agreement library
```

## P3 Items

```text
Full ClaimsBank fund movement
Full carrier integration
Full mortgage portal
Supplier ecommerce
Native mobile app
Token/DAO governance
Public TER leaderboards
Advanced AI forecasting
Nationwide marketplace
```

---

## 8. Agent Build Instructions

AI coding and documentation agents should follow this workflow:

```text
1. Read MASTER_CONTEXT.md.
2. Read PHASE_1_PRD.md.
3. Read DATA_MODEL_MASTER_SPECIFICATION.md.
4. Read ENTITY_ROLE_AND_DESIGNATION_MATRIX.md.
5. Read this BACKLOG_AND_USER_STORIES.md.
6. Select one epic.
7. Confirm dependencies.
8. Write implementation plan.
9. Write tests before or alongside build.
10. Update affected docs if architecture changes.
11. Never violate core rules.
```

Agents must not:

```text
Collapse Claim Caller into Reviewer.
Allow support/admin/contractor to consent for property owner.
Allow imported contractor events to become neutral consent.
Treat ClaimsBank as a bank in Phase 1.
Treat Human Blockchain as crypto requirement.
Treat TER as public ranking.
Treat sponsor position as ownership.
```

---

## 9. Suggested Sprint Plan

## Sprint 0 - Repository Setup

Deliverables:

```text
Repo structure
README
MASTER_CONTEXT
Data model docs
Backlog docs
Decision log
Glossary
Initial dev environment
```

## Sprint 1 - Identity / Entities / Roles

Deliverables:

```text
Users
Entities
Entity roles
Permissions
Agreement acceptance
Basic admin
```

## Sprint 2 - Designations / Property / Contractor

Deliverables:

```text
Designation model
Property Owner file
Contractor company
Branch settings
Lead creation
```

## Sprint 3 - Projects / Offers / Jobs

Deliverables:

```text
Project object
Offer builder
Jobs
Orders
Other Charges
First Offer Baseline
Property Owner offer acceptance
```

## Sprint 4 - Event Ledger / Claim Requests

Deliverables:

```text
Event ledger
Click classification
ClaimStore Claim
Claim Request
Package Snapshot
```

## Sprint 5 - Claim Caller / Evidence / Tasks

Deliverables:

```text
Claim Caller designation
Claim Decision Record
External Determination
Evidence upload
Task workflow
ClaimBuddy assignment
```

## Sprint 6 - Human Blockchain / Bookkeeping

Deliverables:

```text
Verified event model
Completion verification
Bookkeeping events
Payment record
Commission/referral basics
```

## Sprint 7 - TER / Proficiency / Dashboard

Deliverables:

```text
Basic SLA records
Basic TER
First offer vs final closeout variance
Quantum Dashboard v0.1
```

## Sprint 8 - Demo / Sponsor / Legal Review Queue

Deliverables:

```text
One Prompt Event demo
Sponsor position demo
Legal review issue register
Support tickets
Final acceptance tests
```

---

## 10. Definition of Done

A story is done only when:

```text
Feature works.
Permission rules are enforced.
Required events are recorded.
Required evidence rules are enforced.
Bookkeeping effects are created if applicable.
Role/designation logic is respected.
Acceptance criteria pass.
Audit trail is visible.
Documentation is updated if needed.
Legal-sensitive issues are flagged if applicable.
```

---

## 11. Working Conclusion

The backlog is where vision becomes work.

Season 1 should not build everything.

Season 1 should build the smallest truthful version of the whole architecture.

That means every MVP feature must carry the DNA of the future system:

```text
Identity
Role
Designation
Consent
Evidence
Event
Claim Request
Claim Caller
Bookkeeping
TER
Proficiency
Dashboard
```

If the backlog preserves those layers, the first operating cell can prove the whole idea.

If the backlog flattens those layers, ClaimStore becomes just another app.

Build the layers.

Protect the table.

Win the season.

Next I recommend **#17: User Flow Master Specification v0.1**.

That will turn this backlog into step-by-step workflows for Property Owner, Contractor, ISR, ClaimBuddy, Claim Caller, Platform Admin, Support, and Sponsor Viewer.
