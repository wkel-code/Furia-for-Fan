
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FuriaLogo from '@/components/FuriaLogo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "O que é o FURIA for Fã?",
      answer: "O FURIA for Fã é uma plataforma oficial que conecta os torcedores diretamente com a FURIA Esports. Aqui você pode criar seu perfil personalizado, acessar conteúdos exclusivos e participar de eventos especiais para a comunidade."
    },
    {
      question: "Como faço para me tornar um membro oficial?",
      answer: "Basta preencher o formulário completo na página inicial, fornecendo seus dados pessoais, preferências e conectando suas redes sociais. Após a validação, você receberá uma confirmação e seu nível de torcedor."
    },
    {
      question: "Quais são os benefícios de ser um torcedor cadastrado?",
      answer: "Torcedores cadastrados têm acesso a conteúdo exclusivo, oportunidades de conhecer jogadores, descontos em produtos oficiais, e prioridade na compra de ingressos para eventos da FURIA. O nível de benefícios aumenta conforme seu engajamento como torcedor."
    },
    {
      question: "Como funciona a análise de nível de torcedor?",
      answer: "A análise é feita com base nas informações que você fornece no cadastro, como frequência com que assiste aos jogos, participação em eventos, tempo como torcedor, e outras métricas de engajamento. Quanto mais ativo você for como fã da FURIA, especialmente do time de CS:GO, maior será seu nível."
    },
    {
      question: "Meus dados estão seguros na plataforma?",
      answer: "Sim, a segurança dos dados dos nossos torcedores é prioridade máxima. Utilizamos tecnologia de criptografia avançada e seguimos todas as diretrizes da LGPD (Lei Geral de Proteção de Dados) para garantir a proteção das suas informações."
    },
    {
      question: "Como acompanho os jogos do time de CS:GO da FURIA?",
      answer: "Você pode acompanhar todos os jogos através do nosso canal oficial na Twitch, além de receber notificações exclusivas sobre horários de partidas e eventos especiais se estiver cadastrado na plataforma FURIA for Fã."
    },
    {
      question: "O que significa ser um Fã Lendário da FURIA?",
      answer: "Ser um Fã Lendário significa que você está entre os torcedores mais dedicados e engajados da FURIA. Estes torcedores acompanham praticamente todas as partidas, participam ativamente da comunidade, comparecem a eventos presenciais e são verdadeiros embaixadores da marca FURIA."
    }
  ];

  return (
    <div className="furia-container bg-furia-black">
      {/* Watermark Background */}
      <div className="furia-bg-watermark">
        <FuriaLogo className="w-[80%] h-auto max-w-[1000px] opacity-20" />
      </div>
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="furia-card p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl text-furia-white mb-8">
              <span className="text-furia-orange">#</span>PERGUNTAS FREQUENTES
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-furia-white">
                Encontre respostas para as dúvidas mais comuns sobre a plataforma FURIA for Fã e como aproveitar ao máximo sua experiência como torcedor.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-furia-gray/20 py-2">
                  <AccordionTrigger className="text-furia-white hover:text-furia-orange">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-furia-gray">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 pt-6 border-t border-furia-gray/20">
              <p className="text-furia-gray mb-6">
                Não encontrou o que procurava? Entre em contato com nossa equipe de suporte através do WhatsApp.
              </p>
              <a href="/" className="furia-btn inline-block">Voltar para Home</a>
            </div>
          </div>
        </div>
      </main>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQ;
