---
id: claimexpress-offer-addendum
title: "ClaimExpress Offer and Need/Done Addendum"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 8915
source_line_end: 9683
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# ClaimExpress Protocol Specification v0.1  
## Addendum A - Contractor Offer, Job Costs, Other Charges, Equipment Orders, Need/Done, and Proficiency Tracking

## 1. Purpose of This Addendum

This addendum corrects and expands the ClaimExpress Protocol Specification by defining the Contractor Offer more precisely.

The Contractor Offer is not merely a single estimate total.

It is the structured offer made by a Licensed Contractor or authorized representative to perform a complete list of jobs and other charges related to a claim/project.

The Contractor Offer may be presented as:

1. A single lump-sum total price.
2. A line-item offer using quantities and units of measure.
3. A job-based offer where each job contains related material, labor, turnkey, equipment, and other-charge components.
4. An opinion, estimate, or valuation in the case of an Independent Adjuster or other estimating role.

The system must preserve the original offer, track all changes, and compare the first estimate/opinion against the final closed-out project.

This is essential for proficiency tracking.

---

## 2. Contractor Offer Definition

A Contractor Offer is the complete commercial and scope statement presented to the Property Owner for a claim/project.

It includes:

```text
Contractor Offer
=
Complete List of Jobs
+ Complete List of Other Charges
+ Selling Price Method
+ Estimated Cost Basis
+ Supporting Evidence
+ Terms / Conditions
+ Property Owner Acceptance Status
```

The Offer may be priced using either:

```text
Single Lump Sum / Total Price
```

or:

```text
Line Items
× Quantity
× Unit of Measure
× Unit Price
```

The Offer is not limited to construction trade jobs.

It must support all charges required to complete, document, manage, permit, engineer, inspect, or close the project.

---

## 3. Job Definition

A Job is a trade, phase, or scope category within a project.

Examples:

```text
Roofing
Siding
Gutters
Painting
Windows
Interior Repairs
Drywall
Flooring
Temporary Repairs
Water Mitigation
Punch-Out
Warranty Repair
```

Each Job may require one or more of the following order types:

```text
Material Order
Labor Order
Turnkey Order
Equipment Order
Other Charge
```

---

## 4. Order Types

### 4.1 Material Order

A Material Order captures materials needed to complete a Job.

Examples:

```text
Shingles
Felt
Underlayment
Flashing
Vents
Fasteners
Plywood
Siding
Gutters
Paint
Drywall
Flooring
```

A Material Order may use generic items, specific manufacturer items, or both.

### 4.2 Labor Order

A Labor Order captures labor tasks needed to complete a Job.

Examples:

```text
Tear off shingles
Install felt
Install flashing
Install vents
Install shingles
Load and haul debris
Install siding
Paint exterior
Install gutters
```

Labor Orders may be priced by square, square foot, linear foot, each, man-hour, crew day, or other unit.

### 4.3 Turnkey Order

A Turnkey Order captures a bid from a subcontractor or trade contractor to furnish labor, materials, equipment, or all required elements to complete a Job or portion of a Job.

A Turnkey Order is especially important when the Licensed Contractor relies on a subcontractor’s quote.

### 4.4 Equipment Order

An Equipment Order captures equipment needed to perform the work.

Examples:

```text
Dump trailer
Lift
Scaffolding
Crane
Generator
Drying equipment
Safety equipment
Temporary fencing
Debris container
```

Equipment Orders may be rented, owned, subcontracted, or billed as a direct project cost.

### 4.5 Other Charges

Other Charges capture project costs, fees, services, requirements, and non-trade items that are necessary to estimate, manage, approve, build, document, or close the project.

Examples:

```text
Permits
Trips
Engineering
Inspection fees
Notice of Commencement
Permit runner fees
Administrative processing
Documentation services
Measurement reports
Estimate services
Adjuster meeting support
Supplement processing
Collection letters
Postage
Photos / video documentation
Warranty administration
Dispute resolution
Mortgage company processing
```

Other Charges are not miscellaneous afterthoughts.

They are first-class project cost and offer components.

---

## 5. Contractor Offer Line Item Model

Each Offer may contain line items.

Each line item should include:

```text
Line Item ID
Line Item Type
Related Job ID, if applicable
Description
Quantity
Unit of Measure
Unit Selling Price
Total Selling Price
Estimated Material Cost
Estimated Labor Cost
Estimated Turnkey Cost
Estimated Equipment Cost
Estimated Other Charge Cost
Estimated Total Cost
Gross Margin
Status
Evidence / Support
```

Line Item Type may include:

```text
Job
Material
Labor
Turnkey
Equipment
Other Charge
Lump Sum Total
Allowance
Supplement Item
Deduct / Credit
```

---

## 6. Offer Pricing Methods

The system should support multiple pricing methods.

### 6.1 Lump Sum Offer

A Lump Sum Offer presents one total price for the entire scope.

```text
Total Price = One Offer Amount
```

The internal job/order/cost breakdown may still exist for contractor management and proficiency tracking.

### 6.2 Line Item Offer

A Line Item Offer presents individual quantities, units, prices, and totals.

```text
Line Item Total = Quantity × Unit Price
Offer Total = Sum of Line Item Totals
```

### 6.3 Job-Based Offer

A Job-Based Offer presents pricing by job or phase.

```text
Roofing Job
Siding Job
Gutter Job
Painting Job
Other Charges
```

Each Job may contain internal orders and cost components.

### 6.4 Estimate / Opinion

An Independent Adjuster, estimator, consultant, or reviewer may create an estimate or opinion rather than a contractor offer.

The system should preserve the distinction:

```text
Contractor Offer = Commercial proposal to perform work
IA Estimate / Opinion = Scope and valuation opinion
Insurance Review = Approval, rejection, hold, or valuation response
```

---

## 7. First Offer / Final Closeout Variance Tracking

The system must preserve the first offer, estimate, or opinion.

This first version becomes the baseline for proficiency tracking.

The system should compare:

```text
First Offer / Estimate / Opinion
vs.
Final Approved Scope
vs.
Final Built Scope
vs.
Final Closed-Out Cost
```

The purpose is to measure how close the participant was at the beginning compared to the final outcome.

This applies to:

```text
Licensed Contractor
Independent Sales Rep
Independent Adjuster
Estimator
Field Service Provider
```

---

## 8. Proficiency Tracking

The system should track proficiency by role.

### 8.1 Licensed Contractor Proficiency

Measures how accurately the contractor scopes, prices, documents, supplements, builds, and closes projects.

Potential metrics:

```text
First Offer Accuracy
Supplement Frequency
Supplement Amount
Final Gross Margin Variance
Estimated Cost vs Actual Cost
Closeout Time
Documentation Completeness
Rework / Punch Rate
Payment Collection Time
```

### 8.2 Independent Sales Rep Proficiency

Measures how accurately the ISR sells, scopes, gathers documentation, communicates, and converts projects.

Potential metrics:

```text
Lead to Project Conversion
First Scope Completeness
Offer Acceptance Rate
Documentation Completeness
Supplement Avoidance / Supplement Quality
Customer Communication
Project Handoff Quality
Commission-Producing Closeout Rate
```

### 8.3 Independent Adjuster Proficiency

Measures how accurately the IA estimates, documents, and resolves the claim relative to final verified outcome.

Potential metrics:

```text
Initial Estimate Accuracy
Supplement Rate
Cycle Time
Documentation Completeness
Reinspection Rate
Dispute Rate
Closeout Accuracy
```

---

## 9. Market Personality and Routing Logic

The system should recognize a core market truth:

```text
Licensed Contractors want their best leads routed to their best salespeople.
Insurance Companies want their claims handled by their best adjusters.
```

Therefore, proficiency tracking is not merely reporting.

It supports routing decisions.

Future routing logic may consider:

```text
Role
Market
Task Type
Claim Type
Job Type
Past Accuracy
TER
SLA Compliance
Availability
Conflict Status
Capacity
Customer Feedback
```

This creates a practical performance marketplace.

The best-performing people should earn access to better opportunities.

---

## 10. Need / Done Naming Convention

The Need / Done concept applies in two different contexts and should not be confused.

### 10.1 Yearly / Seasonal Need-Done

This exists outside the claim workflow.

Concept:

```text
Every property needs periodic inspection or review.
Each year resets the property to Need.
When completed, status becomes Done.
On January 1, the annual status resets to Need.
```

Purpose:

- Annual property inspection.
- Pre-claim readiness.
- Roof condition tracking.
- Property owner retention.
- Preventive documentation.
- Future supplemental protection products.
- SelfInsurity support.

This is not a claim status.

It is a seasonal property-maintenance / readiness status.

### 10.2 Project Compliance Need-Done

This exists inside contractor/project workflow, especially for markets with additional requirements such as Florida.

Examples:

```text
Notice of Commencement - Need / Done
Permit - Need / Done
Inspection Request - Need / Done
Inspection Pass - Need / Done
Engineering - Need / Done
Mortgage Documentation - Need / Done
Final Photos - Need / Done
Completion Signature - Need / Done
```

This may be controlled by Branch Location Settings.

Example:

```text
Florida Compliance View = Yes / No
```

If enabled, the project dashboard displays the additional Need / Done requirements.

---

## 11. Branch Location Settings for Market-Specific Workflow

Each Branch Location should support workflow settings based on market requirements.

Example settings:

```text
State
Market
County
Permit Required
Notice of Commencement Required
Inspection Required
Engineering Required
Mortgage Package Required
Florida Compliance View Enabled
Annual Inspection Program Enabled
Need / Done Checklist Enabled
```

This allows ClaimExpress to adapt to local market complexity without forcing every market to use the same view.

---

## 12. Other Charges as Protocol Events

Some Other Charges should create workflow and bookkeeping events.

Examples:

```text
Permit Added
Engineering Added
Trip Charge Added
Inspection Fee Added
Measurement Report Ordered
Xactimate Estimate Ordered
Supplement Processing Fee Added
Collection Letter Fee Added
Postage Charge Added
Documentation Service Fee Added
```

These may trigger:

```text
Timestamp
Bookkeeping event
Virtual item charge
Task request
Evidence requirement
Invoice line
Receivable
Payable
```

---

## 13. Purchase Order / Optional Services Insight

The early Purchase Order form demonstrates that ClaimExpress and RRCA were designed to support both software access and optional operational services.

Optional services may include:

```text
Recruiting
Training
Marketing
Mapping
Data services
Measurement reports
Xactimate estimates
Inspections
Documentation services
Supplemental billing
Collection services
Office administration
Bookkeeping
Payroll
Dispute resolution
Warranty administration
```

These services should be modeled as Virtual Items, Field Services, or Service Orders.

Some may be sold directly.

Some may be bundled into membership.

Some may be performed by the platform, members, partners, or non-interested service providers.

---

## 14. Pay, Escrow, and Reserve

The RRCA one-page understanding identifies Pay, Escrow, and Reserve as a standard method to help guarantee everyone gets paid.

This should be preserved as a future ClaimsBank design principle.

Potential applications:

```text
Sales rep commissions
Subcontractor payments
Material supplier payments
Referral fees
Warranty reserves
Dispute holdbacks
Mortgage loss draft release
Deductible escrow
Completion-based draw release
```

In Phase 1, the system may only record these as bookkeeping events.

In later phases, ClaimsBank may manage actual funds movement.

---

## 15. Updated Cost Model

Each Project should support the following cost categories:

```text
Estimated Material Cost
Estimated Labor Cost
Estimated Turnkey Cost
Estimated Equipment Cost
Estimated Other Charges
Estimated Total Cost

Actual Material Cost
Actual Labor Cost
Actual Turnkey Cost
Actual Equipment Cost
Actual Other Charges
Actual Total Cost
```

Variance should be tracked by:

```text
Job
Order Type
Line Item
Project
Claim Request
Supplement
Role
User
Market
Season
```

---

## 16. Updated Bookkeeping Events

The protocol should add these bookkeeping event types:

```text
Equipment Order Created
Equipment Order Verified
Other Charge Added
Other Charge Approved
Permit Fee Added
Engineering Fee Added
Trip Charge Added
Inspection Fee Added
Measurement Report Fee Added
Estimate Service Fee Added
Supplement Processing Fee Added
Collection Fee Added
Warranty Reserve Created
Escrow Requirement Created
Reserve Requirement Created
```

---

## 17. Updated Offer Events

The protocol should add these offer events:

```text
Offer Version Created
Offer Pricing Method Selected
Lump Sum Total Entered
Line Item Added
Job Added to Offer
Other Charge Added to Offer
Equipment Charge Added to Offer
Offer Baseline Locked
Offer Revised
Offer Superseded
Offer Accepted
Offer Rejected
Offer Converted to Claim Request
```

---

## 18. Updated Proficiency Events

The protocol should add these proficiency events:

```text
First Offer Baseline Created
First Estimate Baseline Created
First IA Opinion Baseline Created
Supplement Added
Supplement Approved
Final Scope Locked
Final Cost Locked
Final Closeout Completed
Variance Calculated
Proficiency Metric Updated
```

---

## 19. Updated Canonical Formula

A Project Offer should be understood as:

```text
Project Offer
=
Jobs
+ Other Charges
+ Equipment
+ Required Services
+ Required Compliance Items
+ Selling Price
+ Estimated Cost
+ Evidence
+ Terms
+ Acceptance
```

A Project Closeout should be understood as:

```text
Project Closeout
=
Final Built Scope
+ Actual Costs
+ Approved Supplements
+ Completion Evidence
+ Property Owner Verification
+ Final Paperwork
+ Payment Events
+ Variance Calculation
```

Proficiency should be understood as:

```text
Proficiency
=
How close the first scope / price / estimate / opinion was
to the final verified and closed-out project outcome.
```

---

## 20. Working Conclusion

The Contractor Offer is the first major structured economic statement in the ClaimExpress Protocol.

It must be detailed enough to support:

- Property owner understanding.
- Contractor production.
- Insurance review.
- Supplemental requests.
- Final paperwork.
- Bookkeeping.
- ClaimsBank settlement logic.
- TER and proficiency tracking.
- Quantum Dashboard underwriting.

The first offer matters because it becomes the baseline.

The final closeout matters because it becomes the truth.

The difference between them becomes intelligence.

This correction is important enough that I would **not proceed to Document 4 quite yet**. My next recommended move is to create a short **Object Model Addendum** for Jobs, Orders, Other Charges, Offers, Need/Done, and Proficiency Metrics so the data model does not drift from the protocol.
