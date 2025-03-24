---
title: What is a performance?
postdate: 2025/03/23
tags:
    - music
    - performance
    - library
    - ifla
    - frbr
    - wemi
---

It seems that, strictly speaking, catalogers don't typically need to think a great deal about performances-qua-performances. In the typical bibliographic universe, performances are reducible to a set of expression-level metadata to be appended to a MARC record (time period coverage; geospatial location coverage; performers; works performed; etc.) The _expressions_ of importance to catalogers are instead those which give rise to catalogable items (_durable instances_, if you like). 

Given, though, that performances are, historically and still, _the_ central means of expressing and disseminating musical ideas, we would do to think carefully about whether WEMI as we understand it does a good enough job of modeling the relationship between these conceptual entities.

[Yale](https://web.library.yale.edu/cataloging/music/frbr-wemi-music), in describing the WEMI entities, gives as examples:

- Work: Die Zauberflöte by Mozart
- Expression 1: original composer's score
- Expression 2: July 27, 1949 performance by the Konzertvereinigung Wiener Staatsopernchor

The [IFLA LRM](https://www.ifla.org/wp-content/uploads/2019/05/assets/cataloguing/frbr-lrm/ifla-lrm-august-2017_rev201712.pdf) on the other hand gives no examples of performances for "expression" (or indeed at all).<sup>1</sup> Instead, we get:

- [Expression:] Vocal score of Giuseppe Verdi's Macbeth
- [Expression:] A recording of a specific performance by the Amadeus Quartet and Hephzibah Menuhin on piano of Franz Schubert's *Trout quintet*

It seems to me that this indicates some confusion. How could a performance and a recording of that performance exist at the same ontological level, given that a classical performance in a very real sense depends on a particular arrangement of a work (what both IFLA and Yale are dangerously referring to as a "score") and a recording of a performance is clearly downstream of that performance?

In short, performances seem to have attributes belonging to each distinct ("disjoint!") level of the WEMI model:

- A performance is like a _work_: [??]
    - Its production may be a distinct intellectual creation. Choreography, set design, blocking, all contribute to a creative whole.
    - It may have a "creator" in the same way that a work does.
    - In the case of freely improvised music, attributes we associate with _works_ may come into being contemporaneously with the execution of the performance. Attributes which characterize the work are in this case inseparable from the performance itself.
- A performance is like an _expression_:
    - It instantiates a work, serves as a "fulfillment or realization of [an] idea through [...] sound" (Yale)
    - It serves as "a distinct combination of signs conveying intellectual or artistic content" (IFLA)
- A performance is like a _manifestation_:
    - It's "downstream" of a type of _expression_, i.e. it can't exist without a particular arrangement (either existing or created in situ) which we have identified as an _expression_.
    - It "embodies" this _expression_ in a way that can be repeated (like repeated printings of an English translation of a book). 
    - It "results from the capture of one or more expressions onto a carrier" (IFLA). The expression in this case is a particular arrangement (the definition of "carrier" would have to be stretched somewhat to include human bodies; sound waves; human ears).
- A performance is like an _item_:
    - It exists in the world (albeit ephemerally).
    - It has temporal and physical extension.
    - No two performances will be exactly alike.
    - Multiple performances may be grouped together according to similar structure and extent.

I don't think that each of these characteristics are equally defensible, necessarily, but these examples should illustrate that performances are weird, ontologically speaking, when we try to fit them into WEMI as defined by FRBR/IFLA.

I think I would be most convinced by an argument claiming that performances (as _planned creative activities_) are most similar to _manifestations_ in that they consist of attributes linking really-existing things, as well as their ontological dependence on symbolic expressions of some work. The music they give rise to, then, exist as a sort of temporally-limited thing-in-the-world---an _ephemeral instance_ of that performance.

The performance, it seems, _expresses_ an _expression_ when it realizes a particular arrangement of a work. It of course also relates to the work proper, though in a very different sense than the _arrangement_ relates to the work. 

<hr>

<sup>1</sup> Strangely, IFLA provide no musical examples whatsoever for _manifestation_, though it is heavily implied that we ought to consider any published edition of a CD or phonodisc a _manifestation_ of some (_expression_) recording.


[ more soon ]

