# Roadmap Frontend — Knowledge Tracker

> **Ritmo:** ~1h por dia (seg → qui)
>
> **Formato fixo diário:**
>
> * 15 min — leitura objetiva
> * 35 min — código no projeto
> * 10 min — commit + anotação curta

Projeto âncora: **Offline‑First Personal Knowledge Tracker** (sem backend)

> ## 💡 Lembrar
>
> Arquitetura bonita organiza código.   
> Arquitetura necessária controla complexidade.

## 🗒️ Notas

### O que define um module?

Ele deve:   
✔ Ter responsabilidade própria   
✔ Ter estado próprio   
✔ Ter regras próprias   
✔ Poder evoluir isoladamente   

Se apagarmos notes/, o resto da aplicação deve continuar funcionando.   


### Modelo mental 

Domain → Regra
Application → Fluxo
Infra → Comunicação externa
Store → Estado
UI → Interface
App → Orquestração global

---

## 🔒 Escopo fixo (não negociar)

✅ Notas, revisões, persistência local   
❌ Login real, backend, sync, editor rico

---

# 🟣 MÊS 1 — Fundamentos avançados de estado e dados

## Semana 1 — Estado, closures e store

### Segunda — Estado privado

* 📖 Ler: 
  - *You Don’t Know JS — Scope & Closures* (cap. closures)
  [https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures)   
  - *Closures (MDN – foque na seção "Closure"):* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures
* 💻 Fazer:

  * Criar `createStore()` usando closure
  * Estado inicial vazio `{ notes: [] }`

### Terça — Imutabilidade

* 📖 Ler: 
  - *Working with Objects* (MDN)
  [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)   
  - *Imutabilidade em JS (conceito prático):* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
* 💻 Fazer:

  * Função `getState()` (somente leitura)
  * Garantir que reducers não mutam objetos

### Quarta — Reducers

* 📖 Ler:
  - *Redux Fundamentals – Reducers*
  [https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers)   
  - *Conceito de reducer (Redux – apenas conceito):* https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
* 💻 Fazer:

  * Reducer `ADD_NOTE`
  * Dispatch manual (sem lib)

### Quinta — Consolidação

* 📖 Ler: 
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  - https://refactoring.guru/design-patterns/observer
* 💻 Fazer:

  * Implementar subscribe(listener)
  * Manter lista interna de listeners
  * Executar listeners após dispatch
* 📝 Anotar:

  * Por que estado imutável facilita debug

---

## Semana 2 — Modelo de domínio (notas e revisões)

### Segunda — Identidade e referências

* 💻 Fazer:

  * Modelar `Note` (id, title, content)
  * Modelar `Revision`

### Terça — Regras de negócio

* 💻 Fazer:

  * Ao salvar nota, criar `Revision`
  * Garantir histórico imutável

### Quarta — Assincronicidade

* 📖 Ler/Ver: *The Event Loop* (Jake Archibald)
  [https://www.youtube.com/watch?v=cCOL7MC4Pl0](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
* 💻 Fazer:

  * Simular save assíncrono (Promise + timeout)

### Quinta — Consolidação

* 📝 Anotar:

  * Fluxo completo: editar → salvar → revisar

---

## Semana 3 — Primeira UI (mínima)

### Segunda — Render bruto

* 💻 Fazer:

  * Renderizar lista de notas
  * Sem layout, só HTML básico

### Terça — Editor simples

* 💻 Fazer:

  * `<textarea>` ligado ao estado
  * Atualizar nota selecionada

### Quarta — Estado derivado

* 📖 Ler: *Choosing the State Structure* (React Docs)
  [https://react.dev/learn/choosing-the-state-structure](https://react.dev/learn/choosing-the-state-structure)
* 💻 Fazer:

  * Selector `getActiveNote()`

### Quinta — Consolidação

* 📝 Anotar:

  * Diferença entre estado fonte e derivado

---

## Semana 4 — Organização e confiança

### Segunda — Selectors

* 💻 Fazer:

  * Centralizar acesso ao estado via selectors

### Terça — API limpa

* 💻 Fazer:

  * Remover acessos diretos ao estado

### Quarta — UI consistente

* 💻 Fazer:

  * Garantir que toda UI depende do store

### Quinta — Documentação

* 📝 Fazer:

  * README explicando store e fluxo de dados

---

# 🟣 MÊS 2 — Persistência Offline + UX

## Semana 1 — IndexedDB

### Segunda — Conceitos

* 📖 Ler: *IndexedDB API* (MDN)
  [https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
* 💻 Fazer:

  * Criar camada `repository`

### Terça — Persistência

* 💻 Fazer:

  * Salvar notas no IndexedDB

### Quarta — Bootstrap

* 💻 Fazer:

  * Carregar estado ao iniciar app

### Quinta — Reflexão

* 📝 Anotar:

  * Prós e contras do IndexedDB

---

## Semana 2 — UX consciente

### Segunda — Escrita de UX

* 📖 Ler: *UX Writing Basics* (NNGroup)
  [https://www.nngroup.com/articles/ux-writing/](https://www.nngroup.com/articles/ux-writing/)
* 💻 Fazer:

  * Mensagens claras de feedback

### Terça — Estados vazios

* 💻 Fazer:

  * Tela sem notas

### Quarta — Erros previsíveis

* 💻 Fazer:

  * Falha ao salvar

### Quinta — Revisão geral

* 📝 Anotar:

  * O que ficou simples e por quê

---

## ✅ Checklist rápido (GitHub Issues)

### Semana 1

* [ ] Store com closure
* [ ] Estado imutável
* [ ] Reducer de notas
* [ ] Nota técnica

### Semana 2

* [ ] Modelo Note/Revision
* [ ] Revisões automáticas
* [ ] Save assíncrono
* [ ] Nota técnica

---

## 📌 Regra final

Se em 1h o app abre e faz **uma coisa a mais que ontem**, você avançou.
