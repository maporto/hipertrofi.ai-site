import Image from 'next/image';

const BRAND = {
  name: "Hipertrofi.ai",
  tagline: "Treinos de musculação com dados de verdade.",
  sub: "Acompanhe sua evolução, volume, carga, calorias e qualidade do treino. Apple Watch primeiro.",
  ctaPrimary: "Entrar na lista do TestFlight",
  ctaSecondary: "Ver roadmap",
};

const statusStyles: Record<string, string> = {
  "Done": "bg-green-100 text-green-800 ring-green-200",
  "In Progress": "bg-blue-100 text-blue-800 ring-blue-200",
  "Planned": "bg-zinc-100 text-zinc-800 ring-zinc-200",
  "Exploration": "bg-purple-100 text-purple-800 ring-purple-200",
};

const ROADMAP: { id: string; title: string; when: string; status: keyof typeof statusStyles; items: string[] }[] = [
  {
    id: "v0",
    title: "V0 • Fundamentos & Design do Produto",
    when: "Out–Nov 2025",
    status: "In Progress",
    items: [
      "Identidade do produto (Strenu/Hipertrofi.ai), proposta de valor e messaging.",
      "Arquitetura: App WatchOS + companion iOS; sincronização; backend (prototipar com Supabase/Prisma ou CloudKit).",
      "Catálogo de exercícios focado em hipertrofia (compostos, isoladores e máquinas).",
      "Modelo de dados para séries, repetições, carga, RPE, tempo de descanso e tags.",
      "Política de privacidade e termos (opt‑in para coleta de sensores).",
    ],
  },
  {
    id: "v1",
    title: "V1 • MVP sem IA (coleta completa)",
    when: "Nov–Dez 2025",
    status: "Planned",
    items: [
      "Apple Watch: registrar séries manualmente (peso, reps, RPE) com timers de descanso.",
      "Resumo da sessão: volume total, PRs do dia, estimativa de calorias (HealthKit).",
      "iPhone: histórico por exercício e por sessão, PRs, gráficos simples (volume/semana).",
      "Exportar/backup e sincronização (iCloud/CloudKit ou backend próprio).",
      "Convite TestFlight (early adopters).",
    ],
  },
  {
    id: "v1-5",
    title: "V1.5 • Coleta para IA (data engine)",
    when: "Dez 2025–Jan 2026",
    status: "Planned",
    items: [
      "Pipeline de coleta: acelerômetro/giroscópio/barômetro (amostra + metadados do exercício).",
      "Rotulagem: o usuário confirma qual exercício executou (label supervisionado).",
      "Privacidade: coleta 100% opcional, anônima e com consentimento.",
      "Infra: armazenamento de séries temporais e amostras para treino do modelo.",
    ],
  },
  {
    id: "v2",
    title: "V2 • IA no Watch (detecção + confirmação)",
    when: "Fev–Mar 2026",
    status: "Planned",
    items: [
      "Detecção on‑device do exercício e contagem de reps (modelo leve).",
      "UI de confirmação rápida no Watch (aceitar/editar set).",
      "Auto‑detecção de início/fim de série e descanso.",
      "Heurísticas de qualidade de execução e consistência.",
    ],
  },
  {
    id: "v3",
    title: "V3 • Dashboards avançados no iPhone",
    when: "Mar–Abr 2026",
    status: "Planned",
    items: [
      "Tendências: sobrecarga progressiva por exercício e por grupo muscular.",
      "Estimativas de 1RM (Epley/Brzycki), volume semanal e distribuição de intensidades.",
      "Cobertura de grupos musculares (heatmap de semanas).",
      "Insight cards: recomendações de progressão e recuperação.",
    ],
  },
  {
    id: "v4",
    title: "V4 • Social opcional (challenges e compartilhamento)",
    when: "A definir",
    status: "Exploration",
    items: [
      "Desafios entre amigos, badges e streaks.",
      "Compartilhar PRs e evolução (com controle de privacidade).",
    ],
  },
];

const FAQ = [
  {
    q: "O app funciona sem internet?",
    a: "Sim. O Apple Watch registra o treino offline; os dados sincronizam com o iPhone quando possível.",
  },
  {
    q: "Como as calorias são calculadas?",
    a: "Usamos métricas do HealthKit (energia ativa) e parâmetros do usuário; melhorias virão com os dados coletados.",
  },
  {
    q: "A IA grava meus dados pessoais?",
    a: "A coleta para IA é 100% opcional. Dados são anonimizados e você pode desativar a qualquer momento.",
  },
  {
    q: "Quando a IA chega?",
    a: "A meta é introduzir detecção com confirmação na V2, após termos dados suficientes para treinar o modelo.",
  },
];

export default function RoadmapLanding() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/brand.svg" alt="Hipertrofi.ai" width={32} height={32} className="w-12 h-12" />
            <div>
              <div className="font-semibold leading-none">{BRAND.name}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#roadmap" className="hover:text-zinc-900 text-zinc-600">Roadmap</a>
            <a href="#metrics" className="hover:text-zinc-900 text-zinc-600">Métricas</a>
            <a href="#faq" className="hover:text-zinc-900 text-zinc-600">FAQ</a>
            <a href="#updates" className="hover:text-zinc-900 text-zinc-600">Atualizações</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#waitlist" className="inline-flex items-center rounded-xl border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100">Acessar waitlist</a>
            <a href="#waitlist" className="inline-flex items-center rounded-xl bg-zinc-900 text-white px-3 py-2 text-sm hover:bg-zinc-800">{BRAND.ctaPrimary}</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-zinc-50">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">Musculação guiada por dados<br/>no seu Apple Watch.</h1>
            <p className="mt-4 text-zinc-600 text-lg">{BRAND.tagline} {BRAND.sub}</p>
            <div className="mt-6 flex gap-3">
              <a href="#waitlist" className="inline-flex items-center rounded-2xl bg-zinc-900 text-white px-5 py-3 text-sm font-medium hover:bg-zinc-800">{BRAND.ctaPrimary}</a>
              <a href="#roadmap" className="inline-flex items-center rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-100">{BRAND.ctaSecondary}</a>
            </div>
            <p className="mt-3 text-xs text-zinc-500">Sem spam. Enviaremos apenas convites e marcos importantes.</p>
          </div>
          <div className="relative">
            <div className="aspect-[3/2] rounded-3xl bg-white ring-1 ring-zinc-200 p-6 shadow-sm">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-700 grid place-items-center text-white">
                <div className="text-center">
                  {/* <div className="text-sm uppercase tracking-widest text-white/70">Preview</div>
                  <div className="text-3xl font-bold">Tela do Apple Watch</div>
                  <div className="mt-2 text-white/80">Set • Reps • Peso • RPE • Descanso</div> */}
                  <Image src="/brand.svg" alt="Hipertrofi.ai" width={246} height={246} />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 hidden md:block">
              <div className="rounded-2xl bg-white ring-1 ring-zinc-200 shadow p-3 text-xs text-zinc-600">
                Próximos marcos: V1 (MVP sem IA) → V1.5 (coleta para IA) → V2 (IA com confirmação)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-6" id="metrics">
        {[
          {title: "Problema", body: "Apps de academia focam em cardio ou são burocráticos para registrar séries. Pouca visibilidade real sobre sobrecarga progressiva."},
          {title: "Solução", body: "Registro rápido no Watch, métricas úteis (volume, PRs, 1RM estimado) e dashboards claros no iPhone."},
          {title: "Diferencial", body: "IA on‑device para identificar exercícios e contar repetições com confirmação — privacidade e controle pelo usuário."},
        ].map((c, i) => (
          <div key={i} className="rounded-3xl bg-white ring-1 ring-zinc-200 p-6 shadow-sm">
            <div className="text-xs uppercase tracking-widest text-zinc-500">{c.title}</div>
            <div className="mt-2 font-semibold">{c.body}</div>
          </div>
        ))}
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="bg-white border-t border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Roadmap público</h2>
          <p className="mt-2 text-zinc-600">Acompanhe as macro‑etapas. Atualizado conforme os marcos de desenvolvimento.</p>

          <ol className="mt-8 relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-zinc-200" />
            {ROADMAP.map((phase, idx) => (
              <li key={phase.id} className="relative pl-10 md:pl-16 py-6">
                <div className="absolute left-0 md:left-2 mt-1 h-6 w-6 rounded-full bg-white ring-2 ring-zinc-300 grid place-items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-900" />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg md:text-xl font-semibold">{phase.title}</h3>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs ring-1 ${statusStyles[phase.status]}`}>{phase.status}</span>
                  <span className="text-xs text-zinc-500">{phase.when}</span>
                </div>
                <ul className="mt-3 grid md:grid-cols-2 gap-3">
                  {phase.items.map((it, i) => (
                    <li key={i} className="rounded-2xl bg-zinc-50 ring-1 ring-zinc-200 p-3 text-sm text-zinc-700">• {it}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          {/* CTA strip */}
          <div className="mt-10 rounded-3xl bg-zinc-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-widest text-white/60">Acesso antecipado</div>
              <div className="text-xl md:text-2xl font-semibold">Quer testar a V1 (MVP) no TestFlight?</div>
              <div className="text-white/80 text-sm">Entre na waitlist e receba o convite assim que abrirmos.</div>
            </div>
            <a href="#waitlist" className="inline-flex items-center rounded-2xl bg-white text-zinc-900 px-5 py-3 text-sm font-medium hover:bg-zinc-100">Entrar na waitlist</a>
          </div>
        </div>
      </section>

      {/* Updates / Changelog (manual) */}
      <section id="updates" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Atualizações</h2>
        <p className="mt-2 text-zinc-600">Breves notas de progresso (changelog resumido).</p>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[ 
            {date: "2025‑10‑30", title: "Roadmap público publicado", text: "Dividimos em V0, V1, V1.5, V2, V3 e V4."},
            {date: "2025‑11‑10", title: "Design do MVP", text: "Fluxos do Apple Watch e modelo de dados iniciais (rascunho)."},
          ].map((u, i) => (
            <div key={i} className="rounded-3xl bg-white ring-1 ring-zinc-200 p-5">
              <div className="text-xs text-zinc-500">{u.date}</div>
              <div className="mt-1 font-semibold">{u.title}</div>
              <div className="text-sm text-zinc-700">{u.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / Waitlist */}
      <section id="waitlist" className="bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Entre na lista para o TestFlight</h3>
            <p className="mt-2 text-zinc-600">Receba convites e novidades. Sem spam, prometido.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input required type="email" placeholder="seu@email.com" className="w-full sm:flex-1 rounded-2xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"/>
              <button className="rounded-2xl bg-zinc-900 text-white px-5 py-3 text-sm font-medium hover:bg-zinc-800" type="submit">Quero receber</button>
            </form>
            <p className="mt-2 text-xs text-zinc-500">Dica: conecte esse formulário a um provedor (Brevo, Mailchimp, ConvertKit) ou a uma API própria.</p>
          </div>
          <div className="rounded-3xl bg-zinc-50 ring-1 ring-zinc-200 p-6">
            <div className="text-sm uppercase tracking-widest text-zinc-500">O que vem por aí</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              <li>• MVP no Watch com registro manual rápido</li>
              <li>• Histórico detalhado por exercício e sessão</li>
              <li>• Dashboards iniciais no iPhone</li>
              <li>• Coleta opcional de sensores para treinar a IA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Perguntas frequentes</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {FAQ.map((f, i) => (
            <div key={i} className="rounded-3xl bg-white ring-1 ring-zinc-200 p-5">
              <div className="font-medium">{f.q}</div>
              <div className="mt-1 text-sm text-zinc-700">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>© {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-900">Termos</a>
            <a href="#" className="hover:text-zinc-900">Privacidade</a>
            <a href="#" className="hover:text-zinc-900">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
