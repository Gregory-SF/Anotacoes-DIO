# Componentes da arquitetura do Azure

## Regiões e zonas de disponibilidade

### Introdução aos recursos

Você pode decidir onde criar as recursos, então se a demanda é da austrália, compensa criar no servidor de lá.  

Tem recursos que não estão disponíveis em certas regiões, isso ocorre quando o recurso está em testes (Preview) e saiu pra GA (GENERAL AVAILABILITY) ai pode ou não estar em algumas regiões. 


### Regiões e Zonas de disponibilidade

As regiões são os locais que possuem datacenters, cada região possui mais de 1 datacenter para se precaver caso um deles fique inativo. Cada datacenter é uma zona de disponibilidade que pode ser escolhida na criação de alguns recursos. Cada região possui uma região par que os recursos serão alocados em caso de cair a região inteira como uma forma de *disaster recover*. 

Para mais informações veja a seguinte seção:  
[Regiões e zonas de disponibilidade](<Regiões e Zona de disponibilidade.md>)


## Assinaturas e grupos de recursos

### Grupos de recursos

É uma forma de orgazinação de recursos, você pode usar esse grupo em uma mesma região ou não, você pode movimentar recursos entre grupos se necessário, um recurso não pode estar em dois grupos diferentes mas você não pode renomear um grupo (e.g Web e BD, VM, armazenamento).

### Assinaturas

Uma conta pode ter diversas assinaturas, mas 1 assinatura só pode estar associada à 1 conta.
Assinatura de desenvolvimento, assinatura de teste, assinatura da produção.  
Uma assinatura do Azure fornece a você um acesso autenticado e autorizado às contas do Azure (são coisas diferentes).     
Separar em assinaturas diferentes é interesssante para poder organizar os custos, pois cada assinatura vai ter uma fatura.
Essa prática de criar assinaturas auxilia não só no **limite de cobranças**, mas também no **controle de acesso**.

### Grupos de Gerenciamento

É responsável por definir padrões e regras para  assinaturas, elas podem ser configuradas em cada assinatura, mas por meio dos gruupos essa regra será aplicada para diversas assinaturas.