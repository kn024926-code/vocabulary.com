/* =========================================================
   WordPower 10A8 — English Vocabulary Quiz
   Content source: Section 3 — Word Power & Phrase of the Day
   ========================================================= */
'use strict';

/* ---------- Section 3 vocabulary ---------- */
const WORD_INFO = {
  kindness: { label: 'Kindness', meaning: 'being kind' },
  charity: { label: 'Charity', meaning: 'help for people in need' },
  volunteer: { label: 'Volunteer', meaning: 'helping without payment' },
  donate: { label: 'Donate', meaning: 'giving to help others' },
  compassion: { label: 'Compassion', meaning: 'deep sympathy for others' },
  community: { label: 'Community', meaning: 'a group who live or work together' },
  support: { label: 'Support', meaning: 'help and encouragement' },
  share: { label: 'Share', meaning: 'giving part to others' },
  phrase: { label: '“Many hands make light work”', meaning: 'Many people working together make a hard job easier.' }
};

/* The six vocabulary cards required in the final review section. */
const VOCAB_CARDS = [
  {
    word: 'Kindness',
    phonetic: '/ˈkaɪndnəs/',
    type: '(n)',
    meaning: 'the quality of being kind',
    example: 'A small act of kindness can brighten someone’s day.',
    paraphrase: 'Small kind acts can make someone’s day better.'
  },
  {
    word: 'Charity',
    phonetic: '/ˈtʃær.ə.ti/',
    type: '(n)',
    meaning: 'help given to people in need',
    example: 'Our class raised money for charity.',
    paraphrase: 'Our class collected money to help people in need.'
  },
  {
    word: 'Volunteer',
    phonetic: '/ˌvɒlənˈtɪə/',
    type: '(n, v)',
    meaning: 'a person who helps without payment',
    example: 'She volunteers at a children’s shelter.',
    paraphrase: 'She gives her time to help children at a shelter.'
  },
  {
    word: 'Donate',
    phonetic: '/dəʊˈneɪt/',
    type: '(v)',
    meaning: 'to give money or goods to help others',
    example: 'Students donated books to the library.',
    paraphrase: 'Students gave books to the library.'
  },
  {
    word: 'Compassion',
    phonetic: '/kəmˈpæʃn/',
    type: '(n)',
    meaning: 'sympathy for someone who is suffering',
    example: 'He showed compassion to his sick friend.',
    paraphrase: 'He was kind and caring toward his sick friend.'
  },
  {
    word: 'Community',
    phonetic: '/kəmˈmjuːnəti/',
    type: '(n)',
    meaning: 'a group of people who live or work together',
    example: 'We are all part of one community.',
    paraphrase: 'We all belong to the same group.'
  }
];

/* ---------- 24 multiple-choice questions ---------- */
const QUESTIONS = [
  {
    tag: 'Definition → Word',
    question: 'Which English word means “the quality of being kind”?',
    options: ['Kindness', 'Charity', 'Compassion', 'Community'],
    answer: 'Kindness',
    explanation: 'Kindness (n) means “the quality of being kind”. Charity is help for people in need, compassion is sympathy for others, and community is a group of people.',
    word: 'kindness'
  },
  {
    tag: 'Word → Meaning',
    question: 'What does “charity” mean?',
    options: ['Help given to people in need', 'The quality of being kind', 'A group of people living together', 'Sympathy for others’ suffering'],
    answer: 'Help given to people in need',
    explanation: 'Charity (n) means help given to people in need, especially money, food, or clothes.',
    word: 'charity'
  },
  {
    tag: 'Word type',
    question: 'What part of speech is “donate”?',
    options: ['Noun (n)', 'Verb (v)', 'Adjective (adj)', 'Adverb (adv)'],
    answer: 'Verb (v)',
    explanation: 'Donate is a verb (v) meaning “to give money or goods to help others”. It often takes objects like money, books, or clothes.',
    word: 'donate'
  },
  {
    tag: 'Sentence completion',
    question: 'Every summer, Lan ______ at a local shelter to help children.',
    options: ['volunteers', 'charity', 'kindness', 'community'],
    answer: 'volunteers',
    explanation: 'Volunteer can be a noun or a verb. Here “volunteers” is a verb: Lan gives her time to help at a local shelter.',
    word: 'volunteer'
  },
  {
    tag: 'Idiom',
    question: '“______” means: When many people work together, a difficult task becomes easier.',
    options: ['Many hands make light work.', 'Kindness', 'Community', 'Compassion'],
    answer: 'Many hands make light work.',
    explanation: '“Many hands make light work” means that a hard job becomes easier when many people work together.',
    word: 'phrase'
  },
  {
    tag: 'Word → Meaning',
    question: 'What does “compassion” mean?',
    options: ['Sympathy for someone who is suffering', 'The quality of being kind', 'Help given to people in need', 'A group of people living together'],
    answer: 'Sympathy for someone who is suffering',
    explanation: 'Compassion (n) is sympathy for someone who is suffering — you feel their pain and want to help.',
    word: 'compassion'
  },
  {
    tag: 'Sentence completion',
    question: 'Our class raised money for ______ to help poor families.',
    options: ['charity', 'kindness', 'community', 'volunteer'],
    answer: 'charity',
    explanation: 'Charity (n) is help given to people in need. “Raise money for charity” means collecting money to help others.',
    word: 'charity'
  },
  {
    tag: 'Sentence completion',
    question: 'She showed great ______ to her sick friend.',
    options: ['compassion', 'charity', 'community', 'volunteer'],
    answer: 'compassion',
    explanation: 'Compassion is sympathy for someone who is suffering. “Show compassion to someone” means treating them with care and understanding.',
    word: 'compassion'
  },
  {
    tag: 'Word type',
    question: 'Which word can be both a noun and a verb?',
    options: ['Volunteer', 'Kindness', 'Donate', 'Charity'],
    answer: 'Volunteer',
    explanation: 'Volunteer can be a noun (a person who helps without payment) or a verb (to help without payment). Kindness and charity are nouns; donate is a verb.',
    word: 'volunteer'
  },
  {
    tag: 'Idiom',
    question: 'What does “Many hands make light work” mean?',
    options: [
      'Many people working together make a hard job easier.',
      'Only rich people can help others.',
      'Working alone is always faster.',
      'Charity is only for adults.'
    ],
    answer: 'Many people working together make a hard job easier.',
    explanation: 'This idiom encourages teamwork: when everyone works together, a difficult job becomes easier.',
    word: 'phrase'
  },
  {
    tag: 'Definition → Word',
    question: 'Which English word means “a group of people who live, study, or work together”?',
    options: ['Community', 'Charity', 'Compassion', 'Kindness'],
    answer: 'Community',
    explanation: 'Community (n) is a group of people who live, study, or work together.',
    word: 'community'
  },
  {
    tag: 'Sentence completion',
    question: 'Every year, students ______ books to the school library.',
    options: ['donate', 'volunteer', 'share', 'support'],
    answer: 'donate',
    explanation: 'Donate means to give money or goods to help others. Every year, students give books to the school library.',
    word: 'donate'
  },
  {
    tag: 'Word distinction',
    question: 'Which word emphasizes “sympathy for someone who is suffering,” not just general kindness?',
    options: ['Compassion', 'Kindness', 'Charity', 'Community'],
    answer: 'Compassion',
    explanation: 'Compassion is deep sympathy for someone who is suffering. Kindness is a more general quality of being kind.',
    word: 'compassion'
  },
  {
    tag: 'Sentence completion',
    question: 'We are all part of one ______.',
    options: ['community', 'charity', 'compassion', 'volunteer'],
    answer: 'community',
    explanation: 'Community is a group of people who live or work together. “We are all part of one community” means we all belong together.',
    word: 'community'
  },
  {
    tag: 'Word → Meaning',
    question: 'What does “support” mean?',
    options: ['To help or encourage', 'To give money to charity', 'To share something with others', 'To work without payment'],
    answer: 'To help or encourage',
    explanation: 'Support (v) means to help or encourage someone or something.',
    word: 'support'
  },
  {
    tag: 'Sentence completion',
    question: 'In our group project, everyone ______ ideas and helps each other.',
    options: ['shares', 'donates', 'volunteers', 'supports'],
    answer: 'shares',
    explanation: 'Share means to give part of something to others. “Share ideas” means giving your ideas to the group.',
    word: 'share'
  },
  {
    tag: 'Word type',
    question: 'Which word is a verb?',
    options: ['Share', 'Kindness', 'Charity', 'Community'],
    answer: 'Share',
    explanation: 'Share is a verb (v) meaning “to give part of something to others”. The other three words are nouns.',
    word: 'share'
  },
  {
    tag: 'Word distinction',
    question: 'Which sentence best expresses the meaning of “Many hands make light work”?',
    options: [
      'Working together makes a difficult job easier.',
      'A job should always be given to one person.',
      'People with more money can do anything.',
      'Helping others is only a job for adults.'
    ],
    answer: 'Working together makes a difficult job easier.',
    explanation: 'The idiom highlights the power of teamwork: many people working together make a hard job easier.',
    word: 'phrase'
  },
  {
    tag: 'Sentence completion',
    question: 'Lan is a ______ at the local library. She helps there without payment.',
    options: ['volunteer', 'charity', 'compassion', 'community'],
    answer: 'volunteer',
    explanation: 'Volunteer (n) is a person who helps without payment.',
    word: 'volunteer'
  },
  {
    tag: 'Definition → Word',
    question: 'Which English word means “to give money, books, or clothes to help others”?',
    options: ['Donate', 'Charity', 'Share', 'Support'],
    answer: 'Donate',
    explanation: 'Donate (v) means to give money, books, clothes, and so on to help others. Charity is the noun for help given to people in need.',
    word: 'donate'
  },
  {
    tag: 'Sentence completion',
    question: 'A small act of ______ can brighten someone’s day.',
    options: ['kindness', 'compassion', 'charity', 'community'],
    answer: 'kindness',
    explanation: 'Kindness is the quality of being kind. A small kind act can make someone’s day better.',
    word: 'kindness'
  },
  {
    tag: 'Definition → Word',
    question: 'Which English word means “to give part of something to others”?',
    options: ['Share', 'Support', 'Donate', 'Volunteer'],
    answer: 'Share',
    explanation: 'Share (v) means to give part of something to others. Support means to help or encourage; donate means to give to help others.',
    word: 'share'
  },
  {
    tag: 'Sentence completion',
    question: 'My classmates always ______ me when I have difficulties.',
    options: ['support', 'share', 'donate', 'volunteer'],
    answer: 'support',
    explanation: 'Support means to help or encourage. My classmates always help and encourage me when I have difficulties.',
    word: 'support'
  },
  {
    tag: 'Scenario',
    question: 'Which situation best shows “Many hands make light work”?',
    options: [
      'A group of students cleans the school yard together and finishes quickly.',
      'One student cleans the whole school yard alone.',
      'Students buy snacks only for themselves.',
      'A student refuses to help the group.'
    ],
    answer: 'A group of students cleans the school yard together and finishes quickly.',
    explanation: 'A group of students cleaning the school yard together and finishing quickly shows that many hands make light work.',
    word: 'phrase'
  }
];

/* ---------- Tiny utilities ---------- */
const $ = (selector) => document.querySelector(selector);

const ICONS = {
  check: '<svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg>',
  x: '<svg class="icon" aria-hidden="true"><use href="#i-x"></use></svg>',
  arrowRight: '<svg class="icon" aria-hidden="true"><use href="#i-arrow-right"></use></svg>',
  flip: '<svg class="icon" aria-hidden="true"><use href="#i-flip"></use></svg>',
  speaker: '<svg class="icon" aria-hidden="true"><use href="#i-speaker"></use></svg>'
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ---------- DOM references ---------- */
const screens = [...document.querySelectorAll('.screen')];
const screenAnnouncer = $('#screen-announcer');

const startQuizBtn = $('#start-quiz');
const startQuizBottomBtn = $('#start-quiz-bottom');
const exitQuizBtn = $('#exit-quiz');
const nextBtn = $('#next-question');
const quizPosition = $('#quiz-position');
const liveCorrect = $('#live-correct');
const answeredCount = $('#answered-count');
const totalQuestionsNodes = [...document.querySelectorAll('#total-questions')];
const homeTotalQuestions = $('#home-total-questions');
const progressFill = $('#progress-fill');
const progressTrack = $('#progress-track');
const progressPercent = $('#progress-percent');
const questionTag = $('#question-tag');
const questionNum = $('#question-num');
const questionText = $('#question-text');
const optionsContainer = $('#options');
const feedback = $('#feedback');
const questionHint = $('#question-hint');

const resultMessage = $('#result-message');
const scorePercent = $('#score-percent');
const scoreDetail = $('#score-detail');
const statCorrect = $('#stat-correct');
const statWrong = $('#stat-wrong');
const statTotal = $('#stat-total');
const statPercent = $('#stat-percent');
const donutCorrect = $('#donut-correct');
const donutWrong = $('#donut-wrong');
const donutPercent = $('#donut-percent');
const chartCaption = $('#chart-caption');
const chartNote = $('#chart-note');
const chartDesc = $('#chart-desc');
const legendCorrect = $('#legend-correct');
const legendWrong = $('#legend-wrong');
const reviewChips = $('#review-chips');
const reviewNote = $('#review-note');
const answerList = $('#answer-list');
const countAll = $('#count-all');
const countCorrect = $('#count-correct');
const countWrong = $('#count-wrong');
const vocabGrid = $('#vocab-grid');

const exitModal = $('#exit-modal');
const modalStay = $('#modal-stay');
const modalExit = $('#modal-exit');

/* ---------- Quiz state ---------- */
let quizQuestions = [];
let currentIndex = 0;
let answerLog = [];
let isLocked = false;
let currentFilter = 'all';

const SCREEN_LABELS = {
  'screen-home': 'the home page',
  'screen-quiz': 'the quiz',
  'screen-results': 'the results and vocabulary review'
};

/* ---------- Screen navigation ---------- */
function showScreen(id) {
  screens.forEach((screen) => {
    screen.classList.toggle('is-active', screen.id === id);
  });
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  screenAnnouncer.textContent = `Now viewing ${SCREEN_LABELS[id] || 'a new screen'}.`;
}

function goHome() {
  closeExitModal();
  showScreen('screen-home');
}

/* ---------- Vocabulary cards ---------- */
function renderVocabCards() {
  vocabGrid.innerHTML = VOCAB_CARDS.map((card, index) => {
    const cardNumber = `${String(index + 1).padStart(2, '0')} / 06`;
    return `
      <div class="flip-card" role="button" tabindex="0" aria-pressed="false"
           aria-label="Flip the ${escapeHtml(card.word)} card to see its meaning and example">
        <div class="flip-card__inner">
          <div class="flip-face flip-face--front">
            <div class="card-top">
              <span class="card-index">${cardNumber}</span>
              <button class="speak-btn" type="button" data-speak="${escapeHtml(card.word)}"
                      aria-label="Pronounce ${escapeHtml(card.word)}" title="Hear pronunciation">
                ${ICONS.speaker}
              </button>
            </div>
            <h3 class="card-word">${escapeHtml(card.word)}</h3>
            <div class="card-phon-row">
              <span class="card-phon">${escapeHtml(card.phonetic)}</span>
              <span class="card-type">${escapeHtml(card.type)}</span>
            </div>
            <p class="card-meaning">${escapeHtml(card.meaning)}</p>
            <div class="card-example">
              <p>“${escapeHtml(card.example)}”</p>
              <span>${escapeHtml(card.paraphrase)}</span>
            </div>
            <div class="card-hint">${ICONS.flip} Tap to flip</div>
          </div>
          <div class="flip-face flip-face--back">
            <div class="card-top">
              <span class="card-back-label">Quick recall</span>
              <span class="card-index">${cardNumber}</span>
            </div>
            <p class="card-back-word">${escapeHtml(card.word)} · ${escapeHtml(card.type)}</p>
            <p class="card-back-meaning">${escapeHtml(card.meaning)}</p>
            <div class="card-back-example">
              ${escapeHtml(card.paraphrase)}
              <span>“${escapeHtml(card.example)}”</span>
            </div>
            <div class="card-hint">${ICONS.flip} Tap to flip back</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleCard(card) {
  const flipped = card.classList.toggle('is-flipped');
  card.setAttribute('aria-pressed', String(flipped));
}

function resetVocabCards() {
  vocabGrid.querySelectorAll('.flip-card.is-flipped').forEach((card) => {
    card.classList.remove('is-flipped');
    card.setAttribute('aria-pressed', 'false');
  });
}

function scrollToVocab() {
  resetVocabCards();
  $('#vocab-review').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- Text to speech ---------- */
const speechSupported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
let speechVoices = [];

function refreshVoices() {
  if (!speechSupported) return;
  speechVoices = window.speechSynthesis.getVoices() || [];
}

function speakWord(word, button) {
  if (!speechSupported) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.88;
  utterance.pitch = 1;

  const voice =
    speechVoices.find((item) => /^en[-_]US/i.test(item.lang)) ||
    speechVoices.find((item) => /^en[-_]GB/i.test(item.lang)) ||
    speechVoices.find((item) => /^en/i.test(item.lang));

  if (voice) utterance.voice = voice;

  button.classList.add('is-speaking');
  const stopAnimation = () => button.classList.remove('is-speaking');
  utterance.onend = stopAnimation;
  utterance.onerror = stopAnimation;
  window.setTimeout(stopAnimation, 2500);

  window.speechSynthesis.speak(utterance);
}

/* ---------- Quiz flow ---------- */
function startQuiz() {
  quizQuestions = shuffle(QUESTIONS).map((question) => ({
    ...question,
    options: shuffle(question.options)
  }));
  currentIndex = 0;
  answerLog = [];
  isLocked = false;
  currentFilter = 'all';

  showScreen('screen-quiz');
  renderQuestion();
}

function renderQuestion() {
  const question = quizQuestions[currentIndex];
  isLocked = false;

  questionTag.textContent = question.tag;
  questionNum.textContent = String(currentIndex + 1).padStart(2, '0');
  questionText.textContent = question.question;
  quizPosition.textContent = `Question ${currentIndex + 1} / ${quizQuestions.length}`;

  optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option';
    button.dataset.value = option;

    const letter = document.createElement('span');
    letter.className = 'option__letter';
    letter.textContent = String.fromCharCode(65 + index);

    const text = document.createElement('span');
    text.className = 'option__text';
    text.textContent = option;

    const badge = document.createElement('span');
    badge.className = 'option__badge';
    badge.textContent = 'Correct answer';

    button.append(letter, text, badge);
    button.addEventListener('click', () => handleAnswer(option, button));
    optionsContainer.appendChild(button);
  });

  feedback.hidden = true;
  feedback.className = 'feedback';
  feedback.innerHTML = '';

  nextBtn.hidden = true;
  nextBtn.innerHTML = `${currentIndex === quizQuestions.length - 1 ? 'See results' : 'Next question'} ${ICONS.arrowRight}`;
  questionHint.textContent = 'Choose one answer — you’ll get instant feedback.';

  updateProgress();
  updateLiveScore();
}

function handleAnswer(selected, selectedButton) {
  if (isLocked) return;
  isLocked = true;

  const question = quizQuestions[currentIndex];
  const isCorrect = selected === question.answer;
  answerLog.push({ question, selected, correct: isCorrect });

  optionsContainer.querySelectorAll('.option').forEach((button) => {
    button.disabled = true;
    const value = button.dataset.value;

    if (value === question.answer) {
      button.classList.add('is-correct');
      if (!isCorrect) {
        const badge = button.querySelector('.option__badge');
        if (badge) badge.classList.add('is-visible');
      }
    } else if (value === selected) {
      button.classList.add('is-wrong');
    }
  });

  feedback.className = `feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`;
  feedback.innerHTML = `
    <span class="feedback__icon">${isCorrect ? ICONS.check : ICONS.x}</span>
    <div>
      <p class="feedback__title">${isCorrect ? 'Correct!' : 'Not quite!'}</p>
      ${isCorrect ? '' : `<p class="feedback__answer">Correct answer: <strong>${escapeHtml(question.answer)}</strong></p>`}
      <p class="feedback__body">${escapeHtml(question.explanation)}</p>
    </div>
  `;
  feedback.hidden = false;

  selectedButton.blur();
  questionHint.textContent = 'Your answer has been recorded. You can’t change it now.';
  nextBtn.hidden = false;

  updateProgress();
  updateLiveScore();
}

function goToNextQuestion() {
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  } else {
    showResults();
  }
}

function updateProgress() {
  const total = quizQuestions.length;
  const answered = answerLog.length;
  const percent = total ? Math.round((answered / total) * 100) : 0;

  answeredCount.textContent = String(answered);
  totalQuestionsNodes.forEach((node) => {
    node.textContent = String(total);
  });
  progressFill.style.width = `${percent}%`;
  progressPercent.textContent = `${percent}%`;
  progressTrack.setAttribute('aria-valuenow', String(percent));
  progressTrack.setAttribute('aria-valuetext', `Answered ${answered} of ${total} questions`);
}

function updateLiveScore() {
  const correct = answerLog.filter((entry) => entry.correct).length;
  liveCorrect.textContent = String(correct);
}

/* ---------- Results ---------- */
function resultMessageFor(percent) {
  if (percent >= 90) {
    return 'Outstanding! You have a strong grasp of this week’s 8 words and the idiom. Try another round to keep your streak going.';
  }
  if (percent >= 75) {
    return 'Great job! Just a few words to review and you’ll be ready for any question.';
  }
  if (percent >= 50) {
    return 'Good work! You know most of the material. Review the words you missed and flip the cards below to make them stick.';
  }
  return 'Don’t worry — every practice round is progress. Review the answers and the 6 vocabulary cards below, then try again.';
}

function showResults() {
  const total = quizQuestions.length;
  const correct = answerLog.filter((entry) => entry.correct).length;
  const wrong = total - correct;
  const percent = total ? Math.round((correct / total) * 100) : 0;

  scorePercent.textContent = `${percent}%`;
  scoreDetail.textContent = `${correct} / ${total} correct`;
  resultMessage.textContent = resultMessageFor(percent);

  statCorrect.textContent = String(correct);
  statWrong.textContent = String(wrong);
  statTotal.textContent = String(total);
  statPercent.textContent = `${percent}%`;

  donutPercent.textContent = `${percent}%`;
  chartCaption.textContent = `${percent}% accuracy`;
  legendCorrect.textContent = String(correct);
  legendWrong.textContent = String(wrong);
  chartDesc.textContent = `You answered ${correct} of ${total} questions correctly (${percent}%). ${wrong} answers were incorrect.`;
  chartNote.textContent = wrong === 0
    ? 'No incorrect answers — a perfect result! You can still review every answer below.'
    : 'Use the “Incorrect” filter to see the questions to review, then flip the 6 vocabulary cards below.';

  countAll.textContent = String(total);
  countCorrect.textContent = String(correct);
  countWrong.textContent = String(wrong);

  renderReviewChips();
  setFilter('all');
  resetVocabCards();
  drawDonut(correct, total);

  showScreen('screen-results');
}

function drawDonut(correct, total) {
  const circumference = 2 * Math.PI * 62;
  const wrong = total - correct;
  const correctArc = (correct / total) * circumference;
  const wrongArc = (wrong / total) * circumference;

  [donutCorrect, donutWrong].forEach((segment) => {
    segment.style.transition = 'none';
    segment.style.strokeDasharray = `0 ${circumference}`;
  });
  donutWrong.style.strokeDashoffset = String(-correctArc);
  void donutCorrect.getBoundingClientRect();

  [donutCorrect, donutWrong].forEach((segment) => {
    segment.style.transition = '';
  });

  donutCorrect.style.strokeDasharray = `${correctArc} ${circumference}`;
  donutWrong.style.strokeDasharray = `${wrongArc} ${circumference}`;
}

function renderReviewChips() {
  const wrongAnswers = answerLog.filter((entry) => !entry.correct);
  const uniqueKeys = [...new Set(wrongAnswers.map((entry) => entry.question.word))];

  if (uniqueKeys.length === 0) {
    reviewChips.innerHTML = `
      <div class="review-empty">
        ${ICONS.check}
        <div><strong>Excellent!</strong> You didn’t miss any words. You can still flip the 6 cards below to review them.</div>
      </div>
    `;
    reviewNote.textContent = 'Tip: read the examples aloud and listen to the pronunciation to remember them faster.';
    return;
  }

  reviewChips.innerHTML = uniqueKeys.map((key) => {
    const info = WORD_INFO[key];
    return `
      <div class="review-chip">
        <strong>${escapeHtml(info.label)}</strong>
        <span>${escapeHtml(info.meaning)}</span>
      </div>
    `;
  }).join('');

  reviewNote.textContent = `You have ${uniqueKeys.length} item${uniqueKeys.length === 1 ? '' : 's'} to review. Select “View 6 vocabulary cards” to review with flip cards and pronunciation.`;
}

function renderAnswers() {
  const filtered = answerLog
    .map((entry, index) => ({ ...entry, number: index + 1 }))
    .filter((entry) => {
      if (currentFilter === 'correct') return entry.correct;
      if (currentFilter === 'wrong') return !entry.correct;
      return true;
    });

  if (filtered.length === 0) {
    answerList.innerHTML = '<div class="answers-empty">No answers in this section.</div>';
    return;
  }

  answerList.innerHTML = filtered.map((entry) => `
    <article class="answer-item ${entry.correct ? 'answer-item--correct' : 'answer-item--wrong'}">
      <span class="answer-status">${entry.correct ? ICONS.check : ICONS.x}</span>
      <div class="answer-content">
        <div class="answer-meta">
          <span>Question ${entry.number}</span>
          <span class="answer-tag">${escapeHtml(entry.question.tag)}</span>
        </div>
        <p class="answer-question">${escapeHtml(entry.question.question)}</p>
        <div class="answer-rows">
          <div class="answer-row">
            <span class="answer-row__label">Your answer:</span>
            <span class="answer-row__value ${entry.correct ? 'answer-row__value--good' : 'answer-row__value--bad'}">${escapeHtml(entry.selected)}</span>
          </div>
          ${entry.correct ? '' : `
          <div class="answer-row">
            <span class="answer-row__label">Correct answer:</span>
            <span class="answer-row__value answer-row__value--good">${escapeHtml(entry.question.answer)}</span>
          </div>`}
        </div>
      </div>
    </article>
  `).join('');
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-tab').forEach((tab) => {
    const isActive = tab.dataset.filter === filter;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-pressed', String(isActive));
  });
  renderAnswers();
}

/* ---------- Exit confirmation ---------- */
function openExitModal() {
  exitModal.hidden = false;
  document.body.classList.add('modal-open');
  modalStay.focus();
}

function closeExitModal() {
  if (exitModal.hidden) return;
  exitModal.hidden = true;
  document.body.classList.remove('modal-open');
}

function requestExit() {
  if (answerLog.length === 0) {
    goHome();
    return;
  }
  openExitModal();
}

/* ---------- Event wiring ---------- */
startQuizBtn.addEventListener('click', startQuiz);
startQuizBottomBtn.addEventListener('click', startQuiz);

exitQuizBtn.addEventListener('click', requestExit);
nextBtn.addEventListener('click', goToNextQuestion);

document.querySelectorAll('.js-home').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    goHome();
  });
});

$('#restart-quiz').addEventListener('click', startQuiz);
$('#restart-quiz-bottom').addEventListener('click', startQuiz);
$('#home-from-results').addEventListener('click', goHome);
$('#home-from-results-top').addEventListener('click', goHome);

$('#go-vocab').addEventListener('click', scrollToVocab);
$('#review-cards-btn').addEventListener('click', scrollToVocab);
$('#reset-cards').addEventListener('click', scrollToVocab);

document.querySelectorAll('.filter-tab').forEach((tab) => {
  tab.addEventListener('click', () => setFilter(tab.dataset.filter));
});

/* Vocabulary card interaction: flip, keyboard support, pronunciation */
vocabGrid.addEventListener('click', (event) => {
  const speakButton = event.target.closest('[data-speak]');
  if (speakButton) {
    event.stopPropagation();
    speakWord(speakButton.dataset.speak, speakButton);
    return;
  }

  const card = event.target.closest('.flip-card');
  if (card) toggleCard(card);
});

vocabGrid.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('flip-card')) {
    event.preventDefault();
    toggleCard(event.target);
  }
});

/* Modal actions */
modalStay.addEventListener('click', () => {
  closeExitModal();
  exitQuizBtn.focus();
});

modalExit.addEventListener('click', goHome);

exitModal.addEventListener('click', (event) => {
  if (event.target.closest('[data-close-modal]')) {
    closeExitModal();
    exitQuizBtn.focus();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !exitModal.hidden) {
    closeExitModal();
    exitQuizBtn.focus();
  }
});

/* ---------- Initialize ---------- */
function init() {
  homeTotalQuestions.textContent = String(QUESTIONS.length);
  totalQuestionsNodes.forEach((node) => {
    node.textContent = String(QUESTIONS.length);
  });

  renderVocabCards();

  if (!speechSupported) {
    document.body.classList.add('no-tts');
  } else {
    refreshVoices();
    window.speechSynthesis.onvoiceschanged = refreshVoices;
  }
}

init();
