# 🧬 Segment Reference

> A quick-lookup matrix for every HL7 v2.x segment supported by `node-hl7-client`'s typed builders, plus links to the canonical [Caristix](https://hl7-definition.caristix.com/v2/) field reference.

Every segment is exposed by `HL7_BASE` as a public `build<SEGNAME>(props)` method. Version-specific builder classes (`HL7_2_1` … `HL7_2_8`) implement the segments that exist in their version. Calling a `build<SEGNAME>` for a segment that doesn't exist in the active version throws `HL7ValidationError("Segment <NAME> is not part of HL7 v<X>")` at runtime — sourced from the per-segment `SegmentSpec` (see below).

## 🧾 Table of Contents

1. [How to read the matrix](#-how-to-read-the-matrix)
2. [SegmentSpec catalogue (all 187 segments)](#-segmentspec-catalogue-all-187-segments)
3. [Always-available (base) segments](#-always-available-base-segments)
4. [Compatibility matrix](#-compatibility-matrix)
5. [By category](#-by-category)
6. [Per-segment cheat-sheet](#-per-segment-cheat-sheet)

---

## 🗺️ How to read the matrix

- ✅ — segment is supported in this version's builder.
- ➖ — segment was not yet defined in HL7 at that version (or simply isn't implemented).
- 🔁 — same segment was extended in this version (more fields). The library uses the most recent definition automatically when you instantiate that version's class.
- All segments are inherited downstream — once a segment first appears in version V, every later version (`HL7_2_(V+1)`, … `HL7_2_8`) also supports it.

> 💡 **Tip:** Always start the message with `buildMSH(...)`. Calling any other `build*` first throws `HL7FatalError("MSH Header must be built first.")`.

---

## 📚 SegmentSpec catalogue (all 187 segments)

Beyond the typed builders below, the library ships a complete **machine-readable catalogue** of every HL7 v2 segment across versions 2.1 → 2.8 — generated from the [Caristix HL7 Definition API](https://hl7-definition.caristix.com/v2/) by `scripts/generate-segment-specs.mjs` and committed to the repo (no runtime network calls).

```ts
import { SEGMENT_SPECS } from "node-hl7-client";

// Every spec carries per-version field-level usage codes (R/O/B/W/D/X).
const ecd = SEGMENT_SPECS.ECD;
ecd.versions;                        // ["2.4", "2.5", …, "2.8"]
ecd.fields[3].usage["2.8"];          // "W" — ECD.4 was withdrawn in 2.8
```

Use this with `builder.buildSegment(name, props)` to cover the long tail of segments that don't have a hand-tuned typed method:

```ts
builder
  .buildMSH({ msh_9: "ADT^A01", msh_10: "X", msh_11: "P" })
  .buildSegment("ABS", { abs_1: "DOC1^Smith^John", abs_2: "MED" })
  .buildSegment("ADJ", { /* … */ });
```

Field-level enforcement is identical to the typed methods: required fields throw if missing, withdrawn fields throw if set, deprecated (B) fields warn but still serialize. See the [Validation & errors section](../builder/index.md#-validation--errors) in the builder docs for the full per-code behavior.

---

## 🧱 Always-available (base) segments

These four are implemented directly on `HL7_BASE` (not gated by version) and are available on every `HL7_2_x` class.

| Segment | Builder | Purpose | Caristix |
|:---:|---|---|:---:|
| **ADD** | `buildADD(props)` | Addendum — used to extend a message that exceeded the size limit. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/ADD) |
| **DSP** | `buildDSP(props)` | Display Data — formatted display lines. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/DSP) |
| **NCK** | `buildNCK()` | System Clock — synchronizes server clocks. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/NCK) |
| **NST** | `buildNST(props)` | Application Control-level Statistics. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/NST) |

---

## 📊 Compatibility matrix

| Segment | 2.1 | 2.2 | 2.3 | 2.3.1 | 2.4 | 2.5 | 2.5.1 | 2.6 | 2.7 | 2.7.1 | 2.8 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **ACC** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **AIG** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **AIL** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **AIP** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **AIS** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **AL1** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **APR** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **BLG** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **BPX** | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ |
| **BTX** | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ |
| **CSP** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **CSR** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **CSS** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **CTD** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **DG1** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **DRG** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **DSC** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **ERR** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **EVN** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **FT1** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **GOL** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **GT1** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **IAM** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **IN1** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **IPC** | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ |
| **ISD** | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ |
| **ITM** | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ |
| **IVT** | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ |
| **MFE** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **MFI** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **MRG** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **MSA** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **MSH** | ✅ | 🔁 | 🔁 | 🔁 | 🔁 | 🔁 | 🔁 | 🔁 | 🔁 | 🔁 | 🔁 |
| **NK1** | ✅ | ✅ | 🔁 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **NPU** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **NSC** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **NTE** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **OBR** | ✅ | 🔁 | 🔁 | ✅ | 🔁 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **OBX** | ✅ | 🔁 | 🔁 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **ODS** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **ODT** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **OM1** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **OM2** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **OM3** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **OM4** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **OM5** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **OM6** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **ORC** | ✅ | 🔁 | 🔁 | ✅ | 🔁 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PCR** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PD1** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PID** | ✅ | 🔁 | 🔁 | ✅ | 🔁 | 🔁 | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PR1** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PRA** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PRB** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PRD** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PSH** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PTH** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **PV1** | ✅ | 🔁 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **QRD** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **QRF** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **RDF** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **RDT** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **REL** | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ |
| **RGS** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **ROL** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **RX1** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **RXA** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **RXD** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **RXE** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **RXG** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **RXO** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **RXR** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **SCH** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **SFT** | ➖ | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **SPM** | ➖ | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **STF** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **STZ** | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ✅ |
| **TXA** | ➖ | ➖ | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **UB1** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **UB2** | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **URD** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **URS** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **VAR** | ➖ | ➖ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 🗂️ By category

Group these alongside the workflow they support — easier than scrolling the matrix.

### 📨 Message control
**MSH**, **MSA**, **ERR**, **NCK**, **NST**, **NSC**, **DSC**, **DSP**, **ADD**, **SFT**

### 🧑 Patient demographics
**PID**, **PD1**, **NK1**, **GT1**, **IN1**, **MRG**, **AL1**, **IAM**

### 🏨 Patient visit / ADT
**EVN**, **PV1**, **DG1**, **DRG**, **PR1**, **NPU**, **OBX**, **NTE**

### 🔬 Orders & results (Lab / Rad)
**ORC**, **OBR**, **OBX**, **SPM**, **TXA**, **PRB**, **GOL**, **PTH**, **VAR**, **OM1**–**OM6**

### 💊 Pharmacy
**RXA**, **RXD**, **RXE**, **RXG**, **RXO**, **RXR**, **RX1** (HL7 2.1 only — replaced by RXO/RXE)

### 📅 Scheduling
**SCH**, **AIG**, **AIL**, **AIP**, **AIS**, **APR**, **RGS**

### 🧪 Clinical study
**CSP**, **CSR**, **CSS**

### 📁 Master files & staff
**MFE**, **MFI**, **STF**, **PRA**, **PRD**, **ROL**, **CTD**, **PSH**

### 🩸 Blood / inventory (HL7 2.6+)
**BPX**, **BTX**, **ITM**, **IVT**, **REL**

### 💰 Financial
**FT1**, **BLG**, **UB1**, **UB2**

### 🚑 Other / specialized
**ACC**, **PCR**, **QRD**, **QRF**, **RDF**, **RDT**, **URD**, **URS**, **ODS**, **ODT**, **IPC**, **ISD**, **STZ**

---

## 📋 Per-segment cheat-sheet

Each entry shows the **builder method**, **first-supported HL7 version**, a one-line description, and a link to Caristix for the full field reference. Where a segment is overridden by a later version (🔁 in the matrix) the library uses whichever class you instantiated.

| Segment | Builder | Since | Description | Caristix |
|:---:|---|:---:|---|:---:|
| ACC | `buildACC(props)` | 2.1 | Accident details. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/ACC) |
| ADD | `buildADD(props)` | base | Addendum continuation. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/ADD) |
| AIG | `buildAIG(props)` | 2.3 | Appointment info — general resource. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/AIG) |
| AIL | `buildAIL(props)` | 2.3 | Appointment info — location resource. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/AIL) |
| AIP | `buildAIP(props)` | 2.3 | Appointment info — personnel resource. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/AIP) |
| AIS | `buildAIS(props)` | 2.3 | Appointment info — service. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/AIS) |
| AL1 | `buildAL1(props)` | 2.2 | Patient allergy information. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/AL1) |
| APR | `buildAPR(props)` | 2.3 | Appointment preferences. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/APR) |
| BLG | `buildBLG(props)` | 2.1 | Billing. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/BLG) |
| BPX | `buildBPX(props)` | 2.6 | Blood product dispense status. | [link](https://hl7-definition.caristix.com/v2/HL7v2.6/Segments/BPX) |
| BTX | `buildBTX(props)` | 2.6 | Blood product transfusion / disposition. | [link](https://hl7-definition.caristix.com/v2/HL7v2.6/Segments/BTX) |
| CSP | `buildCSP(props)` | 2.3 | Clinical study phase. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/CSP) |
| CSR | `buildCSR(props)` | 2.3 | Clinical study registration. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/CSR) |
| CSS | `buildCSS(props)` | 2.3 | Clinical study data schedule. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/CSS) |
| CTD | `buildCTD(props)` | 2.3 | Contact data. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/CTD) |
| DG1 | `buildDG1(props)` | 2.1 | Diagnosis. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/DG1) |
| DRG | `buildDRG(props)` | 2.4 | Diagnosis-related group. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/DRG) |
| DSC | `buildDSC(props)` | 2.1 | Continuation pointer. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/DSC) |
| DSP | `buildDSP(props)` | base | Display data. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/DSP) |
| ERR | `buildERR(props)` | 2.1 | Error. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/ERR) |
| EVN | `buildEVN(props)` | 2.1 | Event type (ADT trigger). | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/EVN) |
| FT1 | `buildFT1(props)` | 2.1 | Financial transaction. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/FT1) |
| GOL | `buildGOL(props)` | 2.4 | Goal detail. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/GOL) |
| GT1 | `buildGT1(props)` | 2.1 | Guarantor. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/GT1) |
| IAM | `buildIAM(props)` | 2.4 | Patient adverse reaction information. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/IAM) |
| IN1 | `buildIN1(props)` | 2.1 | Insurance. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/IN1) |
| IPC | `buildIPC(props)` | 2.7 | Imaging procedure control. | [link](https://hl7-definition.caristix.com/v2/HL7v2.7/Segments/IPC) |
| ISD | `buildISD(props)` | 2.7 | Interaction status detail. | [link](https://hl7-definition.caristix.com/v2/HL7v2.7/Segments/ISD) |
| ITM | `buildITM(props)` | 2.6 | Material item. | [link](https://hl7-definition.caristix.com/v2/HL7v2.6/Segments/ITM) |
| IVT | `buildIVT(props)` | 2.6 | Material location. | [link](https://hl7-definition.caristix.com/v2/HL7v2.6/Segments/IVT) |
| MFE | `buildMFE(props)` | 2.2 | Master file entry. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/MFE) |
| MFI | `buildMFI(props)` | 2.2 | Master file identification. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/MFI) |
| MRG | `buildMRG(props)` | 2.1 | Merge patient information. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/MRG) |
| MSA | `buildMSA(props)` | 2.1 | Message acknowledgment. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/MSA) |
| MSH | `buildMSH(props)` | 2.1 | Message header — **required first call**. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/MSH) |
| NCK | `buildNCK()` | base | System clock sync. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/NCK) |
| NK1 | `buildNK1(props)` | 2.1 | Next of kin / associated parties. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/NK1) |
| NPU | `buildNPU(props)` | 2.1 | Bed status update. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/NPU) |
| NSC | `buildNSC(props)` | 2.1 | Application status change. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/NSC) |
| NST | `buildNST(props)` | base | Application control-level statistics. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/NST) |
| NTE | `buildNTE(props)` | 2.1 | Notes & comments. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/NTE) |
| OBR | `buildOBR(props)` | 2.1 | Observation request. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/OBR) |
| OBX | `buildOBX(props)` | 2.1 | Observation / result. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/OBX) |
| ODS | `buildODS(props)` | 2.2 | Dietary orders & supplements. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/ODS) |
| ODT | `buildODT(props)` | 2.2 | Diet tray instructions. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/ODT) |
| OM1 | `buildOM1(props)` | 2.4 | Master file — observation. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/OM1) |
| OM2 | `buildOM2(props)` | 2.4 | Master file — numeric observation. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/OM2) |
| OM3 | `buildOM3(props)` | 2.4 | Master file — categorical observation. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/OM3) |
| OM4 | `buildOM4(props)` | 2.4 | Master file — observations that require specimens. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/OM4) |
| OM5 | `buildOM5(props)` | 2.4 | Master file — observation batteries. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/OM5) |
| OM6 | `buildOM6(props)` | 2.4 | Master file — observations as calculations. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/OM6) |
| ORC | `buildORC(props)` | 2.1 | Common order. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/ORC) |
| PCR | `buildPCR(props)` | 2.3 | Possible causal relationship. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/PCR) |
| PD1 | `buildPD1(props)` | 2.3 | Patient additional demographic. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/PD1) |
| PID | `buildPID(props)` | 2.1 | Patient identification. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/PID) |
| PR1 | `buildPR1(props)` | 2.1 | Procedures. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/PR1) |
| PRA | `buildPRA(props)` | 2.3 | Practitioner detail. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/PRA) |
| PRB | `buildPRB(props)` | 2.4 | Problem detail. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/PRB) |
| PRD | `buildPRD(props)` | 2.3 | Provider data. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/PRD) |
| PSH | `buildPSH(props)` | 2.3 | Product summary header. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/PSH) |
| PTH | `buildPTH(props)` | 2.4 | Pathway. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/PTH) |
| PV1 | `buildPV1(props)` | 2.1 | Patient visit. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/PV1) |
| QRD | `buildQRD(props)` | 2.1 | Query definition (original style). | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/QRD) |
| QRF | `buildQRF(props)` | 2.1 | Query filter (original style). | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/QRF) |
| RDF | `buildRDF(props)` | 2.3 | Table row definition. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/RDF) |
| RDT | `buildRDT(props)` | 2.3 | Table row data. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/RDT) |
| REL | `buildREL(props)` | 2.6 | Clinical relationship. | [link](https://hl7-definition.caristix.com/v2/HL7v2.6/Segments/REL) |
| RGS | `buildRGS(props)` | 2.3 | Resource group. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/RGS) |
| ROL | `buildROL(props)` | 2.3 | Role. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/ROL) |
| RX1 | `buildRX1(props)` | 2.1 | Pharmacy order (legacy — replaced in 2.2 by RXO/RXE). | [link](https://hl7-definition.caristix.com/v2/HL7v2.1/Segments/RX1) |
| RXA | `buildRXA(props)` | 2.2 | Pharmacy / treatment administration. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/RXA) |
| RXD | `buildRXD(props)` | 2.2 | Pharmacy / treatment dispense. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/RXD) |
| RXE | `buildRXE(props)` | 2.2 | Pharmacy / treatment encoded order. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/RXE) |
| RXG | `buildRXG(props)` | 2.2 | Pharmacy / treatment give. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/RXG) |
| RXO | `buildRXO(props)` | 2.2 | Pharmacy / treatment order. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/RXO) |
| RXR | `buildRXR(props)` | 2.2 | Pharmacy / treatment route. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/RXR) |
| SCH | `buildSCH(props)` | 2.3 | Scheduling activity information. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/SCH) |
| SFT | `buildSFT(props)` | 2.5 | Software segment (sender identification). | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/SFT) |
| SPM | `buildSPM(props)` | 2.5 | Specimen. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/SPM) |
| STF | `buildSTF(props)` | 2.2 | Staff identification. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/STF) |
| STZ | `buildSTZ(props)` | 2.8 | Sterilization parameter. | [link](https://hl7-definition.caristix.com/v2/HL7v2.8/Segments/STZ) |
| TXA | `buildTXA(props)` | 2.4 | Transcription document header. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/TXA) |
| UB1 | `buildUB1(props)` | 2.1 | UB-82 data. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/UB1) |
| UB2 | `buildUB2(props)` | 2.2 | UB-92 data. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/UB2) |
| URD | `buildURD(props)` | 2.1 | Results / update definition. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/URD) |
| URS | `buildURS(props)` | 2.1 | Unsolicited selection. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/URS) |
| VAR | `buildVAR(props)` | 2.3 | Variance. | [link](https://hl7-definition.caristix.com/v2/HL7v2.5/Segments/VAR) |

> 🧱 Need a Z-segment (vendor-specific)? The typed builders don't cover those by design. Use [`message.addSegment("ZXX")`](../builder/index.md#-direct-edits-with-messageset) on the `Message` returned from `toMessage()`.
