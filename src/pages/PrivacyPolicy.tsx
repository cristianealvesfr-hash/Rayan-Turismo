import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Shield } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow pt-16 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <div className="flex items-center gap-4 mb-8 border-b pb-8">
              <div className="p-4 bg-brandBlue-50 rounded-2xl">
                <Shield className="w-8 h-8 text-brandBlue-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Política de Privacidade</h1>
                <p className="text-slate-500">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
              </div>
            </div>

            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="lead text-xl text-slate-700 font-medium">
                A Cayan Passeios Tur compromete-se a proteger e respeitar a sua privacidade. Esta política descreve como coletamos, usamos e protegemos os seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Informações que Coletamos</h2>
              <p>
                Coletamos apenas as informações estritamente necessárias para a prestação dos nossos serviços turísticos e atendimento ao cliente. Isso pode incluir:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Informações de contato (Nome, telefone e e-mail) fornecidas voluntariamente ao entrar em contato via WhatsApp ou formulários.</li>
                <li>Dados de navegação anonimizados (Cookies) para melhorar a usabilidade do nosso site e métricas de acesso.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Como Usamos as Informações</h2>
              <p>
                As informações coletadas são utilizadas exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Processar reservas de passeios, roteiros ou transfers.</li>
                <li>Garantir a segurança e identificação dos passageiros durante as atividades.</li>
                <li>Responder a dúvidas, solicitações ou enviar confirmações de agendamento.</li>
                <li>Melhorar continuamente a experiência do usuário em nossa plataforma web.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Compartilhamento de Dados</h2>
              <p>
                A Cayan Passeios Tur <strong>não vende, aluga ou compartilha</strong> seus dados pessoais com terceiros para fins de marketing. Seus dados poderão ser compartilhados estritamente com parceiros operacionais diretos (como guias turísticos e motoristas) apenas quando necessário para a execução do serviço contratado por você, garantindo que eles também cumpram diretrizes rígidas de privacidade.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
              <p>
                Nosso site utiliza cookies básicos essenciais para garantir o funcionamento adequado das páginas e medir a audiência de forma agregada e anônima. Você tem o direito de aceitar ou recusar o uso de cookies não essenciais através do nosso banner de consentimento no rodapé da página.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Seus Direitos (LGPD)</h2>
              <p>
                Como titular dos dados, você tem o direito garantido pela LGPD de:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Confirmar a existência de tratamento dos seus dados.</li>
                <li>Acessar as informações que temos sobre você.</li>
                <li>Solicitar a correção de dados incompletos ou desatualizados.</li>
                <li>Solicitar a exclusão ou anonimização dos seus dados, exceto quando a retenção for exigida por obrigações fiscais ou legais.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Contato</h2>
              <p>
                Se você tiver qualquer dúvida sobre esta Política de Privacidade ou desejar exercer seus direitos, entre em contato conosco através do nosso WhatsApp oficial de atendimento: <strong>(82) 99946-5558</strong>.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
