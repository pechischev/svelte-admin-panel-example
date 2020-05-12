<script>
  import {TransactionService} from '../../../services/TransactionService';
  import {transactions} from '../../../logics/store';

    TransactionService.fetchTransactions()
</script>

<style>
  .blocks {
    display: flex;
  }
</style>

<div class="blocks">
  <table>
    <tbody>
      {#each $transactions as transaction (transaction.id)}
        <tr>
          <td>{transaction.date}</td>
          <td>{transaction.time}</td>
          <td>{transaction.sender}</td>
          <td> -> </td>
          <td>{transaction.receipt}</td>
          <td>{transaction.amount}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>