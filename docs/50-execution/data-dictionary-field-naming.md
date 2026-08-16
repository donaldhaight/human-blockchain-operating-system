---
id: data-dictionary
title: "Data Dictionary and Field Naming Rules"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 56912
source_line_end: 58299
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# DATA_DICTIONARY_AND_FIELD_NAMING_RULES.md  
## Genesis ClaimStore Season 1 Repository  
### Object Naming, Field Naming, ID Formats, Status Values, Enum Rules, Timestamp Standards, and Developer-Safe Terminology

---

## 1. Purpose

This document defines the initial data dictionary and field naming rules for the Genesis ClaimStore Season 1 MVP.

The purpose is to make the data model consistent before developers, AI coding agents, database designers, and API builders begin implementation.

This document controls:

```text id="e7o84a"
Object names
Table names
Field names
ID formats
Enum values
Status values
Timestamp fields
Actor fields
Entity fields
Role fields
Designation fields
Evidence fields
Event fields
Bookkeeping fields
ClaimsBank fields
Dashboard fields
Sponsor fields
Legal-sensitive terms
```

The goal is to prevent the architecture from being flattened by inconsistent naming.

---

## 2. Naming Principles

### 2.1 Use Explicit Names

Use names that preserve meaning.

Prefer:

```text id="srt39u"
claimstore_claim_id
claim_request_id
claim_caller_designation_id
external_determination_id
human_blockchain_event_id
bookkeeping_event_id
claimsbank_condition_id
```

Avoid vague names:

```text id="kdap18"
claim_id
reviewer_id
decision_id
record_id
file_id
status_id
```

---

### 2.2 Preserve Role vs Designation

Never collapse:

```text id="5t5vk9"
entity_role
designation
```

Use both where needed.

Example:

```text id="4vbu73"
actor_role_name = "Independent Adjuster"
actor_designation_name = "Claim Caller"
```

---

### 2.3 Preserve Claim Request vs Claim Decision

A Claim Request is submitted.

A Claim Decision is recorded.

Do not use one field to mean both.

Correct:

```text id="bsj2hz"
claim_request_status
claim_decision_status
claim_decision_type
```

Incorrect:

```text id="h6axwu"
claim_status, if it hides request vs decision
```

---

### 2.4 Preserve Upload vs Verification

Uploading evidence is not verification.

Correct:

```text id="3dvzsk"
evidence_uploaded_at
evidence_verified_at
evidence_verification_status
verified_by_user_id
```

Incorrect:

```text id="ih3ttk"
evidence_complete, if upload is treated as verification
```

---

### 2.5 Preserve Payment Record vs Fund Movement

Phase 1 should record payment events and readiness conditions.

Do not imply the system holds money.

Correct:

```text id="y5oc1w"
payment_record_id
payment_recorded_at
claimsbank_condition_status
escrow_candidate_flag
reserve_candidate_flag
```

Avoid unless legally structured:

```text id="rxnew8"
funds_held
escrow_balance
bank_account
claimstore_bank_account
```

---

## 3. General Naming Style

Use:

```text id="84q45r"
snake_case for field names
PascalCase for class/model names
UPPER_SNAKE_CASE for enum values
singular nouns for objects
plural nouns for database tables, if using relational tables
```

Examples:

```text id="wszg8a"
field: claim_request_id
model: ClaimRequest
enum: CLAIM_REQUEST_SUBMITTED
table: claim_requests
```

---

## 4. ID Format Rules

Recommended object ID prefixes:

```text id="0nlk53"
usr_ = User
prof_ = User Profile
ent_ = Entity
loc_ = Entity Location
role_ = Entity Role
des_ = Designation
auth_ = Authority Source / Delegated Authority
prop_ = Property
lead_ = Lead
proj_ = Project
offer_ = Offer
offver_ = Offer Version
job_ = Job
ord_ = Order
equip_ = Equipment Order
chg_ = Other Charge
cr_ = Claim Request
csc_ = ClaimStore Claim
cdr_ = Claim Decision Record
task_ = Task
check_ = Checklist
evid_ = Evidence
doc_ = Document
sig_ = Signature
evt_ = Event
hbc_ = Human Blockchain Event
bk_ = Bookkeeping Event
pay_ = Payment Record
comm_ = Commission Record
ref_ = Referral Fee Record
sla_ = SLA Record
ter_ = TER Metric
profmet_ = Proficiency Metric
cbcond_ = ClaimsBank Condition
dash_ = Dashboard Metric
scen_ = Scenario
virt_ = Virtual Item
rev_ = Revenue Event
sup_ = Support Ticket
agr_ = Agreement
spn_ = Sponsor Position
src_ = Source Document
```

Recommended format:

```text id="kvk73q"
prefix_environment_sequence
```

Example:

```text id="e4cr3m"
cr_demo_000001
offer_demo_000001
evt_demo_000001
```

Production systems may use UUIDs, but human-readable prefixes are useful for logs, demos, support, and QA.

---

## 5. Standard Timestamp Fields

Use these consistently:

```text id="v8lmb4"
created_at
updated_at
deleted_at
occurred_at
recorded_at
submitted_at
accepted_at
rejected_at
verified_at
closed_at
superseded_at
revoked_at
expires_at
effective_at
```

Definitions:

```text id="o0wz7y"
created_at = when database record was created
updated_at = when database record last changed
occurred_at = when real-world or workflow event occurred
recorded_at = when system recorded the event
submitted_at = when user submitted item
accepted_at = when user accepted item
verified_at = when evidence/task/event was verified
closed_at = when item closed
superseded_at = when replaced by newer record
revoked_at = when authority/role/designation was revoked
expires_at = when agreement/authority/position ends
effective_at = when record becomes effective
```

Rule:

```text id="mw7k5z"
Do not use created_at when occurred_at is needed.
```

Example:

A carrier response may occur on Monday but be uploaded Wednesday.

```text id="sm92cz"
occurred_at = Monday response date
recorded_at = Wednesday upload date
```

---

## 6. Standard Actor Fields

For any event or high-consequence action, include:

```text id="ybmtmd"
actor_user_id
actor_entity_id
actor_entity_type
actor_role_id
actor_role_name
actor_designation_id
actor_designation_name
authority_source
```

Optional:

```text id="pvgmhm"
actor_ip_address
actor_user_agent
actor_location_context
actor_device_id
```

Rule:

```text id="9j40y6"
If actor_designation_id is null, system must still know whether designation was not required or missing.
```

Suggested field:

```text id="o74m5q"
designation_required_flag
designation_missing_reason
```

---

## 7. Standard Ownership and Access Fields

Common fields:

```text id="r7if4m"
owner_user_id
owner_entity_id
created_by_user_id
created_by_entity_id
assigned_to_user_id
assigned_to_entity_id
visible_to_entity_ids
restricted_access_flag
visibility_level
```

Visibility enum:

```text id="3fgutq"
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

---

## 8. Standard Status Field Rules

Use object-specific status fields.

Do not use one generic `status` if multiple statuses exist.

Examples:

```text id="h18dp5"
lead_status
project_status
offer_status
claim_request_status
claim_decision_status
evidence_status
verification_status
task_status
payment_status
claimsbank_condition_status
sponsor_position_status
```

Allowed general lifecycle values:

```text id="n3ydga"
DRAFT
ACTIVE
INACTIVE
PENDING
SUBMITTED
APPROVED
REJECTED
HELD
CLOSED
CANCELLED
SUPERSEDED
ARCHIVED
```

But object-specific enums should be defined for each object.

---

# 9. Core Object Names

Use these canonical object names:

```text id="oo2r2g"
User
UserProfile
Entity
EntityLocation
EntityRole
RoleAssignment
Designation
DesignationAssignment
AuthoritySource
DelegatedAuthorityRecord
Property
AnnualNeedDone
Lead
Project
ProjectComplianceNeedDone
Offer
OfferVersion
Job
Order
EquipmentOrder
OtherCharge
ClaimRequest
ClaimRequestPackageSnapshot
ClaimStoreClaim
ClaimDecisionRecord
Task
Checklist
Evidence
Document
SignatureRecord
Event
HumanBlockchainEvent
BookkeepingEvent
PaymentRecord
CommissionRecord
ReferralFeeRecord
SLARecord
TERMetric
ProficiencyMetric
ClaimsBankCondition
DashboardMetric
Scenario
VirtualItem
RevenueEvent
SupportTicket
Agreement
AgreementAcceptance
SponsorPosition
SourceDocument
```

---

# 10. Recommended Table Names

If using relational database tables:

```text id="gbw7lw"
users
user_profiles
entities
entity_locations
entity_roles
role_assignments
designations
designation_assignments
authority_sources
delegated_authority_records
properties
annual_need_done_records
leads
projects
project_compliance_need_done_records
offers
offer_versions
jobs
orders
equipment_orders
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
commission_records
referral_fee_records
sla_records
ter_metrics
proficiency_metrics
claimsbank_conditions
dashboard_metrics
scenarios
virtual_items
revenue_events
support_tickets
agreements
agreement_acceptances
sponsor_positions
source_documents
```

---

# 11. Enum Naming Rules

Enum values should be:

```text id="q0krlk"
UPPER_SNAKE_CASE
specific
stable
not sentence-like
```

Correct:

```text id="52gpn9"
EXTERNAL_DETERMINATION_RECORDED
CLAIM_CALLER_NOT_IDENTIFIED
AUTHORITY_SOURCE_UNKNOWN_NOT_PROVIDED
FIRST_OFFER_BASELINE_CREATED
```

Incorrect:

```text id="ytb9ye"
external
needs stuff
done
ok
reviewed
```

---

# 12. Entity Type Enum

Recommended values:

```text id="zbt92v"
PLATFORM
PROPERTY_OWNER
HOUSEHOLD
LICENSED_CONTRACTOR
CONTRACTOR_BRANCH
INSURANCE_COMPANY
ADJUSTING_VENDOR
INDEPENDENT_ADJUSTER
CLAIMBUDDY
FIELD_SERVICE_PROVIDER
SPONSOR
FINANCIAL_PARTNER
MORTGAGE_COMPANY
SUPPLIER
MANUFACTURER
LEGAL_PROVIDER
GOVERNANCE_ENTITY
```

Phase 1 minimum:

```text id="ejhf4f"
PLATFORM
PROPERTY_OWNER
LICENSED_CONTRACTOR
CONTRACTOR_BRANCH
INSURANCE_COMPANY
INDEPENDENT_ADJUSTER
CLAIMBUDDY
SPONSOR
```

---

# 13. Role Name Enum

Recommended values:

```text id="h7pbxr"
PLATFORM_ADMIN
PLATFORM_SUPPORT
KIMOSABE_COORDINATOR
PROPERTY_OWNER
AUTHORIZED_PROPERTY_REPRESENTATIVE
CONTRACTOR_OWNER
CONTRACTOR_ADMIN
BRANCH_ADMIN
SALES_REP
ISR
PROJECT_MANAGER
PRODUCTION_MANAGER
BOOKKEEPER
CLAIMBUDDY_USER
FIELD_VERIFIER
INSURANCE_ADMIN
CLAIM_MANAGER
STAFF_ADJUSTER
INDEPENDENT_ADJUSTER
TER_REVIEWER
SPONSOR_ADMIN
SPONSOR_VIEWER
```

---

# 14. Designation Type Enum

Recommended values:

```text id="67wmoh"
CLAIM_CALLER
ASSIGNED_ADJUSTER
FIELD_INSPECTOR
ESTIMATE_REVIEWER
OFFER_OWNER
PROJECT_LEAD
SALES_LEAD
PRODUCTION_LEAD
JOB_ORDER_OWNER
COMPLETION_VERIFIER
CLAIMBUDDY_VERIFIER
SUPPORT_OWNER
AUTHORIZED_PROPERTY_REPRESENTATIVE
RELEASE_CONDITION_VERIFIER
PAYMENT_APPROVER
SPONSOR_CONTACT
```

Phase 1 minimum:

```text id="s23do2"
CLAIM_CALLER
ASSIGNED_ADJUSTER
FIELD_INSPECTOR
OFFER_OWNER
PROJECT_LEAD
COMPLETION_VERIFIER
CLAIMBUDDY_VERIFIER
SUPPORT_OWNER
AUTHORIZED_PROPERTY_REPRESENTATIVE
```

---

# 15. Authority Source Enum

Recommended values:

```text id="iajtwf"
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

Rule:

```text id="0529ra"
Use UNKNOWN_NOT_PROVIDED rather than inventing authority.
```

---

# 16. Claim Request Type Enum

Recommended values:

```text id="nl6dxy"
PRELIMINARY
SUPPLEMENTAL
FINAL
INFORMATION_REQUEST
DISPUTE_SUPPORT
MORTGAGE_PACKAGE
WARRANTY_SUPPORT
```

Phase 1 minimum:

```text id="6fe1dx"
PRELIMINARY
SUPPLEMENTAL
FINAL
```

---

# 17. Claim Decision Type Enum

Recommended values:

```text id="viap6e"
APPROVED
PARTIALLY_APPROVED
REJECTED
HELD
MORE_INFORMATION_REQUESTED
EXTERNAL_DETERMINATION_RECORDED
NO_RESPONSE_RECORDED
CLAIM_CALLER_NOT_IDENTIFIED
AUTHORITY_SOURCE_UNKNOWN_NOT_PROVIDED
```

Unsafe values to avoid:

```text id="6nssvg"
BAD_FAITH
FRAUD
ILLEGAL_DENIAL
CARRIER_VIOLATION
```

These may be legal conclusions and should not be product enum values in Phase 1.

---

# 18. Evidence Type Enum

Recommended values:

```text id="wvpjc2"
PHOTO
VIDEO
DOCUMENT
ESTIMATE
MEASUREMENT_REPORT
INSURANCE_RESPONSE
POLICY_DOCUMENT
INVOICE
RECEIPT
PERMIT
ENGINEERING_REPORT
SIGNATURE
CHECKLIST
COMPLETION_PHOTO
PAYMENT_PROOF
COMMUNICATION_RECORD
OTHER
```

---

# 19. Evidence Status Enum

Recommended values:

```text id="z9a74n"
UPLOADED
PENDING_REVIEW
VERIFIED
REJECTED
RETURNED_FOR_MORE_INFO
SUPERSEDED
ARCHIVED
```

Rule:

```text id="zbrhhg"
UPLOADED does not equal VERIFIED.
```

---

# 20. Verification Level Enum

Recommended values:

```text id="gjymzc"
SELF_REPORTED
INTERESTED_PARTY_VERIFIED
CLAIMBUDDY_VERIFIED
PLATFORM_VERIFIED
NON_INTERESTED_THIRD_PARTY_VERIFIED
EXTERNAL_DOCUMENT_SUPPORTED
DISPUTED
SUPERSEDED
```

---

# 21. Task Type Enum

Recommended Phase 1 values:

```text id="7tvzfd"
PHOTO_CAPTURE
VIDEO_CAPTURE
DAMAGE_DOCUMENTATION
DOCUMENT_PICKUP
SIGNATURE_CAPTURE
ADJUSTER_MEETING_DOCUMENTATION
COMPLETION_VERIFICATION
FINAL_PAPERWORK_SUPPORT
PAYMENT_EVIDENCE_UPLOAD
OTHER
```

Future values:

```text id="u6kge8"
PERMIT_RUNNER
ENGINEERING_COORDINATION
MORTGAGE_PACKAGE_DELIVERY
DISPUTE_DOCUMENTATION
WARRANTY_INSPECTION
ANNUAL_INSPECTION
```

---

# 22. Event Category Enum

Use the event categories from the API Event Schema:

```text id="m4ow1k"
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

# 23. Bookkeeping Category Enum

Recommended values:

```text id="8m82lu"
REVENUE
RECEIVABLE
PAYABLE
PAYMENT_RECEIVED
PAYMENT_SENT
COMMISSION_ACCRUAL
REFERRAL_FEE_ACCRUAL
OTHER_CHARGE_APPROVAL
FIELD_SERVICE_COST
WARRANTY_RESERVE_CANDIDATE
ESCROW_CANDIDATE
HOLDBACK_CANDIDATE
REVERSAL
CORRECTION
```

Legal caution:

```text id="jhrwz6"
ESCROW_CANDIDATE is not actual escrow.
RESERVE_CANDIDATE is not actual reserve custody.
```

---

# 24. ClaimsBank Condition Type Enum

Recommended values:

```text id="sbrq0u"
PROPERTY_OWNER_ACCEPTANCE
CLAIM_DECISION_RECORDED
EXTERNAL_DETERMINATION_RECORDED
COMPLETION_VERIFICATION
FINAL_PAPERWORK_SUBMITTED
MORTGAGE_PACKAGE_COMPLETE
PAYMENT_RECORDED
WARRANTY_RESERVE_CANDIDATE
ESCROW_CANDIDATE
HOLDBACK_CANDIDATE
DISPUTE_HOLDBACK_CANDIDATE
READY_FOR_REVIEW
```

ClaimsBank condition status:

```text id="1mjrsm"
PENDING
SATISFIED
FAILED
WAIVED
DEFERRED
READY_FOR_REVIEW
```

---

# 25. TER / SLA Field Names

Recommended fields:

```text id="u7wnfw"
ter_metric_id
sla_record_id
measured_user_id
measured_entity_id
measured_role_id
measured_designation_id
task_type
market_id
measurement_period_start
measurement_period_end
timeliness_score
evidence_score
completion_score
communication_score
accuracy_score
rework_score
dispute_score
overall_ter_score
relevant_average_score
below_average_flag
consecutive_below_average_weeks
ter_review_flag_status
```

TER review flag status:

```text id="52viio"
NONE
FLAGGED
UNDER_REVIEW
COACHING_ASSIGNED
REMEDIATION_IN_PROGRESS
CLEARED
RESTRICTED
```

Legal caution:

```text id="nzfkgl"
Use TER internally in Phase 1.
```

---

# 26. Sponsor Position Fields

Recommended fields:

```text id="spxitl"
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
recognition_level
dashboard_access_level
data_access_level
legal_review_status
position_status
renewal_terms
revocation_terms
```

Sponsor category enum:

```text id="4db73j"
TECHNOLOGY
LEGAL
INSURANCE_RISK
CLAIMSBANK_FINANCIAL
CONSTRUCTION_MANAGEMENT
CLAIMBUDDY_VERIFICATION
TERRITORY
MEDIA_CONTENT
TRAINING_CERTIFICATION
OTHER
```

Sponsor position status:

```text id="mhv3cn"
DRAFT
PROPOSED
ACTIVE
PAUSED
EXPIRED
REVOKED
SUPERSEDED
```

Critical note:

```text id="onsaxl"
Sponsor Position does not imply ownership.
```

---

# 27. Dashboard Metric Fields

Recommended fields:

```text id="r16ecu"
dashboard_metric_id
metric_name
metric_category
metric_period_start
metric_period_end
market_id
season_id
source_object_type
source_object_id
actual_value
assumption_value
forecast_value
scenario_id
confidence_score
visibility_level
legal_sensitivity
```

Metric category enum:

```text id="gai40d"
OPERATING
MARKET_OPPORTUNITY
CLAIM_CALLER_ACCOUNTABILITY
TER_PROFICIENCY
CLAIMSBANK_READINESS
SPONSOR
RISK_ADJUSTMENT
SCENARIO_ASSUMPTION
```

Rule:

```text id="8zkueq"
Separate actual_value, assumption_value, and forecast_value.
```

---

# 28. Legal Review Status Enum

Recommended values:

```text id="y0wm02"
NOT_REVIEWED
TO_BE_VETTED
NEEDS_COUNSEL
UNDER_REVIEW
APPROVED_FOR_INTERNAL_USE
APPROVED_FOR_PUBLIC_USE
REJECTED
REQUIRES_REVISION
```

Use on:

```text id="7907v5"
Legal-sensitive UI copy
Sponsor positions
ClaimsBank language
SelfInsurity language
Claim Caller language
Agreements
Public pages
Demo scripts
```

---

# 29. Source Document Fields

Recommended fields:

```text id="dmvzlo"
source_document_id
source_title
source_date
source_type
file_location
original_purpose
modern_translation_summary
legal_sensitivity
canon_documents_influenced
modules_influenced
do_not_copy_literally_flag
source_status
```

Source status enum:

```text id="3fgcex"
ARCHIVED
SUMMARIZED
TRANSLATED_TO_CANON
NEEDS_REVIEW
SUPERSEDED
```

---

# 30. Common Boolean Flag Naming

Use `_flag` suffix for booleans where clarity helps.

Examples:

```text id="kjis28"
active_flag
deleted_flag
requires_acceptance_flag
requires_evidence_flag
requires_verification_flag
creates_bookkeeping_event_flag
creates_human_blockchain_event_flag
legal_review_required_flag
escrow_candidate_flag
reserve_candidate_flag
sponsor_visible_flag
```

Avoid vague booleans:

```text id="tsd4mx"
ok
done
good
bad
final
```

Use specific status values instead.

---

# 31. Amount and Currency Fields

Use:

```text id="vrbu9i"
amount
currency
estimated_amount
actual_amount
requested_amount
approved_amount
rejected_amount
paid_amount
remaining_amount
```

Currency:

```text id="5amcwz"
USD
```

Use numeric decimal type, not floating point, for money.

---

# 32. Address Fields

Recommended standard:

```text id="ykepz1"
address_line_1
address_line_2
city
state
postal_code
county
country
latitude
longitude
market_id
territory_id
```

---

# 33. File and Document Fields

Recommended:

```text id="a4kkkz"
file_name
file_type
mime_type
file_size_bytes
storage_location
checksum
uploaded_by_user_id
uploaded_at
related_object_type
related_object_id
visibility_level
retention_policy
```

---

# 34. Audit and Correction Fields

Recommended for high-consequence records:

```text id="dydk9x"
created_by_user_id
created_by_entity_id
created_at
updated_by_user_id
updated_at
superseded_by_record_id
superseded_at
correction_reason
correction_event_id
reversal_event_id
audit_locked_flag
```

Rule:

```text id="ie7tjl"
Do not hard-delete high-consequence records.
```

---

# 35. Unsafe Generic Terms to Avoid in Field Names

Avoid:

```text id="ebfpd5"
reviewer
approver
claim_status
bank_balance
escrow_balance
fraud_score
bad_faith_flag
ownership_status
investor_return
adjustment_amount, unless legally vetted
representation_status
```

Use instead:

```text id="e2ndby"
claim_caller_designation_id
claim_request_status
claim_decision_status
payment_record_status
claimsbank_condition_status
ter_review_flag_status
sponsor_position_status
scenario_return_assumption, if legally reviewed
```

---

# 36. Phase 1 Minimum Data Dictionary

The MVP must define fields for:

```text id="lxpzwc"
User
Entity
RoleAssignment
DesignationAssignment
Property
Lead
Project
Offer
OfferVersion
Job
OtherCharge
ClaimRequest
ClaimStoreClaim
ClaimDecisionRecord
Evidence
Task
Event
HumanBlockchainEvent
BookkeepingEvent
PaymentRecord
TERMetric
ProficiencyMetric
ClaimsBankCondition
DashboardMetric
SponsorPosition
SupportTicket
AgreementAcceptance
```

Everything else can be deferred or mocked if necessary.

---

# 37. Working Conclusion

Data names are architecture.

A wrong field name can flatten the system.

If `reviewer_id` replaces `claim_caller_designation_id`, accountability is lost.

If `evidence_status` treats upload as verification, trust is lost.

If `escrow_balance` appears before legal structure exists, legal safety is lost.

If `sponsor_owner_id` appears instead of `sponsor_position_id`, the sponsor model is lost.

The data dictionary protects the build.

Name the objects clearly.

Name the fields honestly.

Preserve the layers.

Next I recommend **#32: MVP ERD Outline v0.1**.

That will map the core tables and relationships visually in text form so the backend/data model agent can see how User, Entity, Role, Designation, ClaimStore Claim, Project, Offer, Event, Evidence, Claim Caller, Human Blockchain, Bookkeeping, ClaimsBank, Dashboard, and Sponsor objects connect.
