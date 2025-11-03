import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Activity, BookOpen, Target, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6"
          >
            <Activity className="text-primary-foreground" size={40} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            RDU: เกมจำลองการใช้ยา
            <br />
            อย่างสมเหตุผล
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            ฝึกทักษะการคิดวิเคราะห์และตัดสินใจอย่างถูกต้อง
            <br />
            ตามหลักการใช้ยาอย่างสมเหตุผล (Rational Drug Use)
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="medical-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">3 ภารกิจท้าทาย</h3>
              <p className="text-sm text-muted-foreground">
                สถานการณ์จำลองจากการใช้งานจริง
              </p>
            </div>

            <div className="medical-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <BookOpen className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold mb-2">เรียนรู้แบบ Interactive</h3>
              <p className="text-sm text-muted-foreground">
                ได้รับ Feedback ทันทีหลังตอบคำถาม
              </p>
            </div>

            <div className="medical-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success/10 mb-4">
                <Sparkles className="text-success" size={24} />
              </div>
              <h3 className="font-semibold mb-2">ทบทวนหลัก 10 Rights</h3>
              <p className="text-sm text-muted-foreground">
                สรุปหลักการให้ยาที่ถูกต้องครบถ้วน
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => navigate("/game")}
              className="medical-button text-lg px-12 py-6 h-auto bg-gradient-to-r from-primary to-accent hover:shadow-[0_6px_20px_-3px_hsl(210_100%_50%/0.4)] pulse-soft"
            >
              เริ่มเกม
            </Button>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-6 bg-muted/30 rounded-xl"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">💡 คำแนะนำ:</strong> เกมนี้ออกแบบมาเพื่อให้คุณได้ฝึกทักษะการตัดสินใจในสถานการณ์จริง
              <br />
              อ่านสถานการณ์อย่างละเอียดและคิดวิเคราะห์ก่อนเลือกคำตอบ
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
