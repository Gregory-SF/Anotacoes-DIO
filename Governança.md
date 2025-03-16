

### Policies

Servem para definir regras de acesso e controle de recursos. Você pode definir essas regras em assinaturas ou em recursos, para assinaturas é bom pois ai você tem certeza que essas contas não vão poder realizar certas ações, por exemplo, criar uma máquina virtual. Agora em recursos, você pode definir regras para que certos recursos não possam ser deletados, por exemplo, ou que o recurso não seja criado em uma região específica. Existe 3 tipos de situação das políticas num recurso, não tá seguindo o recurso, ela provavelmente foi criada antes do recurso, não tá seguindo, mas vaiv ser alterada, e tá seguindo. 

### Bloqueio de recursos

Serve para evitar que recursos sejam deletados ou não sejam alterados. Bloqueios são herdáveis
Bloqueio de exclusão é possível ler, atualizar, mas não deletar. Bloqueio de readonly é possível ler, mas não atualizar ou deletar.

Os modelos do ARM são JSON e tu não precisa necessariamente escrever um código