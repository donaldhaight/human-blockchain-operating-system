---
id: api-event-schema
title: "API Event Schema Outline"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 55173
source_line_end: 56897
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# API_EVENT_SCHEMA_OUTLINE.md  
## Genesis ClaimStore Season 1 Repository  
### Event Ledger Schema, Event Categories, Event Types, Required Fields, Status Transitions, and Sample Payloads

---

## 1. Purpose

This document defines the initial API event schema outline for the Genesis ClaimStore Season 1 MVP.

The event ledger is the spine of ClaimStore.

Every meaningful action should create an event.

The event record should answer:

```text id="ay9huk"
Who acted?
For what entity?
Under what entity role?
Under what designation, if applicable?
On what object?
What changed?
What evidence was attached?
Was consent involved?
Was verification involved?
Was bookkeeping triggered?
Was a Human Blockchain event created?
Was a ClaimsBank condition affected?
Was TER/SLA affected?
Was the dashboard affected?
```

If the system cannot answer those questions, the event model is incomplete.

---

## 2. Core Principle

ClaimStore is event-driven.

Objects store current state.

Events store history.

The event ledger should be:

```text id="uv2c6s"
Append-only
Timestamped
Actor-aware
Entity-aware
Role-aware
Designation-aware
Object-linked
Evidence-linked
Bookkeeping-linked
Legally cautious
Dashboard-readable
Audit-friendly
```

High-consequence events must not be overwritten.

Corrections should create correction, reversal, or superseding events.

---

## 3. Event Object

## 3.1 Required Fields

Every event should include:

```text id="wq063k"
event_id
event_category
event_type
event_label
occurred_at
recorded_at
actor_user_id
actor_entity_id
actor_entity_type
actor_role_id
actor_role_name
actor_designation_id
actor_designation_name
authority_source
related_object_type
related_object_id
related_parent_object_type
related_parent_object_id
status_before
status_after
event_summary
source_system
visibility_level
legal_sensitivity
created_by_system
```

---

## 3.2 Optional Fields

```text id="j9a0ba"
evidence_ids
document_ids
signature_ids
task_id
claim_request_id
claimstore_claim_id
project_id
offer_id
job_id
order_id
other_charge_id
payment_record_id
bookkeeping_event_id
human_blockchain_event_id
claimsbank_condition_id
ter_metric_id
sla_record_id
proficiency_metric_id
dashboard_metric_id
support_ticket_id
sponsor_position_id
external_reference_id
integration_source
correction_of_event_id
supersedes_event_id
reversal_of_event_id
reason_code
notes
metadata_json
```

---

## 3.3 Recommended JSON Shape

```json
{
  "event_id": "evt_000001",
  "event_category": "CONSENT",
  "event_type": "OFFER_ACCEPTED",
  "event_label": "Offer Accepted",
  "occurred_at": "2026-11-01T14:25:00Z",
  "recorded_at": "2026-11-01T14:25:02Z",
  "actor_user_id": "usr_property_owner_001",
  "actor_entity_id": "ent_household_001",
  "actor_entity_type": "PROPERTY_OWNER",
  "actor_role_id": "role_property_owner",
  "actor_role_name": "Property Owner",
  "actor_designation_id": null,
  "actor_designation_name": null,
  "authority_source": "SELF",
  "related_object_type": "OFFER",
  "related_object_id": "offer_000001",
  "related_parent_object_type": "PROJECT",
  "related_parent_object_id": "project_000001",
  "status_before": "SHARED",
  "status_after": "ACCEPTED",
  "event_summary": "Property Owner accepted Offer offer_000001.",
  "source_system": "CLAIMSTORE",
  "visibility_level": "PARTIES_TO_PROJECT",
  "legal_sensitivity": "HIGH",
  "created_by_system": false,
  "evidence_ids": [],
  "document_ids": [],
  "signature_ids": ["sig_000001"],
  "metadata_json": {
    "ip_address_recorded": true,
    "user_agent_recorded": true,
    "consent_text_version": "offer_acceptance_v0.1"
  }
}
```

---

## 4. Event Categories

Use these core event categories:

```text id="iy0h66"
IDENTITY
ENTITY
ROLE
DESIGNATION
AGREEMENT
PROPERTY
LEAD
PROJECT
OFFER
JOB_ORDER
CLAIM_REQUEST
CLAIM_DECISION
EVIDENCE
TASK
HUMAN_BLOCKCHAIN
BOOKKEEPING
PAYMENT
NEED_DONE
TER_SLA
CLAIMSBANK
DASHBOARD
SPONSOR
SUPPORT
ADMIN_CORRECTION
NOTIFICATION
INTEGRATION_IMPORT
SECURITY
DEMO
```

---

# 5. Event Category Definitions and Example Types

## 5.1 IDENTITY Events

Purpose:

```text id="3y4q6j"
Track user creation, login, profile changes, authentication, and user state.
```

Example event types:

```text id="8m1e3e"
USER_CREATED
USER_LOGGED_IN
USER_PROFILE_UPDATED
USER_DEACTIVATED
PASSWORD_RESET_REQUESTED
DEMO_USER_SWITCHED
```

Legal sensitivity:

```text id="palx4p"
LOW_TO_MODERATE
```

---

## 5.2 ENTITY Events

Purpose:

```text id="qby5o8"
Track creation and updates of entities.
```

Example event types:

```text id="1nue6x"
ENTITY_CREATED
ENTITY_UPDATED
ENTITY_DEACTIVATED
ENTITY_LOCATION_ADDED
ENTITY_STATUS_CHANGED
```

Legal sensitivity:

```text id="b6qxhw"
MODERATE
```

---

## 5.3 ROLE Events

Purpose:

```text id="a4br8n"
Track assignment and removal of general entity roles.
```

Example event types:

```text id="vz0zlg"
ROLE_ASSIGNED
ROLE_ACCEPTED
ROLE_REMOVED
ROLE_SUSPENDED
ROLE_RESTORED
```

Legal sensitivity:

```text id="sl5r5f"
MODERATE
```

---

## 5.4 DESIGNATION Events

Purpose:

```text id="juspd8"
Track claim/project/task/request/decision-specific responsibility.
```

Example event types:

```text id="t9x25q"
DESIGNATION_ASSIGNED
DESIGNATION_ACCEPTED
DESIGNATION_DECLINED
DESIGNATION_TRANSFERRED
DESIGNATION_REVOKED
CLAIM_CALLER_ASSIGNED
CLAIM_CALLER_NOT_IDENTIFIED
AUTHORITY_SOURCE_RECORDED
```

Legal sensitivity:

```text id="yhptjo"
HIGH
```

---

## 5.5 AGREEMENT Events

Purpose:

```text id="zpm970"
Track agreement presentation and acceptance.
```

Example event types:

```text id="p0x752"
AGREEMENT_VIEWED
AGREEMENT_ACCEPTED
AGREEMENT_DECLINED
AGREEMENT_VERSION_UPDATED
DELEGATED_AUTHORITY_GRANTED
DELEGATED_AUTHORITY_REVOKED
```

Legal sensitivity:

```text id="e6rgki"
HIGH
```

Critical rule:

```text id="lnmck5"
No user may accept an agreement for another user unless valid delegated authority exists and the action itself is delegable.
```

---

## 5.6 PROPERTY Events

Purpose:

```text id="3l7oma"
Track property file creation and updates.
```

Example event types:

```text id="pq0ta7"
PROPERTY_CREATED
PROPERTY_UPDATED
POLICY_INFO_ADDED
MORTGAGE_INFO_ADDED
PROPERTY_DOCUMENT_UPLOADED
ANNUAL_NEED_DONE_UPDATED
```

Legal sensitivity:

```text id="ab2k15"
MODERATE_TO_HIGH
```

---

## 5.7 LEAD Events

Purpose:

```text id="39xeo3"
Track contractor lead intake and conversion.
```

Example event types:

```text id="6kiytw"
LEAD_CREATED
LEAD_UPDATED
LEAD_ASSIGNED
LEAD_STATUS_CHANGED
LEAD_CONVERTED_TO_PROJECT
LEAD_MARKED_LOST
```

Legal sensitivity:

```text id="qhqbmo"
MODERATE
```

---

## 5.8 PROJECT Events

Purpose:

```text id="0uzh2c"
Track project lifecycle.
```

Example event types:

```text id="207o7w"
PROJECT_CREATED
PROJECT_UPDATED
PROJECT_STATUS_CHANGED
PROJECT_LOCKED
PROJECT_REOPENED
PROJECT_CLOSED
FINAL_CLOSEOUT_COMPLETED
PROFICIENCY_METRIC_CREATED
```

Legal sensitivity:

```text id="joxkas"
MODERATE
```

---

## 5.9 OFFER Events

Purpose:

```text id="b5ravw"
Track offers, offer versions, sharing, acceptance, rejection, revision, and baseline creation.
```

Example event types:

```text id="tqxceb"
OFFER_DRAFT_CREATED
OFFER_UPDATED
OFFER_PREVIEWED
OFFER_SHARED
FIRST_OFFER_BASELINE_CREATED
OFFER_VIEWED
OFFER_ACCEPTED
OFFER_REJECTED
OFFER_QUESTIONED
OFFER_REVISED
OFFER_WITHDRAWN
```

Legal sensitivity:

```text id="0tjcpb"
HIGH
```

Critical rules:

```text id="ts73x1"
First shared offer creates First Offer Baseline.
Only Property Owner or valid delegate can accept the offer.
```

---

## 5.10 JOB_ORDER Events

Purpose:

```text id="yf6o6g"
Track jobs, material orders, labor orders, turnkey orders, equipment orders, and other charges.
```

Example event types:

```text id="1zvrei"
JOB_ADDED
JOB_UPDATED
JOB_REMOVED
MATERIAL_ORDER_CREATED
LABOR_ORDER_CREATED
TURNKEY_ORDER_CREATED
EQUIPMENT_ORDER_CREATED
OTHER_CHARGE_ADDED
OTHER_CHARGE_APPROVED
OTHER_CHARGE_REJECTED
ACTUAL_COST_ENTERED
```

Legal sensitivity:

```text id="8b1bzc"
MODERATE
```

Potential bookkeeping trigger:

```text id="5zn62v"
OTHER_CHARGE_APPROVED
ACTUAL_COST_ENTERED
```

---

## 5.11 CLAIM_REQUEST Events

Purpose:

```text id="9x0ebr"
Track claim request package creation, preview, authorization, submission, delivery, supplement, and final requests.
```

Example event types:

```text id="9cw9ch"
CLAIM_REQUEST_DRAFT_CREATED
CLAIM_REQUEST_PACKAGE_PREVIEWED
CLAIM_REQUEST_AUTHORIZATION_REQUESTED
CLAIM_REQUEST_AUTHORIZED
CLAIM_REQUEST_SUBMITTED
CLAIM_REQUEST_DELIVERED
CLAIMSTORE_CLAIM_CREATED
SUPPLEMENTAL_CLAIM_REQUEST_CREATED
FINAL_CLAIM_REQUEST_CREATED
CLAIM_REQUEST_STATUS_CHANGED
```

Legal sensitivity:

```text id="i1avev"
HIGH
```

Critical rule:

```text id="co9ntc"
First Claim Request creates ClaimStore Claim.
```

---

## 5.12 CLAIM_DECISION Events

Purpose:

```text id="mslr2g"
Track Claim Caller assignment, platform claim decision, external determination, holds, rejections, approvals, and information requests.
```

Example event types:

```text id="eyus6m"
CLAIM_CALLER_ASSIGNED
CLAIM_DECISION_RECORDED
EXTERNAL_DETERMINATION_RECORDED
CLAIM_CALLER_NOT_IDENTIFIED
CLAIM_REQUEST_APPROVED
CLAIM_REQUEST_REJECTED
CLAIM_REQUEST_HELD
MORE_INFORMATION_REQUESTED
AUTHORITY_SOURCE_UNKNOWN_RECORDED
```

Legal sensitivity:

```text id="pjz55k"
CRITICAL
```

Critical rule:

```text id="fgjs3d"
Do not falsely create Claim Caller authority.
```

---

## 5.13 EVIDENCE Events

Purpose:

```text id="ds58tw"
Track evidence upload, review, verification, rejection, and linking.
```

Example event types:

```text id="izsgd3"
EVIDENCE_UPLOADED
EVIDENCE_LINKED_TO_OBJECT
EVIDENCE_REVIEW_REQUESTED
EVIDENCE_VERIFIED
EVIDENCE_REJECTED
EVIDENCE_RETURNED_FOR_MORE_INFO
EVIDENCE_SUPERSEDED
```

Legal sensitivity:

```text id="ug4lxp"
HIGH
```

Critical rule:

```text id="znd3b5"
Upload is not verification.
```

---

## 5.14 TASK Events

Purpose:

```text id="rvcfp1"
Track ClaimBuddy and field tasks.
```

Example event types:

```text id="84ecpw"
TASK_CREATED
TASK_ASSIGNED
TASK_ACCEPTED
TASK_EN_ROUTE
TASK_ON_SITE
CHECKLIST_ITEM_COMPLETED
CHECKLIST_SUBMITTED
TASK_SUBMITTED
TASK_VERIFIED
TASK_REJECTED
TASK_COMPLETED
```

Legal sensitivity:

```text id="n41axd"
HIGH
```

---

## 5.15 HUMAN_BLOCKCHAIN Events

Purpose:

```text id="h5jxfj"
Track verified, evidence-backed human events.
```

Example event types:

```text id="sxt9n4"
HUMAN_BLOCKCHAIN_EVENT_CREATED
HUMAN_BLOCKCHAIN_EVENT_FLAGGED
HUMAN_BLOCKCHAIN_EVENT_SUPERSEDED
```

Legal sensitivity:

```text id="qfxvui"
HIGH
```

Critical rule:

```text id="ao6udn"
No evidence = no verified Human Blockchain Event.
```

---

## 5.16 BOOKKEEPING Events

Purpose:

```text id="dq0y7p"
Track financial/accounting consequences created by workflow activity.
```

Example event types:

```text id="mss3sa"
BOOKKEEPING_EVENT_CREATED
BOOKKEEPING_EVENT_POSTED
BOOKKEEPING_EVENT_REVERSED
RECEIVABLE_CREATED
PAYABLE_CREATED
COMMISSION_ACCRUED
REFERRAL_FEE_ACCRUED
REVENUE_EVENT_CREATED
```

Legal sensitivity:

```text id="bq8xw7"
HIGH
```

Critical rule:

```text id="w8oz5k"
Every Bookkeeping Event must link to a Trigger Event or correction reason.
```

---

## 5.17 PAYMENT Events

Purpose:

```text id="depxsb"
Track payment records without implying platform-held funds.
```

Example event types:

```text id="tv4p0k"
PAYMENT_RECORDED
PAYMENT_EVIDENCE_UPLOADED
PAYMENT_RECORD_UPDATED
PAYMENT_RECORD_REVERSED
```

Legal sensitivity:

```text id="z8alhp"
HIGH
```

Safe language:

```text id="yfxnmc"
Payment Record, not fund custody.
```

---

## 5.18 NEED_DONE Events

Purpose:

```text id="trloh7"
Track annual readiness and project compliance items.
```

Example event types:

```text id="ur5l19"
ANNUAL_NEED_CREATED
ANNUAL_NEED_MARKED_DONE
ANNUAL_NEED_RESET
PROJECT_COMPLIANCE_NEED_CREATED
PROJECT_COMPLIANCE_NEED_MARKED_DONE
PROJECT_COMPLIANCE_NEED_WAIVED
```

Legal sensitivity:

```text id="d4hrpr"
MODERATE
```

---

## 5.19 TER_SLA Events

Purpose:

```text id="lxep8e"
Track performance metrics, SLA compliance, review flags, coaching, and remediation.
```

Example event types:

```text id="l2u3zq"
SLA_RECORD_CREATED
SLA_BREACH_RECORDED
TER_METRIC_CREATED
TER_REVIEW_FLAG_CREATED
TER_REVIEW_STARTED
COACHING_NOTE_ADDED
TER_REVIEW_CLOSED
```

Legal sensitivity:

```text id="7gxggg"
HIGH
```

Safe language:

```text id="7wt37x"
Internal performance review only.
```

---

## 5.20 CLAIMSBANK Events

Purpose:

```text id="wktp68"
Track release-condition readiness without implying regulated fund movement.
```

Example event types:

```text id="sm8wwq"
CLAIMSBANK_CONDITION_CREATED
CLAIMSBANK_CONDITION_SATISFIED
CLAIMSBANK_CONDITION_FAILED
CLAIMSBANK_READY_FOR_REVIEW
ESCROW_CANDIDATE_MARKED
RESERVE_CANDIDATE_MARKED
HOLDBACK_CANDIDATE_MARKED
```

Legal sensitivity:

```text id="31h0tk"
CRITICAL
```

Safe language:

```text id="d62nji"
Release-condition readiness.
```

---

## 5.21 DASHBOARD Events

Purpose:

```text id="s909gx"
Track dashboard metric updates, scenarios, assumptions, and exports.
```

Example event types:

```text id="umqva7"
DASHBOARD_VIEWED
DASHBOARD_METRIC_UPDATED
SCENARIO_CREATED
SCENARIO_ASSUMPTION_UPDATED
SCENARIO_EXPORTED
```

Legal sensitivity:

```text id="1i90xz"
MODERATE_TO_HIGH
```

Critical rule:

```text id="hds9lg"
Distinguish actual data, assumptions, scenarios, forecasts, and projections.
```

---

## 5.22 SPONSOR Events

Purpose:

```text id="vtzqtu"
Track sponsor positions, sponsor access, sponsor dashboards, and sponsor summaries.
```

Example event types:

```text id="vnxbja"
SPONSOR_POSITION_CREATED
SPONSOR_POSITION_UPDATED
SPONSOR_POSITION_VIEWED
SPONSOR_DASHBOARD_VIEWED
SPONSOR_SUMMARY_GENERATED
UNAUTHORIZED_SPONSOR_ACCESS_ATTEMPT
```

Legal sensitivity:

```text id="9tpd41"
CRITICAL
```

Critical rule:

```text id="xy6ujp"
Sponsor position is not ownership.
```

---

## 5.23 SUPPORT Events

Purpose:

```text id="2wf4io"
Track support assistance without user substitution.
```

Example event types:

```text id="jp3mqq"
SUPPORT_TICKET_CREATED
SUPPORT_OWNER_ASSIGNED
SUPPORT_RESPONSE_ADDED
SUPPORT_TICKET_ESCALATED
SUPPORT_TICKET_CLOSED
```

Legal sensitivity:

```text id="izfvzz"
MODERATE_TO_HIGH
```

Critical rule:

```text id="lxlxlg"
Support assists; users decide.
```

---

## 5.24 ADMIN_CORRECTION Events

Purpose:

```text id="1t5sse"
Track corrections, reversals, and superseding history.
```

Example event types:

```text id="yn643l"
ADMIN_CORRECTION_REQUESTED
ADMIN_CORRECTION_APPROVED
ADMIN_CORRECTION_REJECTED
CORRECTION_EVENT_CREATED
EVENT_SUPERSEDED
EVENT_REVERSED
```

Legal sensitivity:

```text id="po5ycc"
HIGH
```

Critical rule:

```text id="2vzfhw"
Do not overwrite high-consequence history.
```

---

## 5.25 INTEGRATION_IMPORT Events

Purpose:

```text id="kf5gwf"
Track events imported from founding-operator systems or third-party systems.
```

Example event types:

```text id="l41gci"
INTEGRATION_EVENT_IMPORTED
IMPORTED_EVENT_MAPPED
IMPORTED_EVENT_REJECTED
IMPORTED_EVENT_REQUIRES_VERIFICATION
```

Legal sensitivity:

```text id="jmxh7r"
MODERATE_TO_HIGH
```

Critical rule:

```text id="z8xs0c"
Imported event does not automatically equal consent, verification, or determination.
```

---

# 6. Visibility Levels

Use these visibility levels:

```text id="8soij7"
PRIVATE_USER
ENTITY_INTERNAL
PARTIES_TO_PROJECT
PARTIES_TO_CLAIM
PLATFORM_INTERNAL
SPONSOR_AGGREGATED
PUBLIC_SAFE
LEGAL_RESTRICTED
ADMIN_ONLY
```

Examples:

```text id="1u6d8g"
Sponsor dashboard metrics → SPONSOR_AGGREGATED
TER review notes → PLATFORM_INTERNAL or ENTITY_INTERNAL
Claim decision → PARTIES_TO_CLAIM
Agreement acceptance → LEGAL_RESTRICTED
Admin correction → ADMIN_ONLY / LEGAL_RESTRICTED
```

---

# 7. Legal Sensitivity Levels

Use:

```text id="81kvwo"
LOW
MODERATE
HIGH
CRITICAL
```

CRITICAL examples:

```text id="psppbg"
Claim Decision
External Determination
Delegated Authority
ClaimsBank Condition
Sponsor Position
Escrow Candidate
TER Review if disciplinary
```

---

# 8. Authority Source Values

Recommended authority source values:

```text id="ek640c"
SELF
DELEGATED_AUTHORITY
ENTITY_ADMIN_ASSIGNMENT
CONTRACT_AUTHORITY
INSURANCE_COMPANY_ASSIGNMENT
PLATFORM_ADMIN_ASSIGNMENT
COURT_OR_LEGAL_DOCUMENT
EXTERNAL_DOCUMENT
UNKNOWN_NOT_PROVIDED
SYSTEM_GENERATED
```

Use `UNKNOWN_NOT_PROVIDED` when the source is unknown.

Do not invent authority.

---

# 9. Source System Values

Recommended source system values:

```text id="4fs75c"
CLAIMSTORE
CLAIMEXPRESS
CLAIMBUDDY
FOUNDING_OPERATOR_SYSTEM
KIMOSABE
MANUAL_ADMIN_ENTRY
EXTERNAL_UPLOAD
INTEGRATION_IMPORT
DEMO
```

---

# 10. Event Consequence Flags

Each event should include derived flags where applicable:

```text id="6fot0r"
creates_timestamp
creates_consent_record
requires_evidence
creates_evidence_record
requires_verification
creates_human_blockchain_event
creates_bookkeeping_event
updates_claim_request_status
creates_claimstore_claim
updates_claimstore_claim
updates_project_status
updates_offer_status
updates_ter
updates_sla
updates_claimsbank_condition
updates_dashboard_metric
legal_review_required
```

Example:

```json
{
  "event_type": "OFFER_ACCEPTED",
  "creates_timestamp": true,
  "creates_consent_record": true,
  "requires_evidence": false,
  "creates_bookkeeping_event": false,
  "updates_offer_status": true,
  "legal_review_required": true
}
```

---

# 11. Status Transition Examples

## 11.1 Lead Status

```text id="wh82nf"
NEW
ASSIGNED
CONTACTED
INSPECTION_SCHEDULED
CONVERTED_TO_PROJECT
LOST
ARCHIVED
```

Event transitions:

```text id="evm5fz"
LEAD_CREATED: null → NEW
LEAD_ASSIGNED: NEW → ASSIGNED
LEAD_CONVERTED_TO_PROJECT: ASSIGNED/CONTACTED → CONVERTED_TO_PROJECT
```

---

## 11.2 Offer Status

```text id="ze89hu"
DRAFT
INTERNAL_REVIEW
SHARED
BASELINE_CREATED
ACCEPTED
REJECTED
QUESTIONED
REVISED
WITHDRAWN
SUPERSEDED
```

Critical transition:

```text id="i3urrc"
OFFER_SHARED: DRAFT → SHARED
FIRST_OFFER_BASELINE_CREATED: SHARED → BASELINE_CREATED
OFFER_ACCEPTED: SHARED/BASELINE_CREATED → ACCEPTED
```

---

## 11.3 Claim Request Status

```text id="hifbta"
DRAFT
PACKAGE_PREVIEWED
AUTHORIZATION_REQUESTED
AUTHORIZED
SUBMITTED
DELIVERED
UNDER_REVIEW
APPROVED
REJECTED
HELD
MORE_INFORMATION_REQUESTED
SUPERSEDED
CLOSED
```

Critical transition:

```text id="2oyn96"
CLAIM_REQUEST_SUBMITTED creates CLAIMSTORE_CLAIM_CREATED if no existing ClaimStore Claim exists.
```

---

## 11.4 Evidence Status

```text id="r88w7r"
UPLOADED
PENDING_REVIEW
VERIFIED
REJECTED
RETURNED_FOR_MORE_INFO
SUPERSEDED
```

Critical transition:

```text id="n4dy8s"
EVIDENCE_UPLOADED: null → UPLOADED
EVIDENCE_VERIFIED: PENDING_REVIEW/UPLOADED → VERIFIED
```

---

## 11.5 Task Status

```text id="74tac7"
CREATED
ASSIGNED
ACCEPTED
EN_ROUTE
ON_SITE
IN_PROGRESS
SUBMITTED
VERIFIED
REJECTED
COMPLETED
CANCELLED
```

Critical transition:

```text id="1rplkr"
TASK_VERIFIED may create HUMAN_BLOCKCHAIN_EVENT_CREATED if evidence requirements are satisfied.
```

---

## 11.6 ClaimsBank Condition Status

```text id="33glcp"
NOT_CREATED
PENDING
SATISFIED
FAILED
WAIVED
READY_FOR_REVIEW
DEFERRED
```

Critical rule:

```text id="5v9f21"
Condition status does not equal actual fund movement.
```

---

# 12. Sample Event Payloads

## 12.1 Lead Created

```json
{
  "event_id": "evt_lead_created_001",
  "event_category": "LEAD",
  "event_type": "LEAD_CREATED",
  "event_label": "Lead Created",
  "occurred_at": "2026-11-01T10:00:00Z",
  "recorded_at": "2026-11-01T10:00:01Z",
  "actor_user_id": "usr_sales_001",
  "actor_entity_id": "ent_contractor_001",
  "actor_entity_type": "LICENSED_CONTRACTOR",
  "actor_role_name": "Sales Rep",
  "actor_designation_name": null,
  "authority_source": "ENTITY_ADMIN_ASSIGNMENT",
  "related_object_type": "LEAD",
  "related_object_id": "lead_000001",
  "related_parent_object_type": "PROPERTY",
  "related_parent_object_id": "property_000001",
  "status_before": null,
  "status_after": "NEW",
  "event_summary": "Sales Rep created a new lead for Demo Property.",
  "source_system": "CLAIMSTORE",
  "visibility_level": "ENTITY_INTERNAL",
  "legal_sensitivity": "MODERATE",
  "created_by_system": false
}
```

---

## 12.2 Offer Shared / First Baseline

```json
{
  "event_id": "evt_offer_shared_001",
  "event_category": "OFFER",
  "event_type": "OFFER_SHARED",
  "event_label": "Offer Shared",
  "occurred_at": "2026-11-01T11:30:00Z",
  "recorded_at": "2026-11-01T11:30:01Z",
  "actor_user_id": "usr_contractor_admin_001",
  "actor_entity_id": "ent_contractor_001",
  "actor_entity_type": "LICENSED_CONTRACTOR",
  "actor_role_name": "Contractor Admin",
  "actor_designation_name": "Offer Owner",
  "authority_source": "ENTITY_ADMIN_ASSIGNMENT",
  "related_object_type": "OFFER",
  "related_object_id": "offer_000001",
  "related_parent_object_type": "PROJECT",
  "related_parent_object_id": "project_000001",
  "status_before": "DRAFT",
  "status_after": "SHARED",
  "event_summary": "Offer was shared with Property Owner.",
  "source_system": "CLAIMSTORE",
  "visibility_level": "PARTIES_TO_PROJECT",
  "legal_sensitivity": "HIGH",
  "created_by_system": false,
  "metadata_json": {
    "creates_first_offer_baseline": true
  }
}
```

```json
{
  "event_id": "evt_first_baseline_001",
  "event_category": "OFFER",
  "event_type": "FIRST_OFFER_BASELINE_CREATED",
  "event_label": "First Offer Baseline Created",
  "occurred_at": "2026-11-01T11:30:02Z",
  "recorded_at": "2026-11-01T11:30:02Z",
  "actor_user_id": "system",
  "actor_entity_id": "ent_platform_001",
  "actor_entity_type": "PLATFORM",
  "actor_role_name": "System",
  "actor_designation_name": null,
  "authority_source": "SYSTEM_GENERATED",
  "related_object_type": "OFFER",
  "related_object_id": "offer_000001",
  "related_parent_object_type": "PROJECT",
  "related_parent_object_id": "project_000001",
  "status_before": "SHARED",
  "status_after": "BASELINE_CREATED",
  "event_summary": "First shared offer was preserved as First Offer Baseline.",
  "source_system": "CLAIMSTORE",
  "visibility_level": "PARTIES_TO_PROJECT",
  "legal_sensitivity": "MODERATE",
  "created_by_system": true
}
```

---

## 12.3 Claim Request Submitted / ClaimStore Claim Created

```json
{
  "event_id": "evt_claim_request_submitted_001",
  "event_category": "CLAIM_REQUEST",
  "event_type": "CLAIM_REQUEST_SUBMITTED",
  "event_label": "Claim Request Submitted",
  "occurred_at": "2026-11-01T12:45:00Z",
  "recorded_at": "2026-11-01T12:45:01Z",
  "actor_user_id": "usr_property_owner_001",
  "actor_entity_id": "ent_household_001",
  "actor_entity_type": "PROPERTY_OWNER",
  "actor_role_name": "Property Owner",
  "actor_designation_name": null,
  "authority_source": "SELF",
  "related_object_type": "CLAIM_REQUEST",
  "related_object_id": "cr_000001",
  "related_parent_object_type": "PROJECT",
  "related_parent_object_id": "project_000001",
  "status_before": "AUTHORIZED",
  "status_after": "SUBMITTED",
  "event_summary": "Property Owner submitted Preliminary Claim Request.",
  "source_system": "CLAIMSTORE",
  "visibility_level": "PARTIES_TO_CLAIM",
  "legal_sensitivity": "HIGH",
  "created_by_system": false,
  "evidence_ids": ["evid_000001", "evid_000002"],
  "document_ids": ["doc_claim_request_package_001"],
  "metadata_json": {
    "claim_request_type": "PRELIMINARY",
    "creates_claimstore_claim_if_first": true
  }
}
```

```json
{
  "event_id": "evt_claimstore_claim_created_001",
  "event_category": "CLAIM_REQUEST",
  "event_type": "CLAIMSTORE_CLAIM_CREATED",
  "event_label": "ClaimStore Claim Created",
  "occurred_at": "2026-11-01T12:45:02Z",
  "recorded_at": "2026-11-01T12:45:02Z",
  "actor_user_id": "system",
  "actor_entity_id": "ent_platform_001",
  "actor_entity_type": "PLATFORM",
  "actor_role_name": "System",
  "authority_source": "SYSTEM_GENERATED",
  "related_object_type": "CLAIMSTORE_CLAIM",
  "related_object_id": "csc_000001",
  "related_parent_object_type": "CLAIM_REQUEST",
  "related_parent_object_id": "cr_000001",
  "status_before": null,
  "status_after": "OPEN",
  "event_summary": "First Claim Request created ClaimStore Claim csc_000001.",
  "source_system": "CLAIMSTORE",
  "visibility_level": "PARTIES_TO_CLAIM",
  "legal_sensitivity": "HIGH",
  "created_by_system": true
}
```

---

## 12.4 External Determination Recorded

```json
{
  "event_id": "evt_external_determination_001",
  "event_category": "CLAIM_DECISION",
  "event_type": "EXTERNAL_DETERMINATION_RECORDED",
  "event_label": "External Determination Recorded",
  "occurred_at": "2026-11-03T15:20:00Z",
  "recorded_at": "2026-11-03T15:22:15Z",
  "actor_user_id": "usr_support_001",
  "actor_entity_id": "ent_platform_001",
  "actor_entity_type": "PLATFORM",
  "actor_role_name": "Platform Support",
  "actor_designation_name": "Support Owner",
  "authority_source": "EXTERNAL_DOCUMENT",
  "related_object_type": "CLAIM_DECISION_RECORD",
  "related_object_id": "cdr_000001",
  "related_parent_object_type": "CLAIM_REQUEST",
  "related_parent_object_id": "cr_000001",
  "status_before": "UNDER_REVIEW",
  "status_after": "EXTERNAL_DETERMINATION_RECORDED",
  "event_summary": "External carrier response was recorded. Claim Caller not identified.",
  "source_system": "CLAIMSTORE",
  "visibility_level": "PARTIES_TO_CLAIM",
  "legal_sensitivity": "CRITICAL",
  "created_by_system": false,
  "evidence_ids": ["evid_carrier_response_001"],
  "metadata_json": {
    "claim_caller_identified": false,
    "authority_source_known": false,
    "safe_label": "Authority Source Unknown / Not Provided"
  }
}
```

---

## 12.5 Task Verified / Human Blockchain Event Created

```json
{
  "event_id": "evt_task_verified_001",
  "event_category": "TASK",
  "event_type": "TASK_VERIFIED",
  "event_label": "Task Verified",
  "occurred_at": "2026-11-05T16:10:00Z",
  "recorded_at": "2026-11-05T16:10:03Z",
  "actor_user_id": "usr_platform_verifier_001",
  "actor_entity_id": "ent_platform_001",
  "actor_entity_type": "PLATFORM",
  "actor_role_name": "Platform Admin",
  "actor_designation_name": "Completion Verifier",
  "authority_source": "PLATFORM_ADMIN_ASSIGNMENT",
  "related_object_type": "TASK",
  "related_object_id": "task_000001",
  "related_parent_object_type": "PROJECT",
  "related_parent_object_id": "project_000001",
  "status_before": "SUBMITTED",
  "status_after": "VERIFIED",
  "event_summary": "Completion verification task was verified with required evidence.",
  "source_system": "CLAIMSTORE",
  "visibility_level": "PARTIES_TO_PROJECT",
  "legal_sensitivity": "HIGH",
  "created_by_system": false,
  "evidence_ids": ["evid_completion_photo_001", "evid_completion_checklist_001"],
  "metadata_json": {
    "creates_human_blockchain_event": true,
    "evidence_requirement_satisfied": true
  }
}
```

```json
{
  "event_id": "evt_hbc_001",
  "event_category": "HUMAN_BLOCKCHAIN",
  "event_type": "HUMAN_BLOCKCHAIN_EVENT_CREATED",
  "event_label": "Human Blockchain Event Created",
  "occurred_at": "2026-11-05T16:10:04Z",
  "recorded_at": "2026-11-05T16:10:04Z",
  "actor_user_id": "system",
  "actor_entity_id": "ent_platform_001",
  "actor_entity_type": "PLATFORM",
  "actor_role_name": "System",
  "authority_source": "SYSTEM_GENERATED",
  "related_object_type": "HUMAN_BLOCKCHAIN_EVENT",
  "related_object_id": "hbc_000001",
  "related_parent_object_type": "TASK",
  "related_parent_object_id": "task_000001",
  "status_before": null,
  "status_after": "VERIFIED",
  "event_summary": "Verified completion task created Human Blockchain event.",
  "source_system": "CLAIMSTORE",
  "visibility_level": "PARTIES_TO_PROJECT",
  "legal_sensitivity": "HIGH",
  "created_by_system": true,
  "evidence_ids": ["evid_completion_photo_001", "evid_completion_checklist_001"],
  "metadata_json": {
    "trust_weight": 0.85,
    "verification_level": "PLATFORM_VERIFIED",
    "interested_party_flag": false
  }
}
```

---

## 12.6 Bookkeeping Event Created

```json
{
  "event_id": "evt_bookkeeping_001",
  "event_category": "BOOKKEEPING",
  "event_type": "BOOKKEEPING_EVENT_CREATED",
  "event_label": "Bookkeeping Event Created",
  "occurred_at": "2026-11-05T17:00:00Z",
  "recorded_at": "2026-11-05T17:00:01Z",
  "actor_user_id": "system",
  "actor_entity_id": "ent_platform_001",
  "actor_entity_type": "PLATFORM",
  "actor_role_name": "System",
  "authority_source": "SYSTEM_GENERATED",
  "related_object_type": "BOOKKEEPING_EVENT",
  "related_object_id": "bk_000001",
  "related_parent_object_type": "PAYMENT_RECORD",
  "related_parent_object_id": "pay_000001",
  "status_before": null,
  "status_after": "CREATED",
  "event_summary": "Payment record created bookkeeping event.",
  "source_system": "CLAIMSTORE",
  "visibility_level": "ENTITY_INTERNAL",
  "legal_sensitivity": "HIGH",
  "created_by_system": true,
  "payment_record_id": "pay_000001",
  "metadata_json": {
    "trigger_event_id": "evt_payment_recorded_001",
    "amount": 12500,
    "currency": "USD",
    "category": "PAYMENT_RECEIVED",
    "estimated_or_actual": "ACTUAL"
  }
}
```

---

# 13. Event Creation Rules

## Rule 1 — High-Consequence Actions Always Create Events

High-consequence actions include:

```text id="kqh9an"
Agreement acceptance
Delegated authority
Offer shared
Offer accepted
Claim request submitted
Claim decision recorded
External determination recorded
Evidence verified
Task verified
Human Blockchain event created
Bookkeeping event created
Payment recorded
ClaimsBank condition satisfied
Sponsor position created
Admin correction
```

---

## Rule 2 — System Events Must Identify Trigger

If the actor is `system`, event must identify what triggered it.

Example:

```text id="ujwk7e"
Offer Shared → First Offer Baseline Created
Claim Request Submitted → ClaimStore Claim Created
Task Verified → Human Blockchain Event Created
Payment Recorded → Bookkeeping Event Created
```

---

## Rule 3 — Imported Events Are Not Automatically Trusted

Imported events must be mapped and may require verification.

Imported event cannot automatically become:

```text id="50wios"
Consent
Claim determination
Non-interested verification
Payment release condition
Human Blockchain event
```

---

## Rule 4 — Corrections Do Not Delete Original Events

Use:

```text id="ys2u5p"
correction_of_event_id
supersedes_event_id
reversal_of_event_id
reason_code
```

Original event remains visible to authorized users.

---

## Rule 5 — Legal-Sensitive Events Require Safe Labels

For claim decisions, ClaimsBank, TER, sponsors, and legal-sensitive actions, UI and API labels should avoid unsafe conclusions.

---

# 14. Event Ledger Acceptance Tests

The event ledger passes MVP readiness if:

```text id="s3lg2t"
Every high-consequence button creates an event.
Every event identifies actor user, entity, role, and designation when applicable.
Offer acceptance cannot be created by contractor for property owner.
First offer baseline is created from first shared offer.
First claim request creates ClaimStore Claim.
External determination does not falsely create Claim Caller.
Evidence upload and verification are separate events.
Human Blockchain event cannot be created without verified evidence.
Bookkeeping event cannot exist without trigger event.
ClaimsBank condition does not imply fund movement.
Sponsor events do not expose private claim data.
Admin corrections preserve original event.
```

---

# 15. Working Conclusion

The event ledger is the memory of the market.

ClaimStore does not become trusted because it has screens.

It becomes trusted because every meaningful action creates a clear, role-aware, designation-aware, evidence-aware, bookkeeping-aware, legally cautious event.

The event spine allows the system to support:

```text id="n6mdlr"
ClaimExpress protocol
Human Blockchain
ClaimsBank readiness
TER/SLA
Quantum Dashboard
Sponsor visibility
Legal review
QA testing
Future integrations
```

Build the event ledger correctly.

Everything else can connect to it.

Next I recommend **#31: Data Dictionary and Field Naming Rules v0.1**.

That will translate the object model and event schema into consistent field naming conventions, ID formats, enum rules, timestamps, status fields, and developer-safe terminology.
