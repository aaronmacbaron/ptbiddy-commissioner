import { pricing } from "./site";

export const cannotDo = [
  {
    title: "Certify a true copy of a document",
    detail:
      "In Alberta this is a Notary Public function, not a Commissioner for Oaths one. If your form says \"certified true copy\" or \"notarized copy\", you need a notary — Peggy will tell you straight away rather than waste your appointment.",
  },
  {
    title: "Commission documents outside Alberta",
    detail:
      "An Alberta Commissioner for Oaths has authority within Alberta only. The document can be used elsewhere in many cases, but the signing has to happen here.",
  },
  {
    title: "Give legal advice",
    detail:
      "Peggy can explain the commissioning process and what an oath means. She can't tell you what to write, whether to sign, or what your document means for your case — that's a lawyer's job.",
  },
  {
    title: "Complete your document for you",
    detail:
      "The content has to be yours. Fill in every blank before the appointment, but leave the signature and date lines empty.",
  },
];

export const steps = [
  {
    title: "Call, text or send a message",
    detail:
      "Tell Peggy what the document is and roughly where you are. She'll confirm on the spot whether a Commissioner for Oaths is the right person for it — and say so plainly if it isn't.",
  },
  {
    title: "Pick a time and place",
    detail:
      "Your kitchen table, your office, a hospital room, a coffee shop. Same-day and after-hours appointments are usually available.",
  },
  {
    title: "Have your ID and documents ready",
    detail:
      "Valid government photo ID, your document filled in completely, and the signature line left blank. That's it.",
  },
  {
    title: "Sign, swear, done",
    detail:
      "Most appointments take ten to fifteen minutes. You keep the original, properly commissioned and ready to file.",
  },
];

export const faqs = [
  {
    q: "What exactly is a Commissioner for Oaths?",
    a: "A Commissioner for Oaths is appointed under Alberta's Notaries and Commissioners Act to administer oaths and affirmations, take affidavits, and take statutory declarations. In practice: when a document says \"sworn before me\" or \"declared before me\", a commissioner is the person who signs that line.",
  },
  {
    q: "How is that different from a Notary Public?",
    a: "A Notary Public can do everything a Commissioner for Oaths can, plus certify true copies of documents and notarize documents destined for use in other countries. If your form asks for a certified copy or a notarial seal, you need a notary. If it asks for a sworn affidavit or statutory declaration for use in Alberta, a commissioner is exactly right — and usually faster and cheaper.",
  },
  {
    q: "Do you really come to me?",
    a: "Yes — that's the entire service. Peggy travels across Calgary and the surrounding communities to homes, offices, hospitals, care facilities and coffee shops. There's no office to drive to and no waiting room.",
  },
  {
    q: "What identification do I need?",
    a: "One piece of valid, unexpired government-issued photo identification — an Alberta driver's licence or ID card, a passport, or a permanent resident card. The name on your ID has to match the name on your document. If it doesn't, mention it when you book so it can be sorted out ahead of time.",
  },
  {
    q: "Should I sign the document before Peggy arrives?",
    a: "No. This is the single most common reason an appointment goes sideways. Fill in every other blank, but the signature and date must be made in front of the commissioner. If you've already signed, bring a clean unsigned copy.",
  },
  {
    q: "How much does it cost?",
    a: `A standard visit within Calgary is $${pricing.base} for the first document and $${pricing.perExtraDoc} for each additional document signed at the same appointment. Weekend and statutory holiday appointments add $${pricing.weekendHoliday} — weekday evenings up to 10 p.m. are standard hours, with no surcharge. Travel beyond ${pricing.travelIncludedKm} km from downtown Calgary is $${pricing.travelPerKm}/km. You'll be told the full amount before Peggy leaves — never after.`,
  },
  {
    q: "How quickly can you get to me?",
    a: "Often the same day. Peggy keeps evening and weekend slots open specifically for people who can't step away from work, and urgent hospital requests are prioritized wherever possible.",
  },
  {
    q: "Can you commission a document written in another language?",
    a: "The commissioner has to understand what's being sworn. If the document isn't in English, bring a certified translation or an independent interpreter who can take an interpreter's oath. Ask about this when you book so nothing stalls on the day.",
  },
  {
    q: "Can you commission my will?",
    a: "A will itself isn't commissioned — it's witnessed. What Peggy can do is take the Affidavit of Execution, the sworn statement from one of your witnesses that confirms the will was properly signed. Estate lawyers ask for this regularly.",
  },
  {
    q: "What if I'm in the hospital or can't get out of bed?",
    a: "That's exactly the situation mobile service exists for. Peggy regularly attends hospitals, rehab units and long-term care homes across Calgary. Let her know the facility and room number when you book, and whether the signer needs any accommodation.",
  },
  {
    q: "What forms of payment do you take?",
    a: "E-transfer, credit card, debit and cash. A receipt is issued for every appointment.",
  },
  {
    q: "Can you tell me whether I should sign this?",
    a: "No — and be wary of anyone who says otherwise. Peggy is not a lawyer and can't give legal advice about your document's contents or consequences. She can absolutely explain the commissioning process itself and what taking an oath means.",
  },
];

export const areas = [
  { name: "Downtown & Beltline", note: "Core, East Village, Mission, Bankview" },
  { name: "Northwest Calgary", note: "Tuscany, Royal Oak, Brentwood, Varsity, Bowness" },
  { name: "Northeast Calgary", note: "Saddle Ridge, Skyview, Falconridge, Marlborough" },
  { name: "Southwest Calgary", note: "Signal Hill, Aspen, Springbank Hill, Woodbine" },
  { name: "Southeast Calgary", note: "Mahogany, Auburn Bay, McKenzie Towne, Seton" },
  { name: "Surrounding Communities", note: "Airdrie, Chestermere, Cochrane, Okotoks, Strathmore" },
];

export const facilities = [
  "Foothills Medical Centre",
  "Peter Lougheed Centre",
  "Rockyview General Hospital",
  "South Health Campus",
  "Alberta Children's Hospital",
  "Long-term care & assisted living residences",
];
