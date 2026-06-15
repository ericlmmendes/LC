# Documentação Técnica

## Estrutura de Dados (Firebase)
- `users/{username}`: Armazena senhas para autenticação simples.
- `shoppingList/`: Itens atuais da lista ativa.
- `listName`: Nome atual da lista sendo editada.
- `history/`: Registro de listas finalizadas com data, itens e total.

## Modais e UX
O sistema evita o uso de funções nativas como `alert` e `prompt` em favor de modais customizados:
- `addModal`: Criação e edição de itens.
- `priceModal`: Inserção rápida de preço ao marcar item.
- `renameModal`: Alteração do título da lista.
- `emptyWarningModal`: Alerta visual quando a lista está vazia ao tentar finalizar.
- `historyModal`: Exibição de registros passados.

## Fluxo de Finalização
Ao finalizar uma compra:
1. Os dados são formatados para uma mensagem de WhatsApp.
2. A lista é arquivada no nó `history` do banco de dados.
3. A lista ativa (`shoppingList`) é limpa para o próximo uso.