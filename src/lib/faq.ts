export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Are there more dead people than alive?",
    answer:
      "Yes. Approximately 93% of all humans who have ever lived are now deceased. Of the roughly 117 billion people ever born, only about 8.1 billion are currently alive. That means for every person walking the Earth today, there are about 13 people who have lived before and died.",
  },
  {
    question: "How many people have ever lived?",
    answer:
      "Demographers at the Population Reference Bureau estimate that approximately 117 billion humans have ever been born, counting from roughly 50,000 BCE to today. This is a midpoint estimate — models produce totals ranging from about 100 billion to 125 billion depending on assumptions about prehistoric populations.",
  },
  {
    question: "How many people are born every second?",
    answer:
      "Globally, about 4.3 humans are born every second, according to the United Nations World Population Prospects. That works out to roughly 258 per minute, 15,500 per hour, and about 385 million births per year worldwide.",
  },
  {
    question: "How many people die every second?",
    answer:
      "Globally, about 2.0 humans die every second. That is roughly 120 per minute, 7,200 per hour, and about 63 million deaths per year. Because birth rates exceed death rates, the global living population continues to grow, but the cumulative total of humans ever deceased also grows every second.",
  },
  {
    question: "What percentage of humans ever born are still alive?",
    answer:
      "About 7%. Roughly 8.1 billion out of 117 billion total humans ever born are alive today. Another way to say it: 1 in every 14 humans who ever lived is alive right now. This is a far larger share than many people assume — most of human history was spent at much lower population densities.",
  },
  {
    question: "Where do the numbers on this page come from?",
    answer:
      "The baseline cumulative totals come from the Population Reference Bureau's 2024 estimate. The live per-second birth and death rates come from the United Nations Department of Economic and Social Affairs, Population Division, World Population Prospects 2024. The counter math is deterministic: it reads the current time, computes seconds elapsed since a fixed baseline, and adds the expected births and deaths. See the methodology section on the homepage for the exact values.",
  },
  {
    question: "Why is this called Memento?",
    answer:
      "The name refers to memento mori — Latin for 'remember that you must die,' a centuries-old philosophical and artistic tradition of reflecting on mortality. This tool is meant in that spirit: a quiet, factual acknowledgment of the scale of human life and death, not a shock tactic.",
  },
];
