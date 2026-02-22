import { useState, useRef, useEffect } from 'react';

interface Question {
    question: string;
    options: string[];
    correctIdx: number;
    response: string;
}

const QUESTIONS: Question[] = [
    {
        question: 'After every sip of a fizzy drink, he:',
        options: [
            'Smiles politely',
            'Says excuse me like a gentleman',
            'Makes THAT sound. Every time. Zero remorse.',
            'Pretends it didn\'t happen',
        ],
        correctIdx: 2,
        response: 'You knew. You always knew. And you love him anyway. That says everything about you.',
    },
    {
        question: 'His morning cannot begin without:',
        options: [
            'A workout and green juice',
            'Meditation and journaling',
            'Coffee — non negotiable, don\'t talk to him before',
            'A healthy balanced breakfast',
        ],
        correctIdx: 2,
        response: 'This is not a preference. This is a personality. Respect the ritual.',
    },
    {
        question: 'How tall is he?',
        options: [
            'Very tall',
            'Tall',
            'Kind of tall',
            '1.85cm which is tall but she will never admit it and calls him 9sisiros anyway',
        ],
        correctIdx: 3,
        response: '1.85cm. That\'s tall. Scientifically. Officially. And yet here we are. She will never give him this one. Never.',
    },
    {
        question: 'What secret does only she know about him?',
        options: [
            'He cries at movies',
            'He can\'t cook',
            'He has a little black dot somewhere nobody else has ever seen',
            'He sleeps with a nightlight',
        ],
        correctIdx: 2,
        response: 'Only you know this. Which means only you were this close. And that\'s not an accident.',
    },
];

export default function DistanceSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const responseRef = useRef<HTMLDivElement>(null);
    const [currentQ, setCurrentQ] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showResponse, setShowResponse] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [finished, setFinished] = useState(false);
    const [score, setScore] = useState(0);

    // Auto-scroll to response when it appears
    useEffect(() => {
        if (showResponse && responseRef.current) {
            responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [showResponse]);

    const handleAnswer = (optionIdx: number) => {
        if (selectedOption !== null) return;
        setSelectedOption(optionIdx);
        setScore((s) => s + 1);
        setTimeout(() => setShowResponse(true), 400);
        setTimeout(() => setShowNext(true), 1600);
    };

    const handleNext = () => {
        if (currentQ < QUESTIONS.length - 1) {
            setCurrentQ((q) => q + 1);
            setSelectedOption(null);
            setShowResponse(false);
            setShowNext(false);
            // Scroll back to top of section
            sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            setFinished(true);
        }
    };

    const q = QUESTIONS[currentQ];

    return (
        <div
            ref={sectionRef}
            className="relative w-full flex items-center justify-center overflow-hidden px-4"
            style={{
                background: 'linear-gradient(180deg, #050a19 0%, #030610 40%, #020408 100%)',
                minHeight: '100vh',
                paddingTop: '3rem',
                paddingBottom: '3rem',
            }}
        >
            {/* Ambient gold particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: 2 + Math.random() * 3,
                            height: 2 + Math.random() * 3,
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            background: `rgba(255, 215, 0, ${0.1 + Math.random() * 0.15})`,
                            animation: `quizSparkle ${3 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite alternate`,
                        }}
                    />
                ))}
            </div>

            {!finished ? (
                <div
                    className="relative z-10 w-full max-w-2xl mx-auto"
                    key={currentQ}
                    style={{ animation: 'quizFadeIn 0.6s ease-out' }}
                >
                    {/* Title */}
                    <div className="text-center mb-6 md:mb-8">
                        <p
                            className="text-xs font-light tracking-[0.25em] uppercase mb-3"
                            style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 215, 0, 0.4)' }}
                        >
                            How well do you know him?
                        </p>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            {QUESTIONS.map((_, i) => (
                                <div
                                    key={i}
                                    className="h-1 rounded-full transition-all duration-500"
                                    style={{
                                        width: i === currentQ ? 32 : 12,
                                        background: i < currentQ
                                            ? 'rgba(255, 215, 0, 0.6)'
                                            : i === currentQ
                                                ? 'rgba(255, 215, 0, 0.8)'
                                                : 'rgba(255, 255, 255, 0.1)',
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Question */}
                    <h2
                        className="text-lg md:text-2xl font-semibold text-center mb-5 md:mb-7 leading-relaxed"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            color: 'rgba(255, 255, 255, 0.92)',
                        }}
                    >
                        {q.question}
                    </h2>

                    {/* Options — compact */}
                    <div className="grid grid-cols-1 gap-2 md:gap-3 mb-5">
                        {q.options.map((opt, idx) => {
                            const isSelected = selectedOption === idx;
                            const isCorrect = idx === q.correctIdx;
                            const isAnswered = selectedOption !== null;
                            const letter = String.fromCharCode(65 + idx);

                            // After answering: selected glows green, correct also glows green
                            const highlighted = isAnswered && (isSelected || isCorrect);

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    disabled={isAnswered}
                                    className="relative text-left px-4 py-3 md:px-5 md:py-3.5 rounded-xl transition-all duration-500 group"
                                    style={{
                                        border: highlighted
                                            ? '1.5px solid rgba(100, 255, 150, 0.6)'
                                            : '1.5px solid rgba(255, 215, 0, 0.12)',
                                        background: highlighted
                                            ? 'rgba(100, 255, 150, 0.08)'
                                            : isAnswered
                                                ? 'rgba(255, 255, 255, 0.01)'
                                                : 'rgba(255, 215, 0, 0.03)',
                                        cursor: isAnswered ? 'default' : 'pointer',
                                        opacity: isAnswered && !highlighted ? 0.3 : 1,
                                        transform: isSelected ? 'scale(1.01)' : 'scale(1)',
                                        boxShadow: highlighted ? '0 0 20px rgba(100, 255, 150, 0.08)' : 'none',
                                    }}
                                >
                                    <div className="flex items-start gap-3">
                                        <span
                                            className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold mt-0.5 transition-all duration-500"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                background: highlighted
                                                    ? 'rgba(100, 255, 150, 0.2)'
                                                    : 'rgba(255, 215, 0, 0.06)',
                                                color: highlighted
                                                    ? 'rgba(100, 255, 150, 0.9)'
                                                    : 'rgba(255, 215, 0, 0.45)',
                                                border: highlighted
                                                    ? '1px solid rgba(100, 255, 150, 0.3)'
                                                    : '1px solid rgba(255, 215, 0, 0.08)',
                                            }}
                                        >
                                            {highlighted ? '✓' : letter}
                                        </span>

                                        <span
                                            className="text-sm md:text-base font-light leading-snug"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                color: highlighted
                                                    ? 'rgba(200, 255, 220, 0.9)'
                                                    : 'rgba(255, 255, 255, 0.65)',
                                            }}
                                        >
                                            {opt}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* ✅ Correct + Response — compact */}
                    {showResponse && (
                        <div
                            ref={responseRef}
                            className="text-center mb-4"
                            style={{ animation: 'quizResponseIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                        >
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-xl">✅</span>
                                <span
                                    className="text-base md:text-lg font-semibold"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        color: 'rgba(100, 255, 150, 0.9)',
                                    }}
                                >
                                    Correct!
                                </span>
                            </div>
                            <p
                                className="text-sm md:text-base font-light italic leading-relaxed max-w-lg mx-auto"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    color: 'rgba(255, 230, 200, 0.7)',
                                    lineHeight: '1.7',
                                }}
                            >
                                "{q.response}"
                            </p>
                        </div>
                    )}

                    {/* Next button */}
                    {showNext && (
                        <div
                            className="flex justify-center"
                            style={{ animation: 'quizFadeIn 0.5s ease-out' }}
                        >
                            <button
                                onClick={handleNext}
                                className="px-7 py-2.5 rounded-full text-sm font-light tracking-wider uppercase transition-all duration-300 hover:scale-105"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    background: 'rgba(255, 215, 0, 0.08)',
                                    border: '1px solid rgba(255, 215, 0, 0.3)',
                                    color: 'rgba(255, 215, 0, 0.8)',
                                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.05)',
                                }}
                            >
                                {currentQ < QUESTIONS.length - 1 ? 'Next Question →' : 'See Your Score →'}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                /* ======= FINAL SCORE SCREEN ======= */
                <div
                    className="relative z-10 w-full max-w-xl mx-auto text-center"
                    style={{ animation: 'quizScoreIn 1s ease-out' }}
                >
                    <div
                        className="relative w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 rounded-full flex items-center justify-center"
                        style={{
                            border: '2px solid rgba(255, 215, 0, 0.3)',
                            background: 'rgba(255, 215, 0, 0.04)',
                            boxShadow: '0 0 40px rgba(255, 215, 0, 0.08), inset 0 0 30px rgba(255, 215, 0, 0.03)',
                        }}
                    >
                        <div>
                            <p
                                className="text-3xl md:text-5xl font-bold"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {score}/{QUESTIONS.length}
                            </p>
                            <p
                                className="text-xs font-light uppercase tracking-widest mt-1"
                                style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255, 215, 0, 0.4)' }}
                            >
                                Perfect
                            </p>
                        </div>
                    </div>

                    <h2
                        className="text-2xl md:text-3xl font-semibold mb-4 leading-relaxed"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            color: 'rgba(255, 255, 255, 0.9)',
                        }}
                    >
                        You know him better than anyone.
                    </h2>

                    <p
                        className="text-base md:text-lg font-light italic leading-relaxed max-w-md mx-auto mb-3"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            color: 'rgba(255, 230, 200, 0.6)',
                            lineHeight: '1.7',
                        }}
                    >
                        And he wouldn't have it any other way.
                    </p>

                    <p
                        className="text-lg md:text-xl font-light mt-5"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            color: 'rgba(255, 215, 0, 0.7)',
                        }}
                    >
                        Happy Birthday, baby. 🖤
                    </p>
                </div>
            )}

            <style>{`
                @keyframes quizFadeIn {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes quizResponseIn {
                    from { opacity: 0; transform: translateY(20px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes quizScoreIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes quizSparkle {
                    0% { opacity: 0.1; transform: translateY(0) scale(1); }
                    100% { opacity: 0.4; transform: translateY(-10px) scale(1.3); }
                }
            `}</style>
        </div>
    );
}
