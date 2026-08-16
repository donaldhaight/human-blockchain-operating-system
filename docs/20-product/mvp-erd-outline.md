---
id: mvp-erd
title: "MVP ERD Outline"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 58314
source_line_end: 60155
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# MVP_ERD_OUTLINE.md  
## Genesis ClaimStore Season 1 Repository  
### Core Entity Relationship Diagram Outline for the Season 1 MVP

---

## 1. Purpose

This document defines the initial Entity Relationship Diagram outline for the Genesis ClaimStore Season 1 MVP.

The goal is to show how the core objects connect before developers begin database design.

This is not the final schema.

This is the relationship map.

It should help backend developers, database designers, AI coding agents, QA agents, and product reviewers understand how the system spine connects:

```text id="as3o1l"
User
→ Entity
→ Role
→ Designation
→ Property
→ Lead
→ Project
→ Offer
→ Claim Request
→ ClaimStore Claim
→ Claim Decision
→ Evidence
→ Task
→ Human Blockchain Event
→ Bookkeeping Event
→ ClaimsBank Condition
→ Dashboard Metric
→ Sponsor Position
```

---

## 2. ERD Principle

The MVP data model must preserve accountability.

Every important action should be traceable through:

```text id="n6or40"
Actor User
Actor Entity
Actor Role
Actor Designation, if applicable
Related Object
Event
Evidence
Status Change
Bookkeeping Consequence
Dashboard Consequence
```

The ERD must not flatten:

```text id="6tqpwc"
Role into Designation
Claim Request into Claim Decision
Evidence Upload into Verification
Payment Record into Fund Custody
Sponsor Position into Ownership
Human Blockchain into File Upload
```

---

## 3. High-Level Relationship Spine

```text id="dc1xk0"
User
  ↓
UserProfile
  ↓
RoleAssignment
  ↓
Entity
  ↓
EntityLocation / Branch
  ↓
DesignationAssignment
  ↓
Property
  ↓
Lead
  ↓
Project
  ↓
Offer
  ↓
OfferVersion
  ↓
Job / Order / EquipmentOrder / OtherCharge
  ↓
ClaimRequest
  ↓
ClaimStoreClaim
  ↓
ClaimDecisionRecord
  ↓
Task / Evidence / Document / SignatureRecord
  ↓
Event
  ↓
HumanBlockchainEvent / BookkeepingEvent
  ↓
ClaimsBankCondition / TERMetric / ProficiencyMetric / DashboardMetric
```

---

## 4. Core Identity and Access Relationships

## 4.1 User

A User represents an individual person account.

Relationships:

```text id="dvopxz"
User 1 → 1 UserProfile
User 1 → many RoleAssignments
User 1 → many DesignationAssignments
User 1 → many Events as actor
User 1 → many EvidenceRecords as uploader
User 1 → many AgreementAcceptances
```

Key fields:

```text id="np2r22"
user_id
email
phone
status
created_at
updated_at
```

---

## 4.2 UserProfile

A UserProfile stores personal display/contact information.

Relationships:

```text id="63wpmo"
UserProfile many → 1 User
```

Key fields:

```text id="fllm56"
user_profile_id
user_id
first_name
last_name
display_name
preferred_contact_method
```

---

## 4.3 Entity

An Entity represents a company, household, platform entity, contractor, carrier, sponsor, or other participating organization.

Relationships:

```text id="bpujmy"
Entity 1 → many EntityLocations
Entity 1 → many RoleAssignments
Entity 1 → many DesignationAssignments
Entity 1 → many Projects, depending on entity type
Entity 1 → many Events as actor entity
Entity 1 → many SponsorPositions, if sponsor
```

Key fields:

```text id="pvdgcv"
entity_id
entity_type
legal_name
display_name
status
primary_contact_user_id
```

---

## 4.4 EntityLocation

EntityLocation represents branch, office, market location, or operating location.

Relationships:

```text id="5kdz4s"
EntityLocation many → 1 Entity
EntityLocation 1 → many Projects
EntityLocation 1 → many Leads
EntityLocation 1 → many MarketSettings
```

Key fields:

```text id="hawqad"
entity_location_id
entity_id
location_name
address
market_id
status
```

---

## 4.5 RoleAssignment

RoleAssignment connects User to Entity with a general role.

Relationships:

```text id="0opkme"
RoleAssignment many → 1 User
RoleAssignment many → 1 Entity
RoleAssignment may relate to EntityLocation
RoleAssignment 1 → many Events through actor_role
```

Key fields:

```text id="m7pfno"
role_assignment_id
user_id
entity_id
entity_location_id
role_name
status
assigned_by_user_id
assigned_at
revoked_at
```

Important rule:

```text id="z7t9kt"
RoleAssignment gives general access. It does not automatically create responsibility for a specific claim, project, task, request, or decision.
```

---

## 4.6 DesignationAssignment

DesignationAssignment connects User/Entity to responsibility on a specific object.

Relationships:

```text id="o9eycs"
DesignationAssignment many → 1 User
DesignationAssignment many → 1 Entity
DesignationAssignment many → 1 related object
DesignationAssignment 1 → many Events through actor_designation
```

Related object may be:

```text id="laayqq"
ClaimRequest
ClaimStoreClaim
Project
Offer
Task
ClaimDecisionRecord
ClaimsBankCondition
SupportTicket
```

Key fields:

```text id="jixb6c"
designation_assignment_id
designation_type
assigned_user_id
assigned_entity_id
related_object_type
related_object_id
authority_source
status
requires_acceptance_flag
assigned_by_user_id
assigned_at
accepted_at
revoked_at
```

Important rule:

```text id="8bevx1"
Designation is specific responsibility. Claim Caller is a designation.
```

---

## 5. Agreement and Authority Relationships

## 5.1 Agreement

An Agreement is a versioned legal/operating document.

Relationships:

```text id="d8xre0"
Agreement 1 → many AgreementAcceptances
Agreement may relate to EntityType or RoleType
```

Key fields:

```text id="84ssbv"
agreement_id
agreement_type
title
version
legal_review_status
effective_at
status
```

---

## 5.2 AgreementAcceptance

AgreementAcceptance records user acceptance.

Relationships:

```text id="uc8fii"
AgreementAcceptance many → 1 Agreement
AgreementAcceptance many → 1 User
AgreementAcceptance many → 1 Entity, optional
AgreementAcceptance 1 → 1 Event
```

Key fields:

```text id="opb3gu"
agreement_acceptance_id
agreement_id
user_id
entity_id
accepted_at
acceptance_event_id
ip_address_recorded_flag
```

Important rule:

```text id="94k1n4"
No user accepts agreements for another user unless valid delegated authority exists and the action is legally delegable.
```

---

## 5.3 DelegatedAuthorityRecord

DelegatedAuthorityRecord captures authorization for one user/entity to act in a defined capacity for another.

Relationships:

```text id="ckl6si"
DelegatedAuthorityRecord many → 1 granting_user
DelegatedAuthorityRecord many → 1 authorized_user
DelegatedAuthorityRecord may relate to Property, Project, ClaimRequest, or Entity
DelegatedAuthorityRecord 1 → many Events
```

Key fields:

```text id="8fgwf7"
delegated_authority_record_id
granting_user_id
authorized_user_id
granting_entity_id
authorized_entity_id
scope_type
scope_object_id
allowed_actions
authority_source
effective_at
expires_at
revoked_at
status
```

Legal sensitivity:

```text id="y9h67b"
CRITICAL
```

---

## 6. Property, Lead, and Project Relationships

## 6.1 Property

Property represents the insured/restoration location.

Relationships:

```text id="ep0xa2"
Property many → 1 owner_entity
Property 1 → many Leads
Property 1 → many Projects
Property 1 → many ClaimStoreClaims
Property 1 → many EvidenceRecords
Property 1 → many AnnualNeedDoneRecords
```

Key fields:

```text id="e2hg13"
property_id
owner_entity_id
address_line_1
city
state
postal_code
county
market_id
insurance_company_entity_id
mortgage_company_entity_id
status
```

---

## 6.2 AnnualNeedDoneRecord

AnnualNeedDoneRecord tracks property readiness outside a specific project.

Relationships:

```text id="owr4am"
AnnualNeedDoneRecord many → 1 Property
AnnualNeedDoneRecord many → 1 User or Entity responsible
AnnualNeedDoneRecord may create Events
```

Key fields:

```text id="m85z86"
annual_need_done_record_id
property_id
need_type
season_year
status
due_at
completed_at
completed_by_user_id
evidence_id
```

---

## 6.3 Lead

Lead represents a possible project opportunity.

Relationships:

```text id="apohap"
Lead many → 1 Property
Lead many → 1 ContractorEntity
Lead many → 1 EntityLocation / Branch
Lead may convert → 1 Project
Lead 1 → many Events
```

Key fields:

```text id="8laczm"
lead_id
property_id
contractor_entity_id
entity_location_id
lead_source
assigned_user_id
lead_status
converted_project_id
created_at
```

---

## 6.4 Project

Project represents contractor project workflow tied to property.

Relationships:

```text id="jf9b6w"
Project many → 1 Property
Project many → 1 ContractorEntity
Project many → 1 EntityLocation / Branch
Project may relate → 1 ClaimStoreClaim
Project 1 → many Offers
Project 1 → many Jobs
Project 1 → many Orders
Project 1 → many OtherCharges
Project 1 → many Tasks
Project 1 → many EvidenceRecords
Project 1 → many BookkeepingEvents
Project 1 → many PaymentRecords
Project 1 → many ProjectComplianceNeedDoneRecords
Project 1 → many Events
```

Key fields:

```text id="ovr0wc"
project_id
property_id
contractor_entity_id
entity_location_id
project_status
project_type
peril_type
market_id
claimstore_claim_id
project_lead_designation_id
created_from_lead_id
```

---

## 6.5 ProjectComplianceNeedDoneRecord

Tracks project-specific compliance items.

Relationships:

```text id="f7a9ge"
ProjectComplianceNeedDoneRecord many → 1 Project
ProjectComplianceNeedDoneRecord may relate → Evidence
ProjectComplianceNeedDoneRecord may create → ClaimsBankCondition
```

Key fields:

```text id="hkg59i"
project_compliance_need_done_record_id
project_id
need_type
required_flag
status
completed_at
completed_by_user_id
evidence_id
waived_reason
```

---

## 7. Offer, Job, Order, and Charge Relationships

## 7.1 Offer

Offer represents contractor economic proposal.

Relationships:

```text id="6gj05t"
Offer many → 1 Project
Offer 1 → many OfferVersions
Offer 1 → many Jobs
Offer 1 → many OtherCharges
Offer may create → First Offer Baseline
Offer may relate → ClaimRequest
Offer 1 → many Events
```

Key fields:

```text id="wx4h81"
offer_id
project_id
offer_status
pricing_method
selling_price
estimated_total_cost
first_offer_baseline_flag
current_version_id
shared_at
accepted_at
accepted_by_user_id
```

Important rule:

```text id="qqxpt5"
The first shared offer becomes the First Offer Baseline.
```

---

## 7.2 OfferVersion

OfferVersion preserves snapshots of offer changes.

Relationships:

```text id="1p5u2g"
OfferVersion many → 1 Offer
OfferVersion may relate → ClaimRequestPackageSnapshot
OfferVersion may compare → FinalCloseout / ProficiencyMetric
```

Key fields:

```text id="pbb267"
offer_version_id
offer_id
version_number
version_status
snapshot_json
created_by_user_id
created_at
shared_flag
baseline_flag
superseded_by_offer_version_id
```

---

## 7.3 Job

Job represents scope item or work category.

Relationships:

```text id="6czequ"
Job many → 1 Project
Job many → 1 Offer
Job 1 → many Orders
Job 1 → many EquipmentOrders
Job 1 → many Events
```

Key fields:

```text id="y6e94l"
job_id
project_id
offer_id
job_type
description
estimated_price
estimated_cost
actual_cost
status
```

---

## 7.4 Order

Order represents material, labor, turnkey, or service order.

Relationships:

```text id="3jisxz"
Order many → 1 Job
Order many → 1 Project
Order may create → BookkeepingEvent
```

Key fields:

```text id="hj4zf8"
order_id
project_id
job_id
order_type
vendor_entity_id
estimated_amount
actual_amount
order_status
```

Order types:

```text id="x96a2w"
MATERIAL
LABOR
TURNKEY
SERVICE
```

---

## 7.5 EquipmentOrder

EquipmentOrder represents equipment-specific order/rental/cost.

Relationships:

```text id="dhwcna"
EquipmentOrder many → 1 Project
EquipmentOrder may relate → Job
EquipmentOrder may create → BookkeepingEvent
```

Key fields:

```text id="cv0eze"
equipment_order_id
project_id
job_id
equipment_type
vendor_entity_id
estimated_amount
actual_amount
status
```

---

## 7.6 OtherCharge

OtherCharge represents non-job charges.

Relationships:

```text id="o7pbt3"
OtherCharge many → 1 Project
OtherCharge many → 1 Offer, optional
OtherCharge may create → BookkeepingEvent
OtherCharge may affect → ClaimRequest
```

Key fields:

```text id="2ka2qc"
other_charge_id
project_id
offer_id
charge_type
description
estimated_amount
actual_amount
approval_status
approved_by_user_id
approved_at
```

Examples:

```text id="0w0v70"
Permit
Trip
Engineering
Measurement Report
Estimate Service
Supplement Processing
Collection Letter
Warranty Administration
Mortgage Processing
```

---

## 8. Claim Request and ClaimStore Claim Relationships

## 8.1 ClaimRequest

ClaimRequest represents a structured request/package submitted in relation to a claim.

Relationships:

```text id="akya1n"
ClaimRequest many → 1 Project
ClaimRequest many → 1 Property
ClaimRequest many → 1 ClaimStoreClaim
ClaimRequest may create → ClaimStoreClaim if first
ClaimRequest 1 → many ClaimRequestPackageSnapshots
ClaimRequest 1 → many ClaimDecisionRecords
ClaimRequest 1 → many EvidenceRecords
ClaimRequest 1 → many Events
```

Key fields:

```text id="7839h1"
claim_request_id
claimstore_claim_id
project_id
property_id
claim_request_type
claim_request_status
requested_amount
authorized_by_user_id
submitted_by_user_id
submitted_at
```

Important rule:

```text id="4hbw73"
First Claim Request creates ClaimStore Claim.
```

---

## 8.2 ClaimRequestPackageSnapshot

Preserves exactly what was submitted.

Relationships:

```text id="33gn65"
ClaimRequestPackageSnapshot many → 1 ClaimRequest
ClaimRequestPackageSnapshot may include → OfferVersion
ClaimRequestPackageSnapshot may include → EvidenceRecords
ClaimRequestPackageSnapshot may include → Documents
```

Key fields:

```text id="9y11q8"
claim_request_package_snapshot_id
claim_request_id
offer_version_id
snapshot_json
created_at
submitted_at
document_ids
evidence_ids
```

Important rule:

```text id="2w0dsf"
Snapshot is read-only after submission.
```

---

## 8.3 ClaimStoreClaim

ClaimStoreClaim is the neutral claim transaction container.

Relationships:

```text id="lrjg8i"
ClaimStoreClaim many → 1 Property
ClaimStoreClaim may relate → Project
ClaimStoreClaim 1 → many ClaimRequests
ClaimStoreClaim 1 → many ClaimDecisionRecords
ClaimStoreClaim 1 → many EvidenceRecords
ClaimStoreClaim 1 → many Tasks
ClaimStoreClaim 1 → many HumanBlockchainEvents
ClaimStoreClaim 1 → many ClaimsBankConditions
ClaimStoreClaim 1 → many Events
```

Key fields:

```text id="ujb2h2"
claimstore_claim_id
property_id
project_id
insurance_company_entity_id
insurance_claim_number
claimstore_claim_status
created_from_claim_request_id
created_at
```

---

## 8.4 ClaimDecisionRecord

ClaimDecisionRecord records platform decision or external determination.

Relationships:

```text id="bcw9et"
ClaimDecisionRecord many → 1 ClaimRequest
ClaimDecisionRecord many → 1 ClaimStoreClaim
ClaimDecisionRecord may relate → ClaimCaller DesignationAssignment
ClaimDecisionRecord may include → EvidenceRecords
ClaimDecisionRecord 1 → many Events
```

Key fields:

```text id="g0200x"
claim_decision_record_id
claim_request_id
claimstore_claim_id
decision_type
decision_amount
decision_status
claim_caller_designation_id
claim_caller_identified_flag
authority_source
external_flag
source_document_id
recorded_by_user_id
recorded_at
```

Important rule:

```text id="iohca2"
Do not falsely create Claim Caller authority.
```

---

## 9. Evidence, Documents, Signatures, and Tasks

## 9.1 Evidence

Evidence is structured proof connected to an object.

Relationships:

```text id="h92g1e"
Evidence many → 1 uploaded_by_user
Evidence many → 1 related object
Evidence may relate → Task
Evidence may relate → ClaimRequest
Evidence may relate → ClaimDecisionRecord
Evidence may be used by → HumanBlockchainEvent
Evidence 1 → many Events
```

Key fields:

```text id="sg415s"
evidence_id
evidence_type
related_object_type
related_object_id
uploaded_by_user_id
uploaded_at
evidence_status
verification_status
verified_by_user_id
verified_at
interested_party_flag
trust_weight
```

Important rule:

```text id="j6bg6u"
Upload is not verification.
```

---

## 9.2 Document

Document stores file metadata.

Relationships:

```text id="o7p7z7"
Document many → 1 uploaded_by_user
Document may relate → Evidence
Document may relate → ClaimRequestPackageSnapshot
Document may relate → Agreement
```

Key fields:

```text id="atb28s"
document_id
file_name
file_type
mime_type
storage_location
checksum
uploaded_by_user_id
uploaded_at
visibility_level
```

---

## 9.3 SignatureRecord

SignatureRecord captures consent/signature metadata.

Relationships:

```text id="06go7q"
SignatureRecord many → 1 User
SignatureRecord many → 1 related object
SignatureRecord may relate → AgreementAcceptance
SignatureRecord may relate → OfferAcceptance
SignatureRecord 1 → 1 Event
```

Key fields:

```text id="bq5whz"
signature_record_id
signed_by_user_id
related_object_type
related_object_id
signature_type
signed_at
ip_address_recorded_flag
user_agent_recorded_flag
signature_event_id
```

---

## 9.4 Task

Task represents work to be completed by ClaimBuddy, field verifier, support, or another user.

Relationships:

```text id="zxf4a5"
Task many → 1 related object
Task many → 1 assigned_user
Task may require → Checklist
Task may require → Evidence
Task may create → HumanBlockchainEvent
Task 1 → many Events
```

Key fields:

```text id="t3rj3o"
task_id
task_type
related_object_type
related_object_id
assigned_user_id
assigned_entity_id
task_status
requires_evidence_flag
requires_verification_flag
submitted_at
verified_at
```

---

## 9.5 Checklist

Checklist represents structured requirements for a task.

Relationships:

```text id="6r61uo"
Checklist many → 1 Task
Checklist 1 → many ChecklistItems
Checklist may relate → Evidence
```

Key fields:

```text id="9ksh6q"
checklist_id
task_id
checklist_type
status
completed_at
submitted_at
```

---

## 10. Event, Human Blockchain, and Bookkeeping Relationships

## 10.1 Event

Event is the general ledger of meaningful actions.

Relationships:

```text id="hp29x6"
Event many → 1 actor_user
Event many → 1 actor_entity
Event may relate → RoleAssignment
Event may relate → DesignationAssignment
Event many → 1 related object
Event may create → HumanBlockchainEvent
Event may create → BookkeepingEvent
Event may affect → ClaimsBankCondition
Event may affect → DashboardMetric
```

Key fields:

```text id="ehp5zd"
event_id
event_category
event_type
actor_user_id
actor_entity_id
actor_role_id
actor_designation_id
related_object_type
related_object_id
status_before
status_after
occurred_at
recorded_at
legal_sensitivity
visibility_level
```

Important rule:

```text id="i8g07r"
Events are append-only.
```

---

## 10.2 HumanBlockchainEvent

HumanBlockchainEvent represents verified event record.

Relationships:

```text id="c7n48r"
HumanBlockchainEvent 1 → 1 source Event
HumanBlockchainEvent many → many Evidence
HumanBlockchainEvent may relate → Task
HumanBlockchainEvent may relate → Project
HumanBlockchainEvent may relate → ClaimStoreClaim
HumanBlockchainEvent may affect → ClaimsBankCondition
HumanBlockchainEvent may affect → DashboardMetric
```

Key fields:

```text id="hvffmj"
human_blockchain_event_id
source_event_id
related_object_type
related_object_id
verified_by_user_id
verification_level
evidence_ids
trust_weight
interested_party_flag
created_at
```

Important rule:

```text id="loj3f8"
No evidence means no verified Human Blockchain Event.
```

---

## 10.3 BookkeepingEvent

BookkeepingEvent represents financial/accounting consequence.

Relationships:

```text id="h0of24"
BookkeepingEvent 1 → 1 trigger Event
BookkeepingEvent may relate → Project
BookkeepingEvent may relate → PaymentRecord
BookkeepingEvent may relate → OtherCharge
BookkeepingEvent may affect → ClaimsBankCondition
BookkeepingEvent may affect → DashboardMetric
```

Key fields:

```text id="v4qf8a"
bookkeeping_event_id
trigger_event_id
related_object_type
related_object_id
bookkeeping_category
amount
currency
estimated_or_actual
status
created_at
posted_at
```

Important rule:

```text id="0r1reb"
No orphan bookkeeping events.
```

---

## 11. Payment, Commission, Referral, and Revenue Relationships

## 11.1 PaymentRecord

PaymentRecord captures recorded payment information.

Relationships:

```text id="9xs7qe"
PaymentRecord many → 1 Project
PaymentRecord may relate → ClaimStoreClaim
PaymentRecord may create → BookkeepingEvent
PaymentRecord may include → Evidence
```

Key fields:

```text id="9jpr23"
payment_record_id
project_id
claimstore_claim_id
paid_by_entity_id
paid_to_entity_id
amount
currency
payment_date
payment_method
payment_status
evidence_id
```

Important rule:

```text id="76k8wf"
PaymentRecord does not mean platform-held funds.
```

---

## 11.2 CommissionRecord

CommissionRecord tracks commission accrual/payment.

Relationships:

```text id="54t9px"
CommissionRecord many → 1 Project
CommissionRecord many → 1 User or Entity
CommissionRecord may relate → BookkeepingEvent
```

Key fields:

```text id="t46wbt"
commission_record_id
project_id
recipient_user_id
recipient_entity_id
basis_amount
commission_amount
commission_status
bookkeeping_event_id
```

---

## 11.3 ReferralFeeRecord

ReferralFeeRecord tracks referral/win fee candidates.

Relationships:

```text id="65aubq"
ReferralFeeRecord many → 1 Lead or Project
ReferralFeeRecord many → 1 referring_user/entity
ReferralFeeRecord may relate → BookkeepingEvent
```

Key fields:

```text id="nmg3xb"
referral_fee_record_id
lead_id
project_id
referring_user_id
referring_entity_id
basis_amount
referral_fee_amount
status
legal_review_status
```

Legal sensitivity:

```text id="433e7a"
HIGH
```

---

## 11.4 VirtualItem and RevenueEvent

VirtualItem defines billable items/services.

Relationships:

```text id="lwxwt4"
VirtualItem 1 → many RevenueEvents
RevenueEvent many → 1 Entity
RevenueEvent may relate → Project, ClaimRequest, Task, or SponsorPosition
RevenueEvent may create → BookkeepingEvent
```

Key fields:

```text id="p3gyk8"
virtual_item_id
item_code
item_name
item_category
default_price
legal_review_status
active_flag
```

---

## 12. TER, SLA, and Proficiency Relationships

## 12.1 SLARecord

SLARecord defines or records expected performance.

Relationships:

```text id="tyg32j"
SLARecord may relate → User
SLARecord may relate → Entity
SLARecord may relate → RoleAssignment
SLARecord may relate → DesignationAssignment
SLARecord may relate → Task
SLARecord may create → TERMetric
```

Key fields:

```text id="iiwnuo"
sla_record_id
related_object_type
related_object_id
sla_type
expected_due_at
actual_completed_at
sla_status
```

---

## 12.2 TERMetric

TERMetric measures performance.

Relationships:

```text id="fcr9ed"
TERMetric many → 1 User / Entity / Role / Designation
TERMetric may relate → Task
TERMetric may relate → Project
TERMetric may affect → DashboardMetric
```

Key fields:

```text id="9ej26n"
ter_metric_id
measured_user_id
measured_entity_id
measured_role_id
measured_designation_id
task_type
measurement_period_start
measurement_period_end
overall_ter_score
relevant_average_score
consecutive_below_average_weeks
ter_review_flag_status
```

Important rule:

```text id="0kb7fy"
TER is internal in Phase 1.
```

---

## 12.3 ProficiencyMetric

ProficiencyMetric compares First Offer Baseline to final closeout.

Relationships:

```text id="ky64y4"
ProficiencyMetric many → 1 Project
ProficiencyMetric may relate → User / Entity / Role / Designation
ProficiencyMetric uses → OfferVersion baseline
ProficiencyMetric uses → Final Closeout
ProficiencyMetric may affect → DashboardMetric
```

Key fields:

```text id="mux0tp"
proficiency_metric_id
project_id
baseline_offer_version_id
final_closeout_event_id
baseline_selling_price
final_selling_price
variance_amount
variance_percent
created_at
```

---

## 13. ClaimsBank and Dashboard Relationships

## 13.1 ClaimsBankCondition

ClaimsBankCondition tracks release-condition readiness.

Relationships:

```text id="9yg6qh"
ClaimsBankCondition many → 1 Project
ClaimsBankCondition may relate → ClaimStoreClaim
ClaimsBankCondition may relate → HumanBlockchainEvent
ClaimsBankCondition may relate → BookkeepingEvent
ClaimsBankCondition may relate → Evidence
ClaimsBankCondition may affect → DashboardMetric
```

Key fields:

```text id="lr2dpe"
claimsbank_condition_id
condition_type
related_object_type
related_object_id
condition_status
satisfied_by_event_id
satisfied_by_evidence_id
satisfied_at
legal_review_status
```

Important rule:

```text id="zwc4a7"
ClaimsBankCondition is readiness logic, not fund movement.
```

---

## 13.2 DashboardMetric

DashboardMetric stores actual, assumption, forecast, or scenario metric.

Relationships:

```text id="9y4njx"
DashboardMetric many → 1 Scenario, optional
DashboardMetric may relate → Project, ClaimStoreClaim, TERMetric, ClaimsBankCondition, SponsorPosition
```

Key fields:

```text id="2wytzm"
dashboard_metric_id
metric_name
metric_category
market_id
season_id
actual_value
assumption_value
forecast_value
scenario_id
confidence_score
visibility_level
legal_sensitivity
```

Important rule:

```text id="d1b7pi"
Separate actual data, assumptions, forecasts, and scenarios.
```

---

## 13.3 Scenario

Scenario stores dashboard assumptions.

Relationships:

```text id="d19miv"
Scenario 1 → many DashboardMetrics
Scenario may relate → SponsorPosition
Scenario may relate → Market
Scenario may relate → Season
```

Key fields:

```text id="dayj95"
scenario_id
scenario_name
market_id
season_id
created_by_user_id
scenario_status
assumption_json
legal_review_status
```

---

## 14. Sponsor Relationships

## 14.1 SponsorPosition

SponsorPosition defines sponsorship, not ownership.

Relationships:

```text id="mgn92u"
SponsorPosition many → 1 Sponsor Entity
SponsorPosition may relate → Market
SponsorPosition may relate → Season
SponsorPosition may relate → Scenario
SponsorPosition may define → Dashboard access
SponsorPosition 1 → many Events
```

Key fields:

```text id="zmzlyv"
sponsor_position_id
sponsor_entity_id
sponsor_category
stakeholder_group
market_id
territory
season
term_start
term_end
rights_summary
obligations_summary
dashboard_access_level
data_access_level
legal_review_status
position_status
```

Important rule:

```text id="pwbvrf"
SponsorPosition does not imply ownership, equity, governance, claim authority, banking authority, or private user data access.
```

---

## 15. Support and Admin Relationships

## 15.1 SupportTicket

SupportTicket tracks assistance.

Relationships:

```text id="4aj3hf"
SupportTicket many → 1 created_by_user
SupportTicket may relate → Property, Project, ClaimRequest, ClaimStoreClaim, Task
SupportTicket may have → SupportOwner Designation
SupportTicket 1 → many Events
```

Key fields:

```text id="cwm9xh"
support_ticket_id
created_by_user_id
related_object_type
related_object_id
category
priority
support_status
support_owner_designation_id
```

Important rule:

```text id="gkca0g"
Support assists; users decide.
```

---

## 15.2 AdminCorrection

AdminCorrection may be implemented as event type rather than separate table.

Relationships:

```text id="ax5gva"
AdminCorrection Event relates → original Event or Record
AdminCorrection may create → Correction Event, Superseding Event, Reversal Event
```

Key fields if separate table:

```text id="ezn61t"
admin_correction_id
object_type
object_id
original_value
corrected_value
reason
requested_by_user_id
approved_by_user_id
correction_event_id
status
```

Important rule:

```text id="x8nesr"
Admin corrections preserve history.
```

---

## 16. Simplified Relationship Diagram

```text id="dkn9er"
User
 ├── UserProfile
 ├── RoleAssignment ── Entity
 ├── DesignationAssignment ── RelatedObject
 ├── AgreementAcceptance ── Agreement
 └── Event(actor)

Entity
 ├── EntityLocation
 ├── RoleAssignment
 ├── DesignationAssignment
 ├── Project
 └── SponsorPosition

Property
 ├── Lead
 ├── Project
 ├── ClaimStoreClaim
 ├── Evidence
 └── AnnualNeedDoneRecord

Lead
 └── Project

Project
 ├── Offer ── OfferVersion
 ├── Job ── Order / EquipmentOrder
 ├── OtherCharge
 ├── ClaimRequest ── ClaimRequestPackageSnapshot
 ├── ClaimStoreClaim
 ├── Task ── Checklist
 ├── Evidence
 ├── PaymentRecord
 ├── BookkeepingEvent
 ├── TERMetric
 ├── ProficiencyMetric
 └── ClaimsBankCondition

ClaimStoreClaim
 ├── ClaimRequest
 ├── ClaimDecisionRecord
 ├── Evidence
 ├── Task
 ├── HumanBlockchainEvent
 └── ClaimsBankCondition

Event
 ├── HumanBlockchainEvent
 ├── BookkeepingEvent
 ├── DashboardMetric
 └── AdminCorrection / Superseding Event

SponsorPosition
 ├── Scenario
 └── DashboardMetric
```

---

## 17. MVP Tables Required

P0 tables:

```text id="4c10an"
users
user_profiles
entities
entity_locations
role_assignments
designation_assignments
agreements
agreement_acceptances
properties
leads
projects
offers
offer_versions
jobs
other_charges
claim_requests
claim_request_package_snapshots
claimstore_claims
claim_decision_records
tasks
checklists
evidence_records
documents
signature_records
events
human_blockchain_events
bookkeeping_events
payment_records
proficiency_metrics
claimsbank_conditions
dashboard_metrics
sponsor_positions
support_tickets
```

P1 tables:

```text id="e3h1p9"
orders
equipment_orders
annual_need_done_records
project_compliance_need_done_records
sla_records
ter_metrics
commission_records
referral_fee_records
virtual_items
revenue_events
scenarios
delegated_authority_records
source_documents
```

---

## 18. Relationship Acceptance Tests

The ERD passes MVP readiness if:

```text id="q7il4d"
A User can belong to an Entity through RoleAssignment.
A User can hold a specific DesignationAssignment on a ClaimRequest, Project, Offer, Task, or ClaimDecision.
A Property can contain Leads, Projects, ClaimStoreClaims, Evidence, and Need/Done records.
A Lead can convert to Project.
A Project can contain Offers, Jobs, OtherCharges, ClaimRequests, Tasks, Evidence, Payments, and BookkeepingEvents.
First shared Offer creates preserved OfferVersion baseline.
A ClaimRequest can create a ClaimStoreClaim if first.
A ClaimDecisionRecord can distinguish Claim Caller decision from External Determination.
Evidence upload and verification are separate.
A Task can create a HumanBlockchainEvent only after evidence verification.
A BookkeepingEvent links to a Trigger Event.
A PaymentRecord does not imply fund custody.
A ClaimsBankCondition can be satisfied by event/evidence without moving money.
A DashboardMetric can separate actual, assumption, and forecast values.
A SponsorPosition can access only permitted dashboard data.
Admin corrections preserve original events.
```

---

## 19. Working Conclusion

The MVP ERD must make the architecture durable.

The database is not just storage.

It is a trust map.

It must show:

```text id="h6pe6f"
Who acted
For whom
Under what role
Under what designation
On what object
With what evidence
Creating what event
Changing what status
Triggering what bookkeeping
Supporting what dashboard
Satisfying what readiness condition
```

If the ERD preserves those relationships, the product can grow.

If it flattens them, the architecture is lost.

Build the relationships correctly.

The rest can iterate.

Taking that breath now.

The stack is organized. The spine is visible. The architecture is holding.
