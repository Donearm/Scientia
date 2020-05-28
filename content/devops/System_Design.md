---
title: System Design
weight: 204
bookCollapseSection: true
---

## CAP Theorem

The theorem asserts that between Consistency, Availability and Partition tolerance only 2 can be had at the same time. The system designer has to make a trade off among CAP

+ **Consistency**: data served is the same across all nodes
+ **Availability**: every request receives a response, whether it succeeded or failed
+ **Partition Tolerance**: the system continues to operate despite message loss or failure of part of it
