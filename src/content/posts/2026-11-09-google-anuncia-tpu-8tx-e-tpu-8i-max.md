---
titulo: "Google Cloud anuncia TPU 8tx, com computação confidencial, e TPU 8i Max, com o dobro de memória"
data: 2026-11-09T18:15:00-03:00
resumo: "Novas TPUs de 8ª geração miram dados sensíveis e contextos longos de agentes; Google não divulgou preço nem data de disponibilidade."
tags:
  - google
  - infraestrutura
  - segurança
fontes:
  - nome: Canaltech (IA)
    url: https://canaltech.com.br/hardware/google-lanca-novos-chips-de-ia-para-aumentar-seguranca-e-poder-computacional/
  - nome: Olhar Digital (IA)
    url: https://olhardigital.com.br/2026/11/09/inteligencia-artificial/google-lanca-chips-de-ia-para-proteger-dados-e-ampliar-memoria/
rascunho: false
editado_manualmente: false
origem: rotina
---

O Google Cloud anunciou nesta segunda-feira duas variantes da oitava geração de TPUs, a mesma linha apresentada em abril com a TPU 8t e a TPU 8i. Segundo a empresa, as novas peças respondem ao aumento da demanda de computação gerada por agentes de IA.

A TPU 8tx é voltada a quem processa ou treina modelos com dados confidenciais. Ela usa a mesma base de processamento da TPU 8t, combinada a hosts com processadores AMD EPYC de 5ª geração e à rede Boardfly, e traz recursos de computação confidencial no próprio hardware para proteger os dados e o interior do modelo durante o uso. O Google afirma que o tempo de resposta cai até pela metade em relação à TPU 8t, quase sem perda de desempenho. Amin Vahdat, vice-presidente sênior de IA e infraestrutura, disse que clientes de setores muito regulados vinham pedindo recursos de criptografia específicos.

A TPU 8i Max junta dois chips TPU 8i numa mesma estrutura física. De acordo com o Google, isso dobra a capacidade de processamento e a memória disponível em relação à 8i padrão, com o dobro de componentes no mesmo espaço de rack. O alvo são cargas com contexto muito grande, como agentes analisando bases de código inteiras ou horas de vídeo.

Nenhuma das reportagens traz capacidade de HBM, largura de banda, preço ou data de disponibilidade. Junto com os chips, o Google disse que o Cloud Pathways está disponível em GA no GKE e que o TorchTPU, que roda modelos PyTorch e Hugging Face em TPU sem reescrever código, é open source.

## Por que importa

Com a computação confidencial em hardware, o Google passa a disputar clientes de saúde, finanças e governo que hoje evitam mandar dados sensíveis para inferência em nuvem. A 8i Max mostra que o gargalo dos agentes de contexto longo está na memória, não só na capacidade de cálculo. Por enquanto, todos os números de desempenho são do próprio Google.
