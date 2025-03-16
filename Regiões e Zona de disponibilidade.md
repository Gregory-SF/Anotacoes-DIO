# Regiões

## Zona de disponibilidade

As regiões geralmente tem mais de 1 datacenter pra se precaver caso caia um deles (mas é bom ter pelo menos 3).

A zona de disponibilidade é cada datacenter separado na região.

A zona de disponiblidade fornece proteção contra tempo de inatividade devido a falha do datacenter.

- Região anunciada = tá quase pronto para se tornar uma região disponível
- Região Soberana = exclusiva para o governo / militar daquela região. Só existe duas regiões soberanas na Azure, a dos Eua e da China (a da china sendo manuseada pela 21Vianet).

## Região par

Cada região vai ter uma região par para caso ela fique indisponível, as pessoas migram para a outra região e par e tals, mas funcionam para alguns serviços e podem ser automáticos.

O Par do Brasil é o centro sul dos EUA, apesar de ter uma região no Rio de Janeiro, mas ela ainda não serve como região de disaster recover.

## Disaster recover

Essa ação se chama Disaster recover, ou seja, uma região ficou indisponível e então os recursos vão para a outra região para não ficar inativo.

Não existe um SLA expecífico para disaster recover pois depende de muitas variáveis.