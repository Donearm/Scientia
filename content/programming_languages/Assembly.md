---
title: Assembly
weight: 404
bookCollapseSection: true
---

<!-- vim-markdown-toc GFM -->

* [ARM Assembly](#arm-assembly)
    * [Registers](#registers)
* [X64 Assembly](#x64-assembly)
    * [General Registers](#general-registers)
    * [FPU Registers](#fpu-registers)

<!-- vim-markdown-toc -->

## ARM Assembly

### Registers

R0..R15 are 32bit, general registers. R13 doubles as the stack pointer (SP), 
R14 is the link register (LR), R15 the program counter (PC).

## X64 Assembly

### General Registers

RAX, RBX, RCX, RDX, RBP, RSI, RDI, RSP are identical to those of X86 Assembly.

R8..R15 are 64bit registers, unique to X64 Assembly.

RIP is 64bit

EFLAGS are the same as per X86 Assembly but 32bit longer.

### FPU Registers

FPR0..FPR7 are 64bit and only for arithmetic data of variable length (32, 64 or 80bits).

MMX0..MMX7 are 64bit.

XMM is 128bit, parallel operations, matching the SSE instructions set.
