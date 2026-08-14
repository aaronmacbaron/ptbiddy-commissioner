/**
 * One entry per service page at /services/<slug>/.
 * Each carries enough unique copy to stand on its own as a landing page —
 * thin, near-duplicate pages would rank worse than a single combined one.
 */

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  /** Short label used in cards, nav and the contact form dropdown. */
  title: string;
  /** <h1> on the service page. */
  heading: string;
  /** Card summary on the hub and home pages. */
  blurb: string;
  /** Meta description for the service page. */
  metaDescription: string;
  /** Opening paragraphs on the service page. */
  intro: string[];
  /** Bullet list shown on cards and on the page. */
  examples: string[];
  /** "You probably need this if…" list. */
  signals: string[];
  /** Anything specific to bring or prepare beyond the standard three. */
  prepare: string[];
  /** Optional honest caveat — where this service stops. */
  caution?: string;
  faqs: ServiceFaq[];
  /** Slugs of two related services. */
  related: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "affidavits",
    title: "Affidavits",
    heading: "Affidavits, sworn wherever you are in Calgary",
    blurb:
      "A written statement you swear or affirm is true. Used any time a court, employer, insurer or government office needs your account of something on the record.",
    metaDescription:
      "Mobile Commissioner for Oaths in Calgary taking affidavits at your home, office or hospital bedside. Family and civil court affidavits, Affidavit of Execution, Affidavit of Service. Evenings and weekends available.",
    intro: [
      "An affidavit is a written statement of facts that you swear or affirm to be true, signed in front of a Commissioner for Oaths. That last part is what gives it legal weight: the commissioner confirms your identity, confirms you understand the oath, and signs the jurat — the block at the bottom that reads \"SWORN before me at the City of Calgary…\".",
      "Courts, insurers, land titles offices and government departments all rely on affidavits because swearing a false one is a serious offence. That's also why the process is a little formal: Peggy has to watch you sign, and she can't take your word for it over the phone.",
      "Peggy takes affidavits across Calgary at whatever location suits — including law offices, hospital rooms and care residences where the deponent can't travel.",
    ],
    examples: [
      "Family and civil court affidavits",
      "Affidavit of Execution for a will",
      "Affidavit of Service",
      "Affidavit of lost or destroyed documents",
      "Dower Act consent and affidavits",
      "Land titles and transfer affidavits",
    ],
    signals: [
      "Your document has a line reading \"SWORN before me\" or \"AFFIRMED before me\"",
      "A lawyer, court clerk or insurer asked you to have something \"sworn\"",
      "The form has a blank space for a commissioner's name, expiry date and signature",
      "You're filing material with the Court of King's Bench or Provincial Court",
    ],
    prepare: [
      "Bring every exhibit referred to in the affidavit — exhibits get stamped and initialled at the same time, and a missing one means a second appointment.",
      "If the affidavit runs to multiple pages, don't staple or bind it until after it's sworn.",
      "Where a lawyer drafted it, follow their instructions exactly on numbering and exhibit lettering.",
    ],
    caution:
      "Peggy can't help you decide what to put in an affidavit or tell you whether your wording is strong enough — that's legal advice, and it's a lawyer's job. She commissions what you've written.",
    faqs: [
      {
        q: "Can Peggy stamp my exhibits too?",
        a: "Yes. Exhibits are marked and initialled as part of taking the affidavit, at no extra charge. Bring them with you, in the order they're referenced.",
      },
      {
        q: "What if I need to correct a mistake in the affidavit?",
        a: "Small corrections can be made and initialled by both you and the commissioner before swearing. For anything substantive, reprint the page — courts are unforgiving about heavily amended affidavits.",
      },
      {
        q: "Does everyone named in the affidavit need to be present?",
        a: "No — only the deponent, meaning the person swearing it. If your document requires several people to each swear their own affidavit, they can all be done at one appointment for the additional-document rate.",
      },
    ],
    related: ["statutory-declarations", "oaths-affirmations"],
    icon: "document",
  },

  {
    slug: "statutory-declarations",
    title: "Statutory Declarations",
    heading: "Statutory declarations for Alberta Registries, insurers and benefit programs",
    blurb:
      "A formal declaration of fact made outside of court. Alberta Registries, insurers and benefit programs ask for these constantly.",
    metaDescription:
      "Statutory declarations commissioned across Calgary — common-law relationship, vehicle gift declarations, name change, insurance and pension forms. Mobile Commissioner for Oaths, evenings and weekends.",
    intro: [
      "A statutory declaration does much the same job as an affidavit, but it's used outside of court proceedings. Instead of \"sworn\", the closing line usually reads \"declared before me\", and the body typically ends with the phrase \"and I make this solemn declaration conscientiously believing it to be true\".",
      "These are the workhorses of Alberta administration. Registry agents, insurers, pension administrators and federal programs all use them to get a fact on the record with legal consequences attached — that you and your partner live together, that a vehicle was a gift rather than a sale, that a document was genuinely lost.",
      "Most take ten minutes. Many of them are the last thing standing between you and a registry counter, which is why same-day appointments matter here more than anywhere else.",
    ],
    examples: [
      "Common-law / adult interdependent relationship",
      "Gift of a motor vehicle (Alberta Registries)",
      "Legal name change supporting declarations",
      "Insurance proof of loss and claim declarations",
      "Pension, RRSP and benefit declarations",
      "Declarations of lost or stolen documents",
    ],
    signals: [
      "Your form says \"declared before me\" or \"solemn declaration\"",
      "A registry agent handed you a form and told you to get it commissioned",
      "An insurer, pension plan or federal program needs a fact confirmed formally",
      "You're transferring a vehicle between family members as a gift",
    ],
    prepare: [
      "Registry forms often need supporting documents attached — the vehicle registration, the policy number, the old ID. Bring them.",
      "Federal forms (IRCC, CRA, Service Canada) frequently name both declarants; if two people are declaring, both need to be present with ID.",
      "Check whether the receiving office wants an original or accepts a scan, so you know how many copies to prepare.",
    ],
    caution:
      "A handful of federal and international programs specifically require a Notary Public rather than a Commissioner for Oaths. If the form names a notary, read that line to Peggy before booking and she'll tell you straight.",
    faqs: [
      {
        q: "Is a statutory declaration the same as an affidavit?",
        a: "Legally they're very close — both are formal statements of fact made under penalty for falsehood. The practical difference is context: affidavits are for court proceedings, statutory declarations for everything else. Peggy commissions both.",
      },
      {
        q: "Can you commission the common-law declaration for immigration?",
        a: "In most cases yes. IRCC's Statutory Declaration of Common-Law Union asks for a commissioner of oaths or notary public, and an Alberta Commissioner for Oaths satisfies that. Both partners must attend together with photo ID.",
      },
      {
        q: "What about a vehicle gift between family members?",
        a: "Alberta Registries requires a declaration confirming the vehicle was a genuine gift, which spares the recipient the tax on a deemed sale. Bring the registration details and have both parties available if the form names both.",
      },
    ],
    related: ["affidavits", "witnessing"],
    icon: "stamp",
  },

  {
    slug: "oaths-affirmations",
    title: "Oaths & Affirmations",
    heading: "Oaths and solemn affirmations — your choice, identical weight",
    blurb:
      "Swearing on a religious text or making a solemn affirmation — both carry identical legal weight. It's entirely your choice, and you'll never be asked to explain why.",
    metaDescription:
      "Oaths and solemn affirmations administered anywhere in Calgary by a mobile Commissioner for Oaths. Religious oath or secular affirmation — both legally identical, and the choice is entirely yours.",
    intro: [
      "Administering an oath or affirmation is the core function of the role, and it's the moment that actually makes a document legally binding. Peggy asks you a short, formal question — do you swear that the contents of this document are true, or do you solemnly affirm it — and you answer aloud before signing.",
      "You choose which. An oath is sworn on a religious text; an affirmation is a secular promise with no religious element. Alberta law treats them as exactly equivalent, and the consequences of a false statement are identical either way. You will never be asked to justify your choice, and Peggy defaults to offering both.",
      "It sounds like a formality. It isn't — a document signed without the oath properly administered can be rejected by the office receiving it, which is one of the more frustrating reasons paperwork bounces back.",
    ],
    examples: [
      "Oaths of office",
      "Solemn affirmations for any commissioned document",
      "Interpreter's oath where a translator is involved",
      "Oaths taken alongside an affidavit or declaration",
    ],
    signals: [
      "Your document needs to be \"sworn\" but you'd prefer not to swear religiously",
      "You've been appointed to a position that requires an oath of office",
      "A translator is involved and their oath needs administering too",
      "You're not certain what the oath actually commits you to",
    ],
    prepare: [
      "If you want to swear on a specific religious text, bring it — Peggy doesn't carry every one, and using your own is entirely normal.",
      "If you'd rather affirm, simply say so. No explanation required, and nothing on the document records which you chose.",
      "Where an interpreter is involved, they take their own oath first, and they should be independent rather than a family member wherever possible.",
    ],
    faqs: [
      {
        q: "Is an affirmation weaker than an oath?",
        a: "No. Alberta's legislation gives a solemn affirmation exactly the same legal force as a sworn oath, including the same penalties for a false statement. Choose whichever sits right with you.",
      },
      {
        q: "Do I have to say the words out loud?",
        a: "Yes — the oath or affirmation has to be spoken and answered. It's brief, it's the same script every time, and Peggy will walk you through it before anything is signed.",
      },
      {
        q: "What if English isn't my first language?",
        a: "The commissioner has to be satisfied that you understand what you're swearing. Bring an independent interpreter who can take an interpreter's oath, and mention this when booking so enough time is set aside.",
      },
    ],
    related: ["affidavits", "statutory-declarations"],
    icon: "hand",
  },

  {
    slug: "travel-consent",
    title: "Child Travel Consent Letters",
    heading: "Child travel consent letters, commissioned before you fly",
    blurb:
      "Travelling without one parent? Border officers routinely ask for a commissioned consent letter. Book before you pack — these are the ones people leave to the last minute.",
    metaDescription:
      "Child travel consent letters commissioned in Calgary, often same-day. A mobile Commissioner for Oaths comes to you before your flight — evenings and weekends included.",
    intro: [
      "When a child travels internationally without both parents or guardians, border officers on either end may ask for a consent letter from the non-travelling parent. The Government of Canada recommends that letter be commissioned by someone with authority to administer an oath, which is exactly what a Commissioner for Oaths does.",
      "It isn't legally mandatory in every case, and plenty of families cross without ever being asked. But when it is asked for and you don't have it, the outcome ranges from a long secondary inspection to a missed flight — and there's no fixing it at the airport.",
      "This is the single most time-sensitive thing Peggy commissions. She keeps evening and weekend slots open partly for exactly this reason, and same-day requests before a flight get prioritized.",
    ],
    examples: [
      "Consent to travel for a minor child",
      "Guardianship travel authorization",
      "Grandparent or caregiver travel letters",
      "Consent letters for shared-custody arrangements",
    ],
    signals: [
      "Your child is flying with one parent, a grandparent, a relative or a school group",
      "You share custody and the other parent isn't travelling",
      "An airline or tour operator asked for a notarized or commissioned consent letter",
      "You're travelling to a country known for strict entry checks on minors",
    ],
    prepare: [
      "The non-travelling parent must be present to sign — this is the detail that catches people out, and it can't be worked around.",
      "Use the Government of Canada's recommended consent letter template; it's free, and border officers recognise the format.",
      "Have the travel dates, destination and the accompanying adult's full details filled in before the appointment.",
      "Bring photo ID for the signing parent, plus the child's passport details.",
    ],
    caution:
      "Some destination countries insist on a Notary Public rather than a Commissioner for Oaths for documents originating abroad. Check the destination's entry requirements or ask your airline first — it takes five minutes and saves the whole trip.",
    faqs: [
      {
        q: "How far in advance should I get this done?",
        a: "A week before departure is comfortable. A day before is doable — call rather than email if you're inside 48 hours, and Peggy will fit you in wherever she can.",
      },
      {
        q: "Does the non-travelling parent really have to be there?",
        a: "Yes. They're the one making the statement, so they're the one who signs in front of the commissioner. If they're out of town, they'll need to see a commissioner or notary wherever they are.",
      },
      {
        q: "What if the other parent is deceased or has no custody?",
        a: "Bring the supporting documentation — a death certificate, or a custody or guardianship order — and the letter can be drafted to reflect the actual situation. Peggy commissions what you've prepared; a family lawyer can advise on the wording if the arrangement is contested.",
      },
      {
        q: "Do we need one for domestic travel within Canada?",
        a: "Generally no, though some airlines have their own policies for unaccompanied minors. The consent letter matters most at international borders.",
      },
    ],
    related: ["statutory-declarations", "mobile-visits"],
    icon: "plane",
  },

  {
    slug: "witnessing",
    title: "Witnessing Signatures",
    heading: "Impartial signature witnessing for banks, schools and employers",
    blurb:
      "Many forms simply need an impartial commissioner to watch you sign and confirm you are who you say you are.",
    metaDescription:
      "Signature witnessing across Calgary by a mobile Commissioner for Oaths — bank and mortgage forms, pension paperwork, student loan documents and HR declarations. She comes to you.",
    intro: [
      "Not every document needs a full oath. A great many forms — bank paperwork, pension elections, school and student loan forms, employer declarations — simply require an impartial third party to watch you sign and attest that you are who you claim to be.",
      "Where the form includes a jurat requiring an oath, Peggy administers it as a Commissioner for Oaths. Where it just calls for a witness, she acts in that capacity. Either way, the requirement being satisfied is independence: the witness can't be a party to the document or stand to benefit from it, which is why a spouse or business partner usually won't do.",
      "For anyone signing a stack of forms at once — a mortgage package, a pension transfer, a set of school documents — this is where the additional-document rate makes a mobile visit noticeably cheaper than several trips to a registry counter.",
    ],
    examples: [
      "Bank, mortgage and pension forms",
      "Student loan and school documents",
      "Employer and HR declarations",
      "Sponsorship and support documents",
      "Beneficiary designations and transfer forms",
    ],
    signals: [
      "The form has a signature block labelled \"witness\" alongside yours",
      "You've been told a family member can't witness it",
      "You have several forms to sign at once and want them done in one sitting",
      "An institution asked for a commissioner, notary or \"authorised witness\"",
    ],
    prepare: [
      "Have all the forms together — signing ten at one appointment costs far less than booking twice.",
      "Check whether the institution requires a specific class of witness; some banks and pension plans name exactly who qualifies.",
      "If the form needs a second signer, have them present with their own photo ID.",
    ],
    caution:
      "Witnessing your signature is not the same as certifying a copy of a document. If the form asks for a certified true copy, that's a Notary Public's job in Alberta and Peggy will point you to one.",
    faqs: [
      {
        q: "Can't a friend or coworker just witness this?",
        a: "Sometimes — it depends entirely on what the form specifies. Many institutions require an independent witness of a defined class, and a Commissioner for Oaths always qualifies where one is named. When in doubt, the form itself is the authority.",
      },
      {
        q: "How many documents can I sign at one appointment?",
        a: "As many as you like. The first is charged at the standard rate and each additional one at the lower per-document rate, all within the same visit.",
      },
      {
        q: "Can Peggy witness a will?",
        a: "A will is witnessed rather than commissioned, and the witnesses can't be beneficiaries. What Peggy more commonly handles is the Affidavit of Execution afterwards — the sworn statement from a witness confirming the will was properly signed.",
      },
    ],
    related: ["affidavits", "statutory-declarations"],
    icon: "pen",
  },

  {
    slug: "mobile-visits",
    title: "Hospital, Care Home & Workplace Visits",
    heading: "Hospital, care home and workplace visits across Calgary",
    blurb:
      "Being mobile is the whole point. If getting out is difficult — or simply inconvenient — Peggy comes to you, including evenings and weekends.",
    metaDescription:
      "A Commissioner for Oaths who travels to hospitals, long-term care residences, workplaces and homes across Calgary. Bedside affidavits and declarations, often same-day.",
    intro: [
      "There's no office to visit, because the whole service is built the other way around. Peggy travels to homes, workplaces, hospital rooms, care residences, law offices and the occasional quiet coffee shop, throughout Calgary and the surrounding towns.",
      "A meaningful share of that work is at bedsides. Families sorting out an estate, a benefit claim or a power of attorney are usually doing it under time pressure and at the worst possible moment, and asking someone in hospital to travel to a registry counter isn't realistic.",
      "Workplaces are the other common call — a crew that all need the same declaration, or an office where nobody can take an afternoon off to queue somewhere. One visit, everyone signed.",
    ],
    examples: [
      "Hospitals and rehabilitation facilities",
      "Long-term care and assisted living",
      "Your home, office or a quiet coffee shop",
      "Law office and realtor closings",
      "Group signings for workplaces and crews",
    ],
    signals: [
      "The signer is in hospital, in care, or has limited mobility",
      "Several people at one workplace need the same document commissioned",
      "You can't take time off during registry opening hours",
      "You'd simply rather not drive downtown and find parking",
    ],
    prepare: [
      "Give the facility name, unit and room number when booking, plus any visiting restrictions currently in place.",
      "Mention anything Peggy should know in advance — hearing difficulty, fatigue, a preferred time of day when the signer is most alert.",
      "For group signings at a workplace, a rough headcount lets her set aside the right amount of time.",
    ],
    caution:
      "One requirement doesn't bend, wherever the appointment happens: the signer must understand what they're swearing and do it freely, without pressure from anyone in the room. If Peggy can't satisfy herself of that, she can't commission the document — and she'll explain why rather than leave the family guessing.",
    faqs: [
      {
        q: "Can you come to a hospital on short notice?",
        a: "Usually, yes. Hospital and palliative requests are prioritized wherever the schedule allows. Phone rather than email for anything urgent.",
      },
      {
        q: "What if the person signing is heavily medicated or confused?",
        a: "Peggy has to be satisfied the signer understands the document and is acting freely. If capacity is genuinely in doubt, she'll decline — and that protects the document as much as the person, since one signed under question can be challenged later.",
      },
      {
        q: "Is there an extra charge for a hospital visit?",
        a: "No — a bedside visit within Calgary is charged at the same rate as any other. Only distance beyond the included radius and after-hours timing affect the price, and you'll hear the full amount before she sets out.",
      },
      {
        q: "Can family members be in the room?",
        a: "Usually yes, though Peggy may ask for a few minutes alone with the signer to confirm they're acting of their own free will. It isn't personal — it's standard practice, and it's what makes the document hold up.",
      },
    ],
    related: ["affidavits", "travel-consent"],
    icon: "car",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
