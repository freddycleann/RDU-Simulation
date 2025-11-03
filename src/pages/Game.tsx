import { useState, useMemo, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MissionCard } from "@/components/MissionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { missions } from "@/data/missions";
import { motion } from "framer-motion";

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QUESTION_TIME_LIMIT = 30; // seconds per question

const Game = () => {
  const navigate = useNavigate();
  const [currentMission, setCurrentMission] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);

  const mission = missions[currentMission];

  // ✅ shuffle options once per mission
  const shuffledOptions = useMemo(() => {
    return shuffleArray(mission.options);
  }, [mission.options]);

  // ✅ wrap in useCallback so it's stable
const handleMissionComplete = useCallback(
  (isCorrect: boolean) => {
    if (isCorrect) setScore((prev) => prev + 1);

    if (currentMission < missions.length - 1) {
      setTimeout(() => {
        setCurrentMission((prev) => prev + 1);
        setTimeLeft(QUESTION_TIME_LIMIT);
      }, 500);
    } else {
      setTimeout(() => {
        navigate("/summary", { state: { score, total: missions.length } });
      }, 500);
    }
  },
  [currentMission, navigate, score] 
);

  // 🕒 countdown timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      handleMissionComplete(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, handleMissionComplete]); // ✅ ESLint-safe now

  // reset timer when mission changes
  useEffect(() => {
    setTimeLeft(QUESTION_TIME_LIMIT);
  }, [currentMission]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 py-8 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <ProgressBar current={currentMission + 1} total={missions.length} />

        {/* ⏱️ Timer display */}
        <div className="text-center mb-4">
          <span
            className={`text-lg font-semibold ${
              timeLeft <= 5 ? "text-red-500 animate-pulse" : "text-primary"
            }`}
          >
            เหลือเวลา: {timeLeft} วินาที
          </span>
        </div>

        <MissionCard
          key={mission.id}
          title={mission.title}
          scenario={mission.scenario}
          question={mission.question}
          image={mission.image}
          options={shuffledOptions}
          onComplete={handleMissionComplete}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary/20">
            <span className="text-sm text-muted-foreground">คะแนนปัจจุบัน:</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {score}
            </span>
            <span className="text-muted-foreground">/</span>
            <span className="text-lg font-semibold text-muted-foreground">
              {missions.length}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Game;
