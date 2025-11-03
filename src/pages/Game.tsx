import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MissionCard } from "@/components/MissionCard";
import { ProgressBar } from "@/components/ProgressBar";
import { missions } from "@/data/missions";
import { motion } from "framer-motion";

const Game = () => {
  const navigate = useNavigate();
  const [currentMission, setCurrentMission] = useState(0);
  const [score, setScore] = useState(0);

  const handleMissionComplete = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentMission < missions.length - 1) {
      setTimeout(() => {
        setCurrentMission(currentMission + 1);
      }, 500);
    } else {
      setTimeout(() => {
        navigate("/summary", { state: { score, total: missions.length } });
      }, 500);
    }
  };

  const mission = missions[currentMission];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 py-8 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <ProgressBar current={currentMission + 1} total={missions.length} />
        
        <MissionCard
          key={mission.id}
          title={mission.title}
          scenario={mission.scenario}
          question={mission.question}
          image={mission.image}
          options={mission.options}
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
            <span className="text-lg font-semibold text-muted-foreground">{missions.length}</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Game;
