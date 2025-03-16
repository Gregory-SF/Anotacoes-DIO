
# Service level agreement (SLA)

SLA é um acordo que define a margem de disponibilidade em relação a um serviço, no caso, essa porcentagem impacta o tempo de inativadade que o serviço possui que será cobrido pelo contrato

No caso, se você cria um recurso e o período de inatividade ultrapassa a do especificado pela SLA, a Microsoft te ressarcirá 

| SLA | Tempo de inativadade por semana | Tempo de inativadade por mês | Tempo de inativadade por ano |
| --- | --- | --- | --- |
| 99% | 1,68 horas | 7,2 horas | 3,65 dias |
| 99.9% | 10,1 minutos | 43,2 minutos | 8,76 horas |
| 99.95% | 5 minutos | 21,6 minutos | 4,38 horas |
| 99.99% | 1,01 minutos | 4,32 minutos | 52,26 minutos |
| 99.999% | 6 segundos | 25,9 segundos | 5,26 minutos |

> Uma aplicação com SLA alto, que possui disponibilidade maior e consequentemente um tempo de inatividade menor, será mais caro, enquanto uma aplicação com SLA um pouco mais baixo, com disponibilidade menor e tempo de inatividade maior será mais barato.

> Quanto mais disponível, mais caro, o que leva as pessoas a buscarem menores disponibilidades, mas tem que ver se fica indisponível não acaba saindo mais caro do que só pagar uma disponibilidade maior.


Alguns serviços tem configurações que afetam qual SLA será aplicada, como por exemplo VM e zona de disponibilidade e armazenamento e zonas