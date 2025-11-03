import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Trophy, RotateCcw, Home, CheckCircle2 } from "lucide-react";

const tenRights = [
  "ผู้ป่วยที่ถูกต้อง (Right Patient)",
  "ยาที่ถูกต้อง (Right Drug)",
  "ขนาดยาที่ถูกต้อง (Right Dose)",
  "เวลาที่ถูกต้อง (Right Time)",
  "เส้นทางที่ถูกต้อง (Right Route)",
  "การบันทึกที่ถูกต้อง (Right Documentation)",
  "เหตุผลที่ถูกต้อง (Right Reason)",
  "การตอบสนองที่ถูกต้อง (Right Response)",
  "การศึกษาที่ถูกต้อง (Right Education)",
  "สิทธิในการปฏิเสธ (Right to Refuse)"
];

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 3 };
  
  const percentage = Math.round((score / total) * 100);
  const level = percentage >= 80 ? "เชี่ยวชาญ" : percentage >= 60 ? "ดี" : "ควรฝึกฝนเพิ่มเติม";
  const levelColor = percentage >= 80 ? "text-success" : percentage >= 60 ? "text-warning" : "text-destructive";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-4xl"
      >
        <div className="medical-card p-8 md:p-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground mb-4">
              <Trophy size={48} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              เยี่ยมมาก!
            </h1>
            <p className="text-muted-foreground">คุณทำภารกิจเสร็จสมบูรณ์แล้ว</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mb-6">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-2">
                {score} / {total}
              </div>
              <div className="text-2xl md:text-3xl font-semibold mb-2">
                {percentage}%
              </div>
              <div className={`text-xl font-semibold ${levelColor}`}>
                ระดับ: {level}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-left mb-8"
          >
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              10 Rights of Medication Administration
            </h2>
            <div className="bg-muted/30 rounded-xl p-6 space-y-3">
              {tenRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-success flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm md:text-base">{right}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => navigate("/")}
              variant="outline"
              className="medical-button gap-2"
            >
              <Home size={20} />
              กลับหน้าหลัก
            </Button>
            <Button
              size="lg"
              onClick={() => navigate("/game")}
              className="medical-button gap-2 bg-gradient-to-r from-primary to-accent"
            >
              <RotateCcw size={20} />
              เล่นอีกครั้ง
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-8 text-sm text-muted-foreground"
        >
          <p>การใช้ยาอย่างสมเหตุผลเป็นหัวใจสำคัญของความปลอดภัยของผู้ป่วย</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Summary;
