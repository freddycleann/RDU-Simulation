import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Activity, BookOpen, Target, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-800">
      {/* Soft glow / particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(210,100%,75%)_0%,transparent_60%)]"
        />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,hsl(280,100%,70%)_0%,transparent_70%)] blur-3xl opacity-30"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 text-center max-w-5xl">
        {/* Hero icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="mx-auto flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/40 mb-8"
        >
          <Activity className="text-primary-foreground" size={44} />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight drop-shadow-sm"
        >
          RDU: เกมจำลองการใช้ยา
          <br />
          อย่างสมเหตุผล
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          ฝึกทักษะการคิดวิเคราะห์และตัดสินใจอย่างถูกต้อง
          <br />
          ตามหลักการใช้ยาอย่างสมเหตุผล (Rational Drug Use)
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-14"
        >
          {[
            {
              icon: <Target className="text-primary" size={28} />,
              title: "3 ภารกิจท้าทาย",
              desc: "สถานการณ์จำลองจากการใช้งานจริง",
            },
            {
              icon: <BookOpen className="text-accent" size={28} />,
              title: "เรียนรู้แบบ Interactive",
              desc: "ได้รับ Feedback ทันทีหลังตอบคำถาม",
            },
            {
              icon: <Sparkles className="text-success" size={28} />,
              title: "ทบทวนหลัก 10 Rights",
              desc: "สรุปหลักการให้ยาที่ถูกต้องครบถ้วน",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 rounded-2xl bg-white/70 dark:bg-slate-800/50 backdrop-blur-md shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-accent/10">
                  {f.icon}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14"
        >
          <Button
            size="lg"
            onClick={() => navigate("/game")}
            className="text-lg px-12 py-6 h-auto rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all"
          >
            🚀 เริ่มเกม
          </Button>
        </motion.div>

        {/* Tip Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 p-6 rounded-xl bg-gradient-to-r from-muted/30 to-muted/10 backdrop-blur-md"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">💡 คำแนะนำ:</strong> เกมนี้ออกแบบมาเพื่อให้คุณได้ฝึกทักษะการตัดสินใจในสถานการณ์จริง
            <br />
            อ่านสถานการณ์อย่างละเอียดและคิดวิเคราะห์ก่อนเลือกคำตอบ
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
