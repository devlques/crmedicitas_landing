import { motion } from "motion/react";
import {
  Calendar,
  Clock,
  Globe,
  Smile,
  MessageCircle,
  ChevronRight,
  CalendarDays,
} from "lucide-react";
import bookingImage from "../imports/Screenshot_2026-04-13_at_1.38.41 AM.png";
import adminPanelImage from "../imports/Screenshot_2026-04-13_at_1.47.51 AM.png";
import bgImage from "../imports/bg_image.png";
import demo from "../imports/demo.gif";
import logo from "../imports/logo_crmedicitas.png";
const WHATSAPP_URL =
  "https://wa.me/50688902811?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20CRmedicitas";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-5 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={logo} alt="crmedicitas logo"/>
          <div className="flex items-center gap-6">
            <a
              href="#beneficios"
              className="text-slate-600 text-sm hover:text-[#0B2447]"
            >
              Beneficios
            </a>
            <a
              href="#como"
              className="text-slate-600 text-sm hover:text-[#0B2447]"
            >
              ¿Cómo funciona?
            </a>
            <a
              href={WHATSAPP_URL}
              className="px-5 py-2 bg-[var(--primary)] text-white rounded-full text-sm hover:bg-[var(--dark)] transition-colors"
            >
              Solicitar demo
            </a>
          </div>
        </div>
      </header>

     {/* Hero Section */}
<section className="relative py-20 md:py-28 overflow-hidden">
  {/* Background Image with Low Opacity */}
  <div className="absolute inset-0">
    <img
      src={bgImage}
      alt=""
      className="w-full h-full object-cover opacity-[0.25]"
    />
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Column - Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-xs tracking-widest text-slate-500 mb-4">
          Para clínicas en Costa Rica
        </div>
        <h1 className="text-5xl md:text-6xl text-[var(--dark)] mb-6 leading-tight font-bold">
          Organice las citas de su clínica sin estrés
        </h1>
        <p className="text-lg text-[var(--dark)] mb-8 leading-relaxed">
          Permite a sus pacientes reservar en línea y a Ud
          gestionar la agenda de forma simple y ordenada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#vista"
            className="px-7 py-3.5 bg-[var(--dark)]  text-white rounded-full hover:bg-[#0d2d5a] transition-colors text-center"
          >
            Vista previa
          </a>
          <a
            href={WHATSAPP_URL}
            className="px-7 py-3.5 text-slate-700 hover:text-[#0B2447] transition-colors flex items-center gap-2 justify-center rounded-full border border-slate-400 hover:border-[var(--primary)]"
          >
            <MessageCircle className="w-5 h-5" />
            Contacto
          </a>
        </div>
      </motion.div>

      {/* Right Column - Calendar Icon */}
      <div className="flex justify-center lg:justify-end">
        <img src={demo} alt="gif" className="w-full max-w-md h-auto rounded-4xl"/>
      </div>
    </div>
  </div>
</section> 
      {/* Product Preview Section */}
      <section
        id="vista"
        className="py-20 md:py-28 bg-[var(--dark)] text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs tracking-widest text-slate-400 mb-4">
              VISTA PREVIA
            </div>
            <h2 className="text-4xl md:text-5xl mb-2">
              Fácil para ud.{" "}
              <span className="text-[var(--primary)]">
                Fácil para sus pacientes.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-[1.5fr_3fr] gap-8 max-w-6xl mx-auto">
            {/* Patient Booking Interface */}
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={bookingImage}
                alt="Interfaz de reserva para pacientes"
                className="w-full h-full"
              />
            </motion.div>

            {/* Admin Panel */}
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={adminPanelImage}
                alt="Panel de administración"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="beneficios"
        className="py-20 md:py-28 bg-[#F5F5F5]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs tracking-widest text-slate-500 mb-4">
              BENEFICIOS
            </div>
            <h2 className="text-4xl md:text-5xl text-[var(--dark)]">
              Todo lo que necesita para gestionar su clínica
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Menos citas perdidas",
                description:
                  "Los recordatorios automáticos reducen las ausencias y mantienen su agenda completa.",
                stat: "-40%",
              },
              {
                icon: Clock,
                title: "Reservas en línea siempre",
                description:
                  "Sus pacientes pueden reservar a cualquier hora, sin necesidad de llamar.",
                stat: "24/7",
              },
              {
                icon: Globe,
                title: "Agenda siempre organizada",
                description:
                  "Visualice todas sus citas en un solo lugar, sin confusiones ni papeles.",
                stat: "100%",
              },
              {
                icon: Smile,
                title: "Simple para todos",
                description:
                  "Interfaz intuitiva que no requiere conocimientos técnicos. Ni para usted, ni para sus pacientes.",
                stat: "Fácil",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative">
                  <div className="absolute -top-2 right-0 text-7xl text-slate-100 select-none">
                    {benefit.stat}
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <benefit.icon className="w-6 h-6 text-[var(--primary)]" />
                    </div>
                    <h3 className="text-xl text-[#0B2447] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="como"
        className="py-20 md:py-28 bg-[#FAFAFA]"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs tracking-widest text-slate-500 mb-4">
              CÓMO FUNCIONA
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0B2447]">
              Tres pasos. Así de simple.
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                number: "01",
                title: "Paciente reserva en línea",
                description:
                  "Su paciente elige el día, la hora y el servicio desde cualquier dispositivo. Sin llamadas, sin esperas.",
              },
              {
                number: "02",
                title: "La cita se guarda automáticamente",
                description:
                  "La reserva se registra al instante en su agenda digital. Ambos reciben una confirmación.",
              },
              {
                number: "03",
                title:
                  "Usted gestiona todo desde un panel claro",
                description:
                  "Vea, modifique o cancele citas en segundos. Toda su agenda en un solo lugar.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl text-[#0B2447]">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl text-[#0B2447] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contacto"
        className="py-20 md:py-28 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="bg-[#0B2447] rounded-3xl p-12 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Empiece a organizar su clínica hoy
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
              Solicite una demostración gratuita y descubre cómo
              CRmedicitas puede transformar su gestión de citas.
            </p>
            <a
              href={WHATSAPP_URL}
              className="px-8 py-4 bg-white text-[#0B2447] rounded-full hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
            >
              Solicitar demo
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl text-[#0B2447] mb-4">
              Hablemos
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              ¿Tiene preguntas? Escríbanos por WhatsApp o correo
              y le respondemos en minutos.
            </p>
            <div className="mb-6">
              <a
                href="mailto:info@crmedicitas.com"
                className="text-slate-600 mb-8"
              >
                info@crmedicitas.com
              </a>
            </div>
            <div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white rounded-full hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Escribir por WhatsApp
            </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <img src={logo} alt="crmedicitas log"/>
          <div className="text-sm text-slate-500">
            © 2026 CRmedicitas · Hecho en Costa Rica 🇨🇷
          </div>
        </div>
      </footer>
    </div>
  );
}
