import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X, AlertCircle } from "lucide-react";
import { useState } from "react";

interface Option {
  text: string;
  isCorrect: boolean;
  feedback: string;
}

interface MissionCardProps {
  title: string;
  scenario: string;
  question: string;
  image: string;
  options: Option[];
  onComplete: (isCorrect: boolean) => void;
}

export const MissionCard = ({
  title,
  scenario,
  question,
  image,
  options,
  onComplete,
}: MissionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (index: number) => {
    if (showFeedback) return;
    
    setSelectedOption(index);
    setShowFeedback(true);
    
    setTimeout(() => {
      onComplete(options[index].isCorrect);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="medical-card p-0 md:p-0 max-w-5xl mx-auto overflow-hidden"
    >
      {/* Hero Image Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <AlertCircle size={16} />
            <span>สถานการณ์จำลอง</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground drop-shadow-lg">
            {title}
          </h2>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-accent/5 via-primary/5 to-transparent border-l-4 border-primary rounded-xl p-5 md:p-6 mb-6 shadow-inner"
        >
          <h3 className="text-sm font-bold text-primary mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            สถานการณ์:
          </h3>
          <p className="text-foreground leading-relaxed text-base">{scenario}</p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-2"
        >
          <span className="text-accent">❓</span>
          {question}
        </motion.h3>
      </div>

      {/* Options Section */}
      <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedOption === index;
          const showResult = showFeedback && isSelected;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={!showFeedback ? { scale: 1.02, x: 4 } : {}}
              whileTap={!showFeedback ? { scale: 0.98 } : {}}
            >
              <button
                onClick={() => handleOptionClick(index)}
                disabled={showFeedback}
                className={`w-full text-left p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden ${
                  showResult
                    ? option.isCorrect
                      ? "border-success bg-gradient-to-br from-success/10 to-success/5 shadow-[0_0_20px_-5px_hsl(var(--success)/0.3)]"
                      : "border-destructive bg-gradient-to-br from-destructive/10 to-destructive/5 shadow-[0_0_20px_-5px_hsl(var(--destructive)/0.3)]"
                    : isSelected
                    ? "border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg"
                    : "border-border bg-gradient-to-br from-card to-muted/20 hover:border-primary/50 hover:shadow-xl hover:from-primary/5 hover:to-accent/5"
                } ${showFeedback ? "cursor-not-allowed" : "cursor-pointer answer-option"}`}
              >
                {/* Animated background effect */}
                {!showFeedback && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                )}
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold transition-all duration-300 ${
                    showResult
                      ? option.isCorrect
                        ? "bg-success text-success-foreground shadow-lg scale-110"
                        : "bg-destructive text-destructive-foreground shadow-lg scale-110"
                      : "bg-gradient-to-br from-primary/20 to-primary/10 text-primary border-2 border-primary/30"
                  }`}>
                    {showResult ? (
                      option.isCorrect ? <Check size={20} className="animate-in zoom-in" /> : <X size={20} className="animate-in zoom-in" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </div>
                  <span className="flex-1 text-base md:text-lg font-medium leading-relaxed">{option.text}</span>
                </div>
                
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    transition={{ duration: 0.3 }}
                    className="pt-4 border-t-2 border-current/10"
                  >
                    <div className={`p-4 rounded-xl ${
                      option.isCorrect 
                        ? "bg-success/5 border-l-4 border-success" 
                        : "bg-destructive/5 border-l-4 border-destructive"
                    }`}>
                      <p className={`text-sm md:text-base leading-relaxed font-medium ${
                        option.isCorrect ? "text-success" : "text-destructive"
                      }`}>
                        {option.feedback}
                      </p>
                    </div>
                  </motion.div>
                )}
              </button>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
