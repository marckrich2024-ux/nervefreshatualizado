# Plano Estratégico de Domínio Orgânico e Hub Editorial (Fase 3)
**Projeto:** Health Journal Daily / Nerve Fresh
**Mercado Alvo:** Estados Unidos (US)

Este documento detalha o planejamento editorial e a arquitetura de SEO para transformar o site em uma autoridade confiável no ecossistema de dores nervosas e suporte neural. Nenhuma página foi implementada ainda.

---

## 1. Estrutura da Base Interna de Evidências (Evidence Database)

Para garantir compliance com as diretrizes E-E-A-T e evitar riscos YMYL (Your Money or Your Life), toda afirmação precisará de lastro. Recomendamos centralizar isso em um arquivo TypeScript para facilitar a injeção de dados nos componentes React no futuro.

**Arquivo Sugerido:** `src/data/evidenceDatabase.ts`

```typescript
export type EvidenceType = 
  | 'human_trial' 
  | 'animal_study' 
  | 'in_vitro' 
  | 'review_article' 
  | 'meta_analysis' 
  | 'manufacturer_claim' 
  | 'public_discussion'
  | 'needs_verification';

export type ConfidenceLevel = 'High' | 'Moderate' | 'Low' | 'Unverified';
export type YmylRisk = 'Critical' | 'High' | 'Moderate' | 'Low';

export interface EvidenceRecord {
  id: string;
  subject: string; // Ex: "Corydalis Yanhusuo", "Nerve Fresh Manufacturer Claim"
  claim: string; // A afirmação sendo analisada
  evidenceType: EvidenceType;
  sourceName: string; // Nome do jornal, site ou órgão
  sourceUrl: string | null;
  accessDate: string; // YYYY-MM-DD
  whatItSuggests: string; // O que o estudo de fato diz (sem exageros)
  whatItDoesNotProve: string; // Limitações claras (ex: "Não prova cura da neuropatia")
  confidenceLevel: ConfidenceLevel;
  applicablePages: string[]; // Slugs onde esta evidência pode ser citada
  ymylRisk: YmylRisk;
  complianceNotes: string; // Diretrizes para os redatores (ex: "Use 'may support' em vez de 'treats'")
}

// Exemplo de entrada:
export const evidenceDB: EvidenceRecord[] = [
  {
    id: "ev-corydalis-001",
    subject: "Corydalis",
    claim: "Helps relieve neuropathic pain",
    evidenceType: "animal_study",
    sourceName: "PubMed / NCBI",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/...",
    accessDate: "2026-05-16",
    whatItSuggests: "Suggests analgesic properties in rodent models with neuropathic pain.",
    whatItDoesNotProve: "Does not prove it cures neuropathy in humans or replaces medication.",
    confidenceLevel: "Moderate",
    applicablePages: ["/nerve-fresh-ingredients", "/corydalis-nerve-pain"],
    ymylRisk: "High",
    complianceNotes: "Always frame as 'traditionally used for' or 'early studies suggest potential support'. Do not use the word 'cure' or 'painkiller'."
  }
];
```

---

## 2. Universe de Palavras-Chave e Clusters (US Market)

### 2.1 Cluster Produto (BOFU - Fundo de Funil)
Keywords transacionais e de investigação final, onde o usuário já conhece a marca.

| Keyword | Intenção | Funil | Formato Recomendado | Risco YMYL | Observação Compliance |
|---------|----------|-------|---------------------|------------|-----------------------|
| Nerve Fresh review | Investigação Comercial | BOFU | Editorial Review (Profundo) | Médio | Focar em análise objetiva, ingredientes e prós/contras. Não inventar persona. |
| Nerve Fresh scam | Investigação / Confiança | BOFU | Scam Analysis / Fact Check | Médio | Analisar táticas de venda, políticas de reembolso. Ser neutro. |
| Nerve Fresh side effects | Informativo / Segurança | BOFU | FAQ / Artigo de Segurança | Alto | Citar interações, basear-se em bulas dos ingredientes. |
| Nerve Fresh ingredients | Informativo | BOFU | Deep Dive Científico | Médio | Linkar para a *Evidence Database*. |
| Nerve Fresh complaints | Investigação | BOFU | Review / Seção de Críticas | Baixo | Mostrar avaliações reais de terceiros (Trustpilot/Amazon). |
| Does Nerve Fresh work | Investigativo | BOFU | Análise de Expectativas | Alto | Evitar "Sim, funciona". Usar "Como os ingredientes agem". |

### 2.2 Cluster Comparação (MOFU/BOFU)
Usuários indecisos entre soluções.

| Keyword | Intenção | Funil | Formato Recomendado | Risco YMYL | Observação Compliance |
|---------|----------|-------|---------------------|------------|-----------------------|
| Nerve Fresh vs Nervive | Comparação | BOFU | Tabela Comparativa + Artigo | Médio | Comparar fórmulas (Nervive usa ALA/Vitamina B, Nerve Fresh usa ervas). |
| Nerve Fresh alternatives | Exploratório | MOFU | Listicles Editoriais | Médio | Mostrar alternativas viáveis, incluindo estilo de vida. |
| best nerve support supplements | Investigação Comercial | MOFU | Guias de Compra (Roundup) | Alto | Requer disclaimer de isenção de responsabilidade médica forte. |

### 2.3 Cluster Dor/Sintoma (TOFU - Topo de Funil)
Volume alto, intenção de entender o problema.

| Keyword | Intenção | Funil | Formato Recomendado | Risco YMYL | Observação Compliance |
|---------|----------|-------|---------------------|------------|-----------------------|
| burning feet at night | Informativo | TOFU | Artigo Médico-Informativo | Crítico | Não diagnosticar. Indicar consulta médica. Listar causas comuns. |
| pins and needles in feet | Informativo | TOFU | Guia de Sintomas | Crítico | Mesmo do anterior. Mencionar suplementação apenas como suporte secundário. |
| nerve discomfort at night | Informativo | TOFU | Dicas de Estilo de Vida | Alto | Foco em rotina do sono, meias, alimentação, e suplementos no final. |

### 2.4 Cluster Solução/Ingredientes (MOFU)
Buscando soluções genéricas.

| Keyword | Intenção | Funil | Formato Recomendado | Risco YMYL | Observação Compliance |
|---------|----------|-------|---------------------|------------|-----------------------|
| corydalis nerve pain | Informativo | MOFU | Artigo de Ingrediente | Alto | Usar base de evidências. Não prometer cura de dor. |
| natural nerve support | Comercial/Informativo | MOFU | Guia Holístico | Médio | Integrar dieta, exercícios e suplementação. |

---

## 3. Análise SERP e Oportunidades

### 3.1 Comportamento Geral do Google (SERP)
- **Para Produto (Nerve Fresh review/scam):** A SERP está infestada de *Parasite SEO* (jornais locais, Outlook India, mid-day) e vídeos do YouTube. Resultados em texto costumam ser de afiliação de baixa qualidade (texto gerado por IA com promessas fortes).
- **Para Sintomas (Burning feet):** O Google prioriza gigantes como Healthline, Mayo Clinic e Cleveland Clinic.
- **Para Comparações (Best nerve supplements):** O Google exibe publicações focadas em nutrição e saúde (ex: Forbes Health, Healthline, sites especializados em reviews de suplementos).

### 3.2 O que o Google prefere e Lacunas dos Concorrentes
- **Lacuna de Confiança:** A maioria dos reviews de Nerve Fresh tem layout pobre, usa personas falsas ("Dr. John") e omite os efeitos colaterais. O Google recompensa transparência.
- **Formato:** O Google prefere páginas com sumários executivos (Quick Verdicts), tabelas de prós/contras, referências no rodapé e caixas de "Fato verificado" ou autoria real.
- **Posso ranquear com página própria?** Para as palavras BOFU (Produto e Comparação), **sim**. Com um E-E-A-T forte, design superior e sem alegações médicas bizarras, podemos bater o *Parasite SEO* no médio prazo e rankear no longo. Para TOFU (Sintomas), será difícil ranquear em 1º lugar, mas podemos pegar tráfego de cauda longa (Long-tail keywords).
- **YouTube é fundamental:** A SERP para reviews tem carrosséis de vídeo. Devemos ter uma estratégia de vídeo (nem que seja um vídeo sem rosto, narrado por voz profissional com B-roll e gráficos na tela) para incorporar na página.

---

## 4. Sitemap Estratégico (Plano de 90 Dias)

### 4.1 Páginas Institucionais e Confiança (Prioridade P1 - Base E-E-A-T)
- `/about-us`: Missão editorial, como avaliamos suplementos (P1).
- `/medical-disclaimer`: Aviso legal claro de que não somos médicos (P1).
- `/editorial-guidelines`: Como checamos fatos (P1).

### 4.2 Páginas BOFU de Produto (Prioridade P1)
1. **URL:** `/reviews/nerve-fresh`
   - **Keyword:** Nerve Fresh review
   - **H1:** Nerve Fresh Review: An Editorial Look at the Nerve Support Formula
   - **CTA:** "Check Official Price" (com disclaimer)
2. **URL:** `/scam-alerts/nerve-fresh`
   - **Keyword:** Nerve Fresh scam
   - **H1:** Is Nerve Fresh a Scam? Red Flags & What You Must Know
   - **CTA:** "Shop Safely on the Official Website"
3. **URL:** `/ingredients/nerve-fresh`
   - **Keyword:** Nerve Fresh ingredients
   - **H1:** The Science Behind Nerve Fresh Ingredients

### 4.3 Páginas de Comparação (Prioridade P2)
1. **URL:** `/compare/nerve-fresh-vs-nervive`
   - **Keyword:** Nerve Fresh vs Nervive
   - **H1:** Nerve Fresh vs. Nervive: Which Nerve Support Supplement is Better?
2. **URL:** `/guides/best-nerve-support-supplements`
   - **Keyword:** best nerve support supplements
   - **H1:** Top Rated Nerve Support Supplements (2026 Guide)

### 4.4 Páginas de Ingrediente e Segurança (Prioridade P2/P3)
1. **URL:** `/ingredients/corydalis-extract`
   - **Keyword:** corydalis nerve pain
   - **H1:** Corydalis Extract: Potential Benefits for Nerve Comfort
2. **URL:** `/safety/nerve-supplement-interactions`
   - **Keyword:** nerve supplement side effects
   - **H1:** Common Side Effects of Natural Nerve Supplements

### 4.5 Páginas de Dor/Sintoma (Prioridade P3 - Construção de Autoridade)
1. **URL:** `/symptoms/nighttime-nerve-discomfort`
   - **Keyword:** nerve discomfort at night
   - **H1:** Why Does Nerve Discomfort Flare Up at Night? (And How to Calm It)

---

## 5. Plano de Publicação em Ondas

**Onda 1 (Semanas 1-2): Fundação e Conversão Imediata**
*Foco: Capturar quem já procura pelo Nerve Fresh e blindar o site (E-E-A-T).*
- Criar a Base de Evidências (Database TS/Markdown).
- Páginas institucionais (About, Editorial Guidelines, Disclaimer).
- `/reviews/nerve-fresh` (Pilar principal).
- `/scam-alerts/nerve-fresh`.

**Onda 2 (Semanas 3-4): Profundidade e Segurança**
*Foco: Mostrar ao Google que cobrimos o produto de forma integral, não apenas vendendo.*
- `/ingredients/nerve-fresh`.
- `/safety/nerve-supplement-interactions`.
- 1 Artigo profundo de ingrediente (ex: Corydalis).

**Onda 3 (Semanas 5-6): Comparações e Categoria**
*Foco: Capturar tráfego MOFU de pessoas comparando marcas.*
- `/compare/nerve-fresh-vs-nervive`.
- `/guides/best-nerve-support-supplements`.
- Outra página de comparação relevante.

**Onda 4 (Semanas 7-8+): Autoridade Tópica (Sintomas)**
*Foco: Começar a ranquear para sintomas e alimentar os funis superiores.*
- `/symptoms/nighttime-nerve-discomfort`.
- Guias de estilo de vida para suporte nervoso.

---

## 6. Recomendações de Linkagem Interna e Multimídia

**Linkagem Interna:**
- Todas as páginas de sintomas (`/symptoms/*`) devem ter calls-to-action educativos linkando para `/ingredients/nerve-fresh` ou `/reviews/nerve-fresh` no final do texto ("If you're considering supplementation, read our review of X...").
- A página de Review (`/reviews/nerve-fresh`) deve linkar para fora (outbound links) para estudos da PubMed e internamente para a página de `/scam-alerts` e `/ingredients`.
- Utilizar *breadcrumbs* (migalhas de pão) em todas as páginas para reforçar a arquitetura para os robôs do Google.

**Estratégia de YouTube / Vídeo:**
- O Google ama vídeos em reviews de afiliados.
- Recomendação: Produzir um "Video Summary" (2-3 minutos) focado em: "O que é o Nerve Fresh, prós, contras e o alerta sobre o site oficial".
- Hospedar no YouTube (canal com branding do Health Journal Daily) e dar *embed* no topo do `/reviews/nerve-fresh`.
- Otimizar o vídeo com as marcações de capítulos (Timestamps) para o Google ler as seções.

---

## Próximos Passos (Aguardando Aprovação)

1. Validar esta arquitetura e plano de ondas.
2. Iniciar a criação da **Onda 1** (implementar a Base de Evidências e esboçar o conteúdo do Review Principal).
3. Desenvolver os novos layouts React/Next para suportar guias editoriais, tabelas de E-E-A-T e caixas de checagem de fatos.
