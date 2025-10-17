# 📊 Infográfico MVP & NPS - React

Aplicação React interativa que apresenta de forma visual e didática os conceitos de **MVP (Produto Mínimo Viável)** e **NPS (Net Promoter Score)**.

## 🚀 Tecnologias

- **React 18** - Biblioteca para construção de interfaces
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilização com gradientes e animações

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

## 🏃 Como Executar

### Modo Desenvolvimento
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`

### Build para Produção
```bash
npm run build
```

### Preview do Build
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
react-infografico/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Cabeçalho da aplicação
│   │   ├── Footer.jsx           # Rodapé
│   │   ├── MVPSection.jsx       # Seção completa do MVP
│   │   ├── NPSSection.jsx       # Seção completa do NPS
│   │   ├── DefinitionBox.jsx    # Box de definições
│   │   ├── CycleStep.jsx        # Etapa do ciclo Build-Measure-Learn
│   │   ├── ObjectiveCard.jsx    # Card de objetivos
│   │   ├── NPSGroup.jsx         # Grupo de classificação NPS
│   │   ├── FormulaBox.jsx       # Box com fórmula do NPS
│   │   ├── ZonesTable.jsx       # Tabela de zonas de interpretação
│   │   ├── ExampleBox.jsx       # Exemplo prático
│   │   └── ConnectionBox.jsx    # Box de conexão MVP+NPS
│   ├── App.jsx                  # Componente principal
│   ├── App.css                  # Estilos da aplicação
│   ├── main.jsx                 # Ponto de entrada
│   └── index.css                # Estilos globais
├── index.html                   # HTML principal
├── package.json                 # Dependências
├── vite.config.js               # Configuração do Vite
└── README.md                    # Este arquivo
```

## ✨ Funcionalidades

### MVP - Produto Mínimo Viável
- ✅ Definição clara e objetiva
- ✅ Origem do conceito (Eric Ries)
- ✅ Ciclo Build-Measure-Learn interativo
- ✅ Cards de objetivos com animações

### NPS - Net Promoter Score
- ✅ Explicação da métrica
- ✅ Classificação visual dos clientes (Promotores, Neutros, Detratores)
- ✅ Fórmula de cálculo destacada
- ✅ Tabela de zonas de interpretação
- ✅ Exemplo prático com cálculo real
- ✅ Ciclo de melhoria contínua

### Interatividade
- 🎨 Animações suaves ao scroll
- 🖱️ Hover effects nos cards
- 📱 Design responsivo para mobile
- 🎯 Elementos clicáveis com feedback visual

## 🎨 Design

- Gradientes modernos e vibrantes
- Paleta de cores temática
- Tipografia clara e hierarquizada
- Espaçamento adequado para leitura
- Animações sutis para melhor UX

## 📚 Conteúdo Educacional

O infográfico cobre:
- **Conceitos fundamentais** de MVP e NPS
- **Metodologias** de validação e medição
- **Exemplos práticos** e aplicações
- **Interpretação de resultados**
- **Ciclos de melhoria contínua**

## 🛠️ Customização

Para personalizar cores, edite o arquivo `src/App.css`:
- Gradientes principais: `.header`, `.app`
- Cores dos cards: `.objective-card`, `.nps-group`
- Cores da tabela: `.zones-table`

## 📄 Licença

Projeto educacional livre para uso acadêmico e profissional.

---

Desenvolvido com ⚛️ React e 💜 para educação em empreendedorismo.
