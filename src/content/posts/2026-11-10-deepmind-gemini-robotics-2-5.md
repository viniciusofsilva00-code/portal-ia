---
titulo: "DeepMind lança Gemini Robotics 2.5 e abre o benchmark de segurança ASIMOV-Jailbreak"
data: 2026-11-10T15:40:00-03:00
resumo: "Modelo VLA tem taxa de sucesso 30% a 100% maior que a versão anterior, segundo a DeepMind, e foi testado em linhas da Mercedes-Benz com o humanoide Apollo 2."
tags:
  - google
  - modelos
  - robótica
  - segurança
fontes:
  - nome: Google DeepMind
    url: https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/
  - nome: Ars Technica
    url: https://arstechnica.com/google/2026/11/deepmind-reveals-gemini-robotics-2-5-and-open-safety-benchmark-asimov-jailbreak/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google DeepMind apresentou o Gemini Robotics 2.5, que a empresa chama de seu modelo vision-language-action (VLA) mais capaz. Avaliado em mais de 200 tarefas, ele teria taxa de sucesso 30% a 100% maior que as versões anteriores, dependendo do tipo de tarefa, e termina o trabalho 20% a 30% mais rápido. Alguns exemplos divulgados: embalar doces com pinça passou de 5% para 100% de sucesso; desatar laços de fita, de 0% para 70%; dobrar calças, de 0% para 40%.

O modelo roda em robôs diferentes, como o humanoide Apollo 2 da Apptronik, com mão de cinco dedos e 22 graus de liberdade, e a plataforma Franka Duo, de garras paralelas. Numa prova de conceito com Apptronik e Mercedes-Benz em fábricas de Kecskemét (Hungria) e Sindelfingen (Alemanha), o Apollo 2 separou peças de caixas a granel para bandejas com 96% de sucesso. Nessa configuração, o Gemini Robotics ER planeja o fluxo e o 2.5 controla braços e mãos.

Na parte de segurança, a DeepMind diz que orientação por raciocínio em tempo de inferência aumentou em 33% a conclusão segura de tarefas perto de obstáculos e em 43% perto de pessoas. A empresa também publicou como open source o ASIMOV-Jailbreak, com centenas de prompts que disfarçam pedidos perigosos em dezenas de cenas. Nele, o Gemini 4 Argon resistiu a 99,5% das tentativas, contra 82% do Gemini Robotics ER 2.

O modelo está sendo liberado para parceiros de robótica; não há menção a API pública. Todos os números são da própria DeepMind.

## Por que importa

O salto em tarefas de manipulação fina, que antes ficavam em zero, é o tipo de avanço que tira robôs de demos e os leva para linhas de montagem. O benchmark aberto de jailbreak para robôs é a parte mais útil para a comunidade: dá uma forma comparável de medir se um modelo pode ser enganado a fazer algo fisicamente perigoso.
