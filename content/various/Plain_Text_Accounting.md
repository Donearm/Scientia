---
title: Plain Text Accounting
bookCollapseSection: true
weight: 842
---

## Beancount

### Reporting

* `bean-report file.ledger balances` = basic balance report command.
* `bean-report file.ledger balances -e AccountName` = same as above but only 
  showing account names matching `AccountName`.
* `bean-report file.ledger balances | treeify` = piping the basic balance 
  command to `treeify`, provided by beancount, to have a tree-like 
  visualization.
* `bean-report file.ledger balsheet > balance.html` = output the balance report 
  to an html file.
* `bean-report file.ledger income > income.html` = output the income report to 
  an html file.
* `bean-report file.ledger accounts` = lists all the accounts, with opening and 
  closing dates.
* `bean-report file.ledger stats-directives` = outputs a total number for each 
  directives' types (transactions, opening, closing, commodities).
* `bean-report file.ledger stats-postings` = outputs a total number of 
  directives per account, sorted by the most to the least numerous.
