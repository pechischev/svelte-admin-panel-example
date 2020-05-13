<script>
  import {TransactionService} from '../../../services/TransactionService';
  import {transactions} from '../../../logics/store';
  import {ArrowRight} from '../../../components/icons';

  TransactionService.fetchTransactions()
</script>

<style>
  .blocks {
    display: flex;
  }

  .table {
    width: 100%;
  }

  .row {
    width: 100%;
    padding: 26px 15px;
    display: grid;
    grid-template-columns: 120px 120px 1fr 150px 1fr 200px;
    border-top: 1px solid var(--border-color-normal);
  }

  .row:last-child {
    border-bottom: 1px solid var(--border-color-normal);
  }

  .cell {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    font: 400 18px/22px "Roboto", sans-serif;
    color: var(--txt_content);
  }

  .bold-text {
    font-weight: 500;
  }

  .right-align-text {
    justify-content: flex-end;
  }
</style>

<div class="blocks">
  <table class="table">
    <tbody>
    {#each $transactions as transaction (transaction.id)}
      <tr class="row">
        <td class="cell">{transaction.date}</td>
        <td class="cell">{transaction.time}</td>
        <td class="cell bold-text">{transaction.sender}</td>
        <td class="cell">
          <ArrowRight/>
        </td>
        <td class="cell bold-text">{transaction.receipt}</td>
        <td class="cell right-align-text">{transaction.amount.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</td>
      </tr>
    {/each}
    </tbody>
  </table>
</div>